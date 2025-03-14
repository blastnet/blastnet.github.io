---
layout: datapage
excerpt: (1 case)
title: Canonical Decaying HIT
description: Decaying homogeneous isotropic turbulence DNS
header:
  teaser: /assets/img/ico_shantanu2022.png
categories: nonreacting
---

<div style="text-align: center;">
    <img src="./assets/img/shantanu2022.png" alt="Image 1" style="max-width: 100%;">
</div>

## Description
A DNS decaying homogeneous isotropic turbulence simulation is developed by Wang et al. and runs on Tensor Processing Unit (TPU) platform. The Computational Fluid Dynamics (CFD) framework is employed to solve the variable-density Navier-Stokes equation under a low-Mach approximation. The governing equations are discretized using a finite-difference method on a collocated structured mesh within a cubic computational domain with a side length of 10.24 m. The discretization involves a total of N = 2048 grid points in each direction, resulting in a homogeneous grid spacing of &Delta; = 5 &times; 10 <sup>-3 </sup>m. The simulation is initialized with specific turbulence parameters, including an initial Reynolds number Re<sub> &lambda; </sub> = 309, initial turbulent kinetic energy k<sub>0 </sub> = 24.42 m<sup>2</sup>/s<sup>2</sup>, and initial ratios of Taylor length scale &lambda;<sub>0</sub>/L = 7.49 &times; 10<sup>-3</sup> and integral length scale l<sub>0</sub>/L = 2.84 &times; 10<sup>-1</sup>. Here, &lambda; and l represent the Taylor length scale and integral length scale, respectively. These initial condition set the stage for investigating the temporal evolution and decay characteristics of homogeneous isotropic turbulence within the computational domain.

## Quick Info
* Contributors: Qing Wang, Shantanu Shahane, Yifan Chen
* N<sub>x</sub> = 2040, N<sub>y</sub> = 2040, N<sub>z</sub> = 2048, N<sub>&#632;</sub> = 4
* <a href="https://doi.org/10.1016/j.cpc.2022.108292">DOI</a>
* <a href="./assets/bib/shatanau.bib">.bib</a>

## Links to different cases

<table align="center">
    <tr class="header">
    <th style="width:2%;">ID</th>
    <th style="width:10%;">Conditions</th>
      <!-- <th style="width:60%;">TPY</th> -->
      <th style="width:10%;">Size (GB)</th>
      <!-- <th style="width:60%;">Article</th> -->
      <th style="width:8%;">Links</th>
    </tr>
    <tr>       
        <td align="center"> 0 </td>
        <td align="center">TKE  = 25.8844, &epsilon; = 65.7053</td>
        <td align="center">120</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-00-velocity">Kaggle<sub>V</sub></a>, <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-00-pressure">Kaggle<sub>P</sub></a><BR>
        <a href="./assets/json/shantanu/canonical-hit-dns-00-velocity-info.json">info.json<sub>V</sub></a>, <a href="./assets/json/shantanu/canonical-hit-dns-00-pressure-info.json">info.json<sub>P</sub></a>
        </td>
    </tr>
    <tr>
        <td align="center"> 1 </td>
        <td align="center">TKE = 21.2626, &epsilon; = 39.3486</td>
        <td align="center">120</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-01-velocity">Kaggle<sub>V</sub></a>, <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-01-pressure">Kaggle<sub>P</sub></a><BR>
        <a href="./assets/json/shantanu/canonical-hit-dns-01-velocity-info.json">info.json<sub>V</sub></a>, <a href="./assets/json/shantanu/canonical-hit-dns-01-pressure-info.json">info.json<sub>P</sub></a>
        </td>
    </tr>
    <tr>
        <td align="center"> 2 </td>
        <td align="center">TKE = 17.1823, &epsilon; = 37.9396</td>
        <td align="center">120</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-02-velocity">Kaggle<sub>V</sub></a>, <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-02-pressure">Kaggle<sub>P</sub></a><BR>
        <a href="./assets/json/shantanu/canonical-hit-dns-02-velocity-info.json">info.json<sub>V</sub></a>, <a href="./assets/json/shantanu/canonical-hit-dns-02-pressure-info.json">info.json<sub>P</sub></a>
        </td>
    </tr>
    <tr>
        <td align="center"> 3 </td>
        <td align="center">TKE = 13.7007, &epsilon; = 30.2196</td>
        <td align="center">120</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-03-velocity">Kaggle<sub>V</sub></a>, <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-03-pressure">Kaggle<sub>P</sub></a><BR>
        <a href="./assets/json/shantanu/canonical-hit-dns-03-velocity-info.json">info.json<sub>V</sub></a>, <a href="./assets/json/shantanu/canonical-hit-dns-03-pressure-info.json">info.json<sub>P</sub></a>
        </td>   
    </tr>
    <tr>
        <td align="center"> 4 </td>
        <td align="center">TKE = 9.3180, &epsilon; = 16.4062</td>
        <td align="center">120</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-04-velocity">Kaggle<sub>V</sub></a>, <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-04-pressure">Kaggle<sub>P</sub></a><BR>
        <a href="./assets/json/shantanu/canonical-hit-dns-04-velocity-info.json">info.json<sub>V</sub></a>, <a href="./assets/json/shantanu/canonical-hit-dns-04-pressure-info.json">info.json<sub>P</sub></a>
        </td>
    </tr>
    <tr>
        <td align="center"> 5 </td>
        <td align="center">TKE = 5.8251, &epsilon; = 7.4214</td>
        <td align="center">120</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-05-velocity">Kaggle<sub>V</sub></a>, <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-05-pressure">Kaggle<sub>P</sub></a><BR>
        <a href="./assets/json/shantanu/canonical-hit-dns-05-velocity-info.json">info.json<sub>V</sub></a>, <a href="./assets/json/shantanu/canonical-hit-dns-05-pressure-info.json">info.json<sub>P</sub></a> 
        </td>       
    </tr>
    <tr>
        <td align="center"> 6 </td>
        <td align="center">TKE = 3.4790, &epsilon; = 3.2468</td>
        <td align="center">120</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-06-velocity">Kaggle<sub>V</sub></a>, <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-06-pressure">Kaggle<sub>P</sub></a><BR>
        <a href="./assets/json/shantanu/canonical-hit-dns-06-velocity-info.json">info.json<sub>V</sub></a>, <a href="./assets/json/shantanu/canonical-hit-dns-06-pressure-info.json">info.json<sub>P</sub></a>    
        </td>
    </tr>
    <tr>
        <td align="center"> 7 </td>
        <td align="center">TKE = 1.9369, &epsilon; = 1.2832</td>
        <td align="center">120</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-07-velocity">Kaggle<sub>V</sub></a>, <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-07-pressure">Kaggle<sub>P</sub></a><BR>
        <a href="./assets/json/shantanu/canonical-hit-dns-07-velocity-info.json">info.json<sub>V</sub></a>, <a href="./assets/json/shantanu/canonical-hit-dns-07-pressure-info.json">info.json<sub>P</sub></a>
        </td>
    </tr>
    <tr>
        <td align="center"> 8 </td>
        <td align="center">TKE = 1.0627, &epsilon; = 0.5080</td>
        <td align="center">120</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-08-velocity">Kaggle<sub>V</sub></a>, <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-08-pressure">Kaggle<sub>P</sub></a><BR>
        <a href="./assets/json/shantanu/canonical-hit-dns-08-velocity-info.json">info.json<sub>V</sub></a>, <a href="./assets/json/shantanu/canonical-hit-dns-08-pressure-info.json">info.json<sub>P</sub></a>    
        </td>
    </tr>
    <tr>
        <td align="center"> 9 </td>
        <td align="center">TKE = 0.6658, &epsilon; = 0.2389</td>
        <td align="center">120</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-09-velocity">Kaggle<sub>V</sub></a>, <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-09-pressure">Kaggle<sub>P</sub></a><BR>
        <a href="./assets/json/shantanu/canonical-hit-dns-09-velocity-info.json">info.json<sub>V</sub></a>, <a href="./assets/json/shantanu/canonical-hit-dns-09-pressure-info.json">info.json<sub>P</sub></a>
        </td>
    </tr>
    <tr>
        <td align="center"> 10 </td>
        <td align="center">TKE = 0.4521, &epsilon; = 0.1295</td>
        <td align="center">120</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-10-velocity">Kaggle<sub>V</sub></a>, <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-10-pressure">Kaggle<sub>P</sub></a><BR>
        <a href="./assets/json/shantanu/canonical-hit-dns-10-velocity-info.json">info.json<sub>V</sub></a>, <a href="./assets/json/shantanu/canonical-hit-dns-10-pressure-info.json">info.json<sub>P</sub></a>
        </td>
    </tr>
    <tr>
        <td align="center"> 11 </td>
        <td align="center">TKE = 0.3339, &epsilon; = 0.0789</td>
        <td align="center">120</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-11-velocity">Kaggle<sub>V</sub></a>, <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-11-pressure">Kaggle<sub>P</sub></a><BR>
        <a href="./assets/json/shantanu/canonical-hit-dns-11-velocity-info.json">info.json<sub>V</sub></a>, <a href="./assets/json/shantanu/canonical-hit-dns-11-pressure-info.json">info.json<sub>P</sub></a>
        </td>    
    </tr>
    <tr>
        <td align="center"> 12 </td>
        <td align="center">TKE = 0.2596 &epsilon; = 0.0518</td>
        <td align="center">120</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-12-velocity">Kaggle<sub>V</sub></a>, <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-12-pressure">Kaggle<sub>P</sub></a><BR>
        <a href="./assets/json/shantanu/canonical-hit-dns-12-velocity-info.json">info.json<sub>V</sub></a>, <a href="./assets/json/shantanu/canonical-hit-dns-12-pressure-info.json">info.json<sub>P</sub></a>
        </td>
    </tr>
    <tr>
        <td align="center"> 13 </td>
        <td align="center">TKE = 0.2119, &epsilon; = 0.0375</td>
        <td align="center">120</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-13-velocity">Kaggle<sub>V</sub></a>, <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-13-pressure">Kaggle<sub>P</sub></a><BR>
        <a href="./assets/json/shantanu/canonical-hit-dns-13-velocity-info.json">info.json<sub>V</sub></a>, <a href="./assets/json/shantanu/canonical-hit-dns-13-pressure-info.json">info.json<sub>P</sub></a>
        </td>
    </tr>
    <tr>
        <td align="center"> 14 </td>
        <td align="center">TKE = 0.1765, &epsilon; = 0.0283</td>
        <td align="center">120</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-14-velocity">Kaggle<sub>V</sub></a>, <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-14-pressure">Kaggle<sub>P</sub></a><BR>
        <a href="./assets/json/shantanu/canonical-hit-dns-14-velocity-info.json">info.json<sub>V</sub></a>, <a href="./assets/json/shantanu/canonical-hit-dns-14-pressure-info.json">info.json<sub>P</sub></a>   
        </td>
    </tr>
    <tr>
        <td align="center"> 15 </td>
        <td align="center">TKE = 0.1488, &epsilon; = 0.0215</td>
        <td align="center">120</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-15-velocity">Kaggle<sub>V</sub></a>, <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-15-pressure">Kaggle<sub>P</sub></a><BR>
        <a href="./assets/json/shantanu/canonical-hit-dns-15-velocity-info.json">info.json<sub>V</sub></a>, <a href="./assets/json/shantanu/canonical-hit-dns-15-pressure-info.json">info.json<sub>P</sub></a>
        </td> 
    </tr>
    <tr>
        <td align="center"> 16 </td>
        <td align="center">TKE = 0.1268, &epsilon; = 0.0167</td>
        <td align="center">120</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-16-velocity">Kaggle<sub>V</sub></a>, <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-16-pressure">Kaggle<sub>P</sub></a><BR>
        <a href="./assets/json/shantanu/canonical-hit-dns-16-velocity-info.json">info.json<sub>V</sub></a>, <a href="./assets/json/shantanu/canonical-hit-dns-16-pressure-info.json">info.json<sub>P</sub></a>
        </td>
    </tr>
    <tr>
        <td align="center"> 17 </td>
        <td align="center">TKE = 0.1090, &epsilon; = 0.0131</td>
        <td align="center">120</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-17-velocity">Kaggle<sub>V</sub></a>, <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-17-pressure">Kaggle<sub>P</sub></a><BR>
        <a href="./assets/json/shantanu/canonical-hit-dns-17-velocity-info.json">info.json<sub>V</sub></a>, <a href="./assets/json/shantanu/canonical-hit-dns-17-pressure-info.json">info.json<sub>P</sub></a>
        </td>
    </tr>
    <tr>
        <td align="center"> 18 </td>
        <td align="center">TKE = 0.0953, &epsilon; = 0.0107</td>
        <td align="center">120</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-18-velocity">Kaggle<sub>V</sub></a>, <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-18-pressure">Kaggle<sub>P</sub></a><BR>
        <a href="./assets/json/shantanu/canonical-hit-dns-18-velocity-info.json">info.json<sub>V</sub></a>, <a href="./assets/json/shantanu/canonical-hit-dns-18-pressure-info.json">info.json<sub>P</sub></a>
        </td>    
    </tr>
    <tr>
        <td align="center"> 19 </td>
        <td align="center">TKE = 0.0843, &epsilon; = 0.0089</td>
        <td align="center">120</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-19-velocity">Kaggle<sub>V</sub></a>, <a href="https://www.kaggle.com/datasets/bassemakoush/canonical-hit-dns-19-pressure">Kaggle<sub>P</sub></a><BR>
        <a href="./assets/json/shantanu/canonical-hit-dns-19-velocity-info.json">info.json<sub>V</sub></a>, <a href="./assets/json/shantanu/canonical-hit-dns-19-pressure-info.json">info.json<sub>P</sub></a>
        </td>
    </tr>
</table>




