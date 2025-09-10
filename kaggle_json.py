from github import Github
import traceback,github,requests_cache,re,os,kaggle,json,numpy as np

GITHUB_TOKEN = os.getenv("GIST_TOKEN")
GIST_ID = "c9112c25c5acd400b90741efa81aa411"
USE_TRUE_SIZE = True

g = Github(GITHUB_TOKEN)
gist = g.get_gist(GIST_ID)

# Format the filesize to unit'ed format
def format_bytes(num_bytes):
    units = ['B','KB','MB','GB','TB','PB','EB','ZB','YB']
    factor = 1024
    unit_index = 0
    while num_bytes >= factor and unit_index < len(units)-1:
        num_bytes /= factor
        unit_index += 1
    return f"{num_bytes:.3f} {units[unit_index]}"

# Unformat the unit'ed format to the raw filesize (estimate)
def unformat_bytes(string):
    units = ['B','KB','MB','GB','TB','PB','EB','ZB','YB']
    num,unit = string.split(" ")
    factor = 1024
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

# remove sharma kaggle model
search_map["sharma2024.md"] = [x for x in search_map["sharma2024.md"] if x !='sharmapushan/pimapnet']
usernames["sharmapushan"] = [x for x in usernames["sharmapushan"] if x.ref != 'sharmapushan/pimapnet'] 

# read true dataset sizes from json file
try:
    datasets_size = json.loads(gist.files['datasets_size.json'].content)
    # raise Exception("Gist version of datasets_size.json is not used, please use the local file instead")
    if os.path.exists('datasets_size.json'):
        with open('datasets_size.json','r') as f:   
            local_datasets_size = json.load(f)
        if datasets_size == local_datasets_size:
            print(f"Read {len(datasets_size)} dataset sizes from gist")
        elif len(datasets_size.keys()) <= len(local_datasets_size.keys()):
            print(f"Read {len(local_datasets_size)} dataset sizes from local file - gist version is different has {len(datasets_size)} entries")
            datasets_size = local_datasets_size
        else:
            raise Exception("Gist version of datasets_size.json has more entries than local file, please check the local file ")
        
except Exception as e:
    print(f'Could not read datasets_size.json from gist: {e}')
    if os.path.exists('datasets_size.json'):
        with open('datasets_size.json','r') as f:   
            datasets_size = json.load(f)
        print('Loading datasets_size.json from local file...')
    else:
        raise Exception("No datasets_size.json found")

# At this point we have done all the necessary scraping from Kaggle API calls
for filename in search_map:
    dataset_names = search_map[filename]
    
    downloads = []
    views = []
    sizes = []
    
    for dsn in dataset_names:
        print(f'Processing {dsn}...')
        # New Kaggle Api >=1.7
        try:
            user, dataset_id = dsn.split("/")
            dataset = next((d for d in usernames[user] if d.ref.lower() == dsn.lower()))
            downloads.append(int(dataset.download_count))
            views.append(int(dataset.view_count))
            if USE_TRUE_SIZE:
                # Use the true size from the json file
                if dataset_id in datasets_size.keys():
                    sizes.append(int(datasets_size[dataset_id]))
                else:
                    raise Exception(f"Dataset {dataset_id} not found in datasets_size.json")
            else:
                sizes.append(int(dataset.total_bytes))
            print(f'{dsn} done.')
        except KeyError:
            # Old Kaggle Api <1.7
            try:
                user = dsn.split("/")[0]
                dataset = vars(next((d for d in usernames[user] if vars(d)['ref'] == dsn)))
                downloads.append(int(dataset['downloadCount']))
                views.append(int(dataset['viewCount']))
                sizes.append(int(dataset['totalBytes']))
                print(f'{dsn} done.')
            except Exception:
                traceback.print_exc()
                print(f'Error when reading {dsn}, Continuing with 0 values...')
                downloads.append(0)
                views.append(0)
                sizes.append(0)
                
        except Exception:
            traceback.print_exc()
            print(f'Error when reading {dsn}, Continuing with 0 values...')
            downloads.append(0)
            views.append(0)
            sizes.append(0)

    views = np.array(views)
    downloads = np.array(downloads)
    size_in_bytes = np.array(sizes)
    
    # SPECIFIC DATASET STATISTICS TO OUTPUT
    # Take the maximum of views from each of the sub-datasets
    # More representative than summing, since the same user would likely view multiple sub-datasets
    ds_size_raw = np.sum(size_in_bytes)
    ds_size = format_bytes(ds_size_raw)
    ds_views = np.max(views) #np.sum(views)
    ds_downs = np.sum(downloads) #np.max(downloads)
    print(f'{filename} ({ds_size}) processed. {ds_views} views, {ds_downs} downloads.')

    if not ds_size_raw:
    	# Use old data as fallback
        kaggle_stats = json.loads(gist.files['kaggle_stats.json'].content)
        kaggle_stats = kaggle_stats[filename]
        size_in_bytes = unformat_bytes(kaggle_stats['size'])
        downloads = kaggle_stats['downloads']
    else:
        # Save as dictionary and throw it to the preamble
        kaggle_stats = {
            'size': ds_size,
            'views': ds_views,
            'downloads': ds_downs,
        }
    json_dump[filename] = kaggle_stats
    # breakpoint()
    total_bytes += int(np.sum(downloads*size_in_bytes))
    total_size += int(np.sum(size_in_bytes))

if not total_bytes:
    raise Exception("Zero data encountered, exiting")
    exit()

json_dump['total_bytes'] = total_bytes
json_dump['total_size'] = total_size
print(f'Total size: {format_bytes(total_size)}')
print(f'Total downloaded bytes TB: {total_bytes/1024**4}')

# Update the gist
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

print('Updating {gist}...')
try:
    gist.edit(files={'kaggle_stats.json': github.InputFileContent(content=json.dumps(json_dump,indent=4,cls=NpEncoder))})
    gist.edit(files={'datasets_size.json': github.InputFileContent(content=json.dumps(datasets_size,indent=4,cls=NpEncoder))})
except Exception as e:
    print(f'Could not update {gist}: {e}')
    print(f'Dumping to file...')
    with open('kaggle_stats.json','w') as f:
        json.dump(json_dump,f,indent=4,cls=NpEncoder)
print("Done.")
