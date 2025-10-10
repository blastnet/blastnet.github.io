---
layout: datapage
title: Non-reacting HIT
excerpt: (1 case)
header:
  teaser: /assets/img/ico_chung2022.png
description: Compressible Inert CH4-O2 Homogeneous Isotropic Turbulence DNS
categories: 
- nonreacting
- numerical
- turbulent
- hit
- steady
---

![image](./assets/img/chung2022.png)

## Description

The HIT DNS simulation is performed on a 3D cubic domain of length L, where a spherical gaseous-oxygen core of radius r = 0.25L at 300 K is initialized in gaseous methane environment of 300 K at 1 atm pressure, providing an idealized representation of an inert gaseous fuel-air mixture in a rocket engine. Periodic boundary conditions are used at all boundaries. A synthetic turbulence generator by Saad et al. based on von Kármán-Pao energy spectrum with zero mean velocity is used to generate the initial velocity profile. Ideal gas law is used as the equation of state (EoS) to relate pressure, temperature and density. The simulation is performed in an unstructured compressible finite-volume solver [64]. The solver uses a fourth-order accurate central spatial finite difference scheme. For the time integration, a stable third-order Runge-Kutta scheme is employed. Mixture-averaged transport properties are used in the DNS.

## Quick Info
* <a href="https://www.kaggle.com/datasets/waitongchung/inert-ch4o2-hit-dns">Kaggle Link</a><BR>
* Contributors: Wai Tong Chung, Matthias Ihme
* N<sub>x</sub> = 129, N<sub>y</sub> = 129, N<sub>z</sub> = 129, N<sub>&#632;</sub> = 6 + 2
* Size = 6 GB 
* <a href="https://doi.org/10.1016/j.combustflame.2021.111758">DOI</a><BR>
* <a href="./assets/bib/chung2022.bib">.bib</a><BR>
* <a href="./assets/json/chung2022_info.json">info.json</a>
