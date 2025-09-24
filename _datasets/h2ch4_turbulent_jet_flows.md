---
layout: datapage
excerpt: (4 cases)
title: H2/CH4 Turbulent Jet Flows
description: H2/CH4 Fuel Mixtures, Turbulent Round Jet Premixed Flame DNS
header:
  teaser: /assets/img/ho2024_ico.png
categories: 
- reacting
- jet
- turbulent
- numerical
---

<div class="sidebar__right" style="top:200px; text-align: center;">
    <img src="./assets/img/ho2024.png" alt="Image 1">
</div>

## Description

The DNS configurations by Ho et al. [1] investigates four turbulent round jet flames fueled by 0, 10, 50, and 80% hydrogen by volume, with the rest by methane, while maintaining the jet Reynolds number at 10,300. The jet is preheated to 450 K and the coflow is set to the adiabatic combustion products. The setup is initialized with combustion products at adiabatic flame temperature and at atmospheric pressure. A reduced mechanism with Quasi-Steady State chemistry is used, resulting in 16 transported species and 7 QSS species. The original simulation domain size is 25D×16D×16D, though note that the sponge layer data has been removed from this dataset, resulting in a 19.3D×5D×5D domain. After removal of the sponge layer, the grid sizes are 1739×620×620, 1749×486×486, 1730×571×571, and 1831×654×654 for the H0, H10, H50, and H80 cases, respectively. Five snapshots of each case is provided.

The DNS is performed using the code NTMIX-CHEMKIN, which solves fully compressible Navier-Stokes equations along with energy and species conservation equations in Cartesian coordinates. The solver uses an eight-order explicit central spatial difference scheme and a third-order Runge-Kutta time integration scheme. Ideal gas law and mixture-averaged species-specific properties are used for the simulations. Further details of the DNS configuration and solver are provided in Ho et al. [1].

## Quick Info
* Contributors: Jen Zen Ho, Mohsen Talei
* <a href="https://doi.org/10.1016/j.ijhydene.2024.07.283">DOI</a>
* <a href="./assets/bib/ho2024.bib">.bib</a>

## Links to different cases

<script src="./assets/js/table.js"></script>

<table align="center">
    <tr class="header">
    <th style="width:2%;">ID</th>
    <th style="width:10%;">Conditions</th>
      <!-- <th style="width:60%;">TPY</th> -->
    <!-- <th style="width:8%;">Grid</th> -->
    <th style="width:10%;">Size (GB)</th>
      <!-- <th style="width:60%;">Article</th> -->
    <th style="width:8%;">Links</th>
    </tr>
    <tr>       
        <td align="center"> 0 </td>
        <td align="center">0% H<sub>2</sub> 100% CH<sub>4</sub></td>
        <td align="center">790</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/blastnet/h2ch4-jet-h0-1">Kaggle<sub>1</sub></a>, <a href="./assets/json/ho2024/h2ch4-jet-h0-1-info.json">info.json<sub>1</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/h2ch4-jet-h0-2">Kaggle<sub>2</sub></a>, <a href="./assets/json/ho2024/h2ch4-jet-h0-2-info.json">info.json<sub>2</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/h2ch4-jet-h0-3">Kaggle<sub>3</sub></a>, <a href="./assets/json/ho2024/h2ch4-jet-h0-3-info.json">info.json<sub>3</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/h2ch4-jet-h0-4">Kaggle<sub>4</sub></a>, <a href="./assets/json/ho2024/h2ch4-jet-h0-4-info.json">info.json<sub>4</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/h2ch4-jet-h0-5">Kaggle<sub>5</sub></a>, <a href="./assets/json/ho2024/h2ch4-jet-h0-5-info.json">info.json<sub>5</sub></a><BR>
        </td>
    </tr>
    <tr>       
        <td align="center"> 1 </td>
        <td align="center">10% H<sub>2</sub> 90% CH<sub>4</sub></td>
        <td align="center">490</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/blastnet/h2ch4-jet-h10-1">Kaggle<sub>1</sub></a>, <a href="./assets/json/ho2024/h2ch4-jet-h10-1-info.json">info.json<sub>1</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/h2ch4-jet-h10-2">Kaggle<sub>2</sub></a>, <a href="./assets/json/ho2024/h2ch4-jet-h10-2-info.json">info.json<sub>2</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/h2ch4-jet-h10-3">Kaggle<sub>3</sub></a>, <a href="./assets/json/ho2024/h2ch4-jet-h10-3-info.json">info.json<sub>3</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/h2ch4-jet-h10-4">Kaggle<sub>4</sub></a>, <a href="./assets/json/ho2024/h2ch4-jet-h10-4-info.json">info.json<sub>4</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/h2ch4-jet-h10-5">Kaggle<sub>5</sub></a>, <a href="./assets/json/ho2024/h2ch4-jet-h10-5-info.json">info.json<sub>5</sub></a><BR>
        </td>
    </tr>
    <tr>       
        <td align="center"> 2 </td>
        <td align="center">50% H<sub>2</sub> 50% CH<sub>4</sub></td>
        <td align="center">654</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/blastnet/h2ch4-jet-h50-1">Kaggle<sub>1</sub></a>, <a href="./assets/json/ho2024/h2ch4-jet-h50-1-info.json">info.json<sub>1</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/h2ch4-jet-h50-2">Kaggle<sub>2</sub></a>, <a href="./assets/json/ho2024/h2ch4-jet-h50-2-info.json">info.json<sub>2</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/h2ch4-jet-h50-3">Kaggle<sub>3</sub></a>, <a href="./assets/json/ho2024/h2ch4-jet-h50-3-info.json">info.json<sub>3</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/h2ch4-jet-h50-4">Kaggle<sub>4</sub></a>, <a href="./assets/json/ho2024/h2ch4-jet-h50-4-info.json">info.json<sub>4</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/h2ch4-jet-h50-5">Kaggle<sub>5</sub></a>, <a href="./assets/json/ho2024/h2ch4-jet-h50-5-info.json">info.json<sub>5</sub></a><BR>
        </td>
    </tr>
    <tr>       
        <td align="center"> 3 </td>
        <td align="center">80% H<sub>2</sub> 20% CH<sub>4</sub></td>
        <td align="center">878</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/blastnet/h2ch4-jet-h80-1">Kaggle<sub>1</sub></a>, <a href="./assets/json/ho2024/h2ch4-jet-h80-1-info.json">info.json<sub>1</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/h2ch4-jet-h80-2">Kaggle<sub>2</sub></a>, <a href="./assets/json/ho2024/h2ch4-jet-h80-2-info.json">info.json<sub>2</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/h2ch4-jet-h80-3">Kaggle<sub>3</sub></a>, <a href="./assets/json/ho2024/h2ch4-jet-h80-3-info.json">info.json<sub>3</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/h2ch4-jet-h80-4">Kaggle<sub>4</sub></a>, <a href="./assets/json/ho2024/h2ch4-jet-h80-4-info.json">info.json<sub>4</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/h2ch4-jet-h80-5">Kaggle<sub>5</sub></a>, <a href="./assets/json/ho2024/h2ch4-jet-h80-5-info.json">info.json<sub>5</sub></a><BR>
        </td>
    </tr>
</table>

## References
[1]. J. Z. Ho, M. Talei, and R. L. Gordon. Direct numerical simulation of stoichiometric hydrogen/methane premixed jet flames. International Journal of Hydrogen Energy 81, pp. 831-841 (2024).  
