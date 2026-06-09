
const drugLibrary = {

  antibiotics: {

    betaLactams: {

      penicillins: [

        { name: "Penicillin G" },
        { name: "Amoxicillin" },
        { name: "Ampicillin" },
        { name: "Amoxicillin + Clavulanate" }

      ],

      cephalosporins: [

        { name: "Cefalexin" },
        { name: "Cefadroxil" },
        { name: "Cefotaxime" },
        { name: "Ceftriaxone" },
        { name: "Cefpodoxime" },
        { name: "Cefovecin" }

      ],

      carbapenems: [],

      monobactams: []

    },

    aminoglycosides: [],

    tetracyclines: [],

    fluoroquinolones: [],

    macrolides: [],

    lincosamides: [],

    sulfonamides: [],

    phenicols: [],

    nitroimidazoles: [],

    polymyxins: []

  },

  antifungals: {},

  anthelmintics: {},

  nsaids: {},

  sedatives: {},

};
const drugs = {

  "Amoxicillin": {
    class: "Penicillin",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO",
    frequency: "BID"
  },

  "Ampicillin": {
    class: "Penicillin",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO/IV",
    frequency: "BID"
  },

  "Penicillin G": {
    class: "Penicillin",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "IM/IV",
    frequency: "As Directed"
  },

  "Amoxicillin + Clavulanate": {
    class: "Penicillin",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO",
    frequency: "BID"
  },

  "Cefotaxime": {
    class: "Cephalosporin",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "IV/IM",
    frequency: "Coming Soon"
  },

  "Ceftriaxone": {
    class: "Cephalosporin",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "IV/IM",
    frequency: "Coming Soon"
  },

  "Cefalexin": {
    class: "Cephalosporin",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO",
    frequency: "Coming Soon"
  }
  ,

"Gentamicin": {
    class: "Aminoglycoside",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "IV/IM",
    frequency: "Coming Soon"
},

"Amikacin": {
    class: "Aminoglycoside",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "IV/IM",
    frequency: "Coming Soon"
},

"Neomycin": {
    class: "Aminoglycoside",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO",
    frequency: "Coming Soon"
},

"Streptomycin": {
    class: "Aminoglycoside",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "IM",
    frequency: "Coming Soon"
}
,

"Doxycycline": {
    class: "Tetracycline",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO/IV",
    frequency: "Coming Soon"
},

"Oxytetracycline": {
    class: "Tetracycline",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "IV/IM",
    frequency: "Coming Soon"
},

"Tetracycline": {
    class: "Tetracycline",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO",
    frequency: "Coming Soon"
},

"Minocycline": {
    class: "Tetracycline",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO",
    frequency: "Coming Soon"
}
,

"Enrofloxacin": {
    class: "Fluoroquinolone",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "Coming Soon",
    frequency: "Coming Soon"
},

"Marbofloxacin": {
    class: "Fluoroquinolone",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "Coming Soon",
    frequency: "Coming Soon"
},

"Orbifloxacin": {
    class: "Fluoroquinolone",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "Coming Soon",
    frequency: "Coming Soon"
},

"Pradofloxacin": {
    class: "Fluoroquinolone",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "Coming Soon",
    frequency: "Coming Soon"
},

"Ciprofloxacin": {
    class: "Fluoroquinolone",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "Coming Soon",
    frequency: "Coming Soon"
}
,

"Azithromycin": {
    class: "Macrolide",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "Coming Soon",
    frequency: "Coming Soon"
},

"Erythromycin": {
    class: "Macrolide",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "Coming Soon",
    frequency: "Coming Soon"
},

"Clarithromycin": {
    class: "Macrolide",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "Coming Soon",
    frequency: "Coming Soon"
},

"Tylosin": {
    class: "Macrolide",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "Coming Soon",
    frequency: "Coming Soon"
},

"Tulathromycin": {
    class: "Macrolide",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "Coming Soon",
    frequency: "Coming Soon"
}
,

"Trimethoprim-Sulfamethoxazole": {
    class: "Sulfonamide",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "Coming Soon",
    frequency: "Coming Soon"
},

"Trimethoprim-Sulfadiazine": {
    class: "Sulfonamide",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "Coming Soon",
    frequency: "Coming Soon"
},

"Sulfadimethoxine": {
    class: "Sulfonamide",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "Coming Soon",
    frequency: "Coming Soon"
},


"Clindamycin": {
    class: "Lincosamide",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "Coming Soon",
    frequency: "Coming Soon"
},

"Lincomycin": {
    class: "Lincosamide",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "Coming Soon",
    frequency: "Coming Soon"
}
,

"Chloramphenicol": {
    class: "Phenicols",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "Coming Soon",
    frequency: "Coming Soon"
},

"Florfenicol": {
    class: "Phenicols",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "Coming Soon",
    frequency: "Coming Soon"
}
,

"Metronidazole": {
    class: "Nitroimidazole",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "Coming Soon",
    frequency: "Coming Soon"
},

"Ronidazole": {
    class: "Nitroimidazole",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "Coming Soon",
    frequency: "Coming Soon"
}
,

"Polymyxin B": {
    class: "Polymyxin",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "Coming Soon",
    frequency: "Coming Soon"
},

"Colistin": {
    class: "Polymyxin",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "Coming Soon",
    frequency: "Coming Soon"
}
,

"Imipenem": {
    class: "Carbapenem",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "IV",
    frequency: "Coming Soon"
},

"Meropenem": {
    class: "Carbapenem",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "IV",
    frequency: "Coming Soon"
},

"Ertapenem": {
    class: "Carbapenem",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "IV",
    frequency: "Coming Soon"
},

"Aztreonam": {
    class: "Monobactam",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "IV",
    frequency: "Coming Soon"
}
,

"Ketoconazole": {
    class: "Azole Antifungal",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO",
    frequency: "Coming Soon"
},

"Itraconazole": {
    class: "Azole Antifungal",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO",
    frequency: "Coming Soon"
},

"Fluconazole": {
    class: "Azole Antifungal",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO",
    frequency: "Coming Soon"
},

"Voriconazole": {
    class: "Azole Antifungal",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO",
    frequency: "Coming Soon"
}
,

"Amphotericin B": {
    class: "Polyene Antifungal",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "IV",
    frequency: "Coming Soon"
},

"Nystatin": {
    class: "Polyene Antifungal",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO/Topical",
    frequency: "Coming Soon"
}
,

"Terbinafine": {
    class: "Allylamine Antifungal",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO",
    frequency: "Coming Soon"
}
,

"Caspofungin": {
    class: "Echinocandin Antifungal",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "IV",
    frequency: "Coming Soon"
},

"Micafungin": {
    class: "Echinocandin Antifungal",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "IV",
    frequency: "Coming Soon"
}
,

"Fenbendazole": {
    class: "Benzimidazole Anthelmintic",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO",
    frequency: "Coming Soon"
},

"Albendazole": {
    class: "Benzimidazole Anthelmintic",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO",
    frequency: "Coming Soon"
},

"Mebendazole": {
    class: "Benzimidazole Anthelmintic",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO",
    frequency: "Coming Soon"
},

"Oxfendazole": {
    class: "Benzimidazole Anthelmintic",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO",
    frequency: "Coming Soon"
}
,

"Ivermectin": {
    class: "Macrocyclic Lactone",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO/SC",
    frequency: "Coming Soon"
},

"Doramectin": {
    class: "Macrocyclic Lactone",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "SC/IM",
    frequency: "Coming Soon"
},

"Moxidectin": {
    class: "Macrocyclic Lactone",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO/Topical",
    frequency: "Coming Soon"
},

"Selamectin": {
    class: "Macrocyclic Lactone",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "Topical",
    frequency: "Coming Soon"
},

"Milbemycin Oxime": {
    class: "Macrocyclic Lactone",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO",
    frequency: "Coming Soon"
}
,

"Pyrantel Pamoate": {
    class: "Tetrahydropyrimidine Anthelmintic",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO",
    frequency: "Coming Soon"
},

"Pyrantel Tartrate": {
    class: "Tetrahydropyrimidine Anthelmintic",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO",
    frequency: "Coming Soon"
},

"Morantel": {
    class: "Tetrahydropyrimidine Anthelmintic",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO",
    frequency: "Coming Soon"
}
,

"Praziquantel": {
    class: "Isoquinoline Anthelmintic",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO",
    frequency: "Coming Soon"
},

"Epsiprantel": {
    class: "Isoquinoline Anthelmintic",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO",
    frequency: "Coming Soon"
}
,

"Emodepside": {
    class: "Anthelmintic",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "Topical/PO",
    frequency: "Coming Soon"
},

"Nitroscanate": {
    class: "Anthelmintic",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO",
    frequency: "Coming Soon"
}
,

"Carprofen": {
    class: "NSAID",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO/SC",
    frequency: "Coming Soon"
},

"Meloxicam": {
    class: "NSAID",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO/SC",
    frequency: "Coming Soon"
},

"Firocoxib": {
    class: "NSAID",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO",
    frequency: "Coming Soon"
},

"Robenacoxib": {
    class: "NSAID",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO/SC",
    frequency: "Coming Soon"
},

"Ketoprofen": {
    class: "NSAID",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "IV/IM",
    frequency: "Coming Soon"
},

"Flunixin Meglumine": {
    class: "NSAID",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "IV",
    frequency: "Coming Soon"
},

"Tolfenamic Acid": {
    class: "NSAID",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO/SC",
    frequency: "Coming Soon"
}
,

"Xylazine": {
    class: "Sedative",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "IV/IM",
    frequency: "Coming Soon"
},

"Diazepam": {
    class: "Benzodiazepine",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "IV/PO",
    frequency: "Coming Soon"
},

"Midazolam": {
    class: "Benzodiazepine",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "IV/IM",
    frequency: "Coming Soon"
},

"Acepromazine": {
    class: "Phenothiazine Tranquilizer",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "IV/IM/PO",
    frequency: "Coming Soon"
},

"Dexmedetomidine": {
    class: "Alpha-2 Agonist",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "IV/IM",
    frequency: "Coming Soon"
},

"Medetomidine": {
    class: "Alpha-2 Agonist",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "IV/IM",
    frequency: "Coming Soon"
},

"Ketamine": {
    class: "Dissociative Anesthetic",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "IV/IM",
    frequency: "Coming Soon"
},

"Propofol": {
    class: "General Anesthetic",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "IV",
    frequency: "Coming Soon"
}
};