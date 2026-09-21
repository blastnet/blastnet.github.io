---
layout: datapage
excerpt: (4 cases)
title: Forced HIT (Re$$_\lambda$$ = 433)
description: Forced Homogeneous Isotropic Turbulence DNS
header:
  teaser: /assets/img/ico_jhtdbfhit_re433.png
categories: 
- numerical
- nonreacting
- hit
- turbulent
- steady
---
<div style="text-align: center;">
    <img src="./assets/img/jhtdbfhit_re433.png" alt="Image 1" style="max-width: 100%;">
</div>

## Description
These snapshots are derived from a Direct Numerical Simulation (DNS) of forced homogeneous isotropic turbulence, which is publicly available through the Johns Hopkins Turbulence Database (JHTDB). The original simulation was performed on a triply periodic cubic domain of size $2\pi \times 2\pi \times 2\pi$, discretized on a grid of $1024 \times 1024 \times 1024$ nodes, with periodic boundary conditions applied in all three directions. The incompressible Navier–Stokes equations are solved using a pseudo-spectral method. Statistical stationarity is maintained by a large-scale forcing that holds the total energy constant within the low-wavenumber shells for which $|\mathbf{k}| \le 2$, so that energy injected at large scales cascades to and is dissipated at the smallest resolved scales. The turbulence is characterized by a Taylor-scale Reynolds
number that fluctuates around $Re_\lambda \approx 433$.

For this machine-learning-oriented release, we subsampled the original JHTDB forced isotropic turbulence fields and re-saved them in a new, ML-friendly format. Each snapshot retains the complete three-dimensional flow field with all three velocity components (u, v, w) and pressure. Four versions of the dataset are provided:

- **Sequential version** — 20 consecutive snapshots sampled at the stored time interval,
- **Random version** — 10 snapshots drawn at random (non-consecutive) times from the
  statistically stationary regime. This version is intended for tasks that benefit from
  diverse, decorrelated samples, such as single-frame reconstruction, statistical modeling,
  or generative learning.

For each of the sequential and random versions, there are two sub-versions of the data, snapshots separated by DNS simulation time step (fine) and 10 DNS time-steps (coarse).

## Quick Info
* Contributors: Charles Meneveau
* N<sub>&#632;</sub> = 4
* N<sub>x</sub> = 1024, N<sub>y</sub> = 1024, N<sub>z</sub> = 1024, N<sub>&#632;</sub> = 4
* <a href="https://doi.org/10.7281/T1KK98XB">DOI</a>
* <a href="./assets/bib/jhtdbfhit_re433.bib">.bib</a>
* <a href="./assets/bash/sub/jhtdbfhit_re433.sh">Download.sh</a><BR>

## Links to different cases

<script src="./assets/js/table.js"></script>

<table align="center">
    <tr class="header">
    <th style="width:2%;">ID</th>
    <th style="width:8%;">Re$_{\lambda}$</th>
    <th style="width:20%;">Description</th>
    <th style="width:8%;">Size (GB)</th>
    <th style="width:20%;">Links</th>
    </tr>
    <tr>       
        <td align="center"> 0 </td>
        <td align="center">433</td>
        <td align="center">Sequential Snapshots (coarse) </td>
        <td align="center">321</td>
        <td align="center">
        <div>
        <a href="https://www.kaggle.com/datasets/blastnet/fhitcoarse-dns-Re433-seq-p1">Kaggle<sub>1-11</sub></a>, <a href="./assets/json/jhtdb/fhitcoarse-dns-Re433-seq-p1-info.json">info.json<sub>1-11</sub></a>,
        </div>
        <div>
        <a href="https://www.kaggle.com/datasets/blastnet/fhitcoarse-dns-Re433-seq-p2">Kaggle<sub>12-20</sub></a>, <a href="./assets/json/jhtdb/fhitcoarse-dns-Re433-seq-p2-info.json">info.json<sub>12-20</sub></a>,
        </div>
        <BR>
        </td>
    </tr>
    <tr>       
        <td align="center"> 1 </td>
        <td align="center">433</td>
        <td align="center">Collection of snapshots at different time (coarse)</td>
        <td align="center">161</td>
        <td align="center">
        <div>
        <a href="https://www.kaggle.com/datasets/blastnet/fhitcoarse-dns-Re433-rnd">Kaggle</a>, <a href="./assets/json/jhtdb/fhitcoarse-dns-Re433-rnd-info.json">info.json</a>,
        </div>
        <BR>
        </td>
    </tr>
    <tr>       
        <td align="center"> 2 </td>
        <td align="center">433</td>
        <td align="center">Sequential Snapshots (fine) </td>
        <td align="center">321</td>
        <td align="center">
        <div>
        <a href="https://www.kaggle.com/datasets/blastnet/fhitfine-dns-Re433-seq-p1">Kaggle<sub>1-11</sub></a>, <a href="./assets/json/jhtdb/fhitfine-dns-Re433-seq-p1-info.json">info.json<sub>1-11</sub></a>,
        </div>
        <div>
        <a href="https://www.kaggle.com/datasets/blastnet/fhitfine-dns-Re433-seq-p2">Kaggle<sub>12-20</sub></a>, <a href="./assets/json/jhtdb/fhitfine-dns-Re433-seq-p2-info.json">info.json<sub>12-20</sub></a>,
        </div>
        <BR>
        </td>
    </tr>
    <tr>       
        <td align="center"> 3 </td>
        <td align="center">433</td>
        <td align="center">Collection of snapshots at different time (fine)</td>
        <td align="center">161</td>
        <td align="center">
        <div>
        <a href="https://www.kaggle.com/datasets/blastnet/fhitfine-dns-Re433-rnd">Kaggle</a>, <a href="./assets/json/jhtdb/fhitfine-dns-Re433-rnd-info.json">info.json</a>,
        </div>
        <BR>
        </td>
    </tr>
</table>

