---
layout: datapage
excerpt: (2 cases)
title: Reacting Jet Flows
description: Turbulent Round Jet Premixed COFFEE CH4-air Premixed Flame DNS
header:
  teaser: /assets/img/ico_brouzet2021.png
categories:
  - reacting
  - turbulent
  - jet
  - numerical
  - steady
---

<div class="sidebar__right" style="top:200px; text-align: center;">
    <img src="./assets/img/brouzet2021.png" alt="Image 1">
</div>

## Description

The DNS configurations by Brouzet et al. involve two parametric variations of 3D reacting turbulent premixed methane/air round-jet flames with high-fidelity acoustics to investigate the effect of different chemical mechanisms on flame dynamics. The setup is initialized with methane/air combustion products at adiabatic flame temperature and at atmospheric pressure. The jet Reynolds and Mach numbers are 5300 and 0.36, respectively. A schematic representation of the DNS configuration is shown in Figure 10. The two variations of the reacting jet correspond to two different chemical mechanisms: (i) a semi-global CH4-BFER mechanism with 2 reactions, and (ii) a skeletal COFFEE mechanism with 14 species and 38 reactions. In both configurations, the domain size is 20D×16D×16D. The grid sizes are 1811×721×721 and 1546×676×676 for the BFER and COFFEE cases, respectively. These meshes correspond to 10 and 12 grid points per unit thermal flame thickness in the streamwise direction, and 12 and 16 points in the transverse and spanwise directions.

The DNS is performed using the code NTMIX-CHEMKIN, which solves fully compressible Navier-Stokes equations along with energy and species conservation equations in Cartesian coor- dinates. The solver uses an eight-order explicit central spatial difference scheme and a third-order Runge-Kutta time integration scheme. Ideal gas law and mixture-averaged species-specific properties are used for the simulations. Further details of the DNS configuration and solver are provided in Brouzet et al.

## Quick Info
* Contributors: Davy Brouzet, Mohsen Talei
* <a href="https://doi.org/10.1017/jfm.2020.1184">DOI</a>
* <a href="./assets/bib/brouzet2021.bib">.bib</a>

## BFER Case
* <a href="https://www.kaggle.com/datasets/waitongchung/round-jet-premixed-bfer">Kaggle Link</a><BR>
* N<sub>x</sub> = 1832, N<sub>y</sub> = 721, N<sub>z</sub> = 721, N<sub>&#632;</sub> = 6 + 6 
* Size = 58 GB  
<a href="./assets/json/brouzet2021_info.json">info.json</a>

## COFFEE Case
* <a href="https://www.kaggle.com/datasets/waitongchung/round-jet-premixed-coffee">Kaggle Link</a>
* N<sub>x</sub> = 1235, N<sub>y</sub> = 676, N<sub>z</sub> = 676, N<sub>&#632;</sub> = 6 + 14
* Size = 52 GB 
* <a href="./assets/json/brouzet2021b_info.json">info.json</a>



