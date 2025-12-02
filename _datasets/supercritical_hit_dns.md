---
layout: datapage
excerpt: (3 cases)
title: Supercrtical HIT CO$$_2$$ (Re$$_\lambda$$ = 30, 60, 90)
description: Supercrtical Homogeneous Isotropic Turbulence DNS
header:
  teaser: /assets/img/ico_lluis2025-hit.png
categories: 
- nonreacting
- turbulent
- numerical
- steady
- hit
---
<div style="text-align: center;">
    <img src="./assets/img/lluis2025-hit.png" alt="Image 1" style="max-width: 100%;">
</div>

## Description
This dataset contains snapshots from Batchelor-resolved direct numerical simulations (DNSs) of homogeneous isotropic turbulence (HIT) of supercritical carbon dioxide ($$\text{CO}_2$$). The bulk pressure is fixed at $P_0/P_c = 2$, where $P_c = 7.38 \text{MPa}$ is the critical pressure of $$\text{CO}_2$$. The bulk temperature $T_0$ corresponds to the pseudo-boiling point at this pressure, identified by the maximum in the specific isobaric heat capacity $c_P$. At these conditions, the bulk Prandtl number is $Pr_0 = \mu_0c_{P_0}/\kappa_0 \approx 2.17$, where the subscript $0$ for the thermophysical variables denotes properties evaluated at the reference thermodynamic state {$P_0$,$T_0$}. Due to the higher-than-unity Prandtl number, thermal fluctuations persist at sub-Kolmogorov scales.

Three Taylor Reynolds numbers are considered: $Re_\lambda \approx 30,\ 60, \text{ and } 90$. The computational domain is a triply periodic cube of side length $L = 5.5 L_0$, where $L_0$ is the integral length scale. The corresponding grids contain $N = 192,\ 512, \text{ and } 960$ interior points per direction, re- spectively. The grid resolutions satisfy $k_{max}\eta_T \approx 3.18–3.45$, where $k_{max} = \pi N/L$ is the maximum resolved wavenumber, $\eta_T = \eta_u/\sqrt{Pr_0}$ is the Batchelor scale, and $\eta_u = [(\mu_0/\rho_0)^3/\epsilon_0]^{1/4}$ is the Kolmogorov scale. The numerical grid includes two additional ghost points in each direction, which are used to impose the boundary conditions. Accordingly, the mesh coordinates in the i-th direction are then given by $x_i = −\Delta h/2 + j\Delta h$ $j = 0,...,N + 1$, where $\Delta h = L_{box}/N$ denotes the uniform grid spacing.

The equations of fluid motion are computationally solved using the in-house flow solver RHEA [1]. Spatial operators are treated using second-order central-differencing schemes, and time-advancement is explicitly performed by means of a third-order strong-stability pre-serving (SSP) Runge-Kutta approach [2]. The Kennedy-Gruber-Pirozzoli (KGP) splitting is adopted for the convective terms extended to high-pressure transcritical fluids turbulence [3], ensuring kinetic-energy preservation by convection. This numerical framework provides stable computations without the need of any form of artificial dissipation or stabilization procedures. To accurately
capture the rapid variations in thermophysical properties across the pseudo-boiling line, thermodynamic properties are evaluated using the Peng–Robinson equation of state [4], while transport properties are determined from the correlations proposed by Chung et al. [5,6]. Turbulence is sustained using a solenoidal linear forcing following Watanabe et al. [7], which maintains statistically stationary conditions by enforcing a target root-mean-square velocity fluctuation $u_0$ and a prescribed dis-
sipation rate per unit of volume $\rho_0\epsilon_0$, while conserving total energy $E$. Flow variables $(\rho, u, v, w, P, T)$ and thermophysical properties $(\mu, \kappa, c_p)$ are stored at a frequency
corresponding to 5 snapshots per characteristic time $t_0$. This results in weak temporal correlation between consecutive snapshots. For the cases with $Re_\lambda \approx 30,\ 60, \text{ and } 90$, a total of $709,\ 40, \text{ and } 12$ snapshots, respectively, are included in the dataset. Further information can befound in Martin and Jofre [8].


## Quick Info
* Contributors: David Martin, Lluis Jofre
*  N<sub>&#632;</sub> = 5 + 4

* <a href="https://doi.org/10.1038/s41597-025-05693-3">DOI</a>
* <a href="./assets/bib/lluis2025-hit.bib">.bib</a>

## Links to different cases

<script src="./assets/js/table.js"></script>

<table align="center">
    <tr class="header">
    <th style="width:2%;">Case</th>
    <th style="width:8%;">Re$_{\lambda}$</th>
    <th style="width:8%;">Grid</th>
    <th style="width:10%;">Size (GB)</th>
    <th style="width:20%;">Links</th>
    </tr>
    <tr>       
        <td align="center"> 1 </td>
        <td align="center">30</td>
        <td align="center">194&times;194&times;194</td>
        <td align="center">174</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/blastnet/supercritical-hit-dns-re30">Kaggle</a>, <a href="./assets/json/lluis2025-hit/supercritical-hit-dns-re30-info.json">info.json</a>
        <BR>
        </td>
    </tr>
    <tr>       
        <td align="center"> 2 </td>
        <td align="center">60</td>
        <td align="center">514&times;514&times;514</td>
        <td align="center">183</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/blastnet/supercritical-hit-dns-re60">Kaggle</a>, <a href="./assets/json/lluis2025-hit/supercritical-hit-dns-re60-info.json">info.json</a>
        <BR>
        </td>
    </tr>
    <tr>       
        <td align="center"> 3 </td>
        <td align="center">90</td>
        <td align="center">962&times;962&times;962</td>
        <td align="center">360</td>
        <td align="center">
        <div>
        <a href="https://www.kaggle.com/datasets/blastnet/supercritical-hit-dns-re90-c1">Kaggle<sub>1</sub></a>, <a href="./assets/json/lluis2025-hit/supercritical-hit-dns-re90-c1-info.json">info.json<sub>1</sub></a>
        </div>
        <div>
        <a href="https://www.kaggle.com/datasets/blastnet/supercritical-hit-dns-re90-c2">Kaggle<sub>2</sub></a>, <a href="./assets/json/lluis2025-hit/supercritical-hit-dns-re90-c2-info.json">info.json<sub>2</sub></a>
        </div>        
        <BR>
        </td>
    </tr>
</table>

## References
[1] L. Jofre, A. Abdellatif, and G. Oyarzun, “RHEA - an open-source Reproducible Hybrid-architecture flow solver Engineered for Academia,” J. Open Source Softw. 8, 4637 (2023).  
[2] S. Gottlieb, C. W. Shu, and E. Tadmor, “Strong stability-preserving high-order time discretization methods,” SIAM Review 43, 89–112 (2001).  
[3] M. Bernades, L. Jofre, and F. Capuano, “Kinetic-energy- and pressure-equilibrium-preserving schemes for real-gas turbulence in the transcritical regime,” J. Comput. Physics 493, 112477 (2023).  
[4] D. Y. Peng and D. B. Robinson, “A new two-constant equation of state,” Ind. Eng. Chem. Fundam. 15, 59–64 (1976).  [5] T. H. Chung, L. L. Lee, and K. E. Starling, “Applications of kinetic gas theories and multiparameter correlation for prediction of dilute gas viscosity and thermal conductivity,” Ind. Eng. Chem.
Fund. 23, 8–13 (1984).  
[6] T. H. Chung, M. Ajlan, L. L. Lee, and K. E. Starling, “Generalized multiparameter correlation for nonpolar and polar fluid transport properties,” Ind. Eng. Chem. Fund. 27, 671–679 (1988).  
[7] T. Watanabe, K. Tanaka, and K. Nagata, “Solenoidal linear forcing for compressible, statistically steady, homogeneous isotropic turbulence with reduced turbulent Mach number oscillation,”
Phys. Fluids 33 (2021), 10.1063/5.0062596.  
[8] D. Mart ́ın and L. Jofre, “High-fidelity database of supercritical homogeneous isotropic turbulence in the pseudo-boiling region,” Sci. Data 12 (2025), https://doi.org/10.1038/s41597-025-05693-3.  