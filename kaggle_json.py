import firebase_admin
import traceback,requests_cache,re,os,kaggle,json,numpy as np
from firebase_admin import credentials, db
from datetime import datetime,timezone

# Firebase
cred_json = os.getenv("FIREBASE")
cred_dict = json.loads(cred_json)
cred = credentials.Certificate(cred_dict)
#cred = credentials.Certificate("blastnet_backend.json")

firebase_admin.initialize_app(cred, {
    'databaseURL': "https://blastnet-backend-default-rtdb.firebaseio.com/"
})
ref = db.reference("/")

# Fetch the previous stats blob up front so it can be used as a fallback
# whenever the Kaggle API returns zero data for a dataset (see README "BUG").
# The value stored at /kaggle_stats is itself a JSON string.
prev_raw = ref.child("kaggle_stats").get()
try:
    prev_stats = json.loads(prev_raw) if prev_raw else {}
except (TypeError, ValueError):
    prev_stats = {}

# Format the filesize to unit'ed format
def format_bytes(num_bytes):
    units = ['B','KB','MB','GB','TB','PB','EB','ZB','YB']
    factor = 1000
    unit_index = 0
    while num_bytes >= factor and unit_index < len(units)-1:
        num_bytes /= factor
        unit_index += 1
    return f"{num_bytes:.3f} {units[unit_index]}"

# Unformat the unit'ed format to the raw filesize (estimate)
def unformat_bytes(string):
    units = ['B','KB','MB','GB','TB','PB','EB','ZB','YB']
    num,unit = string.split(" ")
    factor = 1000
    return float(num)*(factor**(units.index(unit)))

dir = "_datasets"
total_bytes = 0
total_size = 0
json_dump = {}

# Create a new API instance
# Cache expires every 10mins
requests_cache.install_cache('kaggle_cache', expire_after=600)
api_instance = kaggle.KaggleApi()
api_instance.authenticate()

# Save array of unique usernames across all files to reduce API call
usernames = {}
search_map = {}

# For every file in the datasets folder
for filename in os.listdir(dir):
    print(f'Currently updating {filename}...')

    # Extract all the kaggle dataset identifiers from the page
    filepath = os.path.join(dir,filename)
    if os.path.isfile(filepath):
        kaggle_url_pattern = r'https://www\.kaggle\.com/datasets/([^/]+)/([^"]+)'
        with open(filepath,'r') as file:
            text = file.read()
            matches = re.findall(kaggle_url_pattern,text)
            search_map[filename] = []
            # Loop through all dataset identifiers in the file
            for username,dataset in matches:
                # If owner not yet recorded, scrape ALL datasets from owner
                if username not in usernames:
                    new_set = []
                    cur_len = 20
                    i = 1
                    # Pagination length is 20
                    while cur_len == 20:
                        new_search = api_instance.dataset_list(search=username,page=i)
                        new_set.extend(new_search)
                        cur_len = len(new_search)
                        i+=1
                    # Save all the scrapes to the dictionary
                    # Note items of new_set are Kaggle metadata objects
                    usernames[username] = new_set
                    
                # Record all the identifiers to the filename
                search_map[filename].append(f'{username}/{dataset}')
    
# At this point we have done all the necessary scraping from Kaggle API calls
for filename in search_map:
    dataset_names = search_map[filename]
    
    downloads = []
    views = []
    sizes = []
    
    for dsn in dataset_names:
        print(f'Processing {dsn}...')
        # Old Kaggle Api <1.7
        try:
            user = dsn.split("/")[0]
            dataset = vars(next((d for d in usernames[user] if vars(d)['ref'].lower() == dsn.lower())))
            downloads.append(int(dataset['downloadCount']))
            views.append(int(dataset['viewCount']))
            sizes.append(int(dataset['totalBytes']))
            print(f'{dsn} done.')

	# New Kaggle Api >=1.7
        except KeyError:
            try:
                user = dsn.split("/")[0]
                dataset = next((d for d in usernames[user] if d.ref.lower() == dsn.lower()))
                downloads.append(int(dataset.download_count))
                views.append(int(dataset.view_count))
                sizes.append(int(dataset.total_bytes))
                print(f'{dsn} done.')

            except Exception:
                traceback.print_exc()
                print(f'Error when reading {dsn}')
                print(f'Continuing with 0 values...')
                downloads.append(0)
                views.append(0)
                sizes.append(0)
                
        except Exception:
            traceback.print_exc()
            print(f'Error when reading {dsn}')
            print(f'Continuing with 0 values...')
            downloads.append(0)
            views.append(0)
            sizes.append(0)

    
    views = np.array(views)
    downloads = np.array(downloads)
    size_in_bytes = np.array(sizes)
    
    # SPECIFIC DATASET STATISTICS TO OUTPUT
    # Take the maximum of views/downloads from each of the sub-datasets
    # More representative than summing, since the same user would likely view multiple sub-datasets
    ds_size_raw = np.sum(size_in_bytes)
    ds_size = format_bytes(ds_size_raw)
    ds_views = np.max(views) #np.sum(views)
    ds_downs = np.sum(downloads) #np.sum(downloads)
    print(f'{filename} ({ds_size}) processed. {ds_views} views, {ds_downs} downloads.')

    if not ds_size_raw:
        # Kaggle returned zero data for this dataset; keep the last known good
        # values instead of overwriting with zeros (or crashing the whole job).
        if filename in prev_stats:
            kaggle_stats = prev_stats[filename]
            print(f'{filename} returned zero data, falling back to previous stats: {kaggle_stats}')
            size_in_bytes = unformat_bytes(kaggle_stats['size'])
            downloads = kaggle_stats['downloads']
        else:
            print(f'{filename} returned zero data and has no previous stats; recording zeros')
            kaggle_stats = {'size': format_bytes(0), 'views': 0, 'downloads': 0}
            size_in_bytes = 0
            downloads = 0
    else:
        # Save as dictionary and throw it to the preamble
        kaggle_stats = {
            'size': ds_size,
            'views': ds_views,
            'downloads': ds_downs,
        }
    json_dump[filename] = kaggle_stats
    total_bytes += int(np.sum(downloads*size_in_bytes))
    total_size += int(np.sum(size_in_bytes))

if not total_bytes:
    raise Exception("Zero data encountered, exiting")
    exit()

json_dump['total_bytes'] = total_bytes
json_dump['total_size'] = total_size
    
# Update the database
# Need the custom encoder class to convert numpy numbers to json readable ones
class NpEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, np.integer):
            return int(obj)
        if isinstance(obj, np.floating):
            return float(obj)
        if isinstance(obj, np.ndarray):
            return obj.tolist()
        return super(NpEncoder, self).default(obj)

print(f'Updating Firebase…')

try:
    new_json_string = json.dumps(json_dump, indent=4, cls=NpEncoder)
    current_json_string = ref.child("kaggle_stats").get()

    if current_json_string is None:
        current_json_string = ""
    if current_json_string.strip() == new_json_string.strip():
        print("No change detected, skipping...")
    else:
        print("Changes detected, writing to firebase...")
        ref.update({
            "kaggle_stats": new_json_string,
            "last_updated": datetime.now(timezone.utc).isoformat()
        })
        print("Firebase updated.")

except Exception as e:
    print(f"Could not update Firebase: {e}")
    print(f"Dumping to local file…")
    with open("kaggle_stats.json", "w") as f:
        json.dump(json_dump, f, indent=4, cls=NpEncoder)
    # Re-raise so the scheduled workflow fails visibly instead of going green
    # while Firebase was never actually updated.
    raise

print("Done.")
