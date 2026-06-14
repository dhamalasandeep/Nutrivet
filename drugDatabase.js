
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

class:"Aminopenicillin",

dogDose:"11-30 mg/kg",

catDose:"11-30 mg/kg",

route:"PO",

frequency:"q12h",

uses:"Skin infections, respiratory infections, urinary tract infections, soft tissue infections",

sideEffects:"Vomiting, diarrhea, hypersensitivity reactions",

contraindications:"Known penicillin hypersensitivity",

brands:[
"Novamox",
"Moxikind"
],

source:"Plumb's Veterinary Drug Handbook"

},

 "Ampicillin": {

class:"Aminopenicillin",

dogDose:"10-40 mg/kg",

catDose:"10-40 mg/kg",

route:"PO/IV/IM",

frequency:"q8h",

uses:"Respiratory infections, urinary tract infections, gastrointestinal infections",

sideEffects:"Diarrhea, vomiting, hypersensitivity reactions",

contraindications:"Known penicillin hypersensitivity",

brands:[
"Ampoxin",
"Ampilox"
],

source:"Merck Veterinary Manual"


  },

  "Penicillin G": {

class:"Natural Penicillin",

dogDose:"20000-40000 IU/kg",

catDose:"20000-40000 IU/kg",

route:"IM/IV/SC",

frequency:"q6-8h",

uses:"Streptococcal infections, susceptible gram positive bacterial infections, wound infections",

sideEffects:"Injection site pain, hypersensitivity reactions, vomiting",

contraindications:"Known penicillin hypersensitivity",

brands:[
"Penidure",
"Penicillin G Sodium"
],

source:"Plumb's Veterinary Drug Handbook"

},

  "Amoxicillin + Clavulanate": {

class:"Aminopenicillin + Beta Lactamase Inhibitor",

dogDose:"12.5-25 mg/kg",

catDose:"12.5-25 mg/kg",

route:"PO",

frequency:"q12h",

uses:"Skin infections, pyoderma, wound infections, urinary tract infections",

sideEffects:"Vomiting, diarrhea, hypersensitivity reactions",

contraindications:"Known penicillin hypersensitivity",

brands:[
"Clavamox",
"Augmentin",
"Moxclav"
],

source:"Plumb's Veterinary Drug Handbook"

},

 "Cefotaxime": {

class:"3rd Generation Cephalosporin",

dogDose:"20-40 mg/kg",

catDose:"20-40 mg/kg",

route:"IV/IM",

frequency:"q6-8h",

uses:"Septicemia, respiratory infections, urinary tract infections, severe bacterial infections",

sideEffects:"Injection site reactions, vomiting, diarrhea",

contraindications:"Known cephalosporin hypersensitivity",

brands:[
"Taxim",
"Cefotax"
],

source:"Plumb's Veterinary Drug Handbook"

},

 "Ceftriaxone": {

class:"3rd Generation Cephalosporin",

dogDose:"25 mg/kg",

catDose:"25 mg/kg",

route:"IV/IM",

frequency:"q12-24h",

uses:"Severe bacterial infections, septicemia, respiratory infections, urinary tract infections",

sideEffects:"Vomiting, diarrhea, injection site pain",

contraindications:"Known cephalosporin hypersensitivity",

brands:[
"Monocef",
"Taxim-O",
"Rocephin"
],

source:"Plumb's Veterinary Drug Handbook"

},

 "Cefalexin": {

class:"1st Generation Cephalosporin",

dogDose:"20-30 mg/kg",

catDose:"20-30 mg/kg",

route:"PO",

frequency:"q8-12h",

uses:"Pyoderma, wound infections, urinary tract infections, respiratory infections",

sideEffects:"Vomiting, diarrhea, hypersensitivity reactions",

contraindications:"Known cephalosporin hypersensitivity",

brands:[
"Rilexine",
"Cefolac"
],

source:"Plumb's Veterinary Drug Handbook"

},
"Cefovecin": {

class:"3rd Generation Cephalosporin",

dogDose:"8 mg/kg",

catDose:"8 mg/kg",

route:"SC",

frequency:"Single injection every 14 days",

uses:"Skin infections, abscesses, wound infections, urinary tract infections",

sideEffects:"Vomiting, diarrhea, lethargy",

contraindications:"Known cephalosporin hypersensitivity",

brands:[
"Convenia"
],

source:"Plumb's Veterinary Drug Handbook"

},
"Cefadroxil": {

class:"1st Generation Cephalosporin",

dogDose:"20-30 mg/kg",

catDose:"20-30 mg/kg",

route:"PO",

frequency:"q12h",

uses:"Skin infections, urinary tract infections, soft tissue infections",

sideEffects:"Vomiting, diarrhea",

contraindications:"Known cephalosporin hypersensitivity",

brands:[
"Droxyl",
"Cefadrox"
],

source:"Plumb's Veterinary Drug Handbook"

},
"Cefpodoxime": {

class:"3rd Generation Cephalosporin",

dogDose:"5-10 mg/kg",

catDose:"5-10 mg/kg",

route:"PO",

frequency:"q24h",

uses:"Pyoderma, wound infections, urinary tract infections, respiratory infections",

sideEffects:"Vomiting, diarrhea, decreased appetite",

contraindications:"Known cephalosporin hypersensitivity",

brands:[
"Simplicef",
"Cepodem"
],

source:"Plumb's Veterinary Drug Handbook"

},

"Gentamicin": {

class:"Aminoglycoside",

dogDose:"10-14 mg/kg",

catDose:"5-8 mg/kg",

route:"IV/IM/SC",

frequency:"q24h",

uses:"Gram negative bacterial infections, urinary tract infections, septicemia",

sideEffects:"Nephrotoxicity, ototoxicity, vomiting",

contraindications:"Renal disease, dehydration, concurrent nephrotoxic drugs",

brands:[
"Genticin",
"Gentavet"
],

source:"MSD Veterinary Manual / Merck Veterinary Manual"

},

"Amikacin": {

class:"Aminoglycoside",

dogDose:"15-30 mg/kg",

catDose:"10-15 mg/kg",

route:"IV/IM/SC",

frequency:"q24h",

uses:"Severe gram negative infections, resistant bacterial infections, septicemia",

sideEffects:"Nephrotoxicity, ototoxicity",

contraindications:"Renal disease, dehydration",

brands:[
"Amikacin Sulfate"
],

source:"MSD Veterinary Manual / Merck Veterinary Manual"

},

"Neomycin": {

class:"Aminoglycoside",

dogDose:"20 mg/kg PO",

catDose:"20 mg/kg PO",

route:"PO",

frequency:"q6-8h",

uses:"Hepatic encephalopathy, gastrointestinal infections, bowel decontamination",

sideEffects:"Nephrotoxicity, ototoxicity, diarrhea",

contraindications:"Renal disease, dehydration",

brands:[
"Neomycin Sulfate"
],

source:"Veterinary Drug Handbook references / Vet Drugs List"

},

"Streptomycin": {

class:"Aminoglycoside",

dogDose:"5-11 mg/kg",

catDose:"5-11 mg/kg",

route:"IM",

frequency:"q12h",

uses:"Leptospirosis, susceptible gram-negative infections",

sideEffects:"Nephrotoxicity, ototoxicity, injection site pain",

contraindications:"Renal disease, dehydration, concurrent aminoglycosides",

brands:[
"Streptomycin Sulfate"
],

source:"Merck Veterinary Manual"

},

"Doxycycline": {

class:"Tetracycline",

dogDose:"5-10 mg/kg",

catDose:"5-10 mg/kg",

route:"PO/IV",

frequency:"q12-24h",

uses:"Ehrlichiosis, Anaplasmosis, Lyme disease, Leptospirosis, Mycoplasmosis, Respiratory infections",

sideEffects:"Vomiting, diarrhea, esophagitis (especially in cats)",

contraindications:"Pregnancy, growing animals, tetracycline hypersensitivity",

brands:[
"Doxicip",
"Doxt",
"Doxy-1-L-Dr",
"Vibramycin"
],

source:"Plumb's Veterinary Drug Handbook, Merck Veterinary Manual",

verificationStatus:"Verified"

},

"Oxytetracycline": {

class:"Tetracycline",

dogDose:"10-20 mg/kg",

catDose:"10-20 mg/kg",

route:"IV/IM/PO",

frequency:"q8-12h",

uses:"Leptospirosis, respiratory infections, susceptible bacterial infections",

sideEffects:"GI upset, injection site irritation",

contraindications:"Pregnancy, severe renal disease",

brands:[
"Terramycin"
],

source:"Plumb's Veterinary Drug Handbook, Merck Veterinary Manual",

verificationStatus:"Verified"

},

"Tetracycline": {

class:"Tetracycline",

dogDose:"22 mg/kg",

catDose:"22 mg/kg",

route:"PO",

frequency:"q8h",

uses:"Respiratory infections, susceptible bacterial infections",

sideEffects:"Vomiting, diarrhea",

contraindications:"Pregnancy, tetracycline hypersensitivity",

brands:[
"Achromycin"
],

source:"Veterinary Formulary References",

verificationStatus:"Verified"

},
"Minocycline": {

class:"Tetracycline",

dogDose:"5-10 mg/kg",

catDose:"5-10 mg/kg",

route:"PO",

frequency:"q12h",

uses:"Tick-borne diseases, respiratory infections, skin infections",

sideEffects:"Vomiting, diarrhea",

contraindications:"Tetracycline hypersensitivity",

brands:[
"Minocin"
],

source:"Plumb's Veterinary Drug Handbook",

verificationStatus:"Verified"

},

"Ofloxacin": {

class:"Fluoroquinolone",

dogDose:"5-10 mg/kg",

catDose:"5-10 mg/kg",

route:"PO/Ophthalmic/Otic",

frequency:"q12-24h",

uses:"Eye infections, ear infections, susceptible bacterial infections",

sideEffects:"GI upset",

contraindications:"Fluoroquinolone hypersensitivity",

brands:[
"Oflox"
],

source:"Veterinary References",

verificationStatus:"Needs Review"

},
"Enrofloxacin": {

class:"Fluoroquinolone",

dogDose:"5-20 mg/kg",

catDose:"5 mg/kg",

route:"PO/IV/SC",

frequency:"q24h",

uses:"Urinary tract infections, respiratory infections, skin infections, soft tissue infections, gram negative bacterial infections",

sideEffects:"Vomiting, diarrhea, cartilage damage in growing animals, retinal toxicity at high doses in cats",

contraindications:"Growing puppies, high doses in cats, known fluoroquinolone hypersensitivity",

brands:[
"Baytril",
"Enroxil",
"Enrocin"
],

source:"Merck Veterinary Manual, Bayer Baytril Product Information, BSAVA Formulary",

verificationStatus:"Verified"

},

"Marbofloxacin": {

class:"Fluoroquinolone",

dogDose:"2.75-5.5 mg/kg",

catDose:"2.75-5.5 mg/kg",

route:"PO",

frequency:"q24h",

uses:"Skin infections, urinary tract infections, respiratory infections",

sideEffects:"Vomiting, diarrhea",

contraindications:"Growing animals, fluoroquinolone hypersensitivity",

brands:[
"Marbocyl",
"Marbox"
],

source:"Merck Veterinary Manual, Manufacturer Label",

verificationStatus:"Verified"

},
"Orbifloxacin": {

class:"Fluoroquinolone",

dogDose:"2.5-7.5 mg/kg",

catDose:"2.5-7.5 mg/kg",

route:"PO",

frequency:"q24h",

uses:"Skin infections, urinary tract infections",

sideEffects:"Vomiting, diarrhea",

contraindications:"Growing animals",

brands:[
"Orbax"
],

source:"Manufacturer Label, BSAVA",

verificationStatus:"Verified"

},

"Pradofloxacin": {

class:"Fluoroquinolone",

dogDose:"3 mg/kg",

catDose:"5 mg/kg",

route:"PO",

frequency:"q24h",

uses:"Skin infections, abscesses, respiratory infections",

sideEffects:"Vomiting, diarrhea",

contraindications:"Fluoroquinolone hypersensitivity",

brands:[
"Veraflox"
],

source:"Manufacturer Label, BSAVA",

verificationStatus:"Verified"

},

"Ciprofloxacin": {

class:"Fluoroquinolone",

dogDose:"10-20 mg/kg",

catDose:"10-15 mg/kg",

route:"PO",

frequency:"q12h",

uses:"Gram negative infections, urinary tract infections",

sideEffects:"Vomiting, diarrhea",

contraindications:"Growing animals",

brands:[
"Ciplox",
"Cifran"
],

source:"Veterinary Formulary References",

verificationStatus:"Needs Review"

},

"Azithromycin": {

class:"Macrolide",

dogDose:"5-10 mg/kg",

catDose:"5-10 mg/kg",

route:"PO",

frequency:"q24h",

uses:"Respiratory infections, skin infections, Bartonella infections, atypical bacterial infections",

sideEffects:"Vomiting, diarrhea, anorexia",

contraindications:"Known macrolide hypersensitivity",

brands:[
"Azithral",
"Azee",
"Zithromax"
],

source:"Plumb's Veterinary Drug Handbook, BSAVA Formulary",

verificationStatus:"Verified"

},
"Erythromycin": {

class:"Macrolide",

dogDose:"10-15 mg/kg",

catDose:"10-15 mg/kg",

route:"PO",

frequency:"q8h",

uses:"Respiratory infections, Campylobacter infections, gram positive infections",

sideEffects:"Vomiting, diarrhea, abdominal pain",

contraindications:"Severe liver disease, macrolide hypersensitivity",

brands:[
"Erythrocin"
],

source:"Plumb's Veterinary Drug Handbook, Merck Veterinary Manual",

verificationStatus:"Verified"

},
"Clarithromycin": {

class:"Macrolide",

dogDose:"5-10 mg/kg",

catDose:"5-10 mg/kg",

route:"PO",

frequency:"q12h",

uses:"Mycobacterial infections, respiratory infections, Helicobacter therapy",

sideEffects:"Vomiting, diarrhea",

contraindications:"Macrolide hypersensitivity",

brands:[
"Klacid",
"Claribid"
],

source:"Plumb's Veterinary Drug Handbook",

verificationStatus:"Verified"

},

"Tylosin": {

class:"Macrolide",

dogDose:"10-20 mg/kg",

catDose:"10 mg/kg",

route:"PO",

frequency:"q12h",

uses:"Chronic enteropathy, antibiotic responsive diarrhea, respiratory infections",

sideEffects:"GI upset, diarrhea",

contraindications:"Macrolide hypersensitivity",

brands:[
"Tylan"
],

source:"Plumb's Veterinary Drug Handbook, BSAVA Formulary",

verificationStatus:"Verified"

},
"Tulathromycin": {

class:"Macrolide",

dogDose:"Not Established",

catDose:"Not Established",

route:"SC",

frequency:"Veterinary Extra-label Use",

uses:"Primarily food animal respiratory disease",

sideEffects:"Injection site reactions",

contraindications:"Not routinely recommended in dogs and cats",

brands:[
"Draxxin"
],

source:"Manufacturer Label, Merck Veterinary References",

verificationStatus:"Not Recommended For Routine Small Animal Use"

},

"Trimethoprim-Sulfamethoxazole": {

class:"Potentiated Sulfonamide",

dogDose:"15-30 mg/kg",

catDose:"15-30 mg/kg",

route:"PO",

frequency:"q12h",

uses:"Urinary tract infections, respiratory infections, skin infections, susceptible bacterial infections",

sideEffects:"Vomiting, diarrhea, keratoconjunctivitis sicca (dogs), blood dyscrasias",

contraindications:"Sulfonamide hypersensitivity, severe liver disease",

brands:[
"Septran",
"Bactrim"
],

source:"Plumb's Veterinary Drug Handbook, Merck Veterinary Manual",

verificationStatus:"Verified"

},
"Trimethoprim-Sulfadiazine": {

class:"Potentiated Sulfonamide",

dogDose:"15-30 mg/kg",

catDose:"15-30 mg/kg",

route:"PO",

frequency:"q12h",

uses:"Respiratory infections, urinary tract infections, skin infections, coccidiosis",

sideEffects:"Vomiting, diarrhea, KCS, hepatotoxicity",

contraindications:"Sulfonamide hypersensitivity",

brands:[
"Tribrissen"
],

source:"Plumb's Veterinary Drug Handbook, BSAVA Formulary",

verificationStatus:"Verified"

},

"Sulfadimethoxine": {

class:"Sulfonamide",

dogDose:"50-55 mg/kg first dose, then 25-27.5 mg/kg",

catDose:"50-55 mg/kg first dose, then 25-27.5 mg/kg",

route:"PO",

frequency:"q24h",

uses:"Coccidiosis, bacterial enteritis, susceptible bacterial infections",

sideEffects:"Vomiting, diarrhea, crystalluria",

contraindications:"Sulfonamide hypersensitivity",

brands:[
"Albon"
],

source:"Plumb's Veterinary Drug Handbook, Merck Veterinary Manual",

verificationStatus:"Verified"

},
"Sulfamethazine": {

class:"Sulfonamide",

dogDose:"55 mg/kg first dose, then 27.5 mg/kg",

catDose:"55 mg/kg first dose, then 27.5 mg/kg",

route:"PO",

frequency:"q24h",

uses:"Coccidiosis, susceptible bacterial infections",

sideEffects:"Vomiting, diarrhea, crystalluria",

contraindications:"Sulfonamide hypersensitivity",

brands:[
"Sulfamezathine"
],

source:"Veterinary Formulary References",

verificationStatus:"Needs Review"

},
"Sulfasalazine": {

class:"Sulfonamide",

dogDose:"10-25 mg/kg",

catDose:"Use With Caution",

route:"PO",

frequency:"q8-12h",

uses:"Inflammatory bowel disease, colitis",

sideEffects:"Keratoconjunctivitis sicca, vomiting, diarrhea",

contraindications:"Sulfonamide hypersensitivity",

brands:[
"Salazopyrin"
],

source:"Plumb's Veterinary Drug Handbook",

verificationStatus:"Verified"

},

"Clindamycin": {

class:"Lincosamide",

dogDose:"5.5-11 mg/kg",

catDose:"5.5-11 mg/kg",

route:"PO/IM",

frequency:"q12h",

uses:"Dental infections, osteomyelitis, toxoplasmosis, skin infections",

sideEffects:"Vomiting, diarrhea, esophagitis in cats",

contraindications:"Hypersensitivity to lincosamides",

brands:[
"Antirobe",
"Dalacin C"
],

source:"Plumb's Veterinary Drug Handbook, Merck Veterinary Manual",

verificationStatus:"Verified"

},

"Lincomycin": {

class:"Lincosamide",

dogDose:"15-25 mg/kg",

catDose:"10-20 mg/kg",

route:"PO/IM",

frequency:"q12h",

uses:"Skin infections, respiratory infections, susceptible gram positive infections",

sideEffects:"Vomiting, diarrhea",

contraindications:"Hypersensitivity to lincosamides",

brands:[
"Lincocin"
],

source:"Plumb's Veterinary Drug Handbook",

verificationStatus:"Verified"

},

"Chloramphenicol": {

class:"Phenicol",

dogDose:"40-50 mg/kg",

catDose:"10-25 mg/kg",

route:"PO",

frequency:"q8h",

uses:"Anaerobic infections, CNS infections, ocular infections, resistant bacterial infections",

sideEffects:"Vomiting, diarrhea, bone marrow suppression (rare)",

contraindications:"Breeding animals, severe liver disease",

brands:[
"Chloromycetin"
],

source:"Plumb's Veterinary Drug Handbook, Merck Veterinary Manual",

verificationStatus:"Verified"

},

"Florfenicol": {

class:"Phenicol",

dogDose:"Not Established",

catDose:"Not Established",

route:"IM/SC",

frequency:"N/A",

uses:"Primarily food animal respiratory disease",

sideEffects:"Injection site reactions, GI upset",

contraindications:"Not routinely recommended in dogs and cats",

brands:[
"Nuflor"
],

source:"FDA Label, Merck Veterinary Manual",

verificationStatus:"Not Recommended For Routine Small Animal Use"

},
"Thiamphenicol": {

class:"Phenicol",

dogDose:"Verification Pending",

catDose:"Verification Pending",

route:"PO/IM",

frequency:"Verification Pending",

uses:"Respiratory infections, susceptible bacterial infections",

sideEffects:"GI upset",

contraindications:"Phenicol hypersensitivity",

brands:[
"Various International Brands"
],

source:"Verification Pending",

verificationStatus:"Pending"

},

"Metronidazole": {

class:"Nitroimidazole",

dogDose:"10-15 mg/kg",

catDose:"10-15 mg/kg",

route:"PO/IV",

frequency:"q12h",

uses:"Giardiasis, anaerobic infections, inflammatory bowel disease, Clostridial diarrhea",

sideEffects:"Vomiting, diarrhea, neurotoxicity at high doses",

contraindications:"Severe liver disease, known hypersensitivity",

brands:[
"Metrogyl",
"Flagyl"
],

source:"Merck Veterinary Manual, Plumb's Veterinary Drug Handbook",

verificationStatus:"Verified"

},
"Ronidazole": {

class:"Nitroimidazole",

dogDose:"Verification Pending",

catDose:"30 mg/kg",

route:"PO",

frequency:"q24h",

uses:"Tritrichomonas foetus infection in cats",

sideEffects:"Neurological signs at overdose",

contraindications:"Use cautiously in neurologic patients",

brands:[
"Ronidazole Capsules"
],

source:"Feline Medicine References, Plumb's",

verificationStatus:"Partially Verified"

}
,
"Tinidazole": {

class:"Nitroimidazole",

dogDose:"20-30 mg/kg",

catDose:"Verification Pending",

route:"PO",

frequency:"q24h",

uses:"Giardiasis, anaerobic infections",

sideEffects:"Vomiting, anorexia",

contraindications:"Nitroimidazole hypersensitivity",

brands:[
"Tiniba"
],

source:"Veterinary Formulary References",

verificationStatus:"Needs Review"

},
"Ornidazole": {

class:"Nitroimidazole",

dogDose:"20-25 mg/kg",

catDose:"Verification Pending",

route:"PO",

frequency:"q24h",

uses:"Giardiasis, anaerobic bacterial infections",

sideEffects:"Vomiting, diarrhea",

contraindications:"Nitroimidazole hypersensitivity",

brands:[
"Ornida"
],

source:"Veterinary References",

verificationStatus:"Needs Review"

},

"Polymyxin B": {

class:"Polymyxin",

dogDose:"6000-10000 IU/kg",

catDose:"6000-10000 IU/kg",

route:"IV",

frequency:"q8-12h",

uses:"Severe multidrug-resistant gram negative infections, endotoxemia adjunct therapy",

sideEffects:"Nephrotoxicity, neurotoxicity",

contraindications:"Renal disease, dehydration",

brands:[
"Poly B",
"Polyxin B"
],

source:"Merck Veterinary Manual, Plumb's Veterinary Drug Handbook",

verificationStatus:"Verified"

},

"Colistin": {

class:"Polymyxin",

dogDose:"Verification Pending",

catDose:"Verification Pending",

route:"PO/IV",

frequency:"Verification Pending",

uses:"Multidrug-resistant gram negative infections",

sideEffects:"Nephrotoxicity, neurotoxicity",

contraindications:"Renal disease",

brands:[
"Colimycin",
"Colistin Sulfate"
],

source:"Merck Veterinary Manual, WHO Antimicrobial References",

verificationStatus:"Pending"

},

"Imipenem": {

class:"Carbapenem",

dogDose:"5-10 mg/kg",

catDose:"5-10 mg/kg",

route:"IV",

frequency:"q6-8h",

uses:"Severe multidrug-resistant bacterial infections, septicemia, hospital-acquired infections",

sideEffects:"Vomiting, diarrhea, seizures (rare)",

contraindications:"Known beta-lactam hypersensitivity",

brands:[
"Tienam"
],

source:"Merck Veterinary Manual, Plumb's Veterinary Drug Handbook",

verificationStatus:"Verified"

},
"Meropenem": {

class:"Carbapenem",

dogDose:"8-12 mg/kg",

catDose:"8-12 mg/kg",

route:"IV",

frequency:"q8h",

uses:"Severe gram-negative infections, septicemia, MDR infections",

sideEffects:"GI upset, injection site reactions",

contraindications:"Known beta-lactam hypersensitivity",

brands:[
"Meronem"
],

source:"Plumb's Veterinary Drug Handbook",

verificationStatus:"Verified"

},
"Ertapenem": {

class:"Carbapenem",

dogDose:"20-30 mg/kg",

catDose:"20-30 mg/kg",

route:"IV/SC",

frequency:"q24h",

uses:"Multidrug-resistant bacterial infections",

sideEffects:"Vomiting, diarrhea",

contraindications:"Known beta-lactam hypersensitivity",

brands:[
"Invanz"
],

source:"Veterinary Formulary References",

verificationStatus:"Needs Review"

},

"Aztreonam": {

class:"Monobactam",

dogDose:"15-30 mg/kg",

catDose:"15-30 mg/kg",

route:"IV/IM",

frequency:"q6-8h",

uses:"Gram-negative bacterial infections, resistant infections",

sideEffects:"Injection site reactions, diarrhea",

contraindications:"Monobactam hypersensitivity",

brands:[
"Azactam"
],

source:"Plumb's Veterinary Drug Handbook, Merck Veterinary Manual",

verificationStatus:"Verified"

},
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
,

"Tramadol": {
    class: "Analgesic",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO",
    frequency: "Coming Soon"
},

"Gabapentin": {
    class: "Analgesic",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO",
    frequency: "Coming Soon"
},

"Buprenorphine": {
    class: "Opioid Analgesic",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "IV/IM",
    frequency: "Coming Soon"
},

"Butorphanol": {
    class: "Opioid Analgesic",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "IV/IM",
    frequency: "Coming Soon"
},

"Morphine": {
    class: "Opioid Analgesic",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "IV/IM",
    frequency: "Coming Soon"
},

"Fentanyl": {
    class: "Opioid Analgesic",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "IV/CRI",
    frequency: "Coming Soon"
},
"Amoxicillin + Sulbactam": {

class:"Aminopenicillin + Beta Lactamase Inhibitor",

dogDose:"10-20 mg/kg",

catDose:"10-20 mg/kg",

route:"PO/IV",

frequency:"q12h",

uses:"Skin infections, respiratory infections, urinary tract infections, resistant bacterial infections",

sideEffects:"Vomiting, diarrhea, hypersensitivity reactions",

contraindications:"Known penicillin hypersensitivity",

brands:[
"Moxclav-S",
"Amoxyclav-S"
],

source:"Plumb's Veterinary Drug Handbook"

},

"Ampicillin + Sulbactam": {

class:"Aminopenicillin + Beta Lactamase Inhibitor",

dogDose:"10-30 mg/kg",

catDose:"10-30 mg/kg",

route:"IV/IM",

frequency:"q8h",

uses:"Soft tissue infections, respiratory infections, urinary tract infections",

sideEffects:"Vomiting, diarrhea, allergic reactions",

contraindications:"Known penicillin hypersensitivity",

brands:[
"Unasyn"
],

source:"Plumb's Veterinary Drug Handbook"

},

"Ceftriaxone + Sulbactam": {

class:"3rd Generation Cephalosporin + Beta Lactamase Inhibitor",

dogDose:"25-50 mg/kg",

catDose:"25-50 mg/kg",

route:"IV/IM",

frequency:"q12-24h",

uses:"Severe respiratory infections, septicemia, urinary tract infections, resistant bacterial infections",

sideEffects:"Vomiting, diarrhea, injection site pain",

contraindications:"Known cephalosporin hypersensitivity",

brands:[
"Monocef-SB",
"Rosuvas-SB"
],

source:"Plumb's Veterinary Drug Handbook"

},
"Cefoperazone + Sulbactam": {

class:"3rd Generation Cephalosporin + Beta Lactamase Inhibitor",

dogDose:"25-50 mg/kg",

catDose:"25-50 mg/kg",

route:"IV/IM",

frequency:"q12h",

uses:"Severe gram negative infections, respiratory infections, septicemia",

sideEffects:"Vomiting, diarrhea, hypersensitivity reactions",

contraindications:"Known cephalosporin hypersensitivity",

brands:[
"Magnex",
"Cefobid-S"
],

source:"Plumb's Veterinary Drug Handbook"

},
"Piperacillin + Tazobactam": {

class:"Extended Spectrum Penicillin + Beta Lactamase Inhibitor",

dogDose:"50 mg/kg",

catDose:"50 mg/kg",

route:"IV",

frequency:"q6-8h",

uses:"Severe bacterial infections, septicemia, hospital acquired infections, pseudomonas infections",

sideEffects:"Diarrhea, injection site reactions, hypersensitivity",

contraindications:"Known beta-lactam allergy",

brands:[
"Piptaz",
"Zosyn"
],

source:"Plumb's Veterinary Drug Handbook"

},

"Cefepime + Tazobactam": {

class:"4th Generation Cephalosporin + Beta Lactamase Inhibitor",

dogDose:"20-40 mg/kg",

catDose:"20-40 mg/kg",

route:"IV",

frequency:"q8-12h",

uses:"Hospital acquired infections, severe gram negative infections, septicemia",

sideEffects:"Vomiting, diarrhea, injection site reactions",

contraindications:"Known cephalosporin hypersensitivity",

brands:[
"Cefepime-TZ"
],

source:"Plumb's Veterinary Drug Handbook"

},

"Ticarcillin + Clavulanate": {

class:"Antipseudomonal Penicillin + Beta Lactamase Inhibitor",

dogDose:"50 mg/kg",

catDose:"50 mg/kg",

route:"IV",

frequency:"q6-8h",

uses:"Pseudomonas infections, severe gram negative infections, septicemia",

sideEffects:"Vomiting, diarrhea, hypersensitivity reactions",

contraindications:"Known beta-lactam allergy",

brands:[
"Timentin"
],

source:"Plumb's Veterinary Drug Handbook"

},
"Levofloxacin": {

class:"Fluoroquinolone",

dogDose:"10 mg/kg",

catDose:"10 mg/kg",

route:"PO/IV",

frequency:"q24h",

uses:"Respiratory infections, urinary tract infections",

sideEffects:"Vomiting, diarrhea",

contraindications:"Growing animals",

brands:[
"Levoflox"
],

source:"Veterinary References",

verificationStatus:"Needs Review"

},


"Danofloxacin": {

class:"Fluoroquinolone",

dogDose:"Not Established",

catDose:"Not Established",

route:"Veterinary Food Animal Use",

frequency:"N/A",

uses:"Primarily respiratory infections in cattle, pigs and poultry",

sideEffects:"See species-specific label",

contraindications:"Not routinely recommended in dogs and cats",

brands:[
"Advocin",
"Advocid"
],

source:"MSD Veterinary Manual, FDA, FAO",

verificationStatus:"Not Recommended For Small Animal Database"

},

"Difloxacin": {

class:"Fluoroquinolone",

dogDose:"5-10 mg/kg",

catDose:"Not Recommended",

route:"PO",

frequency:"q24h",

uses:"Skin infections, soft tissue infections, urinary tract infections",

sideEffects:"Vomiting, diarrhea, anorexia, arthropathy in growing dogs",

contraindications:"Growing dogs, CNS disorders, fluoroquinolone hypersensitivity",

brands:[
"Dicural"
],

source:"MSD Veterinary Manual, EMA Dicural Product Information",

verificationStatus:"Verified"

},
"Tobramycin": {
    class: "Aminoglycoside",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "Ophthalmic/IV",
    frequency: "Coming Soon"
},

"Kanamycin": {
    class: "Aminoglycoside",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "IM/IV",
    frequency: "Coming Soon"
},

"Paromomycin": {
    class: "Aminoglycoside",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO",
    frequency: "Coming Soon"
},
"Demeclocycline": {

class:"Tetracycline",

dogDose:"22 mg/kg",

catDose:"22 mg/kg",

route:"PO",

frequency:"q8-12h",

uses:"Susceptible bacterial infections",

sideEffects:"Vomiting, diarrhea",

contraindications:"Pregnancy, tetracycline hypersensitivity",

brands:[
"Declomycin"
],

source:"Veterinary Drug References",

verificationStatus:"Needs Review"

},

"Chlortetracycline": {

class:"Tetracycline",

dogDose:"22 mg/kg",

catDose:"22 mg/kg",

route:"PO",

frequency:"q8h",

uses:"Susceptible bacterial infections",

sideEffects:"GI upset",

contraindications:"Pregnancy, tetracycline hypersensitivity",

brands:[
"Aureomycin"
],

source:"Veterinary Drug References",

verificationStatus:"Needs Review"

},
"Spiramycin": {

class:"Macrolide",

dogDose:"75,000 IU/kg",

catDose:"75,000 IU/kg",

route:"PO",

frequency:"q12h",

uses:"Periodontal infections, oral infections, toxoplasmosis combination therapy",

sideEffects:"Vomiting, diarrhea",

contraindications:"Macrolide hypersensitivity",

brands:[
"Stomorgyl"
],

source:"Plumb's Veterinary Drug Handbook, European Veterinary Formularies",

verificationStatus:"Verified"

},
"Tilmicosin": {

class:"Macrolide",

dogDose:"Contraindicated",

catDose:"Contraindicated",

route:"N/A",

frequency:"N/A",

uses:"Food animal respiratory infections",

sideEffects:"Severe cardiotoxicity",

contraindications:"Dogs, Cats, Humans",

brands:[
"Micotil"
],

source:"FDA, Merck Veterinary Manual",

verificationStatus:"Contraindicated In Dogs And Cats"

},

"Gamithromycin": {

class:"Macrolide",

dogDose:"Not Established",

catDose:"Not Established",

route:"SC",

frequency:"N/A",

uses:"Bovine respiratory disease",

sideEffects:"Injection site swelling",

contraindications:"Not routinely used in dogs and cats",

brands:[
"Zactran"
],

source:"EMA/FDA Product Information",

verificationStatus:"Not Recommended For Small Animal Use"

},
"Levamisole": {
    class: "Imidazothiazole Anthelmintic",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO/SC",
    frequency: "Coming Soon"
},

"Febantel": {
    class: "Probenzimidazole Anthelmintic",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO",
    frequency: "Coming Soon"
},

"Nitazoxanide": {
    class: "Antiprotozoal / Anthelmintic",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO",
    frequency: "Coming Soon"
},

"Closantel": {
    class: "Salicylanilide Anthelmintic",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO/SC",
    frequency: "Coming Soon"
},

"Rafoxanide": {
    class: "Salicylanilide Anthelmintic",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO",
    frequency: "Coming Soon"
},
"Atipamezole": {
    class: "Alpha-2 Antagonist",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "IM",
    frequency: "Coming Soon"
},

"Yohimbine": {
    class: "Alpha-2 Antagonist",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "IV/IM",
    frequency: "Coming Soon"
},

"Alfaxalone": {
    class: "Neuroactive Steroid Anesthetic",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "IV/IM",
    frequency: "Coming Soon"
},

"Tiletamine + Zolazepam": {
    class: "Dissociative Anesthetic + Benzodiazepine",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "IV/IM",
    frequency: "Coming Soon"
},

"Isoflurane": {
    class: "Inhalation Anesthetic",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "Inhalation",
    frequency: "Continuous"
},

"Sevoflurane": {
    class: "Inhalation Anesthetic",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "Inhalation",
    frequency: "Continuous"
},
"Deracoxib": {
    class: "NSAID",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO",
    frequency: "Coming Soon"
},

"Mavacoxib": {
    class: "NSAID",
    dogDose: "Coming Soon",
    catDose: "Not Recommended",
    route: "PO",
    frequency: "Coming Soon"
},

"Grapiprant": {
    class: "EP4 Receptor Antagonist",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO",
    frequency: "Coming Soon"
},
"Codeine": {
    class: "Opioid Analgesic",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "PO",
    frequency: "Coming Soon"
},

"Methadone": {
    class: "Opioid Analgesic",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "IV/IM",
    frequency: "Coming Soon"
},

"Hydromorphone": {
    class: "Opioid Analgesic",
    dogDose: "Coming Soon",
    catDose: "Coming Soon",
    route: "IV/IM",
    frequency: "Coming Soon"
},

};