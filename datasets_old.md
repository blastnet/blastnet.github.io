---
layout: default
title: Datasets
description: 3D high-fidelity reacting and non-reacting compressible turbulent flow simulation data.
---


<script src="./assets/js/table.js"></script>

**BLASTNet Momentum128 3D SR Dataset**

The BLASTNet Momentum128 3D SR Dataset is extracted from BLASTNet Simulation Dataset 2.0 to mitigate constraints in memory and grid properties:
1. This is done by selecting to 2000 sub-volumes (of size 128<sup>3</sup>) of density and velocity fields from uniform-grid regions that act as labels.
2. We perform 8, 16 and 32x Favre-filtering to create the features.
3. Bash script for downloading via the [Kaggle API](./tutorial.html) is provided [here](./assets/bash/mom_download.sh).
4. You can also access the Kaggle repo [here](https://www.kaggle.com/datasets/waitongchung/blastnet-momentum-3d-sr-dataset).

**BLASTNet Simulation Dataset**

The BLASTNet Simulation Dataset currently contains **4.8 TB, >700 full-domain samples, and 35 configurations** of reacting and non-reacting flow data from Direct Numerical Simulations:
1.  Download all cases via the [Kaggle API](./tutorial.html) by executing [this bash script](./assets/bash/batch_download.sh). 
2. Tutorials for reading the data are provided [here](./tutorial.html).
3. Search for the Kaggle repos to these configurations below.

Size of scalars N<sub>&#632;</sub> is provided in terms 6 (U,T,P,&rho;) + N<sub>species</sub>.


<table id="myTable">
  <tr class="header">
    <th style="width:30%;"><input type="text"  size="20" id="myInput" onkeyup="myFunction()" placeholder="Description..."></th>
    <!-- <th style="width:60%;">TPY</th> -->
    <th style="width:25%;"><input type="text"  size="15" id="myInputTwo" onkeyup="myFunctionAuthor()" placeholder="Contributors..."></th>
    <th style="width:20%;">Size</th>
    <!-- <th style="width:60%;">Article</th> -->
    <!-- <th style="width:5%;"><input type="text"  size="7" id="myInputThree" onkeyup="myFunctionLossy()" placeholder="%Lossy..."></th> -->
    <th style="width:20%;">Links</th>
  </tr>
  <tr>
    <td>Compressible Inert CH4-O2 Homogeneous Isotropic Turbulence DNS</td>
    <td>&#8226; Wai Tong Chung <BR>&#8226; Matthias Ihme</td>
    <!-- <td>T [K]; 300 , P [atm]: 1; Y: (CH4, O2), Inert </sub></td> -->
    <td>
        N<sub>x</sub> = 129 <BR>
        N<sub>y</sub> = 129 <BR>
        N<sub>z</sub> = 129 <BR>
        N<sub>&#632;</sub> = 6 + 2  <BR>
        Size = 6 GB 
    </td>
    <!-- <td style="text-align:center">0</td> -->
    <td>
      <a href="https://www.kaggle.com/datasets/waitongchung/inert-ch4o2-hit-dns">Kaggle</a><BR>
      <a href="./assets/img/chung2022.png">.png</a><BR>
      <a href="https://doi.org/10.1016/j.combustflame.2021.111758">DOI</a><BR>
      <a href="./assets/bib/chung2022.bib">.bib</a><BR>
      <a href="./assets/json/chung2022_info.json">info.json</a>
    </td>
  </tr>
  <!-- Brouzet and Talei -->
<tr>
    <td>Turbulent Round Jet Premixed BFER CH4-air Premixed Flame DNS</td>
    <td>&#8226; Davy Brouzet <BR>&#8226; Mohsen Talei</td>
    <!-- <td>T [K]; 300 , P [atm]: 1; Y: (CH4, O2), Inert </sub></td> -->
    <td>
        N<sub>x</sub> = 1832 <BR>
        N<sub>y</sub> = 721 <BR>
        N<sub>z</sub> = 721 <BR>
        N<sub>&#632;</sub> = 6 + 6  <BR>
        Size = 58 GB 
    </td>
    <!-- <td style="text-align:center">0</td> -->
    <td>
      <a href="https://www.kaggle.com/datasets/waitongchung/round-jet-premixed-bfer">Kaggle</a><BR>
      <a href="./assets/img/brouzet2021.png">.png</a><BR>
      <a href="https://doi.org/10.1017/jfm.2020.1184">DOI</a><BR>
      <a href="./assets/bib/brouzet2021.bib">.bib</a><BR>
      <a href="./assets/json/brouzet2021_info.json">info.json</a>
    </td>
  </tr>
  <tr>
    <td>Turbulent Round Jet Premixed COFFEE CH4-air Premixed Flame DNS</td>
    <td>&#8226; Davy Brouzet <BR>&#8226; Mohsen Talei</td>
    <!-- <td>T [K]; 300 , P [atm]: 1; Y: (CH4, O2), Inert </sub></td> -->
    <td>
        N<sub>x</sub> = 1235 <BR>
        N<sub>y</sub> = 676 <BR>
        N<sub>z</sub> = 676 <BR>
        N<sub>&#632;</sub> = 6 + 6  <BR>
        Size = 52 GB 
    </td>
    <!-- <td style="text-align:center">0</td> -->
    <td>
      <a href="https://www.kaggle.com/datasets/waitongchung/round-jet-premixed-coffee">Kaggle</a><BR>
      <a href="./assets/img/brouzet2021.png">.png</a><BR>
      <a href="https://doi.org/10.1017/jfm.2020.1184">DOI</a><BR>
      <a href="./assets/bib/brouzet2021.bib">.bib</a><BR>
      <a href="./assets/json/brouzet2021b_info.json">info.json</a>
    </td>
  </tr>
  <tr>
    <td>Slot Burner Diluted H2-air Lifted Flame DNS (Full Domain)</td>
    <td>&#8226; Ki Sung Jung <BR>&#8226;  Jacqueline H. Chen</td>
    <!-- <td>T [K]; 300 , P [atm]: 1; Y: (CH4, O2), Inert </sub></td> -->
    <td>
        N<sub>x</sub> = 2000 <BR>
        N<sub>y</sub> = 1600 <BR>
        N<sub>z</sub> = 400 <BR>
        N<sub>&#632;</sub> = 6 + 9  <BR>
        Size = 93 GB 
    </td>
    <!-- <td style="text-align:center">0</td> -->
    <td>
      <a href="https://www.kaggle.com/datasets/waitongchung/full-lifted-flame-dns-li">Kaggle</a><BR>
      <a href="./assets/img/jung2021.png">.png</a><BR>
      <a href="https://doi.org/10.1016/j.combustflame.2021.111584">DOI</a><BR>
      <a href="./assets/bib/jung2021.bib">.bib</a><BR>
      <a href="./assets/json/jung2021_full_info.json">info.json</a>
    </td>
    </tr>
    <tr>
    <td>Slot Burner Diluted H2-air Lifted Flame DNS (Half Domain)</td>
    <td>&#8226; Ki Sung Jung <BR>&#8226;  Jacqueline H. Chen</td>
    <!-- <td>T [K]; 300 , P [atm]: 1; Y: (CH4, O2), Inert </sub></td> -->
    <td>
        N<sub>x</sub> = 1000 <BR>
        N<sub>y</sub> = 334 <BR>
        N<sub>z</sub> = 201 <BR>
        N<sub>&#632;</sub> = 6 + 9  <BR>
        Size = 5 GB 
    </td>
    <!-- <td style="text-align:center">0</td> -->
    <td>
      <a href="https://www.kaggle.com/datasets/waitongchung/half-lifted-flame-dns-li">Kaggle</a><BR>
      <a href="./assets/img/jung2021.png">.png</a><BR>
      <a href="https://doi.org/10.1016/j.combustflame.2021.111584">DOI</a><BR>
      <a href="./assets/bib/jung2021.bib">.bib</a><BR>
      <a href="./assets/json/jung2021_info.json">info.json</a>
    </td>
  </tr>
  <tr>
    <td>Premixed Flame-wall Interaction CH4-Air DNS</td>
    <td>&#8226; Bin Jiang <BR>&#8226; Mohsen Talei</td>
    <!-- <td>T [K]; 300 , P [atm]: 1; Y: (CH4, O2), Inert </sub></td> -->
    <td>
        N<sub>x</sub> = 1001 <BR>
        N<sub>y</sub> = 251 <BR>
        N<sub>z</sub> = 251 <BR>
        N<sub>&#632;</sub> = 6 + 23  <BR>
        Size = 89 GB 
    </td>
    <!-- <td style="text-align:center">0</td> -->
    <td>
      <a href="https://www.kaggle.com/datasets/waitongchung/premixed-flame-wall-ch4-air-dns-gri">Kaggle</a><BR>
      <a href="./assets/img/jiang2021.jpeg">.jpeg</a><BR>
      <a href="https://doi.org/10.1016/j.combustflame.2021.111432">DOI</a><BR>
      <a href="./assets/bib/jiang2021.bib">.bib</a><BR>
      <a href="./assets/json/jiang2021_info.json">info.json</a>
    </td>
  </tr>
  <tr>
    <td>Transcritical Channel Flow N2 Turbulence DNS</td>
    <td>&#8226; Jack Guo <BR>&#8226; Matthias Ihme</td>
    <!-- <td>T [K]; 300 , P [atm]: 1; Y: (CH4, O2), Inert </sub></td> -->
    <td>
        N<sub>x</sub> = 385 <BR>
        N<sub>y</sub> = 257 <BR>
        N<sub>z</sub> = 257 <BR>
        N<sub>&#632;</sub> = 6 <BR>
        Size = 17 GB 
    </td>
    <!-- <td style="text-align:center">0</td> -->
    <td>
      <a href="https://www.kaggle.com/datasets/jguo96/transcritical-n2-channel-dns">Kaggle</a><BR>
      <a href="./assets/img/guo2022.mp4">.mp4</a><BR>
      <a href="https://doi.org/10.1017/jfm.2021.1157">DOI</a><BR>
      <a href="./assets/bib/guo2022.bib">.bib</a><BR>
      <a href="./assets/json/guo2022_info.json">info.json</a>
    </td>
  </tr>
  <tr>
    <td>Vitiated H2-air Freely Propagating Flame DNS</td>
    <td>&#8226; Bruno Savard </td>
    <!-- <td>T [K]; 300 , P [atm]: 1; Y: (CH4, O2), Inert </sub></td> -->
    <td>
        <a href="./savard.html">22 configs</a><BR>
        N<sub>&#632;</sub> = 6 + 9  <BR>
        Size = 1.9 TB 
    </td>
    <!-- <td style="text-align:center">0</td> -->
    <td>
      <a href="./savard.html">Kaggle Links</a><BR>
      <a href="./assets/img/savard2019.png">.png</a><BR>
      <a href="https://doi.org/10.1016/j.combustflame.2019.07.020">DOI</a><BR>
      <a href="./assets/bib/savard2019.bib">.bib</a><BR>
      <a href="./savard.html">info.json Links</a>
    </td>
  </tr>
  <tr>
    <td>CH4-air flame interaction with Forced HIT DNS</td>
    <td>&#8226; Alexei Y. Poludnenko </td>
    <!-- <td>T [K]; 300 , P [atm]: 1; Y: (CH4, O2), Inert </sub></td> -->
   <td>
        N<sub>x</sub> = 257 <BR>
        N<sub>y</sub> = 257 <BR>
        N<sub>z</sub> = 4097 <BR>
        N<sub>&#632;</sub> = 6 + 21<BR>
        Size = 30 GB 
    </td>
    <!-- <td style="text-align:center">0</td> -->
    <td>
      <a href="https://www.kaggle.com/datasets/waitongchung/forced-hit-ch4-air-ffcm">Kaggle</a><BR>
      <a href="./assets/img/poludnenko.png">.png</a><BR> 
      <a href="https://doi.org/10.1016/j.combustflame.2009.11.018">DOI</a><BR>
      <a href="./assets/bib/poludnenko2010.bib">.bib</a><BR>
      <a href="./assets/json/poludnenko_info.json">info.json</a>
    </td>
  </tr>
  <tr>
    <td>Canonical Decaying Homogeneous Isotropic Turbulence DNS</td>
    <td>&#8226; Qing Wang <BR>&#8226; Shantanu Shahane <BR>&#8226; Yifan Chen</td>
    <!-- <td>T [K]; 300 , P [atm]: 1; Y: (CH4, O2), Inert </sub></td> -->
   <td>
        N<sub>x</sub> = 2040 <BR>
        N<sub>y</sub> = 2040 <BR>
        N<sub>z</sub> = 2048 <BR>
        N<sub>&#632;</sub> = 5  <BR>
        Size = 2.6 TB 
    </td>
    <!-- <td style="text-align:center">0</td> -->
    <td>
      <a href="./shantanu.html">Kaggle Links</a><BR>
      <a href="./assets/img/shantanu2022.png">.png</a><BR>
      <a href="https://doi.org/10.1016/j.cpc.2022.108292">DOI</a><BR>
      <a href="./assets/bib/shantanu.bib">.bib</a><BR>
      <a href="./shantanu.html">info.json Links</a>
    </td>
  </tr>
</table>



