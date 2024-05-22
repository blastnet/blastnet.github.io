---
layout: default
title: Datasets
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
{"@type": "Dataset",
    "name": "BLASTNet Momentum128 3D SR Dataset",
    "description": "A processed subset of BLASTNet 2.0 for 3D volumetric super-resolution of turbulent flows",
    "url": "https://www.kaggle.com/datasets/waitongchung/blastnet-momentum-3d-sr-dataset",
    "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    "identifier": "https://doi.org/10.5281/zenodo.7242864",
    "alternateName": ["Momentum128","Momentum128 3D SR Dataset"],
    "keywords": ["BLASTNet","DNS","Dataset","Flow physics","Computational Fluid Dynamics", "Partial Differential Equations", "Turbulent Reacting Flows", "Direct Numerical Simulation", "Fluid Mechanics", "Combustion", "Super-resolution"],
    "creator": [{
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
},
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


# 1. BLASTNet Simulation Dataset
<div class="gallery">
  <div class="gallery-item">
    <a href="/assets/img/chung2022.png" data-lightbox="gallery" data-title="Image 1"><img src="/assets/img/ico_chung2022.png" alt="Image 1"></a>
    <p><a href="chung2022.html"><BR><BR><BR><BR><BR>Non-reacting HIT<BR>(1 Case)</a></p>
  </div>
  <div class="gallery-item">
    <a href="/assets/img/jung2021.png" data-lightbox="gallery" data-title="Image 2"><img src="/assets/img/ico_jung2021.png" alt="Image 3"></a>
    <p><a href="jung2021.html"><BR><BR><BR><BR><BR>Slot Burner<BR>(1 Case)</a></p>
  </div>
  <div class="gallery-item">
    <a href="/assets/img/savard2019.png" data-lightbox="gallery" data-title="Image 2"><img src="/assets/img/ico_savard2019.png" alt="Image 4"></a>
    <p><a href="savard.html"><BR><BR><BR><BR><BR>Freely Propagating Flame<BR>(22 Cases)</a></p>
  </div>
  <div class="gallery-item">
    <a href="/assets/img/guo2022.png" data-lightbox="gallery" data-title="Image 2"><img src="/assets/img/ico_guo2022.png" alt="Image 4"></a>
    <p><a href="guo2022.html"><BR><BR><BR><BR><BR>Non-reacting Channel<BR>(6 Cases)</a></p>
  </div>
  <div class="gallery-item">
    <a href="/assets/img/jiang2021.jpeg" data-lightbox="gallery" data-title="Image 2"><img src="/assets/img/ico_jiang2021.png" alt="Image 4"></a>
    <p><a href="jiang2021.html"><BR><BR><BR><BR><BR>Reacting Channel<BR>(1 Case)</a></p>
  </div>
  <div class="gallery-item">
    <a href="/assets/img/poludnenko.png" data-lightbox="gallery" data-title="Image 2"><img src="/assets/img/ico_poludnenko.png" alt="Image 4"></a>
    <p><a href="poludnenko.html"><BR><BR><BR><BR><BR>Reacting HIT<BR>(1 Case)</a></p>
  </div>
  <div class="gallery-item">
    <a href="/assets/img/brouzet2021.png" data-lightbox="gallery" data-title="Image 2"><img src="/assets/img/ico_brouzet2021.png" alt="Image 3"></a>
    <p><a href="brouzet2021.html"><BR><BR><BR><BR><BR>Reacting Jets<BR>(2 Cases)</a></p>
  </div>
  <div class="gallery-item">
    <a href="/assets/img/shantanu2022.png" data-lightbox="gallery" data-title="Image 2"><img src="/assets/img/ico_shantanu2022.png" alt="Image 4"></a>
    <p><a href="shantanu.html"><BR><BR><BR><BR><BR>Incompressible HIT<BR>(1 Case)</a></p>
  </div>
  <div class="gallery-item">
    <a href="/assets/img/coulon2023.jpg" data-lightbox="gallery" data-title="Image 2"><img src="/assets/img/ico_coulon2023.png" alt="Image 4"></a>
    <p><a href="coulon.html"><BR><BR><BR><BR><BR>NH3/H2/Air Premixed Flame<BR>(1 Case)</a></p>
  </div>
  <div class="gallery-item">
    <a href="/assets/img/sharma2024.png" data-lightbox="gallery" data-title="Image 2"><img src="/assets/img/ico_sharma2024.png" alt="Image 4"></a>
    <p><a href="sharma2024.html"><BR><BR><BR><BR><BR>H2/Air Reacting jet flame<BR>(10 Case)</a></p>
  </div>
</div>

# 2. BLASTNet Momentum128 3D SR Dataset

<div style="text-align: center;">
    <img src="/assets/img/diversity.png" alt="Image 1" style="max-width: 100%;">
</div>

The BLASTNet Momentum128 3D SR Dataset is extracted from BLASTNet Simulation Dataset 2.0 to mitigate constraints in memory and grid properties:
1. This is done by selecting to 2000 sub-volumes (of size 128<sup>3</sup>) of density and velocity fields from uniform-grid regions that act as labels.
2. We perform 8, 16 and 32x Favre-filtering to create the features.
3. Bash script for downloading via the [Kaggle API](./tutorial.html) is provided [here](./assets/bash/mom_download.sh).
4. You can also access the Kaggle repo [here](https://www.kaggle.com/datasets/waitongchung/blastnet-momentum-3d-sr-dataset).

