from github import Github
import github,requests_cache,re,os,kaggle,json,numpy as np

GITHUB_TOKEN = os.getenv("GIST_TOKEN")
GIST_ID = "c9112c25c5acd400b90741efa81aa411"

g = Github(GITHUB_TOKEN)
gist = g.get_gist(GIST_ID)

# Function to extract kaggle identifiers from the file
def extract_kaggle(file_path):
    kaggle_identifiers = []
    kaggle_url_pattern = r'https://www\.kaggle\.com/datasets/([^/]+)/([^"]+)'
    with open(file_path, 'r') as file:
        text = file.read()
        matches = re.findall(kaggle_url_pattern, text)
        kaggle_identifiers = [f"{username}/{dataset}" for username, dataset in matches]
    return kaggle_identifiers

dir = "_datasets"
total_bytes = 0
total_size = 0
json_dump = {}

# Create a new API instance
# Cache expires every 10mins
requests_cache.install_cache('kaggle_cache', expire_after=600)
api_instance = kaggle.KaggleApi()
api_instance.authenticate()

# For every file in the datasets folder
for filename in os.listdir(dir):
    print(f'Currently updating {filename}...')
    dataset_names = []

    # Extract all the kaggle dataset identifiers from the page
    filepath = os.path.join(dir,filename)
    if os.path.isfile(filepath):
        dataset_names = extract_kaggle(filepath)
    if not dataset_names:
        continue

    downloads = []
    views = []
    sizes = []

    for dsn in dataset_names:
        print(f'Processing {dsn}...')
        try:
            # This way is slower but only needs 1 API call per kaggle subdataset
            # Instead of iterating over all the files multiple times
            dataset = vars(api_instance.dataset_list(search=dsn)[0])
            downloads.append(int(dataset['downloadCount']))
            views.append(int(dataset['viewCount']))
            sizes.append(int(dataset['totalBytes']))
            print(f'{dsn} done.')

        except Exception as e:
            print(f'{e} when reading {dsn}')
            print(f'Continuing with 0 values...')
            downloads.append(0)
            views.append(0)
            sizes.append(0)

    views = np.array(views)
    downloads = np.array(downloads)
    size_in_bytes = np.array(sizes)

    # Format the filesize to unit'ed format
    def format_bytes(num_bytes):
        units = ['B','KB','MB','GB','TB','PB','EB','ZB','YB']
        factor = 1000
        unit_index = 0
        while num_bytes >= factor and unit_index < len(units)-1:
            num_bytes /= factor
            unit_index += 1
        return f"{num_bytes:.3f} {units[unit_index]}"

    # SPECIFIC DATASET STATISTICS TO OUTPUT
    # Take the maximum of views/downloads from each of the sub-datasets
    # More representative than summing, since the same user would likely view multiple sub-datasets
    ds_size = format_bytes(np.sum(size_in_bytes))
    ds_views = np.max(views) #np.sum(views)
    ds_downs = np.max(downloads) #np.sum(downloads)
    print(f'{filename} ({ds_size}) processed. {ds_views} views, {ds_downs} downloads.')

    # Use old data as fallback
    if not ds_size:
        kaggle_stats = json.loads(gist.files['kaggle_stats.json'].content)
        kaggle_stats = kaggle_stats[filename]

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
except Exception as e:
    print(f'Could not update {gist}: {e}')
    print(f'Dumping to file...')
    with open('kaggle_stats.json','w') as f:
        json.dump(json_dump,f,indent=4,cls=NpEncoder)
print("Done.")
