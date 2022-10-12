---
layout: default
title: Tutorials
description: Tutorials for reading and compressing files.
---

# Quick-start Colab

[Click here](https://colab.research.google.com/drive/1_dk1IPQsOK-Dxq9VYSci4lB_LOyVCb5c?usp=sharing) for a quick-start tutorial on how to use Kaggle and read and write basic data formats from BLASTNet.  

<!-- ___ -->


# Detailed Tutorials
* [Kaggle Command Line API (How to share and download data?)](#kaggle-command-line-api)
* [SZ2 Lossy Compression (How to compress and decompress data?)](#sz2-lossy-compression)
<!-- * [BLASTNet Data Formats (How to read and write data?)](#blastnet-data-formats) -->

<!-- ___ -->



# Kaggle Command Line API

In BLASTNet, we share our data with [Kaggle](https://www.kaggle.com/). Kaggle has released a terminal interface that lets you upload and download data in method suited for most scientific clusters. Go to the Kaggle API [GitHub](https://github.com/Kaggle/kaggle-api) for detailed instructions in their README.

### Kaggle API Installation

We will provide quick start instructions here to quickly share data on Kaggle. Pre-requisites: python3.

1. Install Kaggle API for python3
	```bash
	pip install kaggle
	```
2. Create a Kaggle account [here](https://www.kaggle.com/) with a valid `<username>`.
3. Go to your account page `https://www.kaggle.com/<username>/account` and click on 'Create API Token' to download a `kaggle.json` file.
4. Move the files to the default location and change the permissions:
	```bash
	mv ~/.kaggle/kaggle.json
	chmod 600 ~/.kaggle/kaggle.json
	```
5. Now you're ready to download and upload.

### Kaggle Download

To download a single file from Kaggle:
```bash
kaggle datasets download <username>/<datasetname> -f <filename> 
```
To download all files from a dataset from Kaggle:
```bash
kaggle datasets download <username>/<datasetname> 
```
Here `<username>` is the username of the contributor.

### Kaggle Upload
To upload an entire dataset:

1. Initialize the uploading process by:
	```bash
	kaggle datasets init -p <path/to/dataset>
	```
2. This results in a [dataset-metadata.json](https://github.com/Kaggle/kaggle-api/wiki/Dataset-Metadata) file that you have to populate to fill in your dataset title in `"title"` and url in `"id"` via:
	```bash
	vi /path/to/dataset/dataset-metadata.json
	```
	**Note that only alphanumeric and hyphens - are allowed.**
3. Put your files into 3 folders (`<data>`, `grid`, and `<chem_thermo_tran>`), since Kaggle's API can only show 20 directories/files at most.
4. Upload your dataset (Kaggle automatically zips folders into .tar file) via:
	```bash
	kaggle datasets create -u -p <path/to/dataset> --dir-mode 'tar'
	```
	or update your previously created datasets with
	```bash
	kaggle datasets version  -h
	```
___


[Back to Top](#list-of-tutorials)

___


# SZ2 Lossy Compression

If a single snapshot of your data is more than 100 GB, consider lossy compresison via [SZ2](https://github.com/szcompressor/SZ). 

### SZ2 Installation

SZ2 is can be installed via command line:
```bash
git clone https://github.com/szcompressor/SZ.git
cd SZ
./configure --prefix=<install_dir>
make
make install
```

### SZ2 Compression

For 3D Files of a single flowfield, use the following command for point-wise compresseion with an error-bound `<bp>`:

```bash
cp <install_dir>/bin/sz .
./sz -z -f -i <scalar_filename.dat> -3 <Nx> <Ny> <Nz> -M PW_REL -P <bp>
```
 
where `<bp>` is typically expressed in decimal i.e. 0.01 for 1% error bound.

### SZ2 Decompression
For 3D SZ compressed files, decompress via:
```bash
cp <install_dir>/bin/sz .
./sz -x -f -s <scalar_filename.dat.sz> -3 <Nx> <Ny> <Nz>
```


___


[Back to Top](#list-of-tutorials)

___


<!-- # BLASTNet Data Formats -->
