---
layout: default
title: Contribute
description: Find out how to contribute to BLASTNet.
---

# Submit your Kaggle Link

Please click on [this link](https://forms.gle/VYMWvuNjFqPMJjwo6).

Before doing this checkout the standards and formats below.

# Standards for BLASTNet
To ensure that all files available on BLASTNet has consistent file formats, we present some necessary standards for improved access:

1. All simulation datasets must contain [U,&rho;,T,P,Y] to ensure that any additional variables can be easily post-processed. Provide chemkin or cantera files so that thermodynamic and transport properties can 
2. X,Y,Z variables can be provided as a mathematical function for structured grids or a single share a single snapshot of the X,Y,Z values. 
3. Shared simulation datasets must have a corresponding publication or conference submission.
4. All uncompressed files should be in little endian float32 binaries. Tutorials on how to create this via python and matlab are provided [here](./tutorial.html).
5. Use .gz, .tar, .tar.gz, and .zip files for lossless compressed files. 
6. All lossy compressed files should be compressed via [SZ2](https://github.com/szcompressor/SZ) with a point-wise error bound of 1% if possible. A study that we conducted concluded that deep learning algorithms are robust to a point-wise error bound of 4%. This is the hard limit for files on BLASTNet if your files need further compression. Tutorials for compression and decompression are provided [here](./tutorial.html).
7. Datasets should be uploaded onto Kaggle ([tutorial](./tutorial.html)) to simplify batch access via a command line API.
8. Once files are shared with these standards are met, join BLASTNet by **submitting the form above**. 


# Metadata Format

Each submission on blastnet should have a global and local metadata in an info.json file which provides all the important information required to train an ML model. You can interact with these files [here](https://colab.research.google.com/drive/1_dk1IPQsOK-Dxq9VYSci4lB_LOyVCb5c?usp=sharing).

### Global Metadata
```py
metadata['global'] = {
	"dataset_id":"inert_ch4o2_hit_dns",
		"Nxyz": [129,129,129],
	"snapshots":98,
	"variables":["UX_ms-1","UY_ms-1","UZ_ms-1"
	            ,"P_Pa","T_K","RHO_kgm-3",
	            "YO2","YCH4"],
	"compression":"None",
	"grid":{"x":"./grid/X_m.dat",
	        "y":"./grid/Y_m.dat",
	        "z":"./grid/Z_m.dat"
	       },
	"bc":"Periodic in x-, y-, and z-directions.",
	"ic":{"U": "HIT Von Karman Pao with Re_t = 80 and integral lengthscale of 62.5E-6m",
	      "T [K]": 300,
	      "P [Pa]":101325,
	      "Mixture":"CH4-O2 inert branch from 1D cantera counterflow calculations."},
	 "doi":"https://doi.org/10.1016/j.combustflame.2021.111758",
	 "contributors":"Wai Tong Chung and Matthias Ihme",
	 "description":"Compressible Inert CH4-O2 Homogeneous Isotropic Turbulence DNS",
	 "chem_thermo_tran":{"cantera_xml":"./chem_thermo_tran/bfer.xml"}      
	}
```

### Local Metadata

```py
metadata['local'] = [
	{
	"id": 20,
	"time [s]": 6.88389e-06,
	"UX_ms-1 filename": "./data/UX_ms-1_id020.dat",
	"UY_ms-1 filename": "./data/UY_ms-1_id020.dat",
	"UZ_ms-1 filename": "./data/UZ_ms-1_id020.dat",
	"P_Pa filename": "./data/P_Pa_id020.dat",
	"T_K filename": "./data/T_K_id020.dat",
	"RHO_kgm-3 filename": "./data/RHO_kgm-3_id020.dat",
	"YO2 filename": "./data/YO2_id020.dat",
	"YCH4 filename": "./data/YCH4_id020.dat"
	 },
	 {...},
	 {...}
   ]   

```





