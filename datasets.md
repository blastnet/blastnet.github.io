---
layout: default
title: Datasets
description: Browse for datasets here
---

<script src="./assets/js/table.js"></script>

# BLASTNet Simulation Datasets

Search for cases, contributors, and whether the data has been compressed.

Size of scalars N<sub>&#632;</sub> is provided in terms 4 (U,T,P,&rho;) + N<sub>species</sub>.


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
        N<sub>&#632;</sub> = 7 + 2  <BR>
        Size = 6 GB 
    </td>
    <td style="text-align:center">0</td>
    <td>
      <a href="https://www.kaggle.com/datasets/waitongchung/inert-ch4o2-hit-dns">Kaggle</a><BR>
      <a href="https://doi.org/10.1016/j.combustflame.2021.111758">DOI</a><BR>
      <a href="./assets/bib/chung2022.bib">.bib</a><BR>
      <a href="./assets/json/chung2022.json">info.json</a>
    </td>
  </tr>
  <!-- Brouzet and Talei -->

  <!-- <tr> -->
<!--     <td>Turbulent Premixed CH4-air Round-jet Flame</td>
    <td>&#8226; Davy Brouzet <BR>&#8226; Mohsen Talei</td> -->
    <!-- <td>T [K]; 300 , P [atm]: 1; Y: (CH4, O2), Inert </sub></td> -->
<!--     <td>
        N<sub>x</sub> = 1546 <BR>
        N<sub>y</sub> = 676 <BR>
        N<sub>z</sub> = 676 <BR>
        N<sub>&#632;</sub> = 7 + 14 
    </td>
    <td>0</td>
    <td><a href="https://doi.org/10.1017/jfm.2020.1184">DOI</a><BR>
      <a href="./assets/bib/brouzet2021.bib">.bib</a><BR>
      <a href="./assets/json/brouzet2021.json">info.json</a>
    </td> -->

  <!-- </tr> -->
</table>
