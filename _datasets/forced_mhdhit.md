---
layout: datapage
excerpt: (2 cases)
title: Forced MHD
description: Forced Magnetohydrodynamic Turbulence DNS
header:
  teaser: /assets/img/ico_jhtdbfmhd.png
categories: 
- numerical
- nonreacting
- hit
- turbulent
- steady
---
<div style="text-align: center;">
    <img src="./assets/img/jhtdbfmhd.png" alt="Image 1" style="max-width: 100%;">
</div>

## Description
These snapshots are derived from a Direct Numerical Simulation (DNS) of forced, statistically stationary incompressible magnetohydrodynamic (MHD) turbulence, which is publicly available through the Johns Hopkins Turbulence Database (JHTDB). The original simulation was performed on a triply periodic cubic domain of size $2\pi \times 2\pi \times 2\pi$, discretized on a grid of $1024 \times 1024 \times 1024$ nodes, with periodic boundary conditions applied in all three directions. The incompressible MHD equations — the Navier–Stokes equations coupled to the magnetic induction equation through the Lorentz force — are solved using a pseudo-spectral method. Both the velocity field and the magnetic field are forced at large scales to sustain a statistically stationary turbulent state, so that energy injected at large scales cascades to and is dissipated at the smallest resolved scales. 

For this machine-learning-oriented release, we subsampled the original JHTDB forced MHD turbulence fields and re-saved them in a new, ML-friendly format. Each snapshot retains the complete three-dimensional flow state with all three velocity components (u, v, w), pressure and all three magnetic magnetic vector potential components (Ax, Ay, Az) . Two versions of the dataset are provided:

- **Sequential version** — 20 consecutive snapshots sampled at the stored time interval,
- **Random version** — 10 snapshots drawn at random (non-consecutive) times from the
  statistically stationary regime. This version is intended for tasks that benefit from
  diverse, decorrelated samples, such as single-frame reconstruction, statistical modeling,
  or generative learning.


## Quick Info
* Contributors: Charles Meneveau
* N<sub>&#632;</sub> = 4 + 3
* N<sub>x</sub> = 1024, N<sub>y</sub> = 1024, N<sub>z</sub> = 1024
* <a href="https://doi.org/10.1038/nature12128">DOI</a>
* <a href="./assets/bib/jhtdbfmhd.bib">.bib</a>
* <a href="./assets/bash/sub/jhtdbfmhd.sh">Download.sh</a><BR>

## Links to different cases

<script src="./assets/js/table.js"></script>

<table align="center">
    <tr class="header">
    <th style="width:2%;">ID</th>
    <th style="width:20%;">Description</th>
    <th style="width:8%;">Size (GB)</th>
    <th style="width:20%;">Links</th>
    </tr>
    <tr>       
        <td align="center"> 0 </td>
        <td align="center">Sequential Snapshots</td>
        <td align="center">561</td>
        <td align="center">
        <div>
        <a href="https://www.kaggle.com/datasets/blastnet/fmhd-dns-Re186-seq-p1">Kaggle<sub>1-6</sub></a>, <a href="./assets/json/jhtdb/fhitcoarse-dns-Re433-seq-p1-info.json">info.json<sub>1-6</sub></a>,
        </div>
        <div>
        <a href="https://www.kaggle.com/datasets/blastnet/fmhd-dns-Re186-seq-p2">Kaggle<sub>7-12</sub></a>, <a href="./assets/json/jhtdb/fmhd-dns-Re186-seq-p2-info.json">info.json<sub>7-12</sub></a>,
        </div>
        <div>
        <a href="https://www.kaggle.com/datasets/blastnet/fmhd-dns-Re186-seq-p3">Kaggle<sub>13-18</sub></a>, <a href="./assets/json/jhtdb/fmhd-dns-Re186-seq-p3-info.json">info.json<sub>13-18</sub></a>,
        </div>
        <div>
        <a href="https://www.kaggle.com/datasets/blastnet/fmhd-dns-Re186-seq-p4">Kaggle<sub>19-20</sub></a>, <a href="./assets/json/jhtdb/fmhd-dns-Re186-seq-p4-info.json">info.json<sub>19-20</sub></a>,
        </div>
        <BR>
        </td>
    </tr>
    <tr>       
        <td align="center"> 1 </td>
        <td align="center">Collection of snapshots at different time</td>
        <td align="center">281</td>
        <td align="center">
        <div>
        <a href="https://www.kaggle.com/datasets/blastnet/fmhd-dns-Re186-rnd-p1">Kaggle<sub>1-6</sub></a>, <a href="./assets/json/jhtdb/fmhd-dns-Re186-rnd-p1-info.json">info.json<sub>1-7</sub></a>,
        </div>
        <div>
        <a href="https://www.kaggle.com/datasets/blastnet/fmhd-dns-Re186-rnd-p2">Kaggle<sub>7-10</sub></a>, <a href="./assets/json/jhtdb/fmhd-dns-Re186-rnd-p2-info.json">info.json<sub>7-10</sub></a>,
        </div> 
        <BR>
        </td>
    </tr>
</table>

