---
layout: default
title: Premixed Flame NH3-H2-Air
description: NH3-H2-Air Premixed Flame DNS
---

<div style="text-align: center;">
    <img src="/assets/img/coulon2023.jpg" alt="Image 1" style="max-width: 20%;">
</div>
# Description
This DNS corresponds to a slot burner turbulent flame, where burnt gases at equilibrium surround a rectangular slot injecting fresh premixed gases. All calculations are performed with the compressible solver AVBP3 for solving the conservation of mass, momentum, energy and species equations. A third-order accurate in space and time Taylor-Galerkin finite-element scheme is used for the discretization of the convective terms, while a second-order Galerkin scheme is used for diffusion terms. Axial dimensions have been chosen using preliminary estimations of flame brush lengths to avoid interference with lateral boundaries, and to average in the transverse direction. A central jet injects a flow of fresh turbulent gases. Turbulence in this central jet is homogeneous and isotropic (HIT) with obtained by a synthetic generation method built from a Fourier series decomposition. Two slow laminar coflows of burnt gases are imposed on both sides of the central jet. Their composition corresponds to the burnt gas states of the central mixture. Ammonia-hydrogen/air mixtures are at stoichiometry whereas the. Simulations are initialized with burnt conditions inside the domain before beginning the injection of fresh gases at the inlet boundary. In the fresh-burnt transition region, species mass fraction and temperature profiles are set to follow the unstretched laminar flames profiles, and a smooth transition is enforced through a hyperbolic tangent function. The domain is periodic in the spanwise direction (z), no-slip conditions are specified in the crosswise direction (y) and static pressure is imposed at the outlet. Both inlet and outlet boundary conditions are treated with the Navier–Stokes Characteristic Boundary Conditions (NSCBC). 

# Quick Info
* <a href="https://www.kaggle.com/datasets/victorcoulon/premixed-flame-nh3-h2-dns-1">Kaggle Link</a>
* Contributors:  Victor Coulon and Corentin Lapeyre
* N<sub>x</sub> = 2191, N<sub>y</sub> = 627, N<sub>z</sub> = 314, N<sub>&#632;</sub> = 6 + 15
* Size = 83 GB 
* <a href="https://doi.org/10.1016/j.combustflame.2023.112933">DOI</a><BR>
* <a href="./assets/bib/coulon2023.bib">.bib</a><BR>
* <a href="./assets/json/coulon2023_info.json">info.json</a>