---
layout: datapage
title: Freely-Propagating Flame
excerpt: (22 cases)
header:
  teaser: /assets/img/ico_savard2019.png
description: Vitiated H2-air Freely Propagating Flame DNS
categories: 
- reacting
- turbulent
- numerical
- steady
---

<div style="text-align: center;">
    <img src="./assets/img/savard2019.png" alt="Image 1" style="max-width: 100%;">
</div>

## Description

This DNS configuration presents a statistically-planar, freely-propagating flame. BLASTNet contains 22 parametric variations of this configuration that differ by three essential parameters involving turbulence: (i) turbulence intensity, characterized by the RMS velocity u′, (ii) inflow velocity, Uin , and (iii) integral length scale, l<sub>I</sub>.  These configurations represent a series of hydrogen-premixed turbulent flames in autoignitive reheat combustion conditions that provide rich information on regimes of turbulent spontaneous ignition and turbulent deflagration.

The turbulent flames are initialized with an ignition front. For the initial flat spontaneous ignition front, the thermo-chemical conditions are chosen to be representative of those at the end of the first stage of a heavy-duty gas turbine sequential combustor, but at a lower pressure of 1 atm for all configurations. The mixture of fuel and products of first stage hydrogen-air combustion at an equivalence ratio of 0.43 and initial temperature of 773 K is used at the inlet of the domain. This mixture is equivalent to an equivalence ratio of 0.35 and Tu = 990 K, and its ignition delay time (τign,0) and laminar flame speed (SL) are identified to be 0.55 ms and 14.7 ms−1, respectively. The reference laminar flame thickness, lf , is evaluated to be 0.66 mm. After initialization, the ignition front is superimposed on a turbulent flow-field using a one-to-one correspondence in x-space (Figure 14). Depending on varying Uin and u′, the flame may stabilize at a position far away from the inlet (a turbulent spontaneous ignition front) or the introduction of turbulence may trigger the transition to a deflagration, where the flame front propagates towards the inlet.

The width of the domain in the y- and z-directions is Ly = Lz = 5.26l<sub>I</sub>, and the length in the streamwise direction is Lx, which is different for individual configuration. For all configurations, the simulations are run until a statistically steady state is achieved.
The low Mach number form of the governing equations is solved using the energy conservative, finite difference code NGA and high turbulence simulations are enabled by the linear velocity forcing method. NGA is second-order accurate in both space and time, and it uses a semi-implicit Crank-Nicolson time integration scheme. A third-order bounded QUICK scheme, BQUICK, is used for scalar transport. Ideal gas law is used as the EoS for a mixture of perfect gases. A detailed chemical mechanism for hydrogen combustion with 9 species and 21 reactions is used for all configurations.


## Quick Info
* <a href="https://doi.org/10.1016/j.combustflame.2019.07.020">DOI</a>
* <a href="./assets/bib/savard2019.bib">.bib</a>
* Contributor: Bruno Savard

## Links to different cases

<table align="center">
    <tr class="header">
    <th style="width:10%;">Conditions</th>
      <!-- <th style="width:60%;">TPY</th> -->
      <th style="width:10%;">Size (GB)</th>
      <!-- <th style="width:60%;">Article</th> -->
      <th style="width:5%;">Links</th>
    </tr>
    <tr>
        <td align="center">Ka<sub>u</sub>= 2.4, U<sub>in</sub>/S<sub>L</sub> = 2.45</td>
        <td align="center">70</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-2">Kaggle</a><BR>
        <a href="./assets/json/savard/savard2_info.json">info.json</a>
        </td>
    </tr>
    <tr>
        <td align="center">Ka<sub>u</sub>= 6.8, U<sub>in</sub>/S<sub>L</sub> = 2.45</td>
        <td align="center">32</td>
        <td align="center"><a href="https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-3">Kaggle</a><BR>
        <a href="./assets/json/savard/savard3_info.json">info.json</a></td>
    </tr>
    <tr>
        <td align="center">Ka<sub>u</sub>= 13, U<sub>in</sub>/S<sub>L</sub> = 2.45</td>
        <td align="center">35</td>
        <td align="center"><a href="https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-4">Kaggle</a><BR>
        <a href="./assets/json/savard/savard4_info.json">info.json</a></td>
    </tr>
    <tr>
        <td align="center">Ka<sub>u</sub>= 2.4, U<sub>in</sub>/S<sub>L</sub> = 3.67</td>
        <td align="center">65</td>
        <td align="center"><a href="https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-5">Kaggle</a><BR>
        <a href="./assets/json/savard/savard5_info.json">info.json</a></td>
    </tr>
    <tr>
        <td align="center">Ka<sub>u</sub>= 6.8, U<sub>in</sub>/S<sub>L</sub> = 3.67</td>
        <td align="center">46</td>
        <td align="center"><a href="https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-6">Kaggle</a><BR>
        <a href="./assets/json/savard/savard6_info.json">info.json</a></td>
    </tr>
    <tr>
        <td align="center">Ka<sub>u</sub>= 13, U<sub>in</sub>/S<sub>L</sub> = 3.67</td>
        <td align="center">65</td>
        <td align="center"><a href="https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-7">Kaggle</a><BR>
        <a href="./assets/json/savard/savard7_info.json">info.json</a></td>
    </tr>
    <tr>
        <td align="center">Ka<sub>u</sub>= 19, U<sub>in</sub>/S<sub>L</sub> = 3.67</td>
        <td align="center">59</td>
        <td align="center"><a href="https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-8">Kaggle</a><BR>
        <a href="./assets/json/savard/savard8_info.json">info.json</a></td>
    </tr>
    <tr>
        <td align="center">Ka<sub>u</sub>= 36, U<sub>in</sub>/S<sub>L</sub> = 3.67</td>
        <td align="center">111</td>
        <td align="center"><a href="https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-9">Kaggle</a><BR>
        <a href="./assets/json/savard/savard9_info.json">info.json</a></td>
    </tr>
    <tr>
        <td align="center">Ka<sub>u</sub>= 2.4, U<sub>in</sub>/S<sub>L</sub> = 4.63</td>
        <td align="center">39</td>
        <td align="center"><a href="https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-11">Kaggle</a><BR>
        <a href="./assets/json/savard/savard11_info.json">info.json</a></td>
    </tr>
    <tr>
        <td align="center">Ka<sub>u</sub>= 6.8, U<sub>in</sub>/S<sub>L</sub> = 4.63</td>
        <td align="center">91</td>
        <td align="center"><a href="https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-12">Kaggle</a><BR>
        <a href="./assets/json/savard/savard12_info.json">info.json</a></td>
    </tr>
    <tr>
        <td align="center">Ka<sub>u</sub>= 13, U<sub>in</sub>/S<sub>L</sub> = 4.63</td>
        <td align="center">118</td>
        <td align="center"><a href="https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-13">Kaggle</a><BR>
        <a href="./assets/json/savard/savard13_info.json">info.json</a></td>
    </tr>
    <tr>
        <td align="center">Ka<sub>u</sub>= 2.4, U<sub>in</sub>/S<sub>L</sub> = 5.51</td>
        <td align="center">35</td>
        <td align="center"><a href="https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-17">Kaggle</a><BR>
        <a href="./assets/json/savard/savard17_info.json">info.json</a></td>
    </tr>
    <tr>
        <td align="center">Ka<sub>u</sub>= 6.8, U<sub>in</sub>/S<sub>L</sub> = 5.51</td>
        <td align="center">118</td>
        <td align="center"><a href="https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-18">Kaggle</a><BR>
        <a href="./assets/json/savard/savard18_info.json">info.json</a></td>
    </tr>
    <tr>
        <td align="center">Ka<sub>u</sub>= 19, U<sub>in</sub>/S<sub>L</sub> = 5.51</td>
        <td align="center">118</td>
        <td align="center"><a href="https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-19">Kaggle</a><BR>
        <a href="./assets/json/savard/savard19_info.json">info.json</a></td>
    </tr>
    <tr>
        <td align="center">Ka<sub>u</sub>= 1.7, U<sub>in</sub>/S<sub>L</sub> = 3.67</td>
        <td align="center">111</td>
        <td align="center"><a href="https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-22">Kaggle</a><BR>
        <a href="./assets/json/savard/savard22_info.json">info.json</a></td>
    </tr>
    <tr>
        <td align="center">Ka<sub>u</sub>= 4.8, U<sub>in</sub>/S<sub>L</sub> = 3.67</td>
        <td align="center">118</td>
        <td align="center"><a href="https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-23">Kaggle</a><BR>
        <a href="./assets/json/savard/savard23_info.json">info.json</a></td>
    </tr>
    <tr>
        <td align="center">Ka<sub>u</sub>= 8.9, U<sub>in</sub>/S<sub>L</sub> = 3.67</td>
        <td align="center">80</td>
        <td align="center"><a href="https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-24">Kaggle</a><BR>
        <a href="./assets/json/savard/savard24_info.json">info.json</a></td>
    </tr>
    <tr>
        <td align="center">Ka<sub>u</sub>= 1.7, U<sub>in</sub>/S<sub>L</sub> = 4.63</td>
        <td align="center">118</td>
        <td align="center"><a href="https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-26">Kaggle</a><BR>
        <a href="./assets/json/savard/savard26_info.json">info.json</a></td>
    </tr>
    <tr>
        <td align="center">Ka<sub>u</sub>= 4.8, U<sub>in</sub>/S<sub>L</sub> = 4.63</td>
        <td align="center">118</td>
        <td align="center"><a href="https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-27">Kaggle</a><BR>
        <a href="./assets/json/savard/savard27_info.json">info.json</a></td>
    </tr>
    <tr>
        <td align="center">Ka<sub>u</sub>= 8.9, U<sub>in</sub>/S<sub>L</sub> = 4.63</td>
        <td align="center">110</td>
        <td align="center"><a href="https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-28">Kaggle</a><BR>
        <a href="./assets/json/savard/savard28_info.json">info.json</a></td>
    </tr>
    <tr>
        <td align="center">Ka<sub>u</sub>= 1.7, U<sub>in</sub>/S<sub>L</sub> = 5.51</td>
        <td align="center">110</td>
        <td align="center"><a href="https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-30">Kaggle</a><BR>
        <a href="./assets/json/savard/savard30_info.json">info.json</a></td>
    </tr>
    <tr>
        <td align="center">Ka<sub>u</sub>= 8.9, U<sub>in</sub>/S<sub>L</sub> = 5.51</td>
        <td align="center">110</td>
        <td align="center"><a href="https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-32">Kaggle</a><BR>
        <a href="./assets/json/savard/savard32_info.json">info.json</a></td>
    </tr>
</table>




