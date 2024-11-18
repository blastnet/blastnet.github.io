---
layout: default
title: Rayleigh-Bénard Convection
description: Rayleigh-Bénard Convection DNS
---

<div style="text-align: center;">
    <img src="/assets/img/roshan2024.png" alt="Image 1" style="max-width: 70%;">
</div>

# Description
Rayleigh Benard Convection (RBC) is a benchmark fluid-dynamics problem for simulating natural thermal
convection. It consists of a thin layer of fluid confined between a pair of parallel horizontal plates. The top plate is
cooler than the bottom plate, and when this temperature difference is sufficiently high, a convective flow arises.This phenomenon can be simulated numerically by solving the incompressible Navier-Stokes equations under the
Boussinesq approximation:  

$$
\frac{\partial \mathbf{u}^*}{\partial t^*} + \mathbf{u}^* \cdot \nabla \mathbf{u}^* = -\frac{1}{\rho_0} \nabla p^* + \nu \nabla^2 \mathbf{u}^* + \alpha g T^* \hat{\mathbf{z}}
$$

$$\frac{\partial T^*}{\partial t^*} + \mathbf{u}^* \cdot \nabla T^* = \kappa \nabla^2 T^* $$

$$\nabla \cdot \mathbf{u}^* = 0$$

Here, $$\mathbf{u}^*$$, $$p^*$$ and $$T^*$$ are the velocity, pressure and temperature fields respectively. These quantities are in the dimensional form (including time, $$t^*$$). The length scales are non-dimensionalized with respect to the height of the domain, $$𝐻$$. Similarly, the temperature field is non-dimensionalized by the temperature difference between the bottom and top plates, $$\Delta = 𝑇_𝑏 − 𝑇_𝑡$$. This gives the free-fall velocity, $$𝑈_𝑓 = \sqrt{\alpha g \Delta 𝐻}$$, which is used to non-
dimensionalize the velocity field. The non-dimensional variables can therefore be written as:

$$\mathbf{u} = \frac{\mathbf{u}^*}{U_f} \quad ,\quad T = \frac{T^*}{\Delta} \quad ,\quad t = \frac{U_f t^*}{H} \quad ,\quad  p = \frac{p^*-p_0}{\rho _0 U_f^2}$$

where $$p_0$$ and $$\rho _0$$ are the reference pressure and density respectively. Since the DNS is performed with non-dimensional variables, the values of 𝑝0 and 𝜌0 are not set explicitly in the code. If necessary, they can be assumed to be 101.3 kPa and 1.2 kg/m3 respectively, as prescribed by the International Standard Atmosphere (ISA) at sea-
level. Finally, we obtain the following non-dimensional equations for velocity and temperature which are solved in the DNS of RBC:

$$\frac{\partial \mathbf{u}}{\partial t} + \mathbf{u} \cdot \nabla \mathbf{u} = -\nabla p + \sqrt{Ra / Pr} \nabla^2 \mathbf{u} + T \hat{\mathbf{z}}$$

$$\frac{\partial T}{\partial t} + \mathbf{u} \cdot \nabla T= \frac{1}{\sqrt{Ra Pr}} \nabla^2 T $$

$$\nabla \cdot \mathbf{u} = 0$$

The non-dimensional parameter, Rayleigh number ($$Ra$$), quantifies the degree of forcing imparted by buoyancy,
whereas the Prandtl number ($$Pr$$) is the dimensionless ratio between the viscous and thermal diffusivities of the fluid:

$$Ra = \frac{\alpha g \Delta H^3}{\nu \kappa} \quad,\quad Pr = \frac{\nu}{\kappa}$$

The present dataset is generated from DNS of RBC within a periodically extended Cartesian
box of aspect ratio $$\Gamma  = L/H =4$$, where L is the length of the box. All the simulations are performed with these fixed dimensions of 4 × 4 × 1. The DNS are performed using the GPU accelerated spectral element solver, NekRS [1], at a fixed $$Pr = 0.7$$ and at $$10^5 \leq Ra \leq 10^9$$.   
Although the original simulations were performed on grids of increasingly finer resolutions [2], all fields have been interpolated to a uniform grid of size 2049 × 2049 × 1025 with a grid-spacing of 2h × 2h × h, where h is the grid spacing along the vertical 𝑧-axis. This
axis has a higher resolution to resolve the boundary layers properly. The interpolation was performed using spectral
element routines of NekRS itself to ensure maximum accuracy. There are 20 snapshots for each case.

# Quick Info
* Contributors: Roshan Samuel, Mathis Bode
* N<sub>x</sub> = 2049, N<sub>y</sub> = 2049, N<sub>z</sub> = 1025, N<sub>&#632;</sub> = 5

* <a href="https://doi.org/10.1017/jfm.2024.853">DOI</a>
* <a href="./assets/bib/roshan2024.bib">.bib</a>

# Links to different cases

<script src="./assets/js/table.js"></script>

<table align="center">
    <tr class="header">
    <th style="width:2%;">ID</th>
    <th style="width:10%;">Conditions</th>
      <!-- <th style="width:60%;">TPY</th> -->
    <!-- <th style="width:8%;">Grid</th> -->
    <th style="width:10%;">Size (TB)</th>
      <!-- <th style="width:60%;">Article</th> -->
    <th style="width:8%;">Links</th>
    </tr>
    <tr>       
        <td align="center"> 0 </td>
        <td align="center">Ra = 10<sup>5</sup></td>
        <!-- <td align="center">2049<sup>2</sup>&times;1025</td> -->
        <td align="center">1.44</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c0r0">Kaggle<sub>0</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c0r0-info.json">info.json<sub>0</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c0r1">Kaggle<sub>1</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c0r1-info.json">info.json<sub>1</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c0r2">Kaggle<sub>2</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c0r2-info.json">info.json<sub>2</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c0r3">Kaggle<sub>3</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c0r3-info.json">info.json<sub>3</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c0r4">Kaggle<sub>4</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c0r4-info.json">info.json<sub>4</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c0r5">Kaggle<sub>5</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c0r5-info.json">info.json<sub>5</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c0r6">Kaggle<sub>6</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c0r6-info.json">info.json<sub>6</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c0r7">Kaggle<sub>7</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c0r7-info.json">info.json<sub>7</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c0r8">Kaggle<sub>8</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c0r8-info.json">info.json<sub>8</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c0r9">Kaggle<sub>9</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c0r9-info.json">info.json<sub>9</sub></a><BR>
        </td>
    </tr>
    <tr>       
        <td align="center"> 1 </td>
        <td align="center">Ra = 10<sup>6</sup></td>
        <!-- <td align="center">2049<sup>2</sup>&times;1025</td> -->
        <td align="center">1.44</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c1r0">Kaggle<sub>0</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c1r0-info.json">info.json<sub>0</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c1r1">Kaggle<sub>1</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c1r1-info.json">info.json<sub>1</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c1r2">Kaggle<sub>2</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c1r2-info.json">info.json<sub>2</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c1r3">Kaggle<sub>3</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c1r3-info.json">info.json<sub>3</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c1r4">Kaggle<sub>4</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c1r4-info.json">info.json<sub>4</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c1r5">Kaggle<sub>5</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c1r5-info.json">info.json<sub>5</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c1r6">Kaggle<sub>6</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c1r6-info.json">info.json<sub>6</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c1r7">Kaggle<sub>7</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c1r7-info.json">info.json<sub>7</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c1r8">Kaggle<sub>8</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c1r8-info.json">info.json<sub>8</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c1r9">Kaggle<sub>9</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c1r9-info.json">info.json<sub>9</sub></a><BR>
        </td>
    </tr>
    <tr>       
        <td align="center"> 2 </td>
        <td align="center">Ra = 10<sup>7</sup></td>
        <!-- <td align="center">2049<sup>2</sup>&times;1025</td> -->
        <td align="center">1.44</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c2r0">Kaggle<sub>0</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c2r0-info.json">info.json<sub>0</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c2r1">Kaggle<sub>1</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c2r1-info.json">info.json<sub>1</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c2r2">Kaggle<sub>2</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c2r2-info.json">info.json<sub>2</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c2r3">Kaggle<sub>3</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c2r3-info.json">info.json<sub>3</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c2r4">Kaggle<sub>4</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c2r4-info.json">info.json<sub>4</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c2r5">Kaggle<sub>5</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c2r5-info.json">info.json<sub>5</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c2r6">Kaggle<sub>6</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c2r6-info.json">info.json<sub>6</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c2r7">Kaggle<sub>7</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c2r7-info.json">info.json<sub>7</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c2r8">Kaggle<sub>8</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c2r8-info.json">info.json<sub>8</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c2r9">Kaggle<sub>9</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c2r9-info.json">info.json<sub>9</sub></a><BR>
        </td>
    </tr>
    <tr>       
        <td align="center"> 3 </td>
        <td align="center">Ra = 10<sup>8</sup></td>
        <!-- <td align="center">2049<sup>2</sup>&times;1025</td> -->
        <td align="center">1.44</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c3r0">Kaggle<sub>0</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c3r0-info.json">info.json<sub>0</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c3r1">Kaggle<sub>1</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c3r1-info.json">info.json<sub>1</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c3r2">Kaggle<sub>2</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c3r2-info.json">info.json<sub>2</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c3r3">Kaggle<sub>3</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c3r3-info.json">info.json<sub>3</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c3r4">Kaggle<sub>4</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c3r4-info.json">info.json<sub>4</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c3r5">Kaggle<sub>5</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c3r5-info.json">info.json<sub>5</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c3r6">Kaggle<sub>6</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c3r6-info.json">info.json<sub>6</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c3r7">Kaggle<sub>7</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c3r7-info.json">info.json<sub>7</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c3r8">Kaggle<sub>8</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c3r8-info.json">info.json<sub>8</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c3r9">Kaggle<sub>9</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c3r9-info.json">info.json<sub>9</sub></a><BR>
        </td>
    </tr>
    <tr>       
        <td align="center"> 4 </td>
        <td align="center">Ra = 10<sup>9</sup></td>
        <!-- <td align="center">2049<sup>2</sup>&times;1025</td> -->
        <td align="center">1.44</td>
        <td align="center">
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c4r0">Kaggle<sub>0</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c4r0-info.json">info.json<sub>0</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c4r1">Kaggle<sub>1</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c4r1-info.json">info.json<sub>1</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c4r2">Kaggle<sub>2</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c4r2-info.json">info.json<sub>2</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c4r3">Kaggle<sub>3</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c4r3-info.json">info.json<sub>3</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c4r4">Kaggle<sub>4</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c4r4-info.json">info.json<sub>4</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c4r5">Kaggle<sub>5</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c4r5-info.json">info.json<sub>5</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c4r6">Kaggle<sub>6</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c4r6-info.json">info.json<sub>6</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c4r7">Kaggle<sub>7</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c4r7-info.json">info.json<sub>7</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c4r8">Kaggle<sub>8</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c4r8-info.json">info.json<sub>8</sub></a><BR>
        <a href="https://www.kaggle.com/datasets/blastnet/canonical-rbc-dns-c4r9">Kaggle<sub>9</sub></a>, <a href="./assets/json/roshan2024/canonical-rbc-dns-c4r9-info.json">info.json<sub>9</sub></a><BR>
        </td>
    </tr>
</table>

# References
[1]. P. F. Fischer, S. Kerkemeier, M. Min, Y.-H. Lan, M. Phillips, T. Rathnayake, E. Merzari, A. Tomboulides, A. Karakus, N. Chalmers, and T. Warburton. a GPU-accelerated spectral element Navier–Stokes solver. Parallel Computing 114, 102982 (2022).  
[2]. R. J. Samuel, M. Bode, J. D. Scheel, K. R. Sreenivasan and J. Schumacher. No sustained mean velocity in the boundary region of plane thermal convection. Journa Fluid Mechanics 996, A49 (2024).



