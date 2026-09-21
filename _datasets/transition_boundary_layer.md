---
layout: datapage
excerpt: (2 cases)
title: Transitional Boundary Layer
description: Transitional Boundary Layer DNS
header:
  teaser: /assets/img/ico_jhtdbtbl.png
categories: 
- numerical
- nonreacting
- channel
- turbulent
- steady
---
<div style="text-align: center;">
    <img src="./assets/img/jhtdbtbl.png" alt="Image 1" style="max-width: 100%;">
</div>

## Description
These snapshots are derived from a Direct Numerical Simulation (DNS) of a spatially developing, incompressible transitional boundary layer over a flat plate, which is publicly available through the Johns Hopkins Turbulence Database (JHTDB). The simulation captures the full transition process of a zero-pressure-gradient boundary layer — from a laminar Blasius inflow, through the growth and breakdown of disturbances, to a fully developed turbulent state — driven by free-stream turbulence. The flow field stored in the database is defined on a grid of $3320 \times 224 \times 2048$ points in the streamwise (x), wall-normal (y), and spanwise (z) directions respectively.

For this machine-learning-oriented release, we subsampled the original JHTDB transitional boundary layer fields and re-saved them in a new, ML-friendly format. Each snapshot retains the complete three-dimensional flow field with all three velocity components (u, v, w) and pressure. Two versions of the dataset are provided:

- **Sequential version** — 20 consecutive snapshots sampled at the stored time interval,
  preserving the temporal evolution of the transition process. This version is intended for
  tasks that require temporal coherence, such as spatio-temporal forecasting, super-resolution
  in time, or dynamics/transition-onset learning.
- **Random version** — 10 snapshots drawn at random (non-consecutive) times from the
  statistically stationary regime. This version is intended for tasks that benefit from
  diverse, decorrelated samples, such as single-frame reconstruction, statistical modeling,
  or generative learning.


## Quick Info
* Contributors: Charles Meneveau
* N<sub>&#632;</sub> = 4 + 3
* N<sub>x</sub> = 3320, N<sub>y</sub> = 224, N<sub>z</sub> = 2048
* <a href="https://doi.org/10.1007/s10494-013-9502-8">DOI</a>
* <a href="./assets/bib/jhtdbtbl.bib">.bib</a>
* <a href="./assets/bash/sub/jhtdbtbl.sh">Download.sh</a><BR>

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
        <a href="https://www.kaggle.com/datasets/blastnet/transitionbl-dns-seq-p1">Kaggle<sub>1-8</sub></a>, <a href="./assets/json/jhtdb/transitionbl-dns-seq-p1-info.json">info.json<sub>1-8</sub></a>,
        </div>
        <div>
        <a href="https://www.kaggle.com/datasets/blastnet/transitionbl-dns-seq-p2">Kaggle<sub>9-16</sub></a>, <a href="./assets/json/jhtdb/transitionbl-dns-seq-p2-info.json">info.json<sub>9-16</sub></a>,
        </div>
        <div>
        <a href="https://www.kaggle.com/datasets/blastnet/transitionbl-dns-seq-p3">Kaggle<sub>17-20</sub></a>, <a href="./assets/json/jhtdb/transitionbl-dns-seq-p3-info.json">info.json<sub>17-20</sub></a>,
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
        <a href="https://www.kaggle.com/datasets/blastnet/transitionbl-dns-rnd-p1">Kaggle<sub>1-8</sub></a>, <a href="./assets/json/jhtdb/transitionbl-dns-rnd-p1-info.json">info.json<sub>1-8</sub></a>,
        </div>
        <div>
        <a href="https://www.kaggle.com/datasets/blastnet/transitionbl-dns-rnd-p2">Kaggle<sub>9-10</sub></a>, <a href="./assets/json/jhtdb/transitionbl-dns-rnd-p2-info.json">info.json<sub>9-10</sub></a>,
        </div> 
        <BR>
        </td>
    </tr>
</table>

