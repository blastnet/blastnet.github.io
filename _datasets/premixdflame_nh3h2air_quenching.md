---
layout: datapage
excerpt: (4 cases)
title: Turbulent Premixed Flame NH3-H2-Air Quenching
description: DNS of turbulent head-on quenching of premixed H₂/air and NH₃/H₂/air flames in fully developed turbulent channel flows
header:
  teaser: /assets/img/ico_cheng_2026.jpg
categories: 
- reacting
- turbulent
- numerical
- transient
- channel
---
<div style="text-align: center;">
    <img src="./assets/img/cheng_2026.png" alt="Image 1" style="max-width: 100%;">
</div>

## Description

Direct numerical simulations (DNS) of turbulent head-on quenching of premixed H₂/air and NH₃/H₂/air flames in fully developed turbulent channel flows at friction Reynolds number Re<sub>τ</sub> ≈ 300 were conducted. Both adiabatic and isothermal walls were considered. There are several objectives of these DNS simulations: (1) to examine near-wall flame dynamics and combustion regime variations [1]; (2) to investigate the effect of differential diffusion on quenching characteristics [2]; (3) to analyze pollutant emission characteristics for near-wall flames [3]; (4) to examine the near-wall flame marker [4] The dataset includes approximately 10 snapshots per flame configuration, spanning from flame initiation to complete flame quenching.

The DNS were performed using the in-house low-Mach combustion solver **DINO** [5]. The detailed NH₃ mechanism [6] and H₂ mechanism [7] were applied for NH₃/H₂/air and H₂/air flames, respectively. The mixture-averaged diffusion model was used for molecular transport. The governing equations were solved using:
- **Spatial discretization:** 6th order centered finite difference method
- **Temporal discretization:** 4th order Runge-Kutta explicit method

Non-reacting channel flows were first simulated until wall turbulence was fully developed. The channel has streamwise (*x*), wall-normal (*y*), and spanwise (*z*) lengths of 5*h*, 2*h*, and 2*h*, respectively, where *h* = 5 mm is the half-channel width. For hydrogen flames, the streamwise length is extended to 20*h*. Two identical flame fronts (mapped from 1D unstretched freely propagating flame solutions) are then initiated at *y* = 0.5*h* and *y* = 1.5*h*, with burned gases in the channel center and flames propagating toward the top and bottom cold walls.
The hydrogen flames are simulated with a grid resolution Δx⁺=2.71 (uniformly 48.4 μm), Δz⁺=2.189 (uniformly 39.1 μm), and 0.437≤Δy⁺≤1.635 (stretched grids in the wall-normal direction from 7.8-29.2 μm). The ammonia/hydrogen flames are simulated with a grid resolution Δx⁺=2.023 (uniformly 32.3 μm), Δz⁺=2.448 (uniformly 39.1 μm), and 0.326≤Δy⁺≤1.215 (stretched grids in the wall-normal direction from 5.2-19.4 μm).


<!-- ## DNS Case Parameters -->

<!-- | Parameter | Case HI | Case AI | Case HA | Case AA |
|-----------|---------|---------|---------|---------|
| u<sub>τ</sub> (m/s) | 6.40 | 5.13 | 6.40 | 5.13 |
| l* (μm) | 17.86 | 15.97 | 17.86 | 15.97 |
| Re<sub>τ</sub> | 280 | 313 | 280 | 313 |
| Da<sub>w</sub> | 0.167 | 0.004 | 0.167 | 0.004 |
| α (H₂ vol. ratio) | 1.0 | 0.2 | 1.0 | 0.2 |
| ϕ | 1.5 | 1.0 | 1.5 | 1.0 |
| T<sub>u</sub> (K) | 750 | 750 | 750 | 750 |
| T<sub>w</sub> (K) | ISO 750 | ISO 750 | AD | AD |
| S<sub>L</sub> (m/s) | 14.54 | 0.843 | 14.54 | 0.843 |
| δ<sub>L</sub> (mm) | 0.243 | 0.661 | 0.243 | 0.661 |
| t<sub>w</sub> (μs) | 2.79 | 3.11 | 2.79 | 3.11 |
| t<sub>L</sub> (μs) | 16.7 | 784 | 16.7 | 784 |
| Grid | 2048×513×256 | 768×769×256 | 2048×513×256 | 768×769×256 | -->

<div style="text-align:center;">
<table style="width:80%; margin:0 auto; table-layout:fixed; border-collapse:collapse;">  
<colgroup>
    <col style="width: 25%;">
    <col style="width: 15%;">
    <col style="width: 15%;">
    <col style="width: 15%;">
    <col style="width: 15%;">
  </colgroup>
    <style>
    th, td {
      text-align: center;
      vertical-align: middle;
      padding: 8px;
    }
    th:first-child,
    td:first-child {
        text-align: left;
  }
  </style>
  <thead>
    <tr>
      <th> Parameter</th>
      <th> Case HI</th>
      <th> Case AI</th>
      <th> Case HA</th>
      <th> Case AA</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><i>u</i><sub>τ</sub> (m/s)</td>
      <td>6.40</td>
      <td>5.13</td>
      <td>6.40</td>
      <td>5.13</td>
    </tr>
    <tr>
      <td><i>l</i>* (μm)</td>
      <td>17.86</td>
      <td>15.97</td>
      <td>17.86</td>
      <td>15.97</td>
    </tr>
    <tr>
      <td><i>Re</i><sub>τ</sub></td>
      <td>280</td>
      <td>313</td>
      <td>280</td>
      <td>313</td>
    </tr>
    <tr>
      <td><i>Da</i><sub>w</sub></td>
      <td>0.167</td>
      <td>0.004</td>
      <td>0.167</td>
      <td>0.004</td>
    </tr>
    <tr>
      <td>α (H<sub>2</sub> vol. ratio)</td>
      <td>1.0</td>
      <td>0.2</td>
      <td>1.0</td>
      <td>0.2</td>
    </tr>
    <tr>
      <td>ϕ</td>
      <td>1.5</td>
      <td>1.0</td>
      <td>1.5</td>
      <td>1.0</td>
    </tr>
    <tr>
      <td><i>T</i><sub>u</sub> (K)</td>
      <td>750</td>
      <td>750</td>
      <td>750</td>
      <td>750</td>
    </tr>
    <tr>
      <td><i>T</i><sub>w</sub> (K)</td>
      <td>ISO 750</td>
      <td>ISO 750</td>
      <td>AD</td>
      <td>AD</td>
    </tr>
    <tr>
      <td><i>S</i><sub>L</sub> (m/s)</td>
      <td>14.54</td>
      <td>0.843</td>
      <td>14.54</td>
      <td>0.843</td>
    </tr>
    <tr>
      <td>δ<sub>L</sub> (mm)</td>
      <td>0.243</td>
      <td>0.661</td>
      <td>0.243</td>
      <td>0.661</td>
    </tr>
    <tr>
      <td><i>t</i><sub>w</sub> (μs)</td>
      <td>2.79</td>
      <td>3.11</td>
      <td>2.79</td>
      <td>3.11</td>
    </tr>
    <tr>
      <td><i>t</i><sub>L</sub> (μs)</td>
      <td>16.7</td>
      <td>784</td>
      <td>16.7</td>
      <td>784</td>
    </tr>
    <!-- <tr>
      <td>Grid</td>
      <td>2048×513×256</td>
      <td>768×769×256</td>
      <td>2048×513×256</td>
      <td>768×769×256</td>
    </tr> -->
  </tbody>
</table>
</div>
> **Notation:** u<sub>τ</sub> — friction velocity; l\* = ν/u<sub>τ</sub> — viscous length scale; ν — kinematic viscosity; Re<sub>τ</sub> = hu<sub>τ</sub>/ν — friction Reynolds number; Da<sub>w</sub> = t<sub>w</sub>/t<sub>L</sub> — wall Damköhler number; t<sub>w</sub> = ν/u<sub>τ</sub>² and t<sub>L</sub> = δ<sub>L</sub>/S<sub>L</sub> — wall and flame time scales; S<sub>L</sub>, δ<sub>L</sub> — laminar flame speed and thickness; α — fuel H₂ volume ratio; ϕ — equivalence ratio; T<sub>u</sub>, T<sub>w</sub> — unburned and wall temperatures; ISO — isothermal wall; AD — adiabatic wall.

---


## Quick Info
* Contributors: Cheng Chi
*  N<sub>&#632;</sub> = 5 + 6
* <a href="https://doi.org/10.1017/jfm.2026.11189">DOI</a>
* <a href="./assets/bib/cheng2026.bib">.bib</a>
* <a href="./assets/bash/sub/premixdflame_nh3h2air_quenching.sh">Download.sh</a><BR> 

## Links to different cases

<script src="./assets/js/table.js"></script>

<table align="center">
    <tr class="header">
    <th style="width:2%;">Case</th>
    <th style="width:8%;">Fuel</th>
    <th style="width:8%;">Wall</th>
    <th style="width:8%;">Grid</th>
    <th style="width:10%;">Size (GB)</th>
    <th style="width:20%;">Links</th>
    </tr>
    <tr>       
        <td align="center"> HI </td>
        <td align="center">H<sub>2</sub></td>
        <td align="center">Isothermal</td>
        <td align="center">2048&times;513&times;256</td>
        <td align="center">121</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/blastnet/premixedflame-h2-iso-dns">Kaggle</a>, <a href="./assets/json/cheng2026/premixedflame-h2-iso-dns-info.json">info.json</a>
        <BR>
        </td>
    </tr>
    <tr>       
        <td align="center"> HA </td>
        <td align="center">H<sub>2</sub></td>
        <td align="center">Adiabatic</td>
        <td align="center">2048&times;513&times;256</td>
        <td align="center">181</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/blastnet/premixedflame-h2-ad-dns">Kaggle</a>, <a href="./assets/json/cheng2026/premixedflame-h2-ad-dns-info.json">info.json</a>        <BR>
        </td>
    </tr>
    <tr>       
        <td align="center"> AI </td>
        <td align="center">NH<sub>3</sub>/H<sub>2</sub></td>
        <td align="center">Isothermal</td>
        <td align="center">768&times;769&times;256</td>
        <td align="center">85</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/blastnet/premixedflame-nh3h2-iso-dns">Kaggle</a>, <a href="./assets/json/cheng2026/premixedflame-nh3h2-iso-dns-info.json">info.json</a>
        <BR>
        </td>
    </tr>
    <tr>       
        <td align="center"> AA </td>
        <td align="center">NH<sub>3</sub>/H<sub>2</sub></td>
        <td align="center">Adiabatic</td>
        <td align="center">768&times;769&times;256</td>
        <td align="center">102</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/blastnet/premixedflame-nh3h2-ad-dns">Kaggle</a>, <a href="./assets/json/cheng2026/premixedflame-nh3h2-ad-dns-info.json">info.json</a>               
        <BR>
        </td>
    </tr>
</table>

## References

[1] C. Chi, B. Cuenot, D. Thévenin, *Turbulent flame-wall interaction: dynamics of flame thickness and combustion regime*, J. Fluid Mech. 1029 (2026) A5.  
[2] C. Chi, C. Yu, B. Cuenot, U. Maas, D. Thévenin, *Effect of differential diffusion on head-on quenching of premixed NH₃/H₂/air flames within turbulent boundary layers*, Proc. Combust. Inst. 40 (2024) 105276.  
[3] C. Chi, *Flame dynamic insights into emission characteristics of NH₃/H₂/air combustion in turbulent boundary layers*, Combust. Flame 269 (2024) 113723.  
[4] C. Chen, C. Chi, W. Han, L. Yang, D. Thévenin, *A flame marker for ammonia/hydrogen/air premixed flames during flame/wall interactions*, Proc. Combust. Inst. 41 (2025) 105935.  
[5] A. Abdelsamie, G. Fru, T. Oster, F. Dietzsch, G. Janiga, D. Thévenin, *Towards direct numerical simulations of low-Mach number turbulent reacting and two-phase flows using immersed boundaries*, Comput. Fluids 131 (2016) 123–141.  
[6] Y. Jiang, A. Gruber, K. Seshadri, F. Williams, *An updated short chemical-kinetic nitrogen mechanism for carbon-free combustion applications*, Int. J. Energy Res. 44(2) (2020) 795–810.  
[7] J. Li, Z. Zhao, A. Kazakov, F.L. Dryer, *An updated comprehensive kinetic model of hydrogen combustion*, Int. J. Chem. Kinet. 36(10) (2004) 566–575.  

