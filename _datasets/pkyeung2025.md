---
layout: datapage
excerpt: (2 cases)
title: Forced HIT
description: Forced Homogeneous Isotropic Turbulence DNS with 3 Passive Scalars
header:
  teaser: /assets/img/ico_pkyeung2025.png
categories: nonreacting
---
<div style="text-align: center;">
    <img src="./assets/img/pkyeung2025.png" alt="Image 1" style="max-width: 100%;">
</div>

## Description
These snapshots are from a series of Direct Numerical Simulations (DNS) of passive scalar mixing in three-dimensional homogeneous isotropic turbulence, at grid resolution up to $$16384^3$$ [1], performed using the exascale supercomputer named Frontier at Oak Ridge National Laboratory. The velocity fluctuations evolve according to the incompressible Navier-Stokes equations, while the scalar fluctuations follow an advection-diﬀusion equation, with a source term representing an imposed mean scalar gradient. The numerical methods employed are standard Fourier pseudo-spectral in space, second order in time, with aliasing errors controlled by a combination of phase shifting and truncation [2]. The velocity field is forced by keeping the values of the energy spectrum in the three lowest wavenumber shells constant [3].

The simulations begin from previously evolved velocity fields and are first run at a modest resolution of $$k_{max}\eta  \approx 1.4$$ (where $$k_{max} = \sqrt 2 N/3$$ is the highest wavenumber resolved on an $$N^3$$ grid and $$\eta$$ is the Kolmogorov length scale) until the scalar fields reach statistical stationarity. The grid is then
refined to a higher resolution of $$k_{max} η \approx 2.8$$, and the simulation proceeds until the smallest scales fully adjust. Snapshots at this highest resolution have been collected for Taylor-scale Reynolds
numbers $$Re_\lambda \approx 390, 650, 1000 \text{ and } 1600$$. The Schmidt number is $$1.0$$ in all cases. Each snapshot captures the complete flow field — including velocity, pressure, and three passive
scalars — at a single instant in time. The three scalars are each subjected to a uniform mean gradient along a diﬀerent coordinate direction.


## Quick Info
* Contributors: P.K Yeung, Daniel Dotson
* N<sub>&#632;</sub> = 4 + 3

* <a href="TBD">DOI</a>
* <a href="./assets/bib/pkyeung2024.bib">.bib</a>

## Links to different cases

<script src="./assets/js/table.js"></script>

<table align="center">
    <tr class="header">
    <th style="width:2%;">ID</th>
    <th style="width:8%;">Re$_{\lambda}$</th>
      <!-- <th style="width:60%;">TPY</th> -->
    <th style="width:8%;">Grid</th>
    <th style="width:8%;">Size (GB)</th>
      <!-- <th style="width:60%;">Article</th> -->
    <th style="width:16%;">Links</th>
    </tr>
    <tr>       
        <td align="center"> 0 </td>
        <td align="center">390</td>
        <td align="center">2048<sup>3</sup></td>
        <td align="center">225`</td>
        <td align="center">
        <div>
        <a href="https://www.kaggle.com/datasets/blastnet/forcedhit-dns-re390-vp">Kaggle<sub>VP</sub></a>, <a href="./assets/json/pkyeung2025/forcedhit-dns-re390-scalar-info.json">info.json<sub>VP</sub></a>,
        </div>
        <div>
        <a href="https://www.kaggle.com/datasets/blastnet/forcedhit-dns-re390-scalar">Kaggle<sub>Y</sub></a>, <a href="./assets/json/pkyeung2025/forcedhit-dns-re390-scalar-info.json">info.json<sub>Y</sub></a>
        </div>
        <BR>
        </td>
    </tr>
    <tr>       
        <td align="center"> 1 </td>
        <td align="center">650</td>
        <td align="center">4096<sup>3</sup></td>
        <td align="center">1.8 TB</td>
        <td align="center">
        <div>
        <a href="https://www.kaggle.com/datasets/blastnet/forcedhit-dns-re650-p1">Kaggle<sub>P<sub>1</sub></sub></a>, <a href="./assets/json/pkyeung2025/forcedhit-dns-re650-p1-info.json">info.json<sub>P<sub>1</sub></sub></a>,
        </div>
        <div>
        <a href="https://www.kaggle.com/datasets/blastnet/forcedhit-dns-re650-p2">Kaggle<sub>P<sub>2</sub></sub></a>, <a href="./assets/json/pkyeung2025/forcedhit-dns-re650-p2-info.json">info.json<sub>P<sub>2</sub></sub></a>,
        </div>
        <div>
        <a href="https://www.kaggle.com/datasets/blastnet/forcedhit-dns-re650-u1">Kaggle<sub>U<sub>1</sub></sub></a>, <a href="./assets/json/pkyeung2025/forcedhit-dns-re650-u1-info.json">info.json<sub>U<sub>1</sub></sub></a>,
        </div>
        <div>
        <a href="https://www.kaggle.com/datasets/blastnet/forcedhit-dns-re650-U2">Kaggle<sub>U<sub>2</sub></sub></a>, <a href="./assets/json/pkyeung2025/forcedhit-dns-re650-u2-info.json">info.json<sub>U<sub>2</sub></sub></a>
        </div>
        <div>
        <a href="https://www.kaggle.com/datasets/blastnet/forcedhit-dns-re650-v1">Kaggle<sub>V<sub>1</sub></sub></a>, <a href="./assets/json/pkyeung2025/forcedhit-dns-re650-v1-info.json">info.json<sub>V<sub>1</sub></sub></a>,
        </div>
        <div>
        <a href="https://www.kaggle.com/datasets/blastnet/forcedhit-dns-re650-p2">Kaggle<sub>V<sub>2</sub></sub></a>, <a href="./assets/json/pkyeung2025/forcedhit-dns-re650-v2-info.json">info.json<sub>V<sub>2</sub></sub></a>
        </div>
        <div>
        <a href="https://www.kaggle.com/datasets/blastnet/forcedhit-dns-re650-w1">Kaggle<sub>W<sub>1</sub></sub></a>, <a href="./assets/json/pkyeung2025/forcedhit-dns-re650-w1-info.json">info.json<sub>W<sub>1</sub></sub></a>,
        </div>
        <div>
        <a href="https://www.kaggle.com/datasets/blastnet/forcedhit-dns-re650-w2">Kaggle<sub>W<sub>2</sub></sub></a>, <a href="./assets/json/pkyeung2025/forcedhit-dns-re650-w2-info.json">info.json<sub>W<sub>2</sub></sub></a>
        </div>
        <div>
        <a href="https://www.kaggle.com/datasets/blastnet/forcedhit-dns-re650-y11">Kaggle<sub>Y<sub>1,1</sub></sub></a>, <a href="./assets/json/pkyeung2025/forcedhit-dns-re650-y11-info.json">info.json<sub>Y<sub>1,1</sub></sub></a>,
        </div>
        <div>
        <a href="https://www.kaggle.com/datasets/blastnet/forcedhit-dns-re650-Y12">Kaggle<sub>Y<sub>1,2</sub></sub></a>, <a href="./assets/json/pkyeung2025/forcedhit-dns-re650-Y12-info.json">info.json<sub>Y<sub>1,2</sub></sub></a>
        </div>
        <div>
        <a href="https://www.kaggle.com/datasets/blastnet/forcedhit-dns-re650-y21">Kaggle<sub>Y<sub>2,1</sub></sub></a>, <a href="./assets/json/pkyeung2025/forcedhit-dns-re650-y21-info.json">info.json<sub>Y<sub>2,1</sub></sub></a>,
        </div>
        <div>
        <a href="https://www.kaggle.com/datasets/blastnet/forcedhit-dns-re650-Y22">Kaggle<sub>Y<sub>2,2</sub></sub></a>, <a href="./assets/json/pkyeung2025/forcedhit-dns-re650-Y22-info.json">info.json<sub>Y<sub>2,2</sub></sub></a>
        </div>
        <div>
        <a href="https://www.kaggle.com/datasets/blastnet/forcedhit-dns-re650-y31">Kaggle<sub>Y<sub>3,1</sub></sub></a>, <a href="./assets/json/pkyeung2025/forcedhit-dns-re650-y31-info.json">info.json<sub>Y<sub>3,1</sub></sub></a>,
        </div>
        <div>
        <a href="https://www.kaggle.com/datasets/blastnet/forcedhit-dns-re650-Y32">Kaggle<sub>Y<sub>3,2</sub></sub></a>, <a href="./assets/json/pkyeung2025/forcedhit-dns-re650-Y32-info.json">info.json<sub>Y<sub>3,2</sub></sub></a>
        </div>
        <BR>
        </td>
    </tr>
</table>

## References
[1] D. L. Dotson, P. K. Yeung, and K. R. Sreenivasan. A Study of passive scalar turbulence at high Reynolds numbers enabled by exascale computing. Bull. Am. Phys. Soc.
https://meetings.aps.org/Meeting/DFD24/Session/R37.00003, 2024.  
[2] R. S. Rogallo. Numerical experiments in homogeneous turbulence. NASA TM 81315, NASA Ames Research Center, Moﬀett Field, CA., 1981.  
[3] D. A. Donzis and P. K. Yeung. Resolution eﬀects and scaling in numerical simulations of passive
scalar mixing in turbulence. Physica D, 239:1278–1287, 2010. 