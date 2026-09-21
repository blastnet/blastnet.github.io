#!/bin/bash

# Non-Reacting Channel Flow (Re$$_\tau$$ = 1000)
kaggle datasets download -d blastnet/channelflow-dns-Re1000-seq-p1 --unzip
kaggle datasets download -d blastnet/channelflow-dns-Re1000-seq-p2 --unzip
kaggle datasets download -d blastnet/channelflow-dns-Re1000-seq-p3 --unzip

kaggle datasets download -d blastnet/channelflow-dns-Re1000-rnd-p1 --unzip
kaggle datasets download -d blastnet/channelflow-dns-Re1000-rnd-p2 --unzip
