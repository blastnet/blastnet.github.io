---
layout: datasets
title: BLASTNet Simulation Dataset
description: 3D high-fidelity reacting and non-reacting compressible turbulent flow simulation data.
schemadotorg:
 "@context": http://schema.org/
 "@type": "Dataset"
 name: "BLASTNet Simulation Dataset"
 alternateName: ["BLASTNet", "BLASTNet Dataset","Bearable Large Accessible Scientific Network-of-Datasets"]
 description: "BLASTNet is a 2.2 TB network-of-datasets containing 744 full-domain samples from 34 high-fidelity direct numerical simulations. It aims to addresses the current limited availability of 3D high-fidelity reacting and non-reacting compressible turbulent flow simulation data."
 url: https://blastnet.github.io/datasets.html
 sameAs: https://blastnet.github.io/
 identifier: https://doi.org/10.5281/zenodo.72428646
 citation : ["https://doi.org/10.1016/j.jaecs.2022.100087","https://doi.org/10.48550/arXiv.2207.12546"]
 creator: [
  {
    "@type": "Person",
    "sameAs": "https://orcid.org/0000-0002-6447-4008",
    "givenName": "Wai Tong",
    "familyName": "Chung",
    "name": "Wai Tong Chung"
  },
  {
    "@type": "Person",
    "sameAs": "https://orcid.org/0000-0001-5160-4451",
    "givenName": "Bassem",
    "familyName": "Akoush",
    "name": "Bassem Akoush"
  },
  {
    "@type": "Person",
    "sameAs": "https://orcid.org/0000-0001-9670-7147",
    "givenName": "Pushan",
    "familyName": "Sharma",
    "name": "Pushan Sharma"
  },
  {
    "@type": "Person",
    "givenName": "Alex",
    "familyName": "Tamkin",
    "name": "Alex Tamkin"
  },
  {
    "@type": "Person",
    "givenName": "Ki Sung",
    "familyName": "Jung",
    "name": "Ki Sung Jung"
  },
  {
    "@type": "Person",
    "givenName": "Jacqueline",
    "familyName": "Chen",
    "name": "Jacqueline H. Chen"
  },
  {
    "@type": "Person",
    "sameAs": "https://orcid.org/0000-0003-4090-9289",
    "givenName": "Jack",
    "familyName": "Guo",
    "name": "Jack Guo"
  },
  {
    "@type": "Person",
    "sameAs": "https://orcid.org/0000-0003-1447-2538",
    "givenName": "Davy",
    "familyName": "Brouzet",
    "name": "Davy Brouzet"
  },
  {
    "@type": "Person",
    "givenName": "Bin",
    "familyName": "Jiang",
    "name": "Bin Jiang"
  },
  {
    "@type": "Person",
    "sameAs": "https://orcid.org/0000-0001-5923-2461",
    "givenName": "Mohsen",
    "familyName": "Talei",
    "name": "Mohsen Talei"
  },
  {
    "@type": "Person",
    "sameAs": "https://orcid.org/0000-0002-6989-8942",
    "givenName": "Bruno",
    "familyName": "Savard",
    "name": "Bruno Savard"
  },
  {
    "@type": "Person",
    "givenName": "Alexei",
    "familyName": "Poludnenko",
    "name": "Alexei Y. Poludnenko"
  },
  {
    "@type": "Person",
    "sameAs": "https://orcid.org/0000-0002-4158-7050",
    "givenName": "Matthias",
    "familyName": "Ihme",
    "name": "Matthias Ihme"
  }
]
 keywords: ["BLASTNet","DNS","Dataset","Flow physics","Computational Fluid Dynamics", "Partial Differential Equations", "Turbulent Reacting Flows", "Direct Numerical Simulation", "Fluid Mechanics", "Combustion"]
 license: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
 version: 2.0
 isAccessibleForFree: true
 distribution: [
         {
            "@type":"DataDownload",
            "encodingFormat":".sh",
            "contentUrl":"https://blastnet.github.io/assets/bash/batch_download.sh"
         }
      ]
 hasPart: [
{
    "@type": "Dataset",
    "name": "Inert CH4O2 HIT DNS",
    "description": "Inert HIT uploaded as part of Bearable Large Accessible Scientific Network-of-Datasets",
    "url": "https://www.kaggle.com/datasets/waitongchung/inert-ch4o2-hit-dns",
    "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    "creator": [{
                  "@type": "Person",
                  "sameAs": "https://orcid.org/0000-0002-6447-4008",
                  "givenName": "Wai Tong",
                  "familyName": "Chung",
                  "name": "Wai Tong Chung"
                },
                {
                  "@type": "Person",
                  "sameAs": "https://orcid.org/0000-0002-4158-7050",
                  "givenName": "Matthias",
                  "familyName": "Ihme",
                  "name": "Matthias Ihme"
                }],
    "identifier": "https://doi.org/10.5281/zenodo.7242864" 
  },
  {
    "@type": "Dataset",
    "name": "CH4-air flame interaction with Forced HIT DNS",
    "description": "Reacting forced HIT uploaded as part of Bearable Large Accessible Scientific Network-of-Datasets",
    "url": "https://www.kaggle.com/datasets/waitongchung/forced-hit-ch4-air-ffcm",
    "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    "creator":  {
                  "@type": "Person",
                  "givenName": "Alexei",
                  "familyName": "Poludnenko",
                  "name": "Alexei Y. Poludnenko"
                },
    "identifier": "https://doi.org/10.5281/zenodo.7242864" 
  },
  {
    "@type": "Dataset",
    "name": "Round jet Premixed CH4-Air BFER DNS",
    "description": "Reacting jet flow uploaded as part of Bearable Large Accessible Scientific Network-of-Datasets",
    "url": "https://www.kaggle.com/datasets/waitongchung/round-jet-premixed-bfer",
    "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    "creator": [{
                  "@type": "Person",
                  "sameAs": "https://orcid.org/0000-0003-1447-2538",
                  "givenName": "Davy",
                  "familyName": "Brouzet",
                  "name": "Davy Brouzet"
                },{
                  "@type": "Person",
                  "sameAs": "https://orcid.org/0000-0001-5923-2461",
                  "givenName": "Mohsen",
                  "familyName": "Talei",
                  "name": "Mohsen Talei"
                }],
    "identifier": "https://doi.org/10.5281/zenodo.7242864"
  },
  {
    "@type": "Dataset",
    "name": "Round jet Premixed CH4-Air COFFEE DNS",
    "description": "Reacting jet flow uploaded as part of Bearable Large Accessible Scientific Network-of-Datasets",
    "url": "https://www.kaggle.com/datasets/waitongchung/round-jet-premixed-coffee",
    "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    "creator": [{
                  "@type": "Person",
                  "sameAs": "https://orcid.org/0000-0003-1447-2538",
                  "givenName": "Davy",
                  "familyName": "Brouzet",
                  "name": "Davy Brouzet"
                },{
                  "@type": "Person",
                  "sameAs": "https://orcid.org/0000-0001-5923-2461",
                  "givenName": "Mohsen",
                  "familyName": "Talei",
                  "name": "Mohsen Talei"
                }],
    "identifier": "https://doi.org/10.5281/zenodo.7242864" 
  },
  {
    "@type": "Dataset",
    "name": "TRANSCRITICAL N2 CHANNEL TURBULENT DNS",
    "description": "Inert transcritical channel flow uploaded as part of Bearable Large Accessible Scientific Network-of-Datasets",
    "url": "https://www.kaggle.com/datasets/jguo96/transcritical-n2-channel-dns",
    "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    "creator": [{
                  "@type": "Person",
                  "sameAs": "https://orcid.org/0000-0003-4090-9289",
                  "givenName": "Jack",
                  "familyName": "Guo",
                  "name": "Jack Guo"
                  },
                {
                  "@type": "Person",
                  "sameAs": "https://orcid.org/0000-0002-4158-7050",
                  "givenName": "Matthias",
                  "familyName": "Ihme",
                  "name": "Matthias Ihme"
                }],
    "identifier": "https://doi.org/10.5281/zenodo.7242864" 
  },
  {
    "@type": "Dataset",
    "name": "Slot Burner Diluted H2-air Lifted Flame DNS (Full Domain)",
    "description": "Slot Burner uploaded as part of Bearable Large Accessible Scientific Network-of-Datasets",
    "url": "https://www.kaggle.com/datasets/waitongchung/full-lifted-flame-dns-li",
    "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    "creator": [{
                  "@type": "Person",
                  "givenName": "Ki Sung",
                  "familyName": "Jung",
                  "name": "Ki Sung Jung"
                },
                {
                  "@type": "Person",
                  "givenName": "Jacqueline",
                  "familyName": "Chen",
                  "name": "Jacqueline H. Chen"
                }],
    "identifier": "https://doi.org/10.5281/zenodo.7242864"
  },
  {
    "@type": "Dataset",
    "name": "Premixed Flame-wall Interaction CH4 Air DNS",
    "description": "Reacting channel flow uploaded as part of Bearable Large Accessible Scientific Network-of-Datasets",
    "url": "https://www.kaggle.com/datasets/waitongchung/premixed-flame-wall-ch4-air-dns-gri",
    "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    "creator": [{
                  "@type": "Person",
                  "givenName": "Bin",
                  "familyName": "Jiang",
                  "name": "Bin Jiang"
                },{
                  "@type": "Person",
                  "sameAs": "https://orcid.org/0000-0001-5923-2461",
                  "givenName": "Mohsen",
                  "familyName": "Talei",
                  "name": "Mohsen Talei"
                }],
    "identifier": "https://doi.org/10.5281/zenodo.7242864"
  },
  {
    "@type": "Dataset",
    "name": "Vitiated H2-air Freely Propagating Flame DNS 2",
    "description": "Freely-propagating flame Kau = 2.4, Uin/SL = 2.45 uploaded as part of Bearable Large Accessible Scientific Network-of-Datasets",
    "url": "https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-2",
    "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    "creator": {
                  "@type": "Person",
                  "sameAs": "https://orcid.org/0000-0002-6989-8942",
                  "givenName": "Bruno",
                  "familyName": "Savard",
                  "name": "Bruno Savard"
                },
    "identifier": "https://doi.org/10.5281/zenodo.7242864"
  },
  {
    "@type": "Dataset",
    "name": "Vitiated H2-air Freely Propagating Flame DNS 3",

    "description": "Freely-propagating flame Kau = 6.8, Uin/SL = 2.45 uploaded as part of Bearable Large Accessible Scientific Network-of-Datasets",
    "url": "https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-3",
    "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    "creator": {
                  "@type": "Person",
                  "sameAs": "https://orcid.org/0000-0002-6989-8942",
                  "givenName": "Bruno",
                  "familyName": "Savard",
                  "name": "Bruno Savard"
                },
    "identifier": "https://doi.org/10.5281/zenodo.7242864"
  },
  {
    "@type": "Dataset",
    "name": "Vitiated H2-air Freely Propagating Flame DNS 4",

    "description": "Freely-propagating flame Kau = 13, Uin/SL = 2.45 uploaded as part of Bearable Large Accessible Scientific Network-of-Datasets",
    "url": "https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-4",
    "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    "creator": {
                  "@type": "Person",
                  "sameAs": "https://orcid.org/0000-0002-6989-8942",
                  "givenName": "Bruno",
                  "familyName": "Savard",
                  "name": "Bruno Savard"
                },
    "identifier": "https://doi.org/10.5281/zenodo.7242864"
  },
  {
    "@type": "Dataset",
    "name": "Vitiated H2-air Freely Propagating Flame DNS 5",

    "description": "Freely-propagating flame Kau = 2.4, Uin/SL = 3.67 uploaded as part of Bearable Large Accessible Scientific Network-of-Datasets",
    "url": "https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-5",
    "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    "creator": {
                  "@type": "Person",
                  "sameAs": "https://orcid.org/0000-0002-6989-8942",
                  "givenName": "Bruno",
                  "familyName": "Savard",
                  "name": "Bruno Savard"
                },
    "identifier": "https://doi.org/10.5281/zenodo.7242864"
  },
  {
    "@type": "Dataset",
    "name": "Vitiated H2-air Freely Propagating Flame DNS 6",

    "description": "Freely-propagating flame Kau = 6.8, Uin/SL = 3.67 uploaded as part of Bearable Large Accessible Scientific Network-of-Datasets",
    "url": "https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-6",
    "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    "creator": {
                  "@type": "Person",
                  "sameAs": "https://orcid.org/0000-0002-6989-8942",
                  "givenName": "Bruno",
                  "familyName": "Savard",
                  "name": "Bruno Savard"
                },
    "identifier": "https://doi.org/10.5281/zenodo.7242864"
  },
  {
    "@type": "Dataset",
    "name": "Vitiated H2-air Freely Propagating Flame DNS 7",

    "description": "Freely-propagating flame Kau = 13, Uin/SL = 3.67 uploaded as part of Bearable Large Accessible Scientific Network-of-Datasets",
    "url": "https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-7",
    "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    "creator": {
                  "@type": "Person",
                  "sameAs": "https://orcid.org/0000-0002-6989-8942",
                  "givenName": "Bruno",
                  "familyName": "Savard",
                  "name": "Bruno Savard"
                },
    "identifier": "https://doi.org/10.5281/zenodo.7242864"
  },
  {
    "@type": "Dataset",
    "name": "Vitiated H2-air Freely Propagating Flame DNS 8",

    "description": "Freely-propagating flame Kau = 19, Uin/SL = 3.67 uploaded as part of Bearable Large Accessible Scientific Network-of-Datasets",
    "url": "https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-8",
    "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    "creator": {
                  "@type": "Person",
                  "sameAs": "https://orcid.org/0000-0002-6989-8942",
                  "givenName": "Bruno",
                  "familyName": "Savard",
                  "name": "Bruno Savard"
                },
    "identifier": "https://doi.org/10.5281/zenodo.7242864"
  },
  {
    "@type": "Dataset",
    "name": "Vitiated H2-air Freely Propagating Flame DNS 9",

    "description": "Freely-propagating flame Kau = 36, Uin/SL = 3.67 uploaded as part of Bearable Large Accessible Scientific Network-of-Datasets",
    "url": "https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-9",
    "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    "creator": {
                  "@type": "Person",
                  "sameAs": "https://orcid.org/0000-0002-6989-8942",
                  "givenName": "Bruno",
                  "familyName": "Savard",
                  "name": "Bruno Savard"
                },
    "identifier": "https://doi.org/10.5281/zenodo.7242864"
  },
  {
    "@type": "Dataset",
    "name": "Vitiated H2-air Freely Propagating Flame DNS 11",

    "description": "Freely-propagating flame Kau = 2.4, Uin/SL = 4.63 uploaded as part of Bearable Large Accessible Scientific Network-of-Datasets",
    "url": "https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-11",
    "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    "creator": {
                  "@type": "Person",
                  "sameAs": "https://orcid.org/0000-0002-6989-8942",
                  "givenName": "Bruno",
                  "familyName": "Savard",
                  "name": "Bruno Savard"
                },
    "identifier": "https://doi.org/10.5281/zenodo.7242864"
  },
  {
    "@type": "Dataset",
    "name": "Vitiated H2-air Freely Propagating Flame DNS 12",

    "description": "Freely-propagating flame Kau = 6.8, Uin/SL = 4.63 uploaded as part of Bearable Large Accessible Scientific Network-of-Datasets",
    "url": "https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-12",
    "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    "creator": {
                  "@type": "Person",
                  "sameAs": "https://orcid.org/0000-0002-6989-8942",
                  "givenName": "Bruno",
                  "familyName": "Savard",
                  "name": "Bruno Savard"
                },
    "identifier": "https://doi.org/10.5281/zenodo.7242864"
  },
  {
    "@type": "Dataset",
    "name": "Vitiated H2-air Freely Propagating Flame DNS 13",

    "description": "Freely-propagating flame Kau = 13, Uin/SL = 4.63 uploaded as part of Bearable Large Accessible Scientific Network-of-Datasets",
    "url": "https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-13",
    "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    "creator": {
                  "@type": "Person",
                  "sameAs": "https://orcid.org/0000-0002-6989-8942",
                  "givenName": "Bruno",
                  "familyName": "Savard",
                  "name": "Bruno Savard"
                },
    "identifier": "https://doi.org/10.5281/zenodo.7242864"
  },
  {
    "@type": "Dataset",
    "name": "Vitiated H2-air Freely Propagating Flame DNS 17",

    "description": "Freely-propagating flame Kau = 2.4, Uin/SL = 5.51 uploaded as part of Bearable Large Accessible Scientific Network-of-Datasets",
    "url": "https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-17",
    "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    "creator": {
                  "@type": "Person",
                  "sameAs": "https://orcid.org/0000-0002-6989-8942",
                  "givenName": "Bruno",
                  "familyName": "Savard",
                  "name": "Bruno Savard"
                },
    "identifier": "https://doi.org/10.5281/zenodo.7242864"
  },
  {
    "@type": "Dataset",
    "name": "Vitiated H2-air Freely Propagating Flame DNS 18",

    "description": "Freely-propagating flame Kau = 6.8, Uin/SL = 5.51 uploaded as part of Bearable Large Accessible Scientific Network-of-Datasets",
    "url": "https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-18",
    "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    "creator": {
                  "@type": "Person",
                  "sameAs": "https://orcid.org/0000-0002-6989-8942",
                  "givenName": "Bruno",
                  "familyName": "Savard",
                  "name": "Bruno Savard"
                },
    "identifier": "https://doi.org/10.5281/zenodo.7242864"
  },
  {
    "@type": "Dataset",
    "name": "Vitiated H2-air Freely Propagating Flame DNS 19",

    "description": "Freely-propagating flame Kau = 19, Uin/SL = 5.51 uploaded as part of Bearable Large Accessible Scientific Network-of-Datasets",
    "url": "https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-19",
    "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    "creator": {
                  "@type": "Person",
                  "sameAs": "https://orcid.org/0000-0002-6989-8942",
                  "givenName": "Bruno",
                  "familyName": "Savard",
                  "name": "Bruno Savard"
                },
    "identifier": "https://doi.org/10.5281/zenodo.7242864"
  },
  {
    "@type": "Dataset",
    "name": "Vitiated H2-air Freely Propagating Flame DNS 22",

    "description": "Freely-propagating flame Kau = 1.7, Uin/SL = 3.67 uploaded as part of Bearable Large Accessible Scientific Network-of-Datasets",
    "url": "https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-22",
    "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    "creator": {
                  "@type": "Person",
                  "sameAs": "https://orcid.org/0000-0002-6989-8942",
                  "givenName": "Bruno",
                  "familyName": "Savard",
                  "name": "Bruno Savard"
                },
    "identifier": "https://doi.org/10.5281/zenodo.7242864"
  },
  {
    "@type": "Dataset",
    "name": "Vitiated H2-air Freely Propagating Flame DNS 23",

    "description": "Freely-propagating flame Kau = 4.8, Uin/SL = 3.67 uploaded as part of Bearable Large Accessible Scientific Network-of-Datasets",
    "url": "https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-23",
    "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    "creator": {
                  "@type": "Person",
                  "sameAs": "https://orcid.org/0000-0002-6989-8942",
                  "givenName": "Bruno",
                  "familyName": "Savard",
                  "name": "Bruno Savard"
                },
    "identifier": "https://doi.org/10.5281/zenodo.7242864"
  },
  {
    "@type": "Dataset",
    "name": "Vitiated H2-air Freely Propagating Flame DNS 24",

    "description": "Freely-propagating flame Kau = 8.9, Uin/SL = 3.67 uploaded as part of Bearable Large Accessible Scientific Network-of-Datasets",
    "url": "https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-24",
    "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    "creator": {
                  "@type": "Person",
                  "sameAs": "https://orcid.org/0000-0002-6989-8942",
                  "givenName": "Bruno",
                  "familyName": "Savard",
                  "name": "Bruno Savard"
                },
    "identifier": "https://doi.org/10.5281/zenodo.7242864"
  },
  {
    "@type": "Dataset",
    "name": "Vitiated H2-air Freely Propagating Flame DNS 26",

    "description": "Freely-propagating flame Kau = 1.7, Uin/SL = 4.63 uploaded as part of Bearable Large Accessible Scientific Network-of-Datasets",
    "url": "https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-26",
    "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    "creator": {
                  "@type": "Person",
                  "sameAs": "https://orcid.org/0000-0002-6989-8942",
                  "givenName": "Bruno",
                  "familyName": "Savard",
                  "name": "Bruno Savard"
                },
    "identifier": "https://doi.org/10.5281/zenodo.7242864"
  },
  {
    "@type": "Dataset",
    "name": "Vitiated H2-air Freely Propagating Flame DNS 27",

    "description": "Freely-propagating flame Kau = 4.8, Uin/SL = 4.63 uploaded as part of Bearable Large Accessible Scientific Network-of-Datasets",
    "url": "https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-27",
    "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    "creator": {
                  "@type": "Person",
                  "sameAs": "https://orcid.org/0000-0002-6989-8942",
                  "givenName": "Bruno",
                  "familyName": "Savard",
                  "name": "Bruno Savard"
                },
    "identifier": "https://doi.org/10.5281/zenodo.7242864"
  },
  {
    "@type": "Dataset",
    "name": "Vitiated H2-air Freely Propagating Flame DNS 28",

    "description": "Freely-propagating flame Kau = 8.9, Uin/SL = 4.63 uploaded as part of Bearable Large Accessible Scientific Network-of-Datasets",
    "url": "https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-28",
    "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    "creator": {
                  "@type": "Person",
                  "sameAs": "https://orcid.org/0000-0002-6989-8942",
                  "givenName": "Bruno",
                  "familyName": "Savard",
                  "name": "Bruno Savard"
                },
    "identifier": "https://doi.org/10.5281/zenodo.7242864"
  },
  {
    "@type": "Dataset",
    "name": "Vitiated H2-air Freely Propagating Flame DNS 30",

    "description": "Freely-propagating flame Kau = 1.7, Uin/SL = 5.51 uploaded as part of Bearable Large Accessible Scientific Network-of-Datasets",
    "url": "https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-30",
    "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    "creator": {
                  "@type": "Person",
                  "sameAs": "https://orcid.org/0000-0002-6989-8942",
                  "givenName": "Bruno",
                  "familyName": "Savard",
                  "name": "Bruno Savard"
                },
    "identifier": "https://doi.org/10.5281/zenodo.7242864"
  },
  {
    "@type": "Dataset",
    "name": "Vitiated H2-air Freely Propagating Flame DNS 32",

    "description": "Freely-propagating flame Kau = 8.9, Uin/SL = 5.51 uploaded as part of Bearable Large Accessible Scientific Network-of-Datasets",
    "url": "https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-32",
    "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    "creator": {
                  "@type": "Person",
                  "sameAs": "https://orcid.org/0000-0002-6989-8942",
                  "givenName": "Bruno",
                  "familyName": "Savard",
                  "name": "Bruno Savard"
                },
    "identifier": "https://doi.org/10.5281/zenodo.7242864"
  }
]
---

<script src="./assets/js/table.js"></script>

To download all cases via [Kaggle API](./tutorial.html), download [this bash script](./assets/bash/batch_download.sh).

Search for cases, contributors, and whether the data has been compressed.

Size of scalars N<sub>&#632;</sub> is provided in terms 6 (U,T,P,&rho;) + N<sub>species</sub>.


<table id="myTable">
  <tr class="header">
    <th style="width:30%;"><input type="text"  size="20" id="myInput" onkeyup="myFunction()" placeholder="Description..."></th>
    <!-- <th style="width:60%;">TPY</th> -->
    <th style="width:25%;"><input type="text"  size="15" id="myInputTwo" onkeyup="myFunctionAuthor()" placeholder="Contributors..."></th>
    <th style="width:25%;">Size</th>
    <!-- <th style="width:60%;">Article</th> -->
    <th style="width:5%;"><input type="text"  size="7" id="myInputThree" onkeyup="myFunctionLossy()" placeholder="%Lossy..."></th>
    <th style="width:20%;">Links</th>
  </tr>
  <tr>
    <td>Compressible Inert CH4-O2 Homogeneous Isotropic Turbulence DNS</td>
    <td>&#8226; Wai Tong Chung <BR>&#8226; Matthias Ihme</td>
    <!-- <td>T [K]; 300 , P [atm]: 1; Y: (CH4, O2), Inert </sub></td> -->
    <td>
        N<sub>x</sub> = 128 <BR>
        N<sub>y</sub> = 128 <BR>
        N<sub>z</sub> = 128 <BR>
        N<sub>&#632;</sub> = 6 + 2  <BR>
        Size = 6 GB 
    </td>
    <td style="text-align:center">0</td>
    <td>
      <a href="https://www.kaggle.com/datasets/waitongchung/inert-ch4o2-hit-dns">Kaggle</a><BR>
      <a href="./assets/img/chung2022.png">.png</a><BR>
      <a href="https://doi.org/10.1016/j.combustflame.2021.111758">DOI</a><BR>
      <a href="./assets/bib/chung2022.bib">.bib</a><BR>
      <a href="./assets/json/chung2022_info.json">info.json</a>
    </td>
  </tr>
  <!-- Brouzet and Talei -->
<tr>
    <td>Turbulent Round Jet Premixed BFER CH4-air Premixed Flame DNS</td>
    <td>&#8226; Davy Brouzet <BR>&#8226; Mohsen Talei</td>
    <!-- <td>T [K]; 300 , P [atm]: 1; Y: (CH4, O2), Inert </sub></td> -->
    <td>
        N<sub>x</sub> = 1832 <BR>
        N<sub>y</sub> = 721 <BR>
        N<sub>z</sub> = 721 <BR>
        N<sub>&#632;</sub> = 6 + 6  <BR>
        Size = 58 GB 
    </td>
    <td style="text-align:center">0</td>
    <td>
      <a href="https://www.kaggle.com/datasets/waitongchung/round-jet-premixed-bfer">Kaggle</a><BR>
      <a href="./assets/img/brouzet2021.png">.png</a><BR>
      <a href="https://doi.org/10.1017/jfm.2020.1184">DOI</a><BR>
      <a href="./assets/bib/brouzet2021.bib">.bib</a><BR>
      <a href="./assets/json/brouzet2021_info.json">info.json</a>
    </td>
  </tr>
  <tr>
    <td>Turbulent Round Jet Premixed COFFEE CH4-air Premixed Flame DNS</td>
    <td>&#8226; Davy Brouzet <BR>&#8226; Mohsen Talei</td>
    <!-- <td>T [K]; 300 , P [atm]: 1; Y: (CH4, O2), Inert </sub></td> -->
    <td>
        N<sub>x</sub> = 1235 <BR>
        N<sub>y</sub> = 676 <BR>
        N<sub>z</sub> = 676 <BR>
        N<sub>&#632;</sub> = 6 + 6  <BR>
        Size = 52 GB 
    </td>
    <td style="text-align:center">0</td>
    <td>
      <a href="https://www.kaggle.com/datasets/waitongchung/round-jet-premixed-coffee">Kaggle</a><BR>
      <a href="./assets/img/brouzet2021.png">.png</a><BR>
      <a href="https://doi.org/10.1017/jfm.2020.1184">DOI</a><BR>
      <a href="./assets/bib/brouzet2021.bib">.bib</a><BR>
      <a href="./assets/json/brouzet2021b_info.json">info.json</a>
    </td>
  </tr>
  <tr>
    <td>Slot Burner Diluted H2-air Lifted Flame DNS (Full Domain)</td>
    <td>&#8226; Ki Sung Jung <BR>&#8226;  Jacqueline H. Chen</td>
    <!-- <td>T [K]; 300 , P [atm]: 1; Y: (CH4, O2), Inert </sub></td> -->
    <td>
        N<sub>x</sub> = 2000 <BR>
        N<sub>y</sub> = 1600 <BR>
        N<sub>z</sub> = 400 <BR>
        N<sub>&#632;</sub> = 6 + 9  <BR>
        Size = 93 GB 
    </td>
    <td style="text-align:center">0</td>
    <td>
      <a href="https://www.kaggle.com/datasets/waitongchung/full-lifted-flame-dns-li">Kaggle</a><BR>
      <a href="./assets/img/jung2021.png">.png</a><BR>
      <a href="https://doi.org/10.1016/j.combustflame.2021.111584">DOI</a><BR>
      <a href="./assets/bib/jung2021.bib">.bib</a><BR>
      <a href="./assets/json/jung2021_full_info.json">info.json</a>
    </td>
    </tr>
    <tr>
    <td>Slot Burner Diluted H2-air Lifted Flame DNS (Half Domain)</td>
    <td>&#8226; Ki Sung Jung <BR>&#8226;  Jacqueline H. Chen</td>
    <!-- <td>T [K]; 300 , P [atm]: 1; Y: (CH4, O2), Inert </sub></td> -->
    <td>
        N<sub>x</sub> = 1000 <BR>
        N<sub>y</sub> = 334 <BR>
        N<sub>z</sub> = 201 <BR>
        N<sub>&#632;</sub> = 6 + 9  <BR>
        Size = 5 GB 
    </td>
    <td style="text-align:center">0</td>
    <td>
      <a href="https://www.kaggle.com/datasets/waitongchung/half-lifted-flame-dns-li">Kaggle</a><BR>
      <a href="./assets/img/jung2021.png">.png</a><BR>
      <a href="https://doi.org/10.1016/j.combustflame.2021.111584">DOI</a><BR>
      <a href="./assets/bib/jung2021.bib">.bib</a><BR>
      <a href="./assets/json/jung2021_info.json">info.json</a>
    </td>
  </tr>
  <tr>
    <td>Premixed Flame-wall Interaction CH4-Air DNS</td>
    <td>&#8226; Bin Jiang <BR>&#8226; Mohsen Talei</td>
    <!-- <td>T [K]; 300 , P [atm]: 1; Y: (CH4, O2), Inert </sub></td> -->
    <td>
        N<sub>x</sub> = 1001 <BR>
        N<sub>y</sub> = 251 <BR>
        N<sub>z</sub> = 251 <BR>
        N<sub>&#632;</sub> = 6 + 23  <BR>
        Size = 89 GB 
    </td>
    <td style="text-align:center">0</td>
    <td>
      <a href="https://www.kaggle.com/datasets/waitongchung/premixed-flame-wall-ch4-air-dns-gri">Kaggle</a><BR>
      <a href="./assets/img/jiang2021.jpeg">.jpeg</a><BR>
      <a href="https://doi.org/10.1016/j.combustflame.2021.111432">DOI</a><BR>
      <a href="./assets/bib/jiang2021.bib">.bib</a><BR>
      <a href="./assets/json/jiang2021_info.json">info.json</a>
    </td>
  </tr>
  <tr>
    <td>Transcritical Channel Flow N2 Turbulence DNS</td>
    <td>&#8226; Jack Guo <BR>&#8226; Matthias Ihme</td>
    <!-- <td>T [K]; 300 , P [atm]: 1; Y: (CH4, O2), Inert </sub></td> -->
    <td>
        N<sub>x</sub> = 385 <BR>
        N<sub>y</sub> = 257 <BR>
        N<sub>z</sub> = 257 <BR>
        N<sub>&#632;</sub> = 6 <BR>
        Size = 17 GB 
    </td>
    <td style="text-align:center">0</td>
    <td>
      <a href="https://www.kaggle.com/datasets/jguo96/transcritical-n2-channel-dns">Kaggle</a><BR>
      <a href="./assets/img/guo2022.mp4">.mp4</a><BR>
      <a href="https://doi.org/10.1017/jfm.2021.1157">DOI</a><BR>
      <a href="./assets/bib/guo2022.bib">.bib</a><BR>
      <a href="./assets/json/guo2022_info.json">info.json</a>
    </td>
  </tr>
  <tr>
    <td>Vitiated H2-air Freely Propagating Flame DNS (Case 17)</td>
    <td>&#8226; Bruno Savard </td>
    <!-- <td>T [K]; 300 , P [atm]: 1; Y: (CH4, O2), Inert </sub></td> -->
    <td>
        N<sub>x</sub> = 1792 <BR>
        N<sub>y</sub> = 128 <BR>
        N<sub>z</sub> = 128 <BR>
        N<sub>&#632;</sub> = 6 + 9 <BR>
        Size = 30 GB 
    </td>
    <td style="text-align:center">0</td>
    <td>
      <a href="https://www.kaggle.com/datasets/waitongchung/free-propagating-h2-vit-air-li-case-17">Kaggle</a><BR>
      <a href="./assets/img/savard2019.png">.png</a><BR>
      <a href="https://doi.org/10.1016/j.combustflame.2019.07.020">DOI</a><BR>
      <a href="./assets/bib/savard2019.bib">.bib</a><BR>
      <a href="./assets/json/savard2019_info.json">info.json</a>
    </td>
  </tr>
</table>

