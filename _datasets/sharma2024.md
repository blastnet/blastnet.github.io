---
layout: datapage
excerpt: (10 cases)
title: Lifted hydrogen jet flame
description: Circular Burner Diluted Partially-Premixed H2-air Lifted Flame in 2D configuration
header:
  teaser: /assets/img/ico_sharma2024.png
categories: 
- reacting
- jet
- threeD
- turbulent
---

<div style="text-align: center;">
    <img src="./assets/img/sharma2024.png" alt="Image 1" style="max-width: 80%;">
</div>

## Description

This configuration involves 8 parametric variations of lifted hydrogen jet flame in heated co-flow air. The central circular jet with D = 1.92mm consists of a mixture of 65% of hydrogen and 35% of nitrogen by volume with an inlet temperature of 400K. The jet is surrounded by a co-flow of heated air at 1100K and 1 bar pressure. 
The jet Reynolds number is varied between 5000 to 11000. The computational domain size is 12.5D x 15.6D. A detailed hydrogen-air chemical mechanism composed of 9 species and 21 elementary reactions is employed in this study.
A uniform grid size of 15 μm is placed in both axial and spanwise direction, resulting in a grid size of 1600 x 2000. Two additional inert mixing cases are also added corresponding to jet Reynolds number of 5000 and 10000.

A compressible unstructured finite-volume solver is used to numerically solve the conservation laws for mass, momentum, total energy, and chemical species. 
The convective fluxes are discretized using a sensor-based hybrid scheme, where a high-order, non-dissipative scheme is combined with a low-order scheme to describe interfaces and flow field discontinuities. 
A central scheme, which is 4th-order accurate on uniform meshes, is used along with a 2nd-order accurate ENO scheme. 
We apply a second-order accurate simpler balanced-splitting scheme to separate the convection, diffusion, and reaction operators. 
The stiff chemical source terms are integrated in time using a semi-implicit fourth-order accurate Rosenbrock-Krylov scheme. 
For all other non-stiff operators, we utilize a strong stability preserving third-order Runge-Kutta (SSP-RK3) scheme.

## Quick Info
* <a href="https://doi.org/10.1016/j.combustflame.2025.114190">DOI</a>
* <a href="./assets/bib/sharma2024.bib">.bib</a>
* <a href="https://www.kaggle.com/datasets/sharmapushan/pimapnet">ML model source code</a>
* Contributor: Pushan Sharma, Wai Tong Chung and Matthias Ihme

## Links to different cases

<table align="center">
    <tr class="header">
    <th style="width:10%;">Reynolds number</th>
      <!-- <th style="width:60%;">Article</th> -->
      <th style="width:5%;">Links</th>
    </tr>
    <tr>
        <td align="center">Re<sub>jet</sub>= 5000</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/sharmapushan/hydrogen-jet-5000">Kaggle</a><BR>
        <a href="./assets/json/sharma2024/Re5000_info.json">info.json</a>
        </td>
    </tr>
    <tr>
        <td align="center">Re<sub>jet</sub>= 6000</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/sharmapushan/hydrogen-jet-6000">Kaggle</a><BR>
        <a href="./assets/json/sharma2024/Re6000_info.json">info.json</a>
        </td>
    </tr>
    <tr>
        <td align="center">Re<sub>jet</sub>= 7000</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/sharmapushan/hydrogen-jet-7000">Kaggle</a><BR>
        <a href="./assets/json/sharma2024/Re7000_info.json">info.json</a>
        </td>
    </tr>
    <tr>
        <td align="center">Re<sub>jet</sub>= 7500</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/sharmapushan/hydrogen-jet-7500">Kaggle</a><BR>
        <a href="./assets/json/sharma2024/Re7500_info.json">info.json</a>
        </td>
    </tr>
    <tr>
        <td align="center">Re<sub>jet</sub>= 8000</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/sharmapushan/hydrogen-jet-8000">Kaggle</a><BR>
        <a href="./assets/json/sharma2024/Re8000_info.json">info.json</a>
        </td>
    </tr>
    <tr>
        <td align="center">Re<sub>jet</sub>= 9000</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/sharmapushan/hydrogen-jet-9000">Kaggle</a><BR>
        <a href="./assets/json/sharma2024/Re9000_info.json">info.json</a>
        </td>
    </tr>
    <tr>
        <td align="center">Re<sub>jet</sub>= 10000</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/sharmapushan/hydrogen-jet-10000">Kaggle</a><BR>
        <a href="./assets/json/sharma2024/Re10000_info.json">info.json</a>
        </td>
    </tr>
    <tr>
        <td align="center">Re<sub>jet</sub>= 11000</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/sharmapushan/hydrogen-jet-11000">Kaggle</a><BR>
        <a href="./assets/json/sharma2024/Re11000_info.json">info.json</a>
        </td>
    </tr>
    <tr>
        <td align="center">Re<sub>jet</sub>= 5000 (inert mixing)</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/sharmapushan/nonreacting-hydrogen-jet-5000">Kaggle</a><BR>
        <a href="./assets/json/sharma2024/Re5000_inert_info.json">info.json</a>
        </td>
    </tr>
    <tr>
        <td align="center">Re<sub>jet</sub>= 10000 (inert mixing)</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/sharmapushan/nonreacting-hydrogen-jet-10000">Kaggle</a><BR>
        <a href="./assets/json/sharma2024/Re10000_inert_info.json">info.json</a>
        </td>
    </tr>
</table>

