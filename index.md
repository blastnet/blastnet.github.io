---
title: BLASTNet
layout: splash
classes: wide
author_profile: false
header:
  overlay_image: /assets/img/blastnet_banner.png
excerpt: "Bearable Large Accessible Scientific Training Network-of-Datasets"
feature_row:
  - title: 'Publications'
    btn_class: 'btn--primary'
    btn_label: 'Cite us'
    url: '/pub'
    excerpt: >
      <nav><ul><li><a href="https://zenodo.org/records/8034232">BLASTNet Zenodo</a></li><li><a href="https://arxiv.org/abs/2309.13457">2023 NeurIPS paper</a></li><li><a href="https://www.sciencedirect.com/science/article/pii/S2666352X22000309?via%3Dihub">2023 AECS paper</a></li><li><a href="https://openreview.net/forum?id=LxGTZM7L6qn">2022 ICML W. paper</a></li></ul></nav>
  - title: 'Data'
    url: '/datasets'
    btn_class: 'btn--primary'
    btn_label: 'Details'
    excerpt: >
      <nav><ul>
        <li><a href="/assets/bash/batch_download_v2.1.sh" title="Bash script; uses Kaggle API">Download all BLASTNet data</a></li>
        <li><a href="/assets/bash/mom_download.sh" title="Bash script; uses Kaggle API">Download Momentum128 3D SR Dataset</a></li>
        <li><a href="https://www.kaggle.com/datasets/waitongchung/blastnet-momentum-3d-sr-dataset">Kaggle repository for Momentum128 3D SR Dataset</a></li>
      </ul></nav>
  - title: 'Code and Tutorials'
    excerpt: >
      <nav><ul>
        <li><a href="https://www.kaggle.com/code/waitongchung/smallhit-browsedata" title="Kaggle notebook">Browse data and learn our formats</a></li>
        <li><a href="https://www.kaggle.com/code/waitongchung/smallhit-tfmultigpu" title="Kaggle notebook">Multi-GPU training with BLASTNet data</a></li>
        <li><a href="https://github.com/blastnet/kaggle_tutorials">GitHub repository for all Kaggle tutorials</a></li>
        <li><a href="https://colab.research.google.com/drive/1_dk1IPQsOK-Dxq9VYSci4lB_LOyVCb5c?usp=sharing" title="Colab notebook">Using BLASTNet outside Kaggle envs</a></li>
        <li><a href="https://blastnet.github.io/tutorial.html#kaggle-command-line-api">Kaggle CLI quick-start instructions</a></li>
      </ul></nav>
---

## Mission

![summary](./assets/img/about_blastnet.png)

<!-- BLASTNet 2.0 was developed to provide the researchers in  reacting and non-reacting flow physics communities with high-fidelity simulation datasets in a convenient format for ML applications. With **2.2 TB, 744 full-domain samples, and 34 configurations**, BLASTNet can effectively address these gaps and aid in fostering open/fair ML development within reacting and non-reacting flow physics communities. -->
BLASTNet aims to address gaps in open machine learning (ML) within the sciences, specifically fluid mechanics by providing researchers in reacting and non-reacting flow physics communities with (mostly) externally contributed open-source ML resources. 

This data is useful for fluid flows in a wide range of ML applications tied to automotive, propulsion, energy, and the environment. Specifically, scientific engineering tasks related to these domains may include turbulent closure modeling, spatio-temporal modeling, and inverse modeling.

These contributions now include (i) <span id="data_size">4.8 TB</span> of high-fidelity simulation datasets that have been processed in a convenient format for ML applications, (ii) >13,000 lines of code that aid the training and evaluating of these models, (iii) >100 pre-trained weights in flow physics problems, and (iv) regular workshop events that disseminate ML for flow physics via seminars and competitions.

## Distribution

Our ML resources are shared via GitHub and Kaggle. Specifically, code is shared via GitHub, while data and models are shared via Kaggle.

To circumvent Kaggle storage constraints, we partition our data into a network of \<100 GB subsets, with each subset containing a separate simulation configuration. This partitioned data can then be uploaded as separate datasets on Kaggle. To download all cases via [Kaggle API](./tutorial.html), download [this bash script](./assets/bash/batch_download.sh). Summaries of the data are available [here](./datasets.html)!

Our network of datasets approach:
![approach](./assets/img/approach.png)

{% include feature_row %}
