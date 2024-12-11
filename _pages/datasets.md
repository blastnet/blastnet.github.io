---
title: Datasets
layout: datasets
permalink: /datasets
collection: datasets
entries_layout: grid
classes: wide
excerpt: "High-fidelity reacting and non-reacting compressible turbulent flow simulation data."
---

## BLASTNet Momentum128 3D SR Dataset

<div style="text-align: center;">
    <img src="./assets/img/diversity.png" alt="Image 1" style="max-width: 100%;">
</div>

The BLASTNet Momentum128 3D SR Dataset is extracted from BLASTNet Simulation Dataset 2.0 to mitigate constraints in memory and grid properties:
1. This is done by selecting to 2000 sub-volumes (of size 128<sup>3</sup>) of density and velocity fields from uniform-grid regions that act as labels.
2. We perform 8, 16 and 32x Favre-filtering to create the features.
3. Bash script for downloading via the [Kaggle API](./tutorial.html) is provided [here](./assets/bash/mom_download.sh).
4. You can also access the Kaggle repo [here](https://www.kaggle.com/datasets/waitongchung/blastnet-momentum-3d-sr-dataset).

**All datasets provided on BLASTNet are licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International ([CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/))**
