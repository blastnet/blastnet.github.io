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
        Size = 58 GB 
    </td>
    <td style="text-align:center">0</td>
    <td>
      <a href="https://www.kaggle.com/datasets/waitongchung/round-jet-premixed-coffee">Kaggle</a><BR>
      <a href="https://doi.org/10.1017/jfm.2020.1184">DOI</a><BR>
      <a href="./assets/bib/brouzet2021.bib">.bib</a><BR>
      <a href="./assets/json/brouzet2021b_info.json">info.json</a>
    </td>
  </tr>

</table>


# Currently Onboarding

<table id="myTableTwo">
  <tr class="header">
    <th style="width:35%;">Description</th>
    <!-- <th style="width:60%;">TPY</th> -->
    <th style="width:25%;">Contibutors</th>
    <th style="width:18%;">Size</th>
    <th style="width:5%;">%Lossy</th>
    <th style="width:15%;">Status</th>
  </tr>
  <tr>
    <td>Diluted H2-Air (Li2004 Mech.) Non-Premixed Lifted Slot Burner Flame </td>
    <td>&#8226; Ki Sung Jung <BR> &#8226; Jacqueline H. Chen</td>
    <td>
        N<sub>x</sub> = 2000 <BR>
        N<sub>y</sub> = 1600 <BR>
        N<sub>z</sub> = 400 <BR>
        N<sub>&#632;</sub> = 6 + 9  <BR>
        Size = 80 GB 
    </td>
    <td style="text-align:center">1</td>
    <td>Under Review</td>
  </tr>
  <<!-- tr>
    <td>Transcritical (Peng-Robinson) Nitrogen Channel DNS</td>
    <td>&#8226; Jack Guo  <BR> &#8226; Matthias Ihme</td>
    <td>
        N<sub>x</sub> = 384 <BR>
        N<sub>y</sub> = 256 <BR>
        N<sub>z</sub> = 384 <BR>
        N<sub>&#632;</sub> = 6 + 0<BR>
        Size = 50 GB 
    </td>
    <td style="text-align:center">0</td>
    <td>Reformatting</td>
  </tr> -->
</table>
