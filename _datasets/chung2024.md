---
layout: datapage
title: BLASTNet Momentum128 3D SR Dataset
excerpt: 
header:
  teaser: /assets/img/ico_chung2022.png
description: Collection of BLASTNet Simulations
categories: 
- numerical
- nonreacting
- turbulent
- threeD
- hit
- pipe
- channel
- jet
- benchmark
---

![image](./assets/img/diversity.png)

## Description
The BLASTNet Momentum128 3D SR Dataset is a benchmark dataset for developing and evaluating 3D super-resolution (SR) methods on turbulent flow data. It is a curated subset of the larger BLASTNet datasets, specifically designed to facilitate high-fidelity reconstruction of velocity fields from low-fidelity fields. This dataset includes 2,000 volumetric samples of 128$$^3$$ grid points, each containing the three components of the velocity field (u, v, w) and the density. The sub-volumes were extracted from high-resolution direct numerical simulations (DNS) which span a range of flow regimes and statistical variations.

Each sample is accompanied by pre-computed low-resolution inputs at multiple downsampling ratios (e.g., 8×, 16×, and 32×), enabling the evaluation of SR models under different reconstruction challenges. Data is provided in binary .dat format using single-precision floating point (little-endian) ordering. The dataset is split into training, validation, and test sets, with metadata stored in accompanying CSV. These include physical statistics summary (e.g., skewness, kurtosis, variance).


## Quick Info
* <a href="https://www.kaggle.com/datasets/waitongchung/blastnet-momentum-3d-sr-dataset">Kaggle Link</a><BR>
* Contributors: Wai Tong Chung, Bassem Akoush, Matthias Ihme
* N<sub>x</sub> = 128, N<sub>y</sub> = 128, N<sub>z</sub> = 128, N<sub>&#632;</sub> = 4
* Size = 75.15 GB 
* <a href="https://proceedings.neurips.cc/paper_files/paper/2023/file/f458af2455b1e12608c2a16c308d663d-Paper-Datasets_and_Benchmarks.pdf">DOI</a><BR>
* <a href="./assets/bib/chung2022.bib">.bib</a><BR>
<!-- * <a href="./assets/json/chung2022_info.json">info.json</a> -->
