---
layout: default
title: Datasets
description: Browse for datasets here
---

<script src="./assets/js/table.js"></script>

# BLASTNet Simulation Datasets

To download all cases via [Kaggle API](./tutorial.html), download [this bash script](./assets/bash/batch_download.sh).

Search for cases, contributors, and whether the data has been compressed.

Size of scalars N<sub>&#632;</sub> is provided in terms 6 (U,T,P,&rho;) + N<sub>species</sub>.


<table id="myTable">
  <tr class="header">
    <th style="width:30%;"><input type="text"  size="20" id="myInput" onkeyup="myFunction()" placeholder="Description..."></th>
    <!-- <th style="width:60%;">TPY</th> -->
    <th style="width:25%;"><input type="text"  size="15" id="myInputTwo" onkeyup="myFunctionAuthor()" placeholder="Contributors..."></th>
    <th style="width:25%;">Size</th>
    <!-- <th style="width:60%;">Article</th> -->
    <th style="width:5%;"><input type="text"  size="7" id="myInputThree" onkeyup="myFunctionLossy()" placeholder="%Lossy..."></th>
    <th style="width:20%;">Links</th>
  </tr>
  <tr>
    <td>Compressible Inert CH4-O2 Homogeneous Isotropic Turbulence DNS</td>
    <td>&#8226; Wai Tong Chung <BR>&#8226; Matthias Ihme</td>
    <!-- <td>T [K]; 300 , P [atm]: 1; Y: (CH4, O2), Inert </sub></td> -->
    <td>
        N<sub>x</sub> = 128 <BR>
        N<sub>y</sub> = 128 <BR>
        N<sub>z</sub> = 128 <BR>
        N<sub>&#632;</sub> = 6 + 2  <BR>
        Size = 6 GB 
    </td>
    <td style="text-align:center">0</td>
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
    <td style="text-align:center">0</td>
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
    <td style="text-align:center">0</td>
    <td>
      <a href="https://www.kaggle.com/datasets/waitongchung/round-jet-premixed-coffee">Kaggle</a><BR>
      <a href="./assets/img/brouzet2021.png">.png</a><BR>
      <a href="https://doi.org/10.1017/jfm.2020.1184">DOI</a><BR>
      <a href="./assets/bib/brouzet2021.bib">.bib</a><BR>
      <a href="./assets/json/brouzet2021b_info.json">info.json</a>
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
    <td style="text-align:center">0</td>
    <td>
      <a href="https://www.kaggle.com/datasets/waitongchung/half-lifted-flame-dns-li">Kaggle</a><BR>
      <a href="./assets/img/jung2021.png">.png</a><BR>
      <a href="https://doi.org/10.1016/j.combustflame.2021.111584">DOI</a><BR>
      <a href="./assets/bib/jung2021.bib">.bib</a><BR>
      <a href="./assets/json/jung2021_info.json">info.json</a>
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
        Size = 100 GB 
    </td>
    <td style="text-align:center">0</td>
    <td>
      <a href="https://www.kaggle.com/datasets/waitongchung/full-lifted-flame-dns-li">Kaggle</a><BR>
      <a href="./assets/img/jung2021.png">.png</a><BR>
      <a href="https://doi.org/10.1016/j.combustflame.2021.111584">DOI</a><BR>
      <a href="./assets/bib/jung2021.bib">.bib</a><BR>
      <a href="./assets/json/jung_2021_full_info.json">info.json</a>
    </td>
  </tr>

</table>

