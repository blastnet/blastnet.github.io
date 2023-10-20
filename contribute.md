---
layout: default
title: Contribute & Collaborate
description: Find out how to contribute to BLASTNet.
---

The best way to start contributing and collaborating with us is to send an email to [blast.net.ml@gmail.com](mailto:blast.net.ml@gmail.com) for onboarding instructions.

We also have a [google forms](https://forms.gle/VYMWvuNjFqPMJjwo6) that provides a checklist on your contribute data.

Before doing this checkout the standards and formats below.

# Standards for BLASTNet
To ensure that all files available on BLASTNet has consistent file formats, we present some necessary standards for improved access:

1. All simulation datasets must contain [U,&rho;,T,P,Y] to ensure that any additional variables can be easily post-processed. Provide chemkin or cantera files so that thermodynamic and transport properties can 
2. X,Y,Z variables can be provided as a mathematical function for structured grids or a single share a single snapshot of the X,Y,Z values. 
3. Shared simulation datasets must have a corresponding publication or conference submission.
4. All uncompressed files should be in little endian float32 binaries. A Colab/tutorial on how to read and write this format in python is provided [here](./tutorial.html).
<!-- 5. Use .gz, .tar, .tar.gz, and .zip files for lossless compressed files.  -->
<!-- 5. All lossy compressed files should be compressed via [SZ2](https://github.com/szcompressor/SZ) with a point-wise error bound of 1% if possible. A study that we conducted concluded that deep learning algorithms are robust to a point-wise error bound of 4%. This is the hard limit for files on BLASTNet if your files need further compression. Tutorials for compression and decompression are provided [here](./tutorial.html). -->
6. Datasets should be uploaded onto Kaggle ([tutorial](./tutorial.html)) to simplify batch access via a command line API.
7. Once files are shared with these standards are met, join BLASTNet by **submitting [the form](https://forms.gle/VYMWvuNjFqPMJjwo6) above**. 


# Metadata Format

Each submission on blastnet should have a global and local metadata in an info.json file which provides all the important information required to train an ML model. You can interact with these files [here](https://colab.research.google.com/drive/1_dk1IPQsOK-Dxq9VYSci4lB_LOyVCb5c?usp=sharing).

### Global Metadata
```py
metadata['global'] = {
	"dataset_id":"waitongchung/inert-ch4o2-hit-dns",
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

# Authors and Contributors

We thank the following people for contributing and curating this network-of-datasets:

| Name      | Affilliation | Date Joined |
| ----------| -----------  | ---------- |
| [Wai Tong Chung](https://waitong94.github.io/) | Stanford University   | June 6 2022 |
| [Matthias Ihme](https://web.stanford.edu/group/ihmegroup/cgi-bin/MatthiasIhme/people/matthias-ihme/) | Stanford University, SLAC National Laboratory  | June 6 2022 |
| [Ki Sung Jung](https://scholar.google.com/citations?hl=en&user=BrRefdgAAAAJ)   | Sandia National Laboratory   | June 6 2022 |
| [Jacqueline H. Chen](https://scholar.google.com/citations?user=-YNowMsAAAAJ&hl=en) | Sandia National Laboratory   | June 6 2022 |
| [Jack Guo](https://www.linkedin.com/in/jackguo1/) | Stanford University   | June 6 2022 |
| [Davy Brouzet](https://www.linkedin.com/in/davy-brouzet/) | Stanford University  | June 6 2022 |
| [Mohsen Talei](https://people.eng.unimelb.edu.au/mohsent/) | University of Melbourne | June 6 2022 |
| Bin Jiang | University of Melbourne | Nov 18 2022 |
| [Bruno Savard](https://www.polymtl.ca/expertises/en/savard-bruno) | Polytechnique Montréal | Jan 26 2023 |
| [Alexei Y. Poludnenko](https://me.engr.uconn.edu/blog/faculty/poludnenko-alexei/) | University of Connecticut  | June 7 2023 |
| [Bassem Akoush](https://www.linkedin.com/in/bassem-akoush/) | Stanford University | June 7 2023 |
| [Pushan Sharma](https://www.linkedin.com/in/pushan-sharma-0b327588/) | Stanford University | June 7 2023 |
| [Alex Tamkin](https://www.alextamkin.com) | Stanford University | June 7 2023 |
| [Qing Wang](https://scholar.google.com/citations?user=kuPsonIAAAAJ&hl=en) | Google | August 29 2023 |
| [Shantanu Shahane](https://www.linkedin.com/in/shantanu-shahane) | Google | August 29 2023 |
| [Yifan Chen](https://www.linkedin.com/in/yi-fan-chen-1489666/) | Google | August 29 2023 |





