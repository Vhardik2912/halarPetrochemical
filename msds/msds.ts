/**
 * Detailed Chemical Product Interface
 */
export interface ChemicalSpecification {
  parameter: string;
  requirement: string; // The standard/specification limit
  result: string;      // The actual analytical result
  uom?: string;        // Unit of Measure
}

export interface ChemicalProduct {
  id: string;
  productName: string;
  identifiers: {
    casNumber?: string;
    chemicalFormula?: string;
    molecularWeight?: string;
    productCode?: string;
    batchNumber?: string;
    ecNumber?: string;
    mdlNumber?: string;
    beilsteinRegistryNo?: string;
    hsnCode?: string;
    inciName?: string;
    dangerousGoodsNumber?: string;
  };
  details: {
    appearance?: string;
    odor?: string;
    solubility?: string;
    density?: string;
    meltingPoint?: string;
    boilingPoint?: string;
    purity?: string;
    introduction?: string;
    steamPressure?: string;
    relativeMolecularMass?: string;
  };
  specifications: ChemicalSpecification[];
  applications: string[];
  packaging: string[];
  dates?: {
    mfgDate?: string;
    expDate?: string;
    retestDate?: string;
    samplingDate?: string;
  };
  safetyInfo?: {
    hazards?: string[];
    firstAid?: Record<string, string>;
    symptoms?: Record<string, string>;
    preventiveMeasures?: Record<string, string>;
    fireExtinguisher?: string;
    spillage?: string;
    storageInfo?: string;
  };
  brandNames?: string[];
  origin?: string;
  remarks?: string;
}

/**
 * PRODUCT CATALOG - EXTRACTED DATA ONE BY ONE
 */
export const chemicalCatalog: ChemicalProduct[] = [
  {
    id: "aluminium-sulphate",
    productName: "ALUMINIUM SULPHATE (NON-FERRIC ALUM)",
    identifiers: { casNumber: "10043-01-3" },
    details: {
      appearance: "Variable Lumps form 1” to 4” size or Variable powder form around 60 Mesh"
    },
    specifications: [
      { parameter: "Insoluble matter", requirement: "0.3 % Weight maximum", result: "0.3 %" },
      { parameter: "Iron (as Fe)", requirement: "100 ppm Maximum", result: "100 ppm" },
      { parameter: "PH (of 5% solution)", requirement: "2.80 minimum", result: "2.80" },
      { parameter: "Aluminium (As AL203%)", requirement: "17.00 % Percent by weight minimum", result: "17.00 %" }
    ],
    applications: [],
    packaging: ["50kg. HDPE Bags with inner liner"],
    // Source: [1]
  },
  {
    id: "acetic-acid",
    productName: "Acetic Acid",
    identifiers: { chemicalFormula: "CH3COOH" },
    details: {
      appearance: "Clear and Bright",
      odor: "Strong pungent odor and distinctive sour taste",
      solubility: "Miscible with polar and non-polar solvents such as water, chloroform, and hexane",
      introduction: "Acetic acid is a simple monocarboxylic acid. It is volatile, reactive, and flammable. It is a hydrophilic (polar) protic solvent. Acetic acid is corrosive, and its vapour is irritating to eyes and nose."
    },
    specifications: [
      { parameter: "Platinum Cobalt Color", requirement: "5 Pt/Co", result: "5 Pt/Co" },
      { parameter: "Water Content", requirement: "0.033 %(m/m)", result: "0.033 %(m/m)" },
      { parameter: "Relative Density at 20/20°C", requirement: "1.0511", result: "1.0511" },
      { parameter: "Freezing Point", requirement: "16.45°C", result: "16.45°C" },
      { parameter: "Purity", requirement: "99.90 % (m/m)", result: "99.90 % (m/m)" },
      { parameter: "Formic Acid", requirement: "0.005 % (m/m)", result: "0.005 % (m/m)" },
      { parameter: "Acetaldehyde Content", requirement: "0.001 % (m/m)", result: "0.001 % (m/m)" },
      { parameter: "Iron Content", requirement: "0.11 mg/kg", result: "0.11 mg/kg" },
      { parameter: "Non-Volatile Matter", requirement: "8 mg/kg", result: "8 mg/kg" },
      { parameter: "Permanganate Time", requirement: "> 60 min", result: "> 60 min" }
    ],
    applications: [
      "Industrial preparation of dimethyl terephthalate (DMT)",
      "Production of vinyl acetate monomer",
      "Production of acetic anhydride and ester",
      "Solvent for recrystallization to purify organic compounds",
      "Fabric dyeing, production of nylon and leather tanning",
      "Herbicide for broadleaf weeds and weed grasses"
    ],
    packaging: ["Tanks", "Drums"],
    // Sources: [2-5]
  },
  {
    id: "acetone",
    productName: "Acetone (Dimethylketone)",
    identifiers: { chemicalFormula: "CH3COCH3" },
    details: {
      appearance: "Clear, colorless, liquid",
      introduction: "Acetone is a flammable, low toxic, water-miscible compound with a variety of everyday uses in industry, the laboratory, pharmaceuticals and the home."
    },
    specifications: [
      { parameter: "Acetone (Dry Basis)", requirement: "99.97 wt%", result: "99.97 wt%" },
      { parameter: "Water", requirement: "0.20 wt%", result: "0.20 wt%" },
      { parameter: "Permanganate Time", requirement: "> 120 min", result: "> 120 min" },
      { parameter: "Color (Pt/Co)", requirement: "< 5", result: "< 5" },
      { parameter: "Acidity as Acetic Acid", requirement: "7.0 wt ppm", result: "7.0 wt ppm" },
      { parameter: "Alkalinity as Ammonia", requirement: "< 1.0 wt ppm", result: "< 1.0 wt ppm" },
      { parameter: "Iron", requirement: "< 0.01wt ppm", result: "< 0.01wt ppm" },
      { parameter: "Benzene", requirement: "< 1.0 wt ppm", result: "< 1.0 wt ppm" },
      { parameter: "Specific Gravity @ 20/20°C", requirement: "0.7917", result: "0.7917" },
      { parameter: "Distillation Range at 760 mmHg", requirement: "0.3 °C", result: "0.3 °C" },
      { parameter: "Mesityl Oxide", requirement: "< 1.0 wt ppm", result: "< 1.0 wt ppm" },
      { parameter: "Diacetone Alcohol", requirement: "< 5 wt ppm", result: "< 5 wt ppm" },
      { parameter: "Methanol", requirement: "184 wt ppm", result: "184 wt ppm" },
      { parameter: "Non-Volatile Matter", requirement: "< 1.0 mg/100mL", result: "< 1.0 mg/100mL" }
    ],
    applications: [
      "Polar, aprotic solvent for synthesis and isolation of compounds",
      "Precursor to methyl methacrylate (plastics and PVC industries)",
      "Pharmaceutical denaturant for alcohol",
      "Active ingredient in cleaning products, nail polish removers, and thinners",
      "Oil spill cleanup (dissolving sludge)",
      "Rinsing laboratory glassware",
      "Synthesis of t-butanesulfinamide, terpenes, and gold colloids",
      "Protein crystallization"
    ],
    packaging: ["Tanks", "Drums"],
    // Sources: [6-9]
  },
  {
    id: "butyl-glycol",
    productName: "Butyl glycol (2-butoxyethanol)",
    identifiers: { chemicalFormula: "C6H14O2" },
    details: {
      appearance: "Clear and Bright, Free from Suspended Matter",
      odor: "Characteristic, but mild, odour",
      solubility: "Miscible with water and with common organic solvents",
      introduction: "Butyl glycol is produced commercially for use dominated by the paint industry."
    },
    specifications: [
      { parameter: "Platinum-Cobalt Color", requirement: "5", result: "5" },
      { parameter: "Water Content", requirement: "285 mg/kg", result: "285 mg/kg" },
      { parameter: "Density at 20°C", requirement: "0.9002 kg/dm3", result: "0.9002 kg/dm3" },
      { parameter: "Relative Density 20/20°C", requirement: "0.9018", result: "0.9018" },
      { parameter: "B.G.E Purity", requirement: "99.4 %", result: "99.4 %" },
      { parameter: "Acidity as Acetic acid", requirement: "0.0026 %", result: "0.0026 %" }
    ],
    applications: [
      "Low volatility solvent to extend drying times and improve flow in coatings",
      "Flow improver for urea, melamine and phenolic stoving finishes",
      "Solvent in printing inks and textile dyes",
      "Component of hydraulic fluids, drilling and cutting oils",
      "Major component of Corexit 9527 (oil spill dispersant)",
      "Production of plasticisers by reaction of phthalic anhydride",
      "Domestic and industrial surface cleaners"
    ],
    packaging: ["Tanks", "Drums"],
    // Sources: [10-13]
  },
  {
    id: "methyl-ethyl-ketone",
    productName: "Methyl ethyl ketone (MEK)",
    identifiers: {},
    details: {
      appearance: "colorless fairly volatile liquid",
      odor: "pleasant pungent odor",
      solubility: "Soluble in water",
      introduction: "A dialkyl ketone produced industrially on a large scale; commonly used as an industrial solvent."
    },
    specifications: [
      { parameter: "Color (Pt-Co)", requirement: "< 5", result: "< 5" },
      { parameter: "Water (%wt.)", requirement: "0.006", result: "0.006" },
      { parameter: "Density at 20°C (Kg/L)", requirement: "0.8048", result: "0.8048" },
      { parameter: "MEK Purity (%wt.)", requirement: "99.92", result: "99.92" }
    ],
    applications: [
      "Low viscosity solution lacquers for automotive, electrical, and furniture industries",
      "High solids coatings development",
      "Manufacture of plastics, textiles, printing inks, and adhesives",
      "Rubber-based industrial cements",
      "Precursor to methyl ethyl ketone peroxide (polyester resin catalyst)",
      "De-waxing agent for lubricating oils",
      "Solvent system for magnetic tape production"
    ],
    packaging: ["Tanks", "Drums"],
    // Sources: [14-16]
  },
  {
    id: "butyl-acetate",
    productName: "Butyl acetate (n-butyl acetate)",
    identifiers: { chemicalFormula: "C6H12O2" },
    details: {
      appearance: "Pass (clear colorless liquid)",
      odor: "Fruity odor",
      solubility: "Highly miscible with all common organic solvents; slight miscibility in water",
      introduction: "Acetate ester of butanol; main markets include coatings, cosmetics, and pharmaceuticals."
    },
    specifications: [
      { parameter: "Butyl Acetate", requirement: "99.8 wt%", result: "99.8 wt%" },
      { parameter: "Butanol", requirement: "0.2 wt%", result: "0.2 wt%" },
      { parameter: "Acidity as Acetic Acid", requirement: "0.001 wt%", result: "0.001 wt%" },
      { parameter: "Water by KF", requirement: "0.007 wt%", result: "0.007 wt%" },
      { parameter: "Color", requirement: "3 PTCO", result: "3 PTCO" }
    ],
    applications: [
      "Solvent in lacquers and paints",
      "Adhesives and hardened coatings",
      "Pharmaceutical solvent or extraction agent",
      "Cosmetic products and fragrance solvent in perfumes",
      "Anti-corrosive agent",
      "Cleaning and car care products"
    ],
    packaging: ["Tanks", "Drums"],
    // Sources: [17-19]
  },
  {
    id: "calcium-hypochlorite-lr",
    productName: "CALCIUM HYPOCHLORITE LR",
    identifiers: {
      productCode: "90356- 500 G",
      batchNumber: "F25C068",
      casNumber: "7778-54-3"
    },
    details: { appearance: "White to yellowish powder." },
    specifications: [
      { parameter: "ASSAY", requirement: "NLT 30%", result: "31.76%" },
      { parameter: "IDENTIFICATION", requirement: "Passes Test", result: "Complies" },
      { parameter: "APPEARANCE", requirement: "White to yellowish powder", result: "Complies" }
    ],
    applications: [],
    packaging: [],
    dates: {
      mfgDate: "March, 2025",
      expDate: "February, 2030"
    },
    // Source: [20]
  },
  {
    id: "caustic-soda-flakes",
    productName: "CAUSTIC SODA FLAKES (Grade: 99%)",
    origin: "China",
    identifiers: {
      casNumber: "1310-73-2",
      chemicalFormula: "NaOH"
    },
    details: {},
    specifications: [
      { parameter: "Sodium Hydroxide (NaOH)", requirement: "99.0%", result: "99.5%" },
      { parameter: "Sodium Carbonate (Na2CO3)", requirement: "0,50%", result: "0,46%" },
      { parameter: "Sodium Chloride (NaCI)", requirement: "0,03%", result: "0,031%" },
      { parameter: "Iron (Fe)", requirement: "0,005%", result: "0,003%" }
    ],
    applications: [],
    packaging: [],
    // Source: [29]
  }
];


export const chemicalCatalogPart2: ChemicalProduct[] = [
  {
    id: "ethyl-acetate",
    productName: "Ethyl Acetate",
    identifiers: { chemicalFormula: "C4H8O2" },
    details: {
      appearance: "Clear, Colourless Liquid",
      odor: "fruity characteristic odour that is commonly recognized in glues and nail polish remover",
      solubility: "miscible with all common organic solvents (alcohols, ketones, glycols, esters) but only slightly miscibility in water",
      introduction: "Ethyl acetate is the acetate ester formed between acetic acid and ethanol. This product is highly flammable."
    },
    specifications: [
      { parameter: "Colour", requirement: "APHA 10 (Max)", result: "10 Below", uom: "APHA" },
      { parameter: "Appearance", requirement: "Clear, Colourless Liquid", result: "Clear, Colourless Liquid" },
      { parameter: "Water Content", requirement: "0.05 (max)", result: "0.02", uom: "%" },
      { parameter: "Acidity as Acetic Acid", requirement: "0.01 (max)", result: "0.0027", uom: "%" },
      { parameter: "Alcohol Content", requirement: "0.05 (max)", result: "0.02", uom: "%" },
      { parameter: "Density at 27 Degree C", requirement: "0.895 - 0.898", result: "0.896", uom: "%" },
      { parameter: "Ester content as Ethyl Acetate by GC", requirement: "99.80 (min)", result: "99.90", uom: "%" },
      { parameter: "Residue on evaporation", requirement: "0.01 (max)", result: "0.005", uom: "%" },
      { parameter: "Initial Boiling Point", requirement: "76.0 (min)", result: "75.70", uom: "°C" },
      { parameter: "Dry Point", requirement: "78.5 (max)", result: "78.00", uom: "°C" },
      { parameter: "Water", requirement: "Not Specified", result: "120", uom: "mg/kg" },
      { parameter: "Acidity (as Acetic Acid)", requirement: "Not Specified", result: "21", uom: "mg/kg" },
      { parameter: "Platinum Cobalt Color", requirement: "Not Specified", result: "5" },
      { parameter: "Relative Density at 20/20°C", requirement: "Not Specified", result: "0.9021" },
      { parameter: "Initial Boiling Point (TDS)", requirement: "Not Specified", result: "76.9", uom: "°C" },
      { parameter: "Dry Point (TDS)", requirement: "Not Specified", result: "77.5", uom: "°C" },
      { parameter: "Distillation Range", requirement: "Not Specified", result: "0.6", uom: "°C" },
      { parameter: "Non-Volatile Matter", requirement: "Not Specified", result: "< 1", uom: "mg/100mL" },
      { parameter: "Residual Odor", requirement: "Not Specified", result: "Non-Residual" },
      { parameter: "Ethanol Content", requirement: "Not Specified", result: "100", uom: "mg/kg" },
      { parameter: "Ethyl Acetate Purity (m/m)", requirement: "Not Specified", result: "99.94", uom: "%" }
    ],
    applications: [
      "Field of entomology: effective asphyxiant for use in insect collecting and study",
      "Most commonly used as a solvent due to its dilution properties",
      "High purity solvent: cleaning electric circuit boards",
      "Nail polish remover",
      "Lower purity: printing, pharmaceuticals, perfumes, food",
      "Decaffeination of tea/coffee",
      "Carrier solvent for herbicides",
      "Coating formulations for wood furniture, agricultural, construction equipment, mining equipment and marine uses",
      "Naturally produced in wine during the fermentation process"
    ],
    packaging: ["Drums"],
    // Sources: [1-6]
  },
  {
    id: "ethylene-glycol",
    productName: "ETHYLENE GLYCOL LR",
    identifiers: {
      casNumber: "107-21-1",
      productCode: "90408- 2.5 L",
      batchNumber: "F24J255"
    },
    details: {
      appearance: "Clear, colourless hygroscopic viscous liquid.",
      solubility: "Miscible with water, methanol, ethanol, acetone, acetic acid, glycerol and pyridine. Virtually insoluble in benzene, petroleum ether and carbon tetrachloride."
    },
    specifications: [
      { parameter: "APPEARANCE", requirement: "Clear, colourless hygroscopic viscous liquid.", result: "Complies" },
      { parameter: "MISCIBILITY", requirement: "Complies with miscibility test", result: "Complies" },
      { parameter: "COLOR (APHA)", requirement: "≤ 10", result: "Complies" },
      { parameter: "ASSAY (GC)", requirement: "NLT 98.0%", result: "99.78%" },
      { parameter: "WEIGHT PER ML AT 20°C", requirement: "1.112 - 1.114 g", result: "1.113 g" },
      { parameter: "IDENTIFICATION", requirement: "Passes Test", result: "Complies" },
      { parameter: "RESIDUE AFTER IGNITION", requirement: "0.01%", result: "0.0020%" },
      { parameter: "ACIDITY (as CH3COOH)", requirement: "0.006%", result: "0.00054%" },
      { parameter: "WATER (by KF)", requirement: "0.5%", result: "0.045%" }
    ],
    applications: [],
    packaging: [],
    dates: {
      mfgDate: "September, 2024",
      expDate: "August, 2029"
    },
    // Sources: [7, 8]
  },
  {
    id: "ferric-chloride-anhydrous",
    productName: "FERRIC CHLORIDE, ANHYDROUS LR",
    identifiers: {
      casNumber: "7705-08-0",
      productCode: "90409- 50 KG",
      batchNumber: "F25F451"
    },
    details: { appearance: "Brownish-black very deliquescent powder." },
    specifications: [
      { parameter: "APPEARANCE", requirement: "Brownish-black very deliquescent powder.", result: "Complies" },
      { parameter: "ASSAY", requirement: "NLT 96.0%", result: "96.19%" },
      { parameter: "IDENTIFICATION", requirement: "Passes Test", result: "Complies" },
      { parameter: "FERROUS CHLORIDE", requirement: "1.0 % (Max Limit)", result: "< 1.0 %" },
      { parameter: "APPEARANCE OF SOLUTION", requirement: "Solution of 5 g in 50 ml mixture of dilute hydrochloric acid and water is clear.", result: "Complies" }
    ],
    applications: [],
    packaging: [],
    dates: {
      mfgDate: "June, 2025",
      expDate: "May, 2030"
    },
    // Sources: [9, 10]
  },
  {
    id: "glycerine-glycerol",
    productName: "Glycerine (Glycerol)",
    identifiers: {},
    details: {
      appearance: "Transparent / Colorless viscous liquid",
      odor: "Odorless",
      solubility: "Intensely hygroscopic",
      introduction: "Glycerol is a triol with a structure of propane substituted at positions 1, 2 and 3 by hydroxy groups. it is a colorless, odorless, viscous liquid that is sweet-tasting and non-toxic. It is non-volatile and intensely hygroscopic. Glycerin is used as a solvent, humectant and vehicle in various pharmaceutical preparations."
    },
    specifications: [
      { parameter: "Appearance", requirement: "Transparent", result: "Transparent" },
      { parameter: "Glycerol Content", requirement: "Not Specified", result: "99.73", uom: "%wt" },
      { parameter: "Color (Hazen)", requirement: "Not Specified", result: "5" },
      { parameter: "Specific Gravity (25 °C)", requirement: "Not Specified", result: "1.2610" },
      { parameter: "Fatty Acid & Esters", requirement: "Not Specified", result: "0.56", uom: "ml, 0.5N NaOH" },
      { parameter: "Water Content", requirement: "Not Specified", result: "0.12", uom: "%wt" },
      { parameter: "Chloride", requirement: "Pass", result: "Pass", uom: "ppm" },
      { parameter: "Sulphate", requirement: "Pass", result: "Pass", uom: "ppm" },
      { parameter: "Residue on Ignition", requirement: "< 0.01", result: "< 0.01", uom: "%wt" },
      { parameter: "Heavy Metal (as Pb)", requirement: "< 5", result: "< 5", uom: "ppm" },
      { parameter: "Limit of Chlorinated Compounds", requirement: "< 30", result: "< 30", uom: "mg/kg" },
      { parameter: "Diethylene Glycol", requirement: "< 0.1", result: "< 0.1" },
      { parameter: "Ethylene Glycol", requirement: "< 0.1", result: "< 0.1" },
      { parameter: "Total Impurity", requirement: "< 1", result: "< 1", uom: "%" }
    ],
    applications: [
      "Industrial and scientific uses",
      "Improving smoothness and providing lubrication in pharmaceuticals",
      "Found in allergen immunotherapies, cough syrups, elixirs and expectorants",
      "Toothpaste, mouthwashes, skin care products, shaving cream, hair care products, glycerin soaps",
      "Water-based personal lubricants",
      "Nitroglycerin for chronic angina (chest pain of heart disease)",
      "Topical treatment for psoriasis, burns, bites, cuts, rashes, bedsores, and calluses",
      "Orally to eliminate halitosis (contact bacterial desiccant)",
      "Periodontal disease treatment (penetrates biofilm quickly and eliminates bacterial colonies)"
    ],
    packaging: ["Drums"],
    // Sources: [11-14]
  },
  {
    id: "glycerin-usp",
    productName: "Glycerin, USP",
    identifiers: {
      casNumber: "56-81-5",
      inciName: "Glycerin"
    },
    details: {
      appearance: "PASS (USP)",
      odor: "PASS (USP)"
    },
    specifications: [
      { parameter: "Appearance (USP)", requirement: "PASS", result: "PASS" },
      { parameter: "Purity by Specific Gravity (USP)", requirement: "99.7% MIN", result: "99.71" },
      { parameter: "Specific Gravity @ 25°C (USP)", requirement: "1.2613 MIN", result: "1.2613" },
      { parameter: "Identification A by FTIR (USP)", requirement: "PASS", result: "PASS" },
      { parameter: "Identification B (USP)", requirement: "PASS", result: "PASS" },
      { parameter: "Diethylene Glycol (USP)", requirement: "0.10% MAX", result: "<0.10" },
      { parameter: "Ethylene Glycol (USP)", requirement: "0.10% MAX", result: "<0.10" },
      { parameter: "Identification C (USP)", requirement: "PASS", result: "PASS" },
      { parameter: "Related Compounds – Individual (USP)", requirement: "0.1% MAX", result: "<0.1" },
      { parameter: "Related Compounds – Total (USP)", requirement: "1.0% MAX", result: "<1.0" },
      { parameter: "Assay (Anhydrous Basis) (USP)", requirement: "99.0 - 101.0%", result: "99.84" },
      { parameter: "Sulfates (USP)", requirement: "20 ppm MAX", result: "<20" },
      { parameter: "Chlorides (USP)", requirement: "10 ppm MAX", result: "<10" },
      { parameter: "Chlorinated Compounds (USP)", requirement: "30 ppm MAX", result: "<30" },
      { parameter: "Fatty Acids & Esters (USP)", requirement: "MAX 0.30ml NaOH", result: "0.11" },
      { parameter: "Heavy Metals (USP)", requirement: "5 ppm MAX", result: "<5" },
      { parameter: "Lead (USP)", requirement: "1 ppm MAX", result: "<1" },
      { parameter: "Residue on Ignition (USP)", requirement: "0.01% MAX", result: "0.000" },
      { parameter: "Color (APHA)", requirement: "10 APHA MAX", result: "0" },
      { parameter: "Readily Carbonizable Substances (USP)", requirement: "PASS", result: "PASS" },
      { parameter: "Moisture (USP)", requirement: "0.30% MAX", result: "0.10" },
      { parameter: "Residue Solvents (USP)", requirement: "PASS", result: "PASS" }
    ],
    applications: [],
    packaging: [],
    dates: { expDate: "24 months from production date" },
    origin: "Data as per supplier",
    // Sources: [15-18]
  },
  {
    id: "hydrochloric-acid-ar",
    productName: "HYDROCHLORIC ACID AR",
    identifiers: {
      casNumber: "7647-01-0",
      productCode: "90169- 500 ML",
      batchNumber: "F24K450"
    },
    details: { appearance: "Clear, colourless fuming liquid." },
    specifications: [
      { parameter: "APPEARANCE", requirement: "Clear, colourless fuming liquid.", result: "Complies" },
      { parameter: "COLOR (APHA)", requirement: "≤ 10", result: "Complies" },
      { parameter: "ASSAY", requirement: "NLT 35.5%", result: "36.20%" },
      { parameter: "SPECIFIC GRAVITY (at 25°C)", requirement: "About 1.18", result: "1.183" },
      { parameter: "IDENTIFICATION", requirement: "Passes Test", result: "Complies" },
      { parameter: "RESIDUE AFTER IGNITION", requirement: "0.001%", result: "0.00055%" },
      { parameter: "FREE CHLORINE", requirement: "0.0002%", result: "< 0.0002%" },
      { parameter: "AMMONIUM (NH4)", requirement: "0.0003%", result: "< 0.0003%" },
      { parameter: "ARSENIC(As)", requirement: "0.000002%", result: "< 0.000002%" },
      { parameter: "HEAVY METALS (as Pb)", requirement: "0.00005%", result: "< 0.00005%" },
      { parameter: "IRON(Fe)", requirement: "0.00004%", result: "0.00004%" },
      { parameter: "PHOSPHATE(PO4)", requirement: "0.00005%", result: "< 0.00005%" },
      { parameter: "SULPHATE(SO4)", requirement: "0.0005%", result: "< 0.0005%" },
      { parameter: "SULPHITE", requirement: "0.0001%", result: "< 0.0001%" },
      { parameter: "ALUMINIUM(Al)", requirement: "0.00005%", result: "< 0.00005%" },
      { parameter: "COPPER(Cu)", requirement: "0.00001%", result: "< 0.00001%" }
    ],
    applications: [],
    packaging: [],
    dates: {
      mfgDate: "October, 2024",
      expDate: "September, 2029"
    },
    // Sources: [19-21]
  },
  {
    id: "hydrogen-peroxide-35",
    productName: "HYDROGEN PEROXIDE, 35% LR",
    identifiers: {
      casNumber: "7722-84-1",
      productCode: "93186- 5 L",
      batchNumber: "F24K468"
    },
    details: {
      appearance: "Clear, colourless liquid.",
      solubility: "Miscible with water, ethanol and ether."
    },
    specifications: [
      { parameter: "APPEARANCE", requirement: "Clear, colourless liquid.", result: "Complies" },
      { parameter: "MISCIBILITY", requirement: "Miscible with water, ethanol and ether.", result: "Complies" },
      { parameter: "COLOUR (APHA)", requirement: "≤ 20", result: "Complies" },
      { parameter: "ASSAY", requirement: "34.5 - 36.20% w/w", result: "35.78%" },
      { parameter: "WEIGHT PER ML AT 20°C", requirement: "About 1.10 g", result: "1.10 g" },
      { parameter: "pH", requirement: "1.5 - 4.0", result: "3.206" },
      { parameter: "NON-VOLATILE MATTER", requirement: "0.2%", result: "0.12%" },
      { parameter: "ACIDITY(as H2SO4)", requirement: "0.1%", result: "0.083%" },
      { parameter: "COPPER(Cu)", requirement: "0.00001%", result: "< 0.00001%" },
      { parameter: "IRON(Fe)", requirement: "0.0001%", result: "< 0.0001%" },
      { parameter: "LEAD(Pb)", requirement: "0.001%", result: "< 0.001%" }
    ],
    applications: [],
    packaging: [],
    dates: {
      mfgDate: "October, 2024",
      expDate: "September, 2027"
    },
    // Sources: [22, 23]
  },
  {
    id: "isopropyl-alcohol",
    productName: "Isopropyl alcohol",
    identifiers: {},
    details: {
      appearance: "Clear Colorless Liquid with Characteristic Odor",
      odor: "Sharp musty odor",
      solubility: "Isopropyl alcohol is miscible in water, ethanol, ether, and chloroform.",
      introduction: "Isopropyl alcohol is a secondary alcohol. it appears as volatile, colorless liquid with a sharp musty odor."
    },
    specifications: [
      { parameter: "Description", requirement: "Clear Colorless Liquid with Characteristic Odor", result: "Conforms" },
      { parameter: "Identification", requirement: "Conforms", result: "Conforms" },
      { parameter: "Specific Gravity at 25°C", requirement: "Not Specified", result: "0.785", uom: "g/mL" },
      { parameter: "Refractive Index at 20°C", requirement: "Not Specified", result: "1.377" },
      { parameter: "Acidity", requirement: "Not Specified", result: "0.5", uom: "mL" },
      { parameter: "Non-Volatile Residue", requirement: "Not Specified", result: "0.0010", uom: "%w/w" },
      { parameter: "Assay", requirement: "Not Specified", result: "99.96", uom: "%w/w" },
      { parameter: "Water Content", requirement: "Not Specified", result: "0.06", uom: "%w/w" }
    ],
    applications: [
      "Primarily manufactured for consumer use in cosmetics, skin and hair preparations, pharmaceuticals, perfumes",
      "Lacquer formulations, dye solutions, antifreezes, soaps, window cleaners",
      "Bottled liquid sold in 70% aqueous solution as rubbing alcohol",
      "Industrial: Adhesives and sealant chemicals",
      "Non-pesticidal agricultural chemicals",
      "Fuels and fuel additives",
      "Intermediates, lubricants, paint and coating additives",
      "Process regulators and aids specific to petroleum production",
      "Cleaning solvents for cleaning or degreasing"
    ],
    packaging: [],
    // Sources: [24-26]
  },
  {
    id: "labsa-96",
    productName: "LABSA 96%",
    identifiers: { batchNumber: "SFPPL/LAS96/25-26/B1" },
    origin: "India",
    details: { density: "1.05 g/ml (At 20° C)" },
    specifications: [
      { parameter: "Active (Based on LAB mean MW326)", requirement: "96 minimum", result: "96.36", uom: "%" },
      { parameter: "Colour ( Klett-4cm cell/5% conc)", requirement: "30 maximum when packed", result: "27", uom: "Klett" },
      { parameter: "Unsulphonated Matter (NDOM)", requirement: "1.5 maximum", result: "1.38", uom: "%" },
      { parameter: "Free Sulphuric acid", requirement: "1.5 maximum", result: "1.37", uom: "%" },
      { parameter: "Density(At 20° C)", requirement: "1.05 maximum", result: "1.05", uom: "g/ml" }
    ],
    applications: [],
    packaging: [],
    dates: {
      mfgDate: "Feb 2026",
      expDate: "Jan 2029"
    },
    // Source: [27]
  },
  {
    id: "mdi-polymeric",
    productName: "Methylene Diphenyl Diisocyanate (MDI Polymeric)",
    identifiers: {
      casNumber: "9016-87-9",
      ecNumber: "618-498-9",
      chemicalFormula: "C15H10N2O2",
      molecularWeight: "250.25 g/mol"
    },
    details: {
      appearance: "Dark Brown Liquid",
      density: "1.230 g/cm3",
      meltingPoint: "40oC"
    },
    specifications: [
      { parameter: "NCO Content", requirement: "29-31 %", result: "Typical 29.4 - 30.1% (Lot dependent)" },
      { parameter: "Hydrolysable Chlorine", requirement: "0.25 Max %", result: "Typical 0.1493 - 0.195% (Lot dependent)" },
      { parameter: "Viscosity at 25oC", requirement: "150-350 mPas", result: "Typical 650 - 950 mPas (Note: results in source snippet often exceed specification limit)" },
      { parameter: "Specific Gravity at 25oC", requirement: "1.2-1.25 g/cm3", result: "Typical 1.23" }
    ],
    applications: [],
    packaging: [],
    // Sources: [28, 29]
  }
];


export const chemicalCatalogPart3: ChemicalProduct[] = [
  {
    id: "mixed-xylenes",
    productName: "Mixed Xylenes (Mix Xylene)",
    identifiers: {},
    details: {
      appearance: "colorless, flammable liquids",
      introduction: "Mixed xylenes refer to the equilibrium mixture of four isomers with the same chemical formula—para-xylene (PX), ortho-xylene (OX), meta-xylene (MX), and ethylbenzene. They are of great industrial value."
    },
    specifications: [
      { parameter: "Density at 20°C", requirement: "Not Specified", result: "0.8652", uom: "g/cm3" },
      { parameter: "Non-Aromatic", requirement: "Not Specified", result: "2.70", uom: "wt.%" },
      { parameter: "Color (Pt-Co)", requirement: "Not Specified", result: "No.1" },
      { parameter: "Distillation Range", requirement: "Not Specified", result: "2.0", uom: "°C" },
      { parameter: "IBP", requirement: "Not Specified", result: "136.7", uom: "°C" },
      { parameter: "DP", requirement: "Not Specified", result: "138.7", uom: "°C" },
      { parameter: "Density at 15(°C)", requirement: "Not Specified", result: "0.8686", uom: "g/cm3" },
      { parameter: "Density at 30(°C)", requirement: "Not Specified", result: "0.8583", uom: "g/cm3" },
      { parameter: "Benzene Content", requirement: "Not Specified", result: "< 0.01", uom: "%wt." },
      { parameter: "Ethyl Benzene", requirement: "Not Specified", result: "60.97", uom: "%wt" },
      { parameter: "o-Xylene", requirement: "Not Specified", result: "8.18", uom: "%wt." },
      { parameter: "m-Xylene", requirement: "Not Specified", result: "19.93", uom: "%wt." },
      { parameter: "p-Xylene", requirement: "Not Specified", result: "7.93", uom: "%wt." },
      { parameter: "Styrene", requirement: "Not Specified", result: "< 0.01", uom: "%wt." }
    ],
    applications: [
      "Gasoline additives",
      "Solvents in manufacturing and laboratory processes",
      "Glues, adhesives, printing inks, paint thinners, and sealants",
      "Carrier solvents for delivery of some pesticides"
    ],
    packaging: ["Drums"],
    // Sources: [1], [2]
  },
  {
    id: "nitrocellulose-cotton",
    productName: "Nitrocellulose Cotton",
    identifiers: {},
    details: {
      appearance: "Cotton-like material",
      solubility: "Acetone, Butyl Acetate, Ethyl Acetate & Toluene Mixture."
    },
    specifications: [
      { parameter: "Nitrogen Content (RS/ES)", requirement: "11.8 – 12.2 %", result: "11.8 – 12.2 %" },
      { parameter: "Nitrogen Content (SS)", requirement: "10.7 – 11.2 %", result: "10.7 – 11.2 %" },
      { parameter: "Damping Media", requirement: "Butanol/Butyl Alcohol", result: "Butanol/Butyl Alcohol" },
      { parameter: "Stability at 132 +/-0.2 C", requirement: "Not more than 1.2mg of N2 per gm", result: "Complies" },
      { parameter: "Purity", requirement: "Not less than 99.5%", result: "Complies" },
      { parameter: "Acidity (as Sulphuric Acid)", requirement: "0.065 Max.", result: "0.065 Max." },
      { parameter: "Moisture Content (Karl Fischer)", requirement: "3.9 % Max.", result: "3.9 % Max." },
      { parameter: "Volatile Matter (Damping Media)", requirement: "70 +/- 2%", result: "70 +/- 2%" },
      { parameter: "Volatile Matter (Water)", requirement: "30 +/- 2%", result: "30 +/- 2%" }
    ],
    applications: [
      "Supplied in various grades: HX 3/5, HX 5/8, HX 8/13, HX 20/30, HX 30/50, HL 25/45, HL 120/170, HM 10/25, HM 40/60, LX 3/5, LX 5/8, LX 8/13, LX 30/50, MX 3/5, MX 5/8, MX 8/13, MX 30/50."
    ],
    packaging: ["Butanol/Butyl Alcohol (Damping Media)"],
    // Sources: [3], [4], [5], [6]
  },
  {
    id: "propylene-glycol-usp-technical",
    productName: "Propylene Glycol USP (Technical Profile)",
    identifiers: {
      chemicalFormula: "C3H8O2"
    },
    details: {
      appearance: "Clear",
      introduction: "Propylene Glycol is a propanediol. It is colourless, viscous, hygroscopic, low-melting and high-boiling liquid with low toxicity. It is used as a solvent, emulsifying agent, and antifreeze."
    },
    specifications: [
      { parameter: "MPG", requirement: "Not Specified", result: "99.92", uom: "wt%" },
      { parameter: "Specific Gravity (20/20°C)", requirement: "Not Specified", result: "1.038" },
      { parameter: "Specific Gravity USP (25/25°C)", requirement: "Not Specified", result: "1.036" },
      { parameter: "Chloride", requirement: "Not Specified", result: "0.1", uom: "ppm" },
      { parameter: "Sulfate", requirement: "Not Specified", result: "0.0", uom: "ppm" },
      { parameter: "Acidity", requirement: "Not Specified", result: "0.02", uom: "ml" },
      { parameter: "Fe", requirement: "Not Specified", result: "0.02", uom: "ppm" },
      { parameter: "Heavy metal as Pb", requirement: "LT1.0", result: "LT1.0", uom: "ppm" },
      { parameter: "Residue on Ignition", requirement: "5.0", result: "5.0", uom: "ppm" },
      { parameter: "Water", requirement: "Not Specified", result: "100", uom: "ppm" },
      { parameter: "Colour (APHA)", requirement: "Not Specified", result: "2.0" },
      { parameter: "IBP", requirement: "Not Specified", result: "186.2", uom: "°C" },
      { parameter: "DP", requirement: "Not Specified", result: "187.4", uom: "°C" },
      { parameter: "EG", requirement: "Not Specified", result: "0", uom: "ppm" },
      { parameter: "DEG", requirement: "Not Specified", result: "0", uom: "ppm" }
    ],
    applications: [
      "Emulsifier in cosmetics and pharmaceuticals",
      "Solvent in elixirs and other liquid medications",
      "Coupling agent in sunscreens, lotions, shampoos, shaving creams",
      "Plasticizer for hair sprays, hand sanitizers and moisturizing creams"
    ],
    packaging: ["Drums"],
    // Sources: [7], [8], [9]
  },
  {
    id: "propylene-glycol-mc-coa",
    productName: "Propylene Glycol (MakingCosmetics COA)",
    identifiers: {
      casNumber: "57-55-6",
      inciName: "Propylene Glycol"
    },
    details: {},
    specifications: [
      { parameter: "Acidity (as Acetic acid)", requirement: "0.0020% MAX", result: "0.0006%" },
      { parameter: "Appearance", requirement: "Pass", result: "Pass" },
      { parameter: "Assay as PG (on a dry basis)", requirement: "99.90% MIN", result: "99.95%" },
      { parameter: "PG Retention Time (ID Test C)", requirement: "Pass", result: "Pass" },
      { parameter: "Chlorides", requirement: "0.5 ppm MAX", result: "<0.5 ppm" },
      { parameter: "Color (Pt-Co)", requirement: "10 APHA MAX", result: "2 APHA" },
      { parameter: "Heavy Metals (as Pb)", requirement: "5 ppm MAX", result: "<1 ppm" },
      { parameter: "Iron", requirement: "0.50 ppm MAX", result: "0.03 ppm" },
      { parameter: "Odor", requirement: "Pass", result: "Pass" },
      { parameter: "Suspended Matter", requirement: "Pass", result: "Pass" },
      { parameter: "Residual Solvents", requirement: "Pass", result: "Pass" },
      { parameter: "Water", requirement: "0.200% MAX", result: "0.003%" },
      { parameter: "Diethylene Glycol", requirement: "0.008% MAX", result: "<0.001%" },
      { parameter: "Ethylene Glycol", requirement: "0.008% MAX", result: "<0.001%" },
      { parameter: "Arsenic (as As)", requirement: "1 ppm MAX", result: "<1 ppm" },
      { parameter: "CONEG Metals", requirement: "Pass", result: "Pass" },
      { parameter: "Distillation IBP @ 760 mmHg", requirement: "186.0°C MIN", result: "186.0°C" },
      { parameter: "Distillation DP @ 760 mmHg", requirement: "189.0°C MAX", result: "188.5°C" },
      { parameter: "IR Spectrum", requirement: "Pass", result: "Pass" },
      { parameter: "Oxidiz. Subst. (as mL Thiosulfate)", requirement: "0.2 mL MAX", result: "0.0 mL" },
      { parameter: "Reducing Substances", requirement: "Pass", result: "Pass" },
      { parameter: "Refractive Index @ 20°C", requirement: "1.4310-1.4330", result: "1.4328" },
      { parameter: "Residue on Ignition", requirement: "0.0050% MAX", result: "0.0010%" },
      { parameter: "Solubility @ 25°C", requirement: "Pass", result: "Pass" },
      { parameter: "Specific Gravity @ 20/20°C", requirement: "1.0377-1.0389", result: "1.0387" },
      { parameter: "Specific Gravity @ 25/25°C", requirement: "1.0352-1.0364", result: "1.0358" },
      { parameter: "Sulfate", requirement: "0.006% MAX", result: "<0.006%" },
      { parameter: "Acidity (mL 0.1N NaOH/10mL)", requirement: "0.03 MAX", result: "0.01" }
    ],
    applications: [],
    packaging: [],
    dates: { expDate: "24 months from production date" },
    // Sources: [13], [14], [15], [16]
  },
  {
    id: "sles-70",
    productName: "SODIUM LAURYL ETHER SULFATE 70%",
    identifiers: {
      batchNumber: "2402080101016"
    },
    details: {
      appearance: "white or light yellow gel cream"
    },
    specifications: [
      { parameter: "ACTIVE MATTER ％", requirement: "70±2", result: "70.20" },
      { parameter: "SODIUM SULFATE %", requirement: "1.5 Max", result: "0.45" },
      { parameter: "UNSULFATED MATTER %", requirement: "3.5 Max", result: "1.43" },
      { parameter: "PH VALUE (1% AQ. )", requirement: "7.5-9.5", result: "9.32" },
      { parameter: "COLOR, HAZEN (5% A.M.)", requirement: "10 Max", result: "5" },
      { parameter: "DIOXANE（PPM）", requirement: "50PPM MAX", result: "19" }
    ],
    applications: [],
    packaging: [],
    dates: {
      mfgDate: "2024/02/08",
      expDate: "2026/02/07"
    },
    origin: "Zhejiang Chemicals Import and Export Corporation",
    // Sources: [17], [18]
  },
  {
    id: "sodium-hypochlorite-solution-lr",
    productName: "SODIUM HYPOCHLORITE SOLUTION LR",
    identifiers: {
      casNumber: "7681-52-9",
      productCode: "90551- 1 L",
      batchNumber: "F25F454"
    },
    details: {
      appearance: "Clear colourless to pale yellow liquid having an odour of chlorine."
    },
    specifications: [
      { parameter: "AVAILABLE CHLORINE", requirement: "4.0 - 6.0%", result: "5.78%" },
      { parameter: "IDENTIFICATION A", requirement: "Colors red litmus blue", result: "Complies" },
      { parameter: "IDENTIFICATION B", requirement: "Chlorine is evolved", result: "Complies" },
      { parameter: "IDENTIFICATION C", requirement: "Meets the requirements of Sodium", result: "Complies" },
      { parameter: "APPEARANCE", requirement: "Clear colourless to pale yellow liquid", result: "Complies" }
    ],
    applications: [],
    packaging: [],
    dates: {
      mfgDate: "June, 2025",
      expDate: "November, 2025"
    },
    // Sources: [19], [20]
  },
  {
    id: "sulphuric-acid-ar",
    productName: "SULPHURIC ACID AR 90-91% (for fat determination)",
    identifiers: {
      casNumber: "7664-93-9",
      productCode: "96059-1 L",
      batchNumber: "F19F305"
    },
    details: {
      appearance: "Clear, colourless hygroscopic viscous liquid."
    },
    specifications: [
      { parameter: "ASSAY", requirement: "90-91%", result: "90.59%" },
      { parameter: "SPECIFIC GRAVITY (at 20°C)", requirement: "1.815 - 1.821", result: "1.815 g" },
      { parameter: "RESIDUE ON IGNITION (as SO4)", requirement: "0.01%", result: "0.0018%" },
      { parameter: "ARSENIC(As)", requirement: "0.0002%", result: "< 0.0002%" },
      { parameter: "CHLORIDE(Cl)", requirement: "0.0005%", result: "< 0.0005%" },
      { parameter: "HEAVY METALS (as Pb)", requirement: "0.0005%", result: "< 0.0005%" },
      { parameter: "IRON(Fe)", requirement: "0.0005%", result: "< 0.0005%" },
      { parameter: "NITRATE(NO3)", requirement: "0.0002%", result: "0.00005%" }
    ],
    applications: ["Determining fat determination"],
    packaging: [],
    dates: {
      mfgDate: "June, 2019",
      expDate: "May, 2024"
    },
    // Sources: [21], [22]
  },
  {
    id: "sodium-nitrate-coated",
    productName: "Sodium Nitrate (Coated Grade)",
    identifiers: {},
    details: {
      appearance: "White or Slightly Off White to Light Cream Colour Powder"
    },
    specifications: [
      { parameter: "Appearance", requirement: "White or Slightly Off White to Light Cream Colour Powder", result: "COMPLIES" },
      { parameter: "Purity (On Dry Basis)", requirement: "99.00 % w/w Min.", result: "99.7" },
      { parameter: "Loss on drying", requirement: "0.50 % w/w Max.", result: "0.16" },
      { parameter: "Alkalinity as Na2CO3", requirement: "0.10 % w/w Max.", result: "0.0021" },
      { parameter: "Chloride as Cl", requirement: "0.10 % w/w Max.", result: "0.023" },
      { parameter: "Sodium Nitrite", requirement: "0.03 % w/w Max.", result: "0.028" },
      { parameter: "Coating Agent", requirement: "0.20 % w/w Max.", result: "0.08" },
      { parameter: "Iron as Fe+3", requirement: "0.005 % w/w Max.", result: "0.0015" }
    ],
    applications: [],
    packaging: [],
    // Sources: [25]
  }
];

export const chemicalCatalogPart4: ChemicalProduct[] = [
  {
    id: "sodium-sulphate-anhydrous",
    productName: "Sodium Sulphate Anhydrous",
    identifiers: {},
    details: {
      appearance: "White Powder"
    },
    specifications: [
      { parameter: "Appearance", requirement: "White Powder", result: "White Powder" },
      { parameter: "Assay", requirement: "98-100 %", result: "99.8 %" },
      { parameter: "pH", requirement: "5-6", result: "5.80" },
      { parameter: "Chloride", requirement: "16 ppm max", result: "Compiles" },
      { parameter: "Iron (as Fe)", requirement: "5-6 ppm max", result: "6 ppm" },
      { parameter: "Heavy Metals (as Pb)", requirement: "16 ppm max", result: "Compiles" },
      { parameter: "Arsenic", requirement: "1 ppm", result: "0.5 ppm" },
      { parameter: "Soluble Silica", requirement: "2 ppm max", result: "2 ppm" },
      { parameter: "Bromide", requirement: "52 ppm", result: "Compiles" }
    ],
    applications: [],
    packaging: ["50Kg Bags (W/Liner)"],
    dates: {
      samplingDate: "16.12.2025"
    },
    remarks: "Shelf Life : 1 yrs from the date of Mfg.",
    // Source: [1]
  },
  {
    id: "sodium-cyanide",
    productName: "Sodium cyanide",
    identifiers: {
      casNumber: "143-33-9",
      chemicalFormula: "49.02",
      dangerousGoodsNumber: "61001",
      ecNumber: "205-599-4"
    },
    details: {
      meltingPoint: "563.7℃",
      boilingPoint: "1496℃",
      steamPressure: "817℃",
      density: "1.60",
      appearance: "White or grey powder crystal"
    },
    specifications: [
      { parameter: "Sodium Cyanide(NaCN)", requirement: "≥98.0%", result: "≥98.0%" },
      { parameter: "Sodium Hydroxide(NaOH)", requirement: "≤0.5%", result: "≤0.5%" },
      { parameter: "Sodium Carbonate(Na2CO3)", requirement: "≤0.5%", result: "≤0.5%" },
      { parameter: "Moisture", requirement: "≤0.5%", result: "≤0.5%" },
      { parameter: "Matter indissoluble in water", requirement: "≤0.05%", result: "≤0.05%" }
    ],
    applications: [],
    packaging: ["50kg/drum"],
    // Source: [2]
  },
  {
    id: "sodium-silicate-cullets",
    productName: "Sodium Silicate (Cullets)",
    identifiers: {
      casNumber: "1344-09-8",
      hsnCode: "28391900"
    },
    details: {
      introduction: "Grade: Alkaline (AG)"
    },
    specifications: [
      { parameter: "Ratio (Sio2 : Na2O)", requirement: "2.2 + / - 0.1", result: "2.2" },
      { parameter: "% Na2O", requirement: "30.95 + / -0.5", result: "30.95" },
      { parameter: "% Sio2", requirement: "68.01 + / -0.5", result: "68.01" },
      { parameter: "% Total Dissolve Solids", requirement: "99.5% (max)", result: "Not Listed" },
      { parameter: "% Iron contents", requirement: "0.012 % (max)", result: "0.012" },
      { parameter: "% Matter Insoluble water content", requirement: "0.50 % (max)", result: "Not Listed" }
    ],
    applications: [],
    packaging: [],
    // Source: [3]
  },
  {
    id: "soda-ash-light",
    productName: "SODA ASH LIGHT",
    identifiers: {
      chemicalFormula: "Na2Co3"
    },
    details: {
      appearance: "WHITE HYGROSCOPIC CRYSTALS OR WHITE HYGROSCOPIC POWER",
      boilingPoint: "1600 C (decomposes)",
      meltingPoint: "851 C",
      density: "2.5 (Relative water=1)",
      solubility: "22 g/100ml water at 200 C",
      relativeMolecularMass: "106.0",
      introduction: "Soda Ash is one of the most important basic industrial chemical and most widely used fixed alkali for the manufacture of the other Alkali Products. In aqueous solution is a strong base which reacts violently with acids and corrodes aluminum zinc etc. reacts violently with acids, giving off – carbon dioxide."
    },
    specifications: [
      { parameter: "Total alkalinity as Na2CO3", requirement: "99.00 Min", result: "Guaranteed", uom: "%" },
      { parameter: "Chloride as NaCl", requirement: "0.50 Max", result: "Guaranteed", uom: "%" },
      { parameter: "Matter insoluble in water", requirement: "0.01 Max", result: "Guaranteed", uom: "%" },
      { parameter: "Sulphates as Na2SO4", requirement: "0.01 Max", result: "Guaranteed", uom: "%" },
      { parameter: "Iron as Fe2O3", requirement: "0.0020 Max", result: "Guaranteed", uom: "%" },
      { parameter: "Bulk Density", requirement: "600 to 700", result: "Guaranteed", uom: "gpl" },
      { parameter: "Volatile Matter", requirement: "1.0 Max", result: "Guaranteed", uom: "%" },
      { parameter: "Calcium", requirement: "35 Max", result: "Guaranteed", uom: "ppm" },
      { parameter: "Magnesium", requirement: "21 Max", result: "Guaranteed", uom: "ppm" },
      { parameter: "NaHCO3", requirement: "0.5 Max", result: "Guaranteed", uom: "%" }
    ],
    applications: [
      "Manufacture of Detergents and other Alkali Products",
      "Sodium silicates",
      "Bicarbonates",
      "Bichromates",
      "Pulp & Paper",
      "Cellulose and rayon",
      "Iron and steel",
      "Aluminum",
      "Industrial cleaning"
    ],
    packaging: ["50 KG PP/HDPE BAG WITH INNER LINER"],
    safetyInfo: {
      hazards: [
        "Irritates the skin and respiratory tract",
        "Corrosive to the eyes",
        "Can enter the body by inhalation or ingestion",
        "Reacts violently with acids"
      ],
      symptoms: {
        inhalation: "cough, shortness of breath",
        skin: "Redness",
        eyes: "Corrosive, redness, pain, impaired vision",
        ingestion: "Sore throat, abdominal pain"
      },
      firstAid: {
        inhalation: "Fresh air, rest, call a doctor",
        skin: "Remove contaminated clothing, flush skin with water or shower",
        eyes: "Flush with water, take to a doctor",
        ingestion: "Rinse mouth, call a doctor"
      },
      preventiveMeasures: {
        inhalation: "Local exhaust or respiratory protection",
        skin: "Protective gloves",
        eyes: "Goggles"
      },
      fireExtinguisher: "Non-combustible. In case of fire immediate vicinity: use any Extinguishing agent",
      spillage: "Clean up spillage. Flush away remainder with water (additional individual protection P2 respirator)",
      storageInfo: "Keep dry. Separate from acids."
    },
    // Sources: [4-7]
  },
  {
    id: "stearic-acid",
    productName: "Stearic Acid",
    identifiers: {
      casNumber: "57-11-4",
      inciName: "Stearic Acid"
    },
    details: {
      appearance: "White flakes/pastilles/prills"
    },
    specifications: [
      { parameter: "General Appearance (@ 25°C)", requirement: "White flakes/pastilles/prills", result: "Pass" },
      { parameter: "Acid Value", requirement: "194.0 - 212.0 mg KOH/g", result: "208.76 mg KOH/g" },
      { parameter: "Freezing Point", requirement: "53.0 - 59.0°C", result: "55.6°C" },
      { parameter: "C16 + C18", requirement: "90.0% MIN", result: "99.27%" },
      { parameter: "Acidity", requirement: "To meet requirement", result: "Pass" },
      { parameter: "Iodine Value", requirement: "0.50 MAX", result: "0.39" },
      { parameter: "Saponification Value", requirement: "206.0 - 212.0", result: "209.58" },
      { parameter: "Color (APHA)", requirement: "50.0 MAX", result: "2.5" },
      { parameter: "Heavy Metals", requirement: "0.001% MAX", result: "<0.001%" },
      { parameter: "Residue on Ignition", requirement: "0.1% MAX", result: "<0.1%" },
      { parameter: "C14 + Lower", requirement: "3.0% MAX", result: "0.0%" },
      { parameter: "C16", requirement: "52.0 - 58.0", result: "54.56" },
      { parameter: "C18", requirement: "40.0 - 60.0%", result: "44.71%" },
      { parameter: "C18:1 + Higher", requirement: "2.0% MAX", result: "0.0%" }
    ],
    applications: [
      "Certified in compliance with the terms of the US-Canada Organic Equivalency Arrangement."
    ],
    packaging: [],
    dates: { expDate: "24 months from production date" },
    // Sources: [8-10]
  },
  {
    id: "toluene-diisocyanate",
    productName: "Toluene Diisocyanate",
    identifiers: {},
    details: {
      appearance: "colorless to yellow or dark liquid or solid",
      odor: "sweet, fruity, pungent odor",
      introduction: "Toluene Diisocyanate is a synthetic mixture of the 2,4- and 2,6-isomers. It is toxic and highly reactive organic compound. Toluene Diisocyanate is an aromatic isocyanate produced for reaction with polyols to form polyurethanes."
    },
    specifications: [
      { parameter: "Purity", requirement: "Not Specified", result: "99.8 %" },
      { parameter: "Isomer Ratio (2,4-Isomer)", requirement: "Not Specified", result: "79.7 %" },
      { parameter: "Isomer Ratio (2,6-Isomer)", requirement: "Not Specified", result: "20.3 %" },
      { parameter: "Color", requirement: "Not Specified", result: "5 APHA" },
      { parameter: "Acidity", requirement: "Not Specified", result: "3 ppm" },
      { parameter: "Hydrolyzable Chlorine", requirement: "Not Specified", result: "29 ppm" },
      { parameter: "Total Chlorine", requirement: "Not Specified", result: "51 ppm" }
    ],
    applications: [
      "Production of polyester-based soft foam",
      "High-bearing sponges",
      "Semi-rigid ester foam",
      "Paint"
    ],
    packaging: ["Drums"],
    // Sources: [11, 12]
  },
  {
    id: "titanium-dioxide-ar",
    productName: "TITANIUM DIOXIDE AR",
    identifiers: {
      casNumber: "13463-67-7",
      productCode: "91511- 1 KG",
      batchNumber: "F25H377"
    },
    details: {
      appearance: "White to off-white powder. 100% Anatase"
    },
    specifications: [
      { parameter: "APPEARANCE", requirement: "White to off-white powder. 100% Anatase", result: "Complies" },
      { parameter: "PHASE", requirement: "Not Specified", result: "Complies" },
      { parameter: "ASSAY", requirement: "98.0 - 100.5%", result: "98.60%" },
      { parameter: "WATER SOLUBLE MATTER", requirement: "0.4%", result: "0.35%" },
      { parameter: "ACID SOLUBLE SUBSTANCE", requirement: "0.3%", result: "0.23%" },
      { parameter: "LOSS ON DRYING (105°C )", requirement: "0.2%", result: "0.18%" },
      { parameter: "ARSENIC(As)", requirement: "0.0003%", result: "< 0.0003%" },
      { parameter: "IRON(Fe)", requirement: "0.02%", result: "< 0.02%" },
      { parameter: "HEAVY METALS(as Pb)", requirement: "0.005%", result: "< 0.005%" },
      { parameter: "ANTIMONY (Sb)", requirement: "0.002%", result: "< 0.002%" }
    ],
    applications: [],
    packaging: [],
    dates: {
      mfgDate: "August, 2025",
      expDate: "July, 2030"
    },
    // Sources: [13, 14]
  },
  {
    id: "toluene",
    productName: "Toluene",
    identifiers: {
      chemicalFormula: "C7H8"
    },
    details: {
      appearance: "Clear",
      odor: "aromatic, benzene-like smell",
      solubility: "insoluble in water and soluble in acetone, absolute alcohol, ether, chloroform, benzene, petroleum ether, glacial acetic acid, and carbon disulfide",
      introduction: "Toluene is a highly volatile flammable liquid. It is obtained from petroleum and coal tar and is predominantly used as a solvent in the manufacturing of other organic chemicals."
    },
    specifications: [
      { parameter: "Appearance", requirement: "Clear", result: "Clear" },
      { parameter: "Acidity", requirement: "No free acid", result: "No free acid" },
      { parameter: "Color (Acid Wash )", requirement: "Not Specified", result: "No.1" },
      { parameter: "Color (Pt-Co)", requirement: "Not Specified", result: "No.1" },
      { parameter: "Copper Corrosion", requirement: "Pass", result: "Pass" },
      { parameter: "Distillation, IBP", requirement: "Not Specified", result: "110.0", uom: "°C" },
      { parameter: "Distillation, 50%", requirement: "Not Specified", result: "110.6", uom: "°C" },
      { parameter: "Distillation, Dry Point", requirement: "Not Specified", result: "110.7", uom: "°C" },
      { parameter: "Distillation, Recovery", requirement: "Not Specified", result: "98.5", uom: "Vol Pct" },
      { parameter: "Distillation, IVP-DRY Range", requirement: "Not Specified", result: "0.7" },
      { parameter: "Specific Gravity at 15.56/15.56°C", requirement: "Not Specified", result: "0.8715" },
      { parameter: "Non Aromatics", requirement: "Not Specified", result: "0.425", uom: "wt.%" },
      { parameter: "Benzene", requirement: "Not Specified", result: "0.018", uom: "wt.%" },
      { parameter: "Toluene (Purity)", requirement: "Not Specified", result: "99.531", uom: "wt.%" },
      { parameter: "Water Content", requirement: "Not Specified", result: "47.5", uom: "wt.%" },
      { parameter: "Sulfur", requirement: "Not Specified", result: "0.10", uom: "wt.%" }
    ],
    applications: [
      "Manufacture benzene, xylenes and other solvents",
      "Manufacture chemicals such as phenol, nitrobenzene, benzoic acid and benzyl chloride",
      "Solvent in paints, paint thinners, adhesives, inks, resins, cleaning agents, leather tanners",
      "Manufacture polymers for nylon and plastic soda bottles",
      "Pharmaceuticals, dyes and cosmetic products",
      "Coolant in sodium cold traps underneath nuclear reactor loops",
      "User end markets: chemical, paints, adhesive, cleaning, leather, plastics, cosmetic and pharmaceutical industries"
    ],
    packaging: ["Tanks", "Drums"],
    // Sources: [15-18]
  },
  {
    id: "zinc-oxide-usp",
    productName: "Zinc Oxide, USP",
    identifiers: {
      casNumber: "1314-13-2",
      inciName: "Zinc Oxide"
    },
    details: {},
    specifications: [
      { parameter: "Surface Area (ASTM D4315)", requirement: "3.0-6.5 m2/g", result: "3.3 m2/g" },
      { parameter: "Lead (Pb) (ASTM D4075)", requirement: "0.0020% MAX", result: "0.0016%" },
      { parameter: "Cadmium (Cd) (ASTM D4075)", requirement: "0.0010% MAX", result: "<0.0001%" },
      { parameter: "+325 Retained (ASTM D4315)", requirement: "0.0150% MAX", result: "0.0008%" },
      { parameter: "Iron (Fe) (ASTM D4075)", requirement: "0.0020% MAX", result: "0.0001%" },
      { parameter: "Loss @ 500°C (USP) (USP Monograph)", requirement: "1.0% MAX", result: "<0.1%" },
      { parameter: "Zinc Oxide Assay* (APP-810*)", requirement: "98.0-102.0%", result: "99.8%" },
      { parameter: "Arsenic (As) (USP) (USP Monograph)", requirement: "6 ppm MAX", result: "Pass" },
      { parameter: "Lead (USP) (USP Monograph)", requirement: "Pass/Fail", result: "Pass" },
      { parameter: "Iron & Other Heavy Metals (USP) (USP Monograph)", requirement: "Pass/Fail", result: "Pass" },
      { parameter: "Alkalinity (USP) (USP Monograph)", requirement: "Pass/Fail", result: "Pass" },
      { parameter: "Identification A (USP) (USP Monograph)", requirement: "Pass/Fail", result: "Pass" },
      { parameter: "Identification of Zinc* (APP-810*)", requirement: "Pass/Fail", result: "Pass" },
      { parameter: "Color & Carbonate (USP) (USP Monograph)", requirement: "Pass/Fail", result: "Pass" }
    ],
    applications: [],
    packaging: [],
    dates: {
      expDate: "18 months from production date"
    },
    remarks: "*Test method APP-810 has been determined suitable under actual conditions of use for product to meet USP acceptance criteria.",
    // Sources: [19-22]
  }
];
