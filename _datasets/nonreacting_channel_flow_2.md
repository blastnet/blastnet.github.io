---
layout: datapage
excerpt: (2 cases)
title: Non-Reacting Channel Flow
description: Non-Reacting Channel Flow DNS
header:
  teaser: /assets/img/ico_mklee2015.png
categories: 
- nonreacting
- channel
- turbulent
- numerical
- steady
---
<div style="text-align: center;">
    <img src="./assets/img/mklee2015.png" alt="Image 1" style="max-width: 70%;">
</div>

## Description
These snapshots are from a Direct Numerical Simulation (DNS) of incompressible turbulent channel flow at friction Reynolds number $$Re_\tau = 544$$ and bulk Reynolds number $$Re_b = 10,000$$ [1]. The computational domain has dimensions $$L_x = 8\pi$$ and $$L_z = 3\pi$$ in the streamwise and spanwise directions respectively, with periodic boundary conditions applied in both directions. The channel width is set to $$L_y = 2$$. No-slip/no-penetration boundary conditions are enforced at the walls. The flow is driven by a uniform pressure gradient that varies in time to maintain constant mass flux through the channel.
The numerical methods employ a Fourier-Galerkin approach in the streamwise and spanwise directions. The wall-normal direction is represented using a B-spline collocation method. Time advancement employs a low-storage implicit-explicit scheme based on third-order Runge-Kutta for nonlinear terms and Crank-Nicolson for viscous terms. Each snapshot captures the complete three-dimensional flow field including all three velocity components (u, v, w) at a given time.

## Quick Info
* Contributors: Myoungkyu Lee
* N<sub>x</sub> = 1536, N<sub>y</sub> = 384, N<sub>z</sub> = 1024
* N<sub>&#632;</sub> = 4
* <a href="https://doi.org/10.1017/jfm.2015.268">DOI</a>
* <a href="./assets/bib/mklee2024.bib">.bib</a>

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
        <td align="center">544</td>
        <td align="center">One Flow Through Time</td>
        <td align="center">4.5</td>
        <td align="center">
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-seq-p000-020">Kaggle<sub>000-020</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-seq-p000-020-info.json">info.json<sub>000-020</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-seq-p021-041">Kaggle<sub>021-041</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-seq-p021-041-info.json">info.json<sub>021-041</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-seq-p042-062">Kaggle<sub>042-062</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-seq-p042-062-info.json">info.json<sub>042-062</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-seq-p063-083">Kaggle<sub>063-083</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-seq-p063-083-info.json">info.json<sub>063-083</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-seq-p084-104">Kaggle<sub>084-104</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-seq-p084-104-info.json">info.json<sub>084-104</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-seq-p105-125">Kaggle<sub>105-125</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-seq-p105-125-info.json">info.json<sub>105-125</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-seq-p126-146">Kaggle<sub>126-146</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-seq-p126-146-info.json">info.json<sub>126-146</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-seq-p147-167">Kaggle<sub>147-167</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-seq-p147-167-info.json">info.json<sub>147-167</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-seq-p168-188">Kaggle<sub>168-188</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-seq-p168-188-info.json">info.json<sub>168-188</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-seq-p189-209">Kaggle<sub>189-209</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-seq-p189-209-info.json">info.json<sub>189-209</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-seq-p210-230">Kaggle<sub>210-230</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-seq-p210-230-info.json">info.json<sub>210-230</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-seq-p231-251">Kaggle<sub>231-251</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-seq-p231-251-info.json">info.json<sub>231-251</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-seq-p252-272">Kaggle<sub>252-272</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-seq-p252-272-info.json">info.json<sub>252-272</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-seq-p273-293">Kaggle<sub>273-293</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-seq-p273-293-info.json">info.json<sub>273-293</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-seq-p294-314">Kaggle<sub>294-314</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-seq-p294-314-info.json">info.json<sub>294-314</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-seq-p315-335">Kaggle<sub>315-335</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-seq-p315-335-info.json">info.json<sub>315-335</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-seq-p336-356">Kaggle<sub>336-356</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-seq-p336-356-info.json">info.json<sub>336-356</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-seq-p357-377">Kaggle<sub>357-377</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-seq-p357-377-info.json">info.json<sub>357-377</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-seq-p378-398">Kaggle<sub>378-398</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-seq-p378-398-info.json">info.json<sub>378-398</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-seq-p399-419">Kaggle<sub>399-419</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-seq-p399-419-info.json">info.json<sub>399-419</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-seq-p420-440">Kaggle<sub>420-440</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-seq-p420-440-info.json">info.json<sub>420-440</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-seq-p441-461">Kaggle<sub>441-461</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-seq-p441-461-info.json">info.json<sub>441-461</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-seq-p462-482">Kaggle<sub>462-482</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-seq-p462-482-info.json">info.json<sub>462-482</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-seq-p483-503">Kaggle<sub>483-503</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-seq-p483-503-info.json">info.json<sub>483-503</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-seq-p504-509">Kaggle<sub>504-509</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-seq-p504-509-info.json">info.json<sub>504-509</sub></a>,
        </div>
        <BR>
        </td>
    </tr>
    <tr>       
        <td align="center"> 1 </td>
        <td align="center">544</td>
        <td align="center">Collection of snapshots at different time</td>
        <td align="center">4.5</td>
        <td align="center">
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-eq-p000-020">Kaggle<sub>000-020</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-eq-p000-020-info.json">info.json<sub>000-020</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-eq-p021-041">Kaggle<sub>021-041</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-eq-p021-041-info.json">info.json<sub>021-041</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-eq-p042-062">Kaggle<sub>042-062</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-eq-p042-062-info.json">info.json<sub>042-062</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-eq-p063-083">Kaggle<sub>063-083</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-eq-p063-083-info.json">info.json<sub>063-083</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-eq-p084-104">Kaggle<sub>084-104</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-eq-p084-104-info.json">info.json<sub>084-104</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-eq-p105-125">Kaggle<sub>105-125</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-eq-p105-125-info.json">info.json<sub>105-125</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-eq-p126-146">Kaggle<sub>126-146</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-eq-p126-146-info.json">info.json<sub>126-146</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-eq-p147-167">Kaggle<sub>147-167</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-eq-p147-167-info.json">info.json<sub>147-167</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-eq-p168-188">Kaggle<sub>168-188</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-eq-p168-188-info.json">info.json<sub>168-188</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-eq-p189-209">Kaggle<sub>189-209</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-eq-p189-209-info.json">info.json<sub>189-209</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-eq-p210-230">Kaggle<sub>210-230</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-eq-p210-230-info.json">info.json<sub>210-230</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-eq-p231-251">Kaggle<sub>231-251</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-eq-p231-251-info.json">info.json<sub>231-251</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-eq-p252-272">Kaggle<sub>252-272</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-eq-p252-272-info.json">info.json<sub>252-272</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-eq-p273-293">Kaggle<sub>273-293</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-eq-p273-293-info.json">info.json<sub>273-293</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-eq-p294-314">Kaggle<sub>294-314</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-eq-p294-314-info.json">info.json<sub>294-314</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-eq-p315-335">Kaggle<sub>315-335</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-eq-p315-335-info.json">info.json<sub>315-335</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-eq-p336-356">Kaggle<sub>336-356</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-eq-p336-356-info.json">info.json<sub>336-356</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-eq-p357-377">Kaggle<sub>357-377</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-eq-p357-377-info.json">info.json<sub>357-377</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-eq-p378-398">Kaggle<sub>378-398</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-eq-p378-398-info.json">info.json<sub>378-398</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-eq-p399-419">Kaggle<sub>399-419</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-eq-p399-419-info.json">info.json<sub>399-419</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-eq-p420-440">Kaggle<sub>420-440</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-eq-p420-440-info.json">info.json<sub>420-440</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-eq-p441-461">Kaggle<sub>441-461</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-eq-p441-461-info.json">info.json<sub>441-461</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-eq-p462-482">Kaggle<sub>462-482</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-eq-p462-482-info.json">info.json<sub>462-482</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-eq-p483-503">Kaggle<sub>483-503</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-eq-p483-503-info.json">info.json<sub>483-503</sub></a>,
        </div>
        <div>
          <a href="https://www.kaggle.com/datasets/blastnet/channelflow-dns-Re544-eq-p504-509">Kaggle<sub>504-509</sub></a>, <a href="./assets/json/mklee2015/channelflow-dns-Re544-eq-p504-509-info.json">info.json<sub>504-509</sub></a>,
        </div>
        <BR>
        </td>
    </tr>
</table>

## References
[1] Lee, M., & Moser, R. D. (2015). Direct numerical simulation of turbulent channel flow up to Reτ ≈ 5200. Journal of Fluid Mechanics, 774, 395-415.  
