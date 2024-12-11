---
layout: datapage
excerpt: (6 cases)
title: Forced HIT
description: Passive Scalar HIT DNS
header:
  teaser: /assets/img/ico_gauding2022.png
---

<div class="sidebar__right" style="text-align: center; top: 160px;">
    <img src="./assets/img/gauding2022.png" alt="Image 1">
</div>

# Description
This DNS configuration simulates non-reacting forced homogeneous isotropic turbulence with a passive scalar. The DNS solver utilizes the analytical framework developed by Gauding et al., which is designed to investigate the structure and kinematics of iso-scalar fields. This approach involves a two-point statistical analysis of the phase indicator field to track a specified iso-scalar volume. The scalar field is represented as &#x03BE;&#x0303; =G<sub>ξ</sub> y + ξ with the mean scalar gradient G<sub>ξ</sub> assumed to be unity. The first term represents the mean scalar field while the second term is the fluctuations. To maintain a statistically steady state, external stochastic forcing is applied to the velocity field, as described by Eswaran and Pope (1988). This forcing is statistically isotropic and restricted to low wavenumbers to minimize its impact on small scales. The BLASTNet dataset includes five parametric variations of this configuration, differing by (i) Reynolds number based on the Taylor microscale, and (ii) grid size. Each configuration contains four variables: the velocity components (u, v, w) and the scalar fluctuation field &xi;. 


# Quick Info
* Contributors: Michael Gauding 
*  N<sub>&#632;</sub> = 4
* <a href="https://doi.org/10.1017/jfm.2022.367">DOI</a>
* <a href="./assets/bib/gauding2022.bib">.bib</a>

# Links to different cases

<table align="center">
    <tr class="header">
    <th style="width:2%;">ID</th>
    <th style="width:10%;">Conditions</th>
      <!-- <th style="width:60%;">TPY</th> -->
    <th style="width:8%;">Grid</th>
    <th style="width:10%;">Size (GB)</th>
      <!-- <th style="width:60%;">Article</th> -->
    <th style="width:8%;">Links</th>
    </tr>
    <tr>       
        <td align="center"> 0 </td>
        <td align="center">Re<sub>&lambda;</sub> = 88</td>
        <td align="center">512<sup>3</sup></td>
        <td align="center">25.23</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/bassemakoush/passive-fhit-dns-r0">Kaggle</a>, 
        <a href="./assets/json/gauding2022/passive-fhit-dns-r0-info.json">info.json</a>,
        </td>
    </tr>
    <tr>       
        <td align="center"> 1 </td>
        <td align="center">Re<sub>&lambda;</sub> = 121</td>
        <td align="center">1024<sup>3</sup></td>
        <td align="center">131.14</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/bassemakoush/passive-fhit-dns-r1">Kaggle</a>, 
        <a href="./assets/json/gauding2022/passive-fhit-dns-r1-info.json">info.json</a>,
        </td>
    </tr>
    <tr>       
        <td align="center"> 2 </td>
        <td align="center">Re<sub>&lambda;</sub> = 184</td>
        <td align="center">1024<sup>3</sup></td>
        <td align="center">133.14</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/bassemakoush/passive-fhit-dns-r2">Kaggle</a>, 
        <a href="./assets/json/gauding2022/passive-fhit-dns-r2-info.json">info.json</a>,
        </td>
    </tr>
    <tr>       
        <td align="center"> 3 </td>
        <td align="center">Re<sub>&lambda;</sub> = 218</td>
        <td align="center">2048<sup>3</sup></td>
        <td align="center">137.44</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/bassemakoush/passive-fhit-dns-r3">Kaggle</a>, 
        <a href="./assets/json/gauding2022/passive-fhit-dns-r3-info.json">info.json</a>,
        </td>
    </tr>
    <tr>       
        <td align="center"> 4 </td>
        <td align="center">Re<sub>&lambda;</sub> = 331</td>
        <td align="center">2048<sup>3</sup></td>
        <td align="center">137.44</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/bassemakoush/passive-fhit-dns-r4">Kaggle</a>, 
        <a href="./assets/json/gauding2022/passive-fhit-dns-r4-info.json">info.json</a>,
        </td>
    </tr>
    <!-- </tr>
        <tr>       
        <td align="center"> 5 </td>
        <td align="center">Re<sub>&lambda;</sub> = 331</td>
        <td align="center">4096<sup>3</sup></td>
        <td align="center">25.23</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/bassemakoush/passive-fhit-dns-r5">Kaggle</a>, 
        <a href="./assets/json/gauding2022/passive-fhit-dns-r5-info.json">info.json</a>,
        </td>
    </tr> -->
</table>
