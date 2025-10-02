---
layout: datapage
excerpt: (6 cases)
title: Jet Fuel Laminar Spray Flame
description: Jet Fuel Laminar Spray Flame DNS
header:
  teaser: /assets/img/ico_zhang2025.jpg
categories: 
- reacting
- counterflow
- laminar
- numerical
---

<div style="text-align: center;">
    <img src="./assets/img/zhang2025.png" alt="Image 1" style="max-width: 70%;">
</div>

## Description
These snapshots are from a series of Direct Numerical Simulation (DNS) of SAF/Jet A spray flames stabilized in a laminar counter-flow. An in-house solver based on OpenFOAM is used to solve the conservation equations of mass, momentum, energy, and mass fraction. The study investigates six Stokes numbers resulting from combinations of three droplet diameters and two strain rates. Fuel droplets, composed of a 50:50 molar mixture of ATJ-SPK and Jet A and carried by air, are randomly injected from the fuel side at same velocity as air and a temperature of 303 K. Simultaneously, pure air is injected from the opposite side with the same velocity and temperature. The bulk equivalence ratio, ϕ=0.6, is calculated based on the mass flow rates of fuel and air on the fuel side. Combustion chemistry is modeled using the HyChem mechanism [1], which includes 51 species and 201 reactions. The computational domain measures $20$ mm $ \times\ 20$ mm $\times\ 4$ mm, and is discretized using a grid of $250 \times 200 \times 10$ grid points, respectively. To ensure statistical convergence, the flame is initialized over 10 flowthrough times, followed by 5 additional flowthrough times used for statistical analysis.

## Quick Info
* Contributors: Zhang Yanqi, Jiangkuan Xing, Zhenhua An, Ryoichi Kurose
* N<sub>x</sub> = 250, N<sub>y</sub> = 200, N<sub>z</sub> = 10, N<sub>&#632;</sub> = 5+51

* <a href="https://doi.org/10.1016/j.fuel.2025.135757">DOI</a>
* <a href="./assets/bib/zhang2025.bib">.bib</a>

## Links to different cases

<script src="./assets/js/table.js"></script>

<table align="center">
    <tr class="header">
    <th style="width:2%;">ID</th>
    <th style="width:10%;">Droplet size (μm)</th>
    <th style="width:10%;">Strain rate (1/s)</th>
    <th style="width:10%;">Size (GB)</th>
      <!-- <th style="width:60%;">Article</th> -->
    <th style="width:8%;">Links</th>
    </tr>
    <tr>       
        <td align="center"> 0 </td>
        <td align="center">20</td>
        <td align="center">100</td>
        <td align="center">20</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/blastnet/saf-jeta-spray-laminar-counterflow-case1">Kaggle</a>, <a href="./assets/json/zhang2025/laminar-counterflow-case1-info.json">info.json</a><BR>
        </td>
    </tr>
    <tr>       
        <td align="center"> 1 </td>
        <td align="center">40</td>
        <td align="center">100</td>
        <td align="center">20</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/blastnet/saf-jeta-spray-laminar-counterflow-case2">Kaggle</a>, <a href="./assets/json/zhang2025/laminar-counterflow-case2-info.json">info.json</a><BR>
        </td>
    </tr>
    <tr>       
        <td align="center"> 2 </td>
        <td align="center">70</td>
        <td align="center">100</td>
        <td align="center">20</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/blastnet/saf-jeta-spray-laminar-counterflow-case3">Kaggle</a>, <a href="./assets/json/zhang2025/laminar-counterflow-case3-info.json">info.json</a><BR>
        </td>
    </tr>
    <tr>       
        <td align="center"> 3 </td>
        <td align="center">20</td>
        <td align="center">200</td>
        <td align="center">10</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/blastnet/saf-jeta-spray-laminar-counterflow-case4">Kaggle</a>, <a href="./assets/json/zhang2025/laminar-counterflow-case4-info.json">info.json</a><BR>
        </td>
    </tr>
    <tr>       
        <td align="center"> 4 </td>
        <td align="center">40</td>
        <td align="center">200</td>
        <td align="center">10</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/blastnet/saf-jeta-spray-laminar-counterflow-case5">Kaggle</a>, <a href="./assets/json/zhang2025/laminar-counterflow-case5-info.json">info.json</a><BR>
        </td>
    </tr>
    <tr>       
        <td align="center"> 5 </td>
        <td align="center">70</td>
        <td align="center">200</td>
        <td align="center">10</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/blastnet/saf-jeta-spray-laminar-counterflow-case6">Kaggle</a>, <a href="./assets/json/zhang2025/laminar-counterflow-case6-info.json">info.json</a><BR>
        </td>
    </tr>
</table>

## References
[1] K. Wang, R. Xu, T. Parise, J. Shao, A. Movaghar, D.J. Lee, J.-W. Park, Y. Gao, T. Lu, F.N. Egolfopoulos, D.F. Davidson, R.K. Hanson, C.T. Bowman, H. Wang, A physics-based approach to modeling real-fuel combustion chemistry – IV. HyChem modeling of combustion kinetics of a bio-derived jet fuel and its blends with a conventional Jet A, Combustion and Flame. 198 (2018) 477–489.

