# New and Improved BLASTNet site

Built using [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) and [Jekyll](https://jekyllrb.com). 

## Documentation for BLASTNet maintainers and contributors

This repository contains all the code for the blastnet.github.io website. Most of the Minimal Mistakes features and layouts are not used (and will likely never be used) and so they have been removed for a smoother and lighter build experience. Yet, some new features like the data counters have also been added. Therefore, please read this documentation carefully.

## Steps to add new dataset to BlastNet

1. Upload all data to Kaggle
2. Create the dataset page (see [below](#dataset-pages)) in the `_datasets` directory and upload the relevant files
    - Make sure images are uploaded correspondingly in the `assets/img` folder
    - Make sure the `.bib` file is uploaded to the assets/bib folder
    - For consistency, recommend to name the files `authorYYYY.md', `authorYYYY.bib`, `authorYYYY.png` etc.
3. Commit the changes and push to the main branch. For people without push access, create a pull request.
4. Run the `Update Gist` workflow to update the statistics on the backend (optional).
5. The site will rebuild automatically.

If you'd like to preview, you can also clone the repository to your local machine, make the above changes, and build the website using `bundle exec jekyll serve` (assuming you have a working Jekyll installation - if not, install Jekyll, then run `bundle install` before building). If it looks good, clean up the repository by running `bundle exec jekyll clean` (so that the built files are not also uploaded). Then, you can commit the changes and open a pull request. 

## Statistics workflow

Using Github actions, we can pipe Kaggle API data to a JSON file hosted on Github's Gist. The JSON file is processed via Javascript Fetch API and processed client-side. This method reduces the number of deployments. It's akin to making a fake server-side API interface. See `kaggle_json.py` for more details on how the data is ported to the JSON file. Currently, the JSON file is refreshed once every hour, and we are monitoring the number of Kaggle API calls to ensure that we are not rate-limited (because it will break the JSON file).

**IMPORTANT:** Make sure the Kaggle API key, Kaggle username, and Github PAT (which should give Gist read and write access) are all stored as repository secrets. To confirm, go to `Settings --> Secrets and variables --> Actions` and check that `Repository secrets` has (at least) 3 items: `GIST_TOKEN`, `KAGGLE_APIKEY`, `KAGGLE_USERNAME`. Otherwise, the JSON update will break!

**BUG:** Sometimes the Kaggle API stops working and everything returns a zero output. This is unintended. As a fallback, old data will currently be used. Working on a fix.

## Dataset pages

This site makes heavy use of Jekyll collections. Custom `datasets` layout is created (based on the `single` layout) and using the collections keyword, the `datasets.md` page in `_pages` collects all the dataset pages in the `_datasets` folder into the gallery, without needing to manually create a new link as was done on the previous version of the BLASTNet site. As such, the preamble of each dataset page is very important, and it's important also to have all the dataset pages in the `_datasets` folder. An example preamble is shown below:

```yaml
---
layout: datapage
excerpt: (5 cases)
title: Rayleigh-Bénard Convection
description: Rayleigh-Bénard Convection DNS
header:
  teaser: /assets/img/ico_roshan2024.png
  image: /assets/img/roshan2024.png
---
```
For each new dataset, count the number of cases and update the excerpt. Then, update the title and description as per normal. Header teaser corresponds to the icon displayed in the gallery (this keyword needs to be set or the gallery will not display correctly) and header image corresponds to the banner for the specific dataset; either set the keyword or include the banner as an image on the page using `![image](./assets/img/roshan2024.png)`. Additionally, for banner images that have a square-ish or vertical aspect ratio, it is possible to put the banner image in the sidebar like:
```html
<div class="sidebar__right" style="text-align: center; top: 160px;">
    <img src="./assets/img/gauding2022.png" alt="Image 1">
</div>

```
Note that the `top` style property needs to be adjusted based on the table of contents height (may take trial and error; currently we are working on fixing this).

The statistics at the top of the page (views, downloads, size) should be generated automatically during the next cron scheduled update, otherwise, you can manually run the update workflow by going to `Actions --> Update Gist --> Run workflow`. 

Dataset description and other text can be written using Github-flavored markdown, HTML, a mixture of the two, and even LaTex (powered by MathJax). To insert equations into the page, use double `$$` like `$$y=mx+c$$` for a block equation, or single `$` like `$y=mx+c$` for an inline equation.

**IMPORTANT:** If using inline equations in a paragraph, please wrap the paragraph in `{::nomarkdown}` and `{:/}` tags.

Once the new dataset is pushed to the repository, the website should automatically rebuild and deploy. The view/download statistics may only be available after an hour or so, unless the `Update Gist` workflow is run manually.

## Site pages

Adding new pages (for example, maybe new FlameAI) or editing the existing ones is simple - all the pages are rendered by markdown files located in `_pages` (except for the homepage, which is in the root folder and called `index.md`). General pages use the `single` layout; the dataset page uses the `datasets` custom layout and the homepage uses the `splash` layout, which has been significantly modified from the Minimal Mistakes file. ~~Yes, I know hardcoding is bad practice; no, I don't care.~~ The layout should be specified in the preamble using the `layout:` keyword. To add a new page or external link to the navigation menu, go to `_data/navigation.yml` and add a new entry under `main`. 

## To-do list
- Clean up the unused Minimal Mistakes code
- Design a better color scheme
- Better manipulation of the Kaggle API so that we can update more frequently
- Update the Python script to only update the JSON if there are actual updates (perhaps add the ability to read the JSON file and match the values) --> this can reduce the number of updates to the Gist and reduce clutter
- Think about whether we want to do a manual size calculation at every update or just cache the size permanently. Pros of cache: Much lower load, size shouldn't change by a lot anyway. Cons of cache: Less accurate; each subdataset has different number of downloads so the homepage total counter will also be inaccurate; does not capture versioning.

