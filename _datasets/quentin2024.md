---
layout: datapage
excerpt: (5 cases)
title: Premixed Flame H2-Air
description: Premixed Flame H2-Air DNS in Slot Burner
header:
  teaser: /assets/img/ico_quentin2024.png
#   image: /assets/img/quentin2024.png
categories: 
- reacting
- jet
- threeD
- turbulent
- numerical
---
<div style="text-align: center;">
    <img src="./assets/img/quentin2024.png" alt="Image 1" style="max-width: 100%;">
</div>

## Description
The configuration is a slot burner at constant pressure $$P = 1$$ atm and fresh gas temperature $$T_u = 300$$ K used to generate a training database for the modeling of subfilter-scale features in lean premixed H$$_2$$-air reacting flows using a CNN [1]. The physical domain consists of a central inlet where a premixed H2-air mixture flows at a bulk velocity $$U_b = 24$$ m/s with velocity fluctuation $$u′= 2.4$$ m/s, surrounded by two laminar coflows where burnt gas flows at a bulk velocity $$U_c = 3.6$$ m/s. The injection of turbulence at the central inlet corresponds to homogeneous and isotropic turbulence using a Passot-Pouquet turbulence spectrum [2] with an integral length scale $$l_t = 2$$ mm. The domain is rectangular with periodic boundary conditions in the z-direction. Adiabatic walls are specified in the y-direction. Both inlets and outlet are specified in the x-direction. This configuration is computed for five different global equivalence ratios $$\phi_g = $$ 0.35, 0.4, 0.5, 0.6 and 0.7. All other parameters are kept constant. The Reynolds number of the central inlet is about 10,000 for all cases.
DNS of the slot burner cases are performed using the AVBP [3] massively parallel code solving the
compressible multi-species Navier-Stokes equations. A third order accurate Taylor–Galerkin scheme is adopted
for discretization of the convective terms [4]. NSCBC [5] are imposed at the inlets (relaxation factor of 1000
s−1) and at the outlet (relaxation factor of 200 s−1). Dynamic viscosity µ follows a power law function of
temperature $$T$$


$$\mu = \mu_0 \left(\frac{T}{T_0}\right)^\gamma$$

with $$\mu_0 = 8.062 × 10−5$$ kg/m.s, $$T_0 = 2.645 \times 10^3$$ K and $$γ = 6.481 \times 10^{−1}$$. Thermal diffusivity is computed
from the viscosity using a constant Prandtl number: $$Pr = 0.66$$. Species diffusivities are computed using
a constant Schmidt number specific for each species. This approach takes into account non-unity
Lewis numbers and preferential diffusion between the different species. It was verified that the errors made by
the simplified transport description are negligible by comparing the results with simulations using a mixture-
averaged transport model [1]. Soret and Dufour transport processes are ignored in the simulations of the present
work. Hydrogen chemical kinetics relies on the San Diego mechanism [6], already successfully used for H2-air
premixed combustion in Coulon et al. [7]. This mechanism comprises 9 species and 21 reactions.

The mesh is a homogeneous Cartesian grid with constant element size $\Delta_x = 80 \mu m$ for $$\phi_g = 0.35, 0.4$$ and
$$0.6$$, and $$\Delta_x = 50 \mu m$$ for $$\phi_g = 0.6\ \mathrm{and}\ 0.7$$. The length of the domain in the x-direction $$L_x$$ is adapted to the length of turbulent the flame brush. It varies from 76 mm for $$\phi_g = 0.35$$ to $$36$$ mm for $$\phi_g= 0.7$$.

## Application 
This database was generated to train a CNN to infer H$$_2$$-air burning rates. The data-driven, supervised learning
methodology is described in Malé et al. [1]. It involves using the database, filtered to emulate LES solutions, to train a
CNN to approximate burning rates based on relevant input variables. The emulated LES database comprises the
five different global equivalence ratios of the present DNS database and three different filter sizes. Random crops,
rotations and flips are performed to ensure that the CNN is invariant to translation [8] and has no preferential
orientation. Once trained, the CNN-based model is shown to infer burning rates on full LES solutions never
seen during training with high accuracy. In addition to this, the model is found to infer burning rates on filter
sizes and equivalence ratios other than those used for training. More details can be found in Malé et al. [1]. Code for
training and inference is available via GitLab at https://gitlab.com/male.quentin/cnn_h2flame.

<div style="text-align: center;">
    <img src="/assets/img/arch_quentin2024.png" alt="Image 1" style="max-width: 80%;">
</div>

## Quick Info
* Contributors: Quentin Malé
* N<sub>&#632;</sub> = 6 + 9

* <a href="https://doi.org/10.1017/dce.2025.1">DOI</a>
* <a href="./assets/bib/quentin2024.bib">.bib</a>

## Links to different cases

<script src="./assets/js/table.js"></script>

<table align="center">
    <tr class="header">
    <th style="width:2%;">ID</th>
    <th style="width:8%;">$$\phi_g$$</th>
      <!-- <th style="width:60%;">TPY</th> -->
    <th style="width:8%;">Grid</th>
    <th style="width:8%;">Size (GB)</th>
      <!-- <th style="width:60%;">Article</th> -->
    <th style="width:12%;">Links</th>
    </tr>
    <tr>       
        <td align="center"> 0 </td>
        <td align="center">0.35</td>
        <td align="center">951&times;401&times;201</td>
        <td align="center">16</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/blastnet/premixed-flame-slot-burner-dns-h2air-phi035">Kaggle</a>, <a href="./assets/json/quentin2024/premixed-flame-slot-burner-dns-h2air-phi035-info.json">info.json</a><BR>
        </td>
    </tr>
    <tr>       
        <td align="center"> 1 </td>
        <td align="center">0.4</td>
        <td align="center">901&times;401&times;201</td>
        <td align="center">15</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/blastnet/premixed-flame-slot-burner-dns-h2air-phi04">Kaggle</a>, <a href="./assets/json/quentin2024/premixed-flame-slot-burner-dns-h2air-phi04-info.json">info.json</a><BR>
        </td>
    </tr>
    <tr>       
        <td align="center"> 2 </td>
        <td align="center">0.5</td>
        <td align="center">651&times;401&times;201</td>
        <td align="center">11</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/blastnet/premixed-flame-slot-burner-dns-h2air-phi05">Kaggle</a>, <a href="./assets/json/quentin2024/premixed-flame-slot-burner-dns-h2air-phi05-info.json">info.json</a><BR>
        </td>
    </tr>
    <tr>       
        <td align="center"> 3 </td>
        <td align="center">0.6</td>
        <td align="center">1041&times;641&times;321</td>
        <td align="center">31</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/blastnet/premixed-flame-slot-burner-dns-h2air-phi06">Kaggle</a>, <a href="./assets/json/quentin2024/premixed-flame-slot-burner-dns-h2air-phi06-info.json">info.json</a><BR>
        </td>
    </tr>
    <tr>     
        <td align="center"> 4 </td>
        <td align="center">0.7</td>
        <td align="center">721&times;641&times;321</td>
        <td align="center">45</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/blastnet/premixed-flame-slot-burner-dns-h2air-phi07">Kaggle</a>, <a href="./assets/json/quentin2024/premixed-flame-slot-burner-dns-h2air-phi07-info.json">info.json</a><BR>
        </td>
    </tr>
</table>

## References
[1] Malé, Q., Lapeyre, C. J., and Noiray, N. (2024). Hydrogen reaction rate modeling based on convolutional
neural network for large eddy simulation. Accepted for publication in Data-Centric Engineering, to appear.
arXiv:2408.16709 [cs.CE].  
[2] Passot, T. and Pouquet, A. (1987). Numerical simulation of compressible homogeneous flows in the turbulent
regime. Journal of Fluid Mechanics, 181:441–466.  
[3] Gicquel, L. Y., Gourdain, N., Boussuge, J.-F., Deniau, H., Staffelbach, G., Wolf, P., and Poinsot, T. (2011).
High performance parallel computing of flows in complex geometries. Comptes Rendus M´ecanique, 339(2-
3):104–124.  
[4] Colin, O. and Rudgyard, M. (2000). Development of High-Order Taylor–Galerkin Schemes for LES. Journal
of Computational Physics, 162(2):338–371.  
[5] Poinsot, T. and Lelef, S. (1992). Boundary conditions for direct simulations of compressible viscous flows.
Journal of Computational Physics, 101(1):104–129.  
[6] Saxena, P. and Williams, F. A. (2006). Testing a small detailed chemical-kinetic mechanism for the
combustion of hydrogen and carbon monoxide. Combustion and Flame, 145(1-2):316–323.  
[7] Coulon, V., Gaucherand, J., Xing, V., Laera, D., Lapeyre, C., and Poinsot, T. (2023). Direct numerical
simulations of methane, ammonia-hydrogen and hydrogen turbulent premixed flames. Combustion and Flame,
256:112933.  
[8] Biscione, V. and Bowers, J. S. (2021). Convolutional neural networks are not invariant to translation, but
they can learn to be. Journal of Machine Learning Research, 22(229):1–28.  




