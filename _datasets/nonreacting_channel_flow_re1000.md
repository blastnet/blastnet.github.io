---
layout: datapage
excerpt: (2 cases)
title: Non-Reacting Channel Flow (Re$$_\tau$$ = 1000)
description: Non-Reacting Channel Flow DNS
header:
  teaser: /assets/img/ico_jhtdbchannelflow.png
categories: 
- nonreacting
- channel
- turbulent
- numerical
- unsteady
---
<div style="text-align: center;">
    <img src="./assets/img/jhtdbchannelflow.png" alt="Image 1" style="max-width: 90%;">
</div>

## Description
These snapshots are derived from a Direct Numerical Simulation (DNS) of incompressible turbulent channel flow at a friction velocity Reynolds number of $Re_\tau \approx 1000$, which is publicly available through the Johns Hopkins Turbulence Database (JHTDB).
The original simulation was performed on a computational domain of size $L_x = 8\pi h$, $L_y = 2h$, and $L_z = 3\pi h$ in the streamwise, wall-normal, and spanwise directions respectively, where $h$ is the channel half-height, discretized on a grid of $2048 \times 512 \times 1536$ nodes. Periodic boundary conditions are applied in the
streamwise and spanwise directions, and no-slip/no-penetration boundary conditions are
enforced at the two walls.

The flow is driven by an imposed mean pressure gradient ($dP/dx = 0.0025$); the simulation was first equilibrated at a prescribed bulk velocity of 1 before switching to the fixed pressure-gradient forcing and re-equilibrating to a statistically stationary state. The kinematic viscosity is $\nu = 5 \times 10^{-5}$ and the resulting friction velocity is $u_\tau = 0.0499$. The incompressible Navier–Stokes equations are solved using a pseudo-spectral (Fourier–Galerkin) method in the wall-parallel (x, z) planes and a 7th-order B-spline collocation method in the wall-normal (y) direction; grid points are therefore uniformly spaced in x and z but non-uniformly clustered near the walls in y.

For this machine-learning-oriented release, we subsampled the original JHTDB channel flow
fields and re-saved them in a new, ML-friendly format. Each snapshot retains the complete
three-dimensional flow field with all three velocity components (u, v, w)
and pressure. Two versions of the dataset are provided:

- **Sequential version** — 20 consecutive snapshots sampled at a the stored time interval,
  preserving the temporal evolution of the flow. This version is intended for tasks that
  require temporal coherence, such as spatio-temporal forecasting, super-resolution in
  time, or dynamics learning.
- **Random version** — 10 snapshots drawn at random (non-consecutive) times. This version is intended for tasks that benefit from diverse, decorrelated samples, such as single-frame reconstruction, statistical modeling,
  or generative learning.



## Quick Info
* Contributors: Charles Meneveau
* N<sub>x</sub> = 2048, N<sub>y</sub> = 512, N<sub>z</sub> = 1536
* N<sub>&#632;</sub> = 4
* <a href="https://doi.org/10.1080/14685248.2015.1088656">DOI</a>
* <a href="./assets/bib/jhtdbchannelflow.bib">.bib</a>
* <a href="./assets/bash/sub/channel_flow_re1000.sh">Download.sh</a><BR> 

## Links to different cases

<script src="./assets/js/table.js"></script>

<table align="center">
    <tr class="header">
    <th style="width:2%;">ID</th>
    <th style="width:8%;">Re$_{\tau}$</th>
    <th style="width:20%;">Description</th>
    <th style="width:8%;">Size (TB)</th>
    <th style="width:25%;">Links</th>
    </tr>
    <tr>       
        <td align="center"> 0 </td>
        <td align="center">1000</td>
        <td align="center">Sequential Snapshots</td>
        <td align="center">481</td>
        <td align="center">
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re1000-seq-p1">Kaggle<sub>1-7</sub></a>, <a href="./assets/json/jhtdb/channelflow-dns-Re1000-seq-p1-info.json">info.json<sub>1-7</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re1000-seq-p2">Kaggle<sub>8-14</sub></a>, <a href="./assets/json/jhtdb/channelflow-dns-Re1000-seq-p2-info.json">info.json<sub>8-14</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re1000-seq-p3">Kaggle<sub>15-20</sub></a>, <a href="./assets/json/jhtdb/channelflow-dns-Re1000-seq-p3-info.json">info.json<sub>15-20</sub></a>,
        </div>
        <BR>
        </td>
    </tr>
    <tr>       
        <td align="center"> 1 </td>
        <td align="center">1000</td>
        <td align="center">Collection of snapshots at different time</td>
        <td align="center">241</td>
        <td align="center">
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re1000-rnd-p1">Kaggle<sub>1-7</sub></a>, <a href="./assets/json/jhtdb/channelflow-dns-Re1000-rnd-p1-info.json">info.json<sub>1-7</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re1000-rnd-p2">Kaggle<sub>8-10</sub></a>, <a href="./assets/json/jhtdb/channelflow-dns-Re1000-rnd-p2-info.json">info.json<sub>8-10</sub></a>,
        </div>
        <BR>
        </td>
    </tr>
</table>

