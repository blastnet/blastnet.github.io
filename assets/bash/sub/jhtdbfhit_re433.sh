#!/bin/bash
# Forced HIT (Re$$_\lambda$$ = 433)
# coarse timestep
kaggle datasets download -d blastnet/fhitcoarse-dns-Re433-seq-p1 --unzip
kaggle datasets download -d blastnet/fhitcoarse-dns-Re433-seq-p2 --unzip
kaggle datasets download -d blastnet/fhitcoarse-dns-Re433-rnd --unzip

# fine timestep
kaggle datasets download -d blastnet/fhitfine-dns-Re433-seq-p1 --unzip
kaggle datasets download -d blastnet/fhitfine-dns-Re433-seq-p2 --unzip
kaggle datasets download -d blastnet/fhitfine-dns-Re433-rnd --unzip