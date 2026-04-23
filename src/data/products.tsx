import {
    Flame,
    Fuel,
    Droplets,
    FlaskConical,
    Beaker,
    Cylinder,
    Leaf,
    Factory,
    Layers,
    Zap,
    Box,
    Waves,
    Wind,
    Pipette,
    Paintbrush,
    Hammer,
    Scissors,
    Microwave,
    Printer,
    ShieldCheck
} from 'lucide-react';

// Category Images
import Acetone from "@/assets/products/categories/AcetoneSolvents.webp";
import LABSA96 from "@/assets/products/categories/LABSA96.webp";
import SLES70 from "@/assets/products/categories/SLES70.webp"
import Casusticsoda from "@/assets/products/categories/CausticSodaFlakes.webp"
import sodaashlight from "@/assets/products/categories/SodaAshLight.webp"
import Xylene from "@/assets/products/categories/Xylene.webp";
import Toluene from "@/assets/products/categories/Toluene.webp";
import MethylEthylKetone from "@/assets/products/categories/MethylEthylKetone.webp";
import ButylAcetate from "@/assets/products/categories/ButylAcetate.webp";
import distillateMarineOil from "@/assets/products/categories/image copy.webp";
import whiteoilimge from "@/assets/products/categories/WhiteOilPetrochemicals.webp";
import rubberOilImg from "@/assets/products/categories/RubberProcessOil.webp";
import baseoilImg from "@/assets/products/categories/baseoil.webp";
import petrochemicalsImg from "@/assets/products/categories/petrochemicals.webp";
import solventsImg from "@/assets/products/categories/solvents.webp";
import Ethylacetate from "@/assets/products/categories/Ethylacetate.webp";
import rawMaterialsImg from "@/assets/products/categories/raw_materials.webp";
import AluminumSulphate from "@/assets/products/categories/AluminumSulphate.webp"
import waterTreatmentImg from "@/assets/products/categories/water_treatment.webp";
import cosmeticsImg from "@/assets/products/categories/cosmetics.webp";
import Glycerine from "@/assets/products/categories/Glycerine.webp"
import paintCoatingsImg from "@/assets/products/categories/paint_coatings.webp";
import miningImg from "@/assets/products/categories/mining.webp";
import textileImg from "@/assets/products/categories/textile.webp";
import foamIndustryImg from "@/assets/products/categories/foam_industry.webp";
import printingInkImg from "@/assets/products/categories/printing_ink.webp";
import TitaniumDioxide from "@/assets/products/categories/TitaniumDioxide.webp"
import SodiumCyanide from "@/assets/products/categories/SodiumCyanide.webp"
import HydrogenPeroxide from "@/assets/products/categories/HydrogenPeroxide.webp"
import TDI from "@/assets/products/categories/TDI.webp"
import IsopropylAlcohol from "@/assets/products/categories/IsopropylAlcohol.webp"
import FerricChloride from "@/assets/products/categories/FerricChloride.webp"
import CalciumHypochlorite from "@/assets/products/categories/CalciumHypochlorite.webp"
import StearicAcid from "@/assets/products/categories/StearicAcid.webp"
import ActivatedCarbon from "@/assets/products/categories/ActivatedCarbon.webp"
import HydrochloricAcid from "@/assets/products/categories/HydrochloricAcid.webp"
import SulphuricAcid from "@/assets/products/categories/SulphuricAcid.webp"
import SodiumSilicate from "@/assets/products/categories/SodiumSilicate.webp"
import SodiumNitrate from "@/assets/products/categories/SodiumNitrate.webp"
import SodiumSulphate from "@/assets/products/categories/SodiumSulphate.webp"
// Specific Product Images (Existing)
import fuelOilImg from "@/assets/products/categories/Fule.webp";
import gasOilImg from "@/assets/products/categories/gasoli.webp";
import naphthaImg from "@/assets/products/categories/naphtha.webp";
// import rubberOilImg from "@/assets/products/fuelproduct.webp";
import whiteSpiritImg from "@/assets/products/white-spirit.webp";
import glycolsImg from "@/assets/products/glycols.webp";

// Generated Images
import butylGlycolGenerated from "@/assets/products/generated/butyl_glycol_egbe.webp";
import sodiumHypochloriteGenerated from "@/assets/products/generated/sodium_hypochlorite.webp";
import pacGenerated from "@/assets/products/generated/polyaluminium_chloride_pac.webp";
import propyleneGlycolCosmeticGenerated from "@/assets/products/generated/propylene_glycol_cosmetic.webp";
import calciumCarbonateIndustrialGenerated from "@/assets/products/generated/calcium_carbonate_industrial.webp";
import zincOxideGenerated from "@/assets/products/generated/zinc_oxide.webp";
import polyetherPolyolsGenerated from "@/assets/products/generated/polyether_polyols.webp";
import siliconeSurfactantsGenerated from "@/assets/products/generated/silicone_surfactants.webp";
import mdiFoamGenerated from "@/assets/products/generated/mdi_foam.webp";
import nitrocelluloseInkGenerated from "@/assets/products/generated/nitrocellulose_ink.webp";
import printingResinsPigmentsGenerated from "@/assets/products/generated/printing_resins_pigments.webp";
import aceticAcidTextileGenerated from "@/assets/products/generated/acetic_acid_textile.webp";
import mekPaintGenerated from "@/assets/products/generated/mek_paint.webp";
import mekInkGenerated from "@/assets/products/generated/mek_ink.webp";
import tolueneInkGenerated from "@/assets/products/generated/toluene_ink.webp";
import sodaAshGenerated from "@/assets/products/generated/soda_ash.webp";
import sodiumHydrosulphiteGenerated from "@/assets/products/generated/sodium_hydrosulphite.webp";

// import lubricantOilImg from "@/assets/products/lubricant-oil.webp";
// import paraffinOilImg from "@/assets/products/Paraffin Oil.webp";

export interface Product {
    name: string;
    description: string;
    href: string;
    backgroundImage: string;
    icon: JSX.Element;
    slug: string;
    category: string;
    fullDescription: string;
    uses: string[];
    // New fields   
    features?: string[];
    specifications?: {
        purity?: string;
        packaging?: string;
        casNumber?: string;
        formula?: string;
        meltingPoint?: string;
        appearance?: string;
        density?: string;
        boilingPoint?: string;
        flashPoint?: string;
        [key: string]: string | undefined;
    };
    certifications?: string[];
    industries?: string[];
    handling?: string;
    chemicalId?: string;
    msdsPdfKey?: string;
}

export const products: Product[] = [
    // Petrochemicals
    {
        name: 'Fuel Oil',
        description: 'Premium-grade fuel oils engineered for reliable performance in industrial power generation, marine propulsion, and heavy-duty thermal systems.',
        href: '/products/fuel-oil',
        backgroundImage: fuelOilImg,
        icon: <Flame className="w-6 h-6" />,
        slug: 'fuel-oil',
        category: 'Petrochemicals',

        fullDescription:
            'Fuel oil is a heavy distillate derived from crude oil refining, specifically formulated for high-energy output and operational efficiency. It is extensively used in large-scale industrial boilers, power generation units, and marine engines. Our fuel oil portfolio complies with international standards such as ISO 8217 and is supplied in multiple grades including Light Fuel Oil (LFO) and Heavy Fuel Oil (HFO), ensuring optimal combustion, reduced emissions, and long-term equipment protection.',

        uses: [
            'Thermal and captive power generation plants',
            'Marine propulsion and auxiliary vessel engines',
            'Industrial boilers and furnaces',
            'Heavy industrial heating and processing systems'
        ],

        features: [
            'High calorific value ensuring maximum energy efficiency',
            'Available in low sulfur variants (LSFO) to meet emission norms',
            'Stable viscosity for smooth pumping and consistent combustion',
            'Excellent oxidation resistance and long-term storage stability'
        ],

        specifications: {
            purity: '99.5% minimum hydrocarbon content',
            packaging: 'Bulk tanker supply, ISO tanks, steel drums',
            casNumber: '68476-30-2'
        },

        certifications: [
            'ISO 8217 Marine Fuel Compliance',
            'REACH Regulatory Compliance',
            'International Marine Fuel Standards'
        ],

        industries: [
            'Maritime & Shipping',
            'Power Generation & Utilities',
            'Heavy Manufacturing & Processing'
        ],

        handling:
            'Store in a cool, dry, and well-ventilated area away from open flames and ignition sources. Ensure proper grounding during transfer operations. Personnel should use appropriate PPE including flame-resistant clothing, chemical-resistant gloves, and safety goggles.'
    },
    {
        name: 'Gas Oil',
        description: 'High-performance gas oil engineered for diesel engines, heavy-duty industrial machinery, and efficient heating applications.',
        href: '/products/gas-oil',
        backgroundImage: gasOilImg,
        icon: <Fuel className="w-6 h-6" />,
        slug: 'gas-oil',
        category: 'Petrochemicals',

        fullDescription:
            'Gas oil is a refined middle-distillate petroleum product commonly known as diesel fuel. It is widely used in automotive diesel engines, industrial equipment, agricultural machinery, and commercial heating systems. Our gas oil is refined under strict quality control procedures to deliver consistent performance, improved fuel efficiency, and reduced emissions while meeting major international fuel specifications such as EN 590 and ASTM standards.',

        uses: [
            'Automotive and commercial diesel engines',
            'Heavy industrial and construction machinery',
            'Industrial and commercial heating systems',
            'Agricultural tractors and farm equipment'
        ],

        features: [
            'High cetane number ensuring smooth ignition and efficient combustion',
            'Excellent cold flow characteristics for reliable operation in low temperatures',
            'Low sulfur formulation to meet emission and environmental regulations',
            'Enhanced lubricity to reduce engine wear and extend component life'
        ],

        specifications: {
            purity: '99.0% minimum hydrocarbon content',
            packaging: 'Bulk tanker supply, flexitanks, sealed steel drums',
            casNumber: '68334-30-5'
        },

        certifications: [
            'EN 590 Diesel Fuel Standard',
            'ASTM D975 Diesel Fuel Specification',
            'ISO 8217 Distillate Fuel Compliance'
        ],

        industries: [
            'Transportation & Logistics',
            'Agriculture & Farming',
            'Construction & Infrastructure',
            'Industrial & Commercial Heating'
        ],

        handling:
            'Store in approved, properly grounded containers away from heat and ignition sources. Avoid inhalation of vapors and prolonged skin contact. Ensure adequate ventilation during handling and transfer. Use appropriate personal protective equipment including gloves and safety eyewear.'
    },
    {
        name: 'Base Oil',
        description: 'Refined mineral base oils used as the primary raw material for automotive, industrial, and marine lubricant formulations.',
        href: '/products/base-oil',
        backgroundImage: baseoilImg,
        icon: <Cylinder className="w-6 h-6" />,
        slug: 'base-oil',
        category: 'Petrochemicals',

        fullDescription:
            'Base oil is the fundamental component used in the formulation of lubricants, greases, and specialty industrial fluids. Produced through solvent refining, hydrocracking, or severe hydroprocessing, base oils determine the performance characteristics of finished lubricants. Our product range includes Group I, Group II, and Group III base oils, available in multiple viscosity grades, designed to meet the requirements of automotive engines, industrial machinery, marine equipment, and metalworking applications.',

        uses: [
            'Manufacturing of automotive engine oils and transmission fluids',
            'Production of industrial and automotive greases',
            'Formulation of hydraulic oils, gear oils, and compressor oils',
            'Metalworking fluids, cutting oils, and process lubricants'
        ],

        features: [
            'High oxidation and thermal stability for extended service life',
            'High viscosity index ensuring stable performance across temperature ranges',
            'Low volatility to minimize oil consumption and evaporation losses',
            'Good demulsibility for effective water separation in industrial systems'
        ],

        specifications: {
            purity: '99.5% minimum base oil content',
            packaging: 'Bulk tanker supply, flexitanks, sealed steel drums',
            casNumber: '64742-54-7'
        },

        certifications: [
            'API Base Oil Group Classification (Group I, II, III)',
            'ISO 6743 Lubricant Classification',
            'DIN 51517 Industrial Gear Oil Standard'
        ],

        industries: [
            'Automotive & Commercial Vehicles',
            'Industrial Manufacturing & Machinery',
            'Marine & Offshore Operations',
            'Aviation & Specialty Lubricants'
        ],

        handling:
            'Store in clean, dry, and dedicated tanks or containers to prevent contamination. Avoid contact with water, dust, and foreign materials. Maintain recommended storage temperatures and ensure proper filtration during transfer and blending operations.'
    },

    {
        name: 'Hydrocarbon Oil',
        description: 'Refined hydrocarbon oil used as an industrial feedstock, process oil, and blending component across chemical and energy sectors.',
        href: '/products/hydrocarbon-oil',
        backgroundImage: petrochemicalsImg,
        icon: <Layers className="w-6 h-6" />,
        slug: 'hydrocarbon-oil',
        category: 'Petrochemicals',

        fullDescription:
            'Hydrocarbon oil is a petroleum-derived product composed mainly of paraffinic and naphthenic hydrocarbons, obtained during crude oil refining. It is widely used as a feedstock and functional process oil in chemical manufacturing, fuel blending, rubber processing, and lubricant formulation. Our hydrocarbon oils are produced under controlled refining conditions to ensure stable composition, low impurities, and reliable performance in continuous industrial operations.',

        uses: [
            'Feedstock for petrochemical and chemical manufacturing units',
            'Process oil in rubber, plastic, and polymer industries',
            'Blending component in industrial fuels and energy products',
            'Base material for lubricant oils and specialty industrial fluids'
        ],

        features: [
            'Stable hydrocarbon composition suitable for continuous industrial processes',
            'Low sulfur, moisture, and ash content to protect equipment',
            'Good thermal stability under elevated operating temperatures',
            'Consistent viscosity and flash point across supplied batches'
        ],

        specifications: {
            purity: '98.5% minimum hydrocarbon content',
            packaging: 'Bulk tanker supply, ISO tanks, steel drums',
            casNumber: '64742-46-7'
        },

        certifications: [
            'ISO 9001 Quality Management System',
            'REACH Regulatory Compliance'
        ],

        industries: [
            'Petrochemical & Chemical Manufacturing',
            'Rubber & Polymer Processing',
            'Energy & Fuel Blending',
            'Industrial Lubricants & Fluids'
        ],

        handling:
            'Store in tightly closed containers in a cool, dry, and well-ventilated area. Keep away from open flames, sparks, and strong oxidizing agents. Use proper grounding during transfer operations and wear appropriate PPE including gloves, protective clothing, and eye protection.'
    },

    {
        name: 'Naphtha',
        description: 'Refined petroleum naphtha used as a primary feedstock for petrochemical production, fuel blending, and industrial solvent applications.',
        href: '/products/naphtha',
        backgroundImage: naphthaImg,
        icon: <Droplets className="w-6 h-6" />,
        slug: 'naphtha',
        category: 'Petrochemicals',

        fullDescription:
            'Naphtha is a light to intermediate petroleum distillate obtained during crude oil refining. It serves as a critical feedstock in steam cracking units for the production of olefins such as ethylene and propylene, which are the building blocks of plastics, synthetic fibers, and resins. Naphtha is also used in catalytic reforming to produce high-octane blending components and aromatics. Supplied in both light and heavy grades, our naphtha is refined to deliver consistent composition, controlled boiling range, and reliable processing performance.',

        uses: [
            'Feedstock for steam cracking units producing ethylene and propylene',
            'Raw material for plastics, polymers, and synthetic fiber manufacturing',
            'Catalytic reforming feed for aromatics and high-octane components',
            'Industrial solvent and fuel blending applications'
        ],

        features: [
            'High paraffinic content for efficient petrochemical cracking',
            'Low benzene grades available to meet regulatory requirements',
            'Controlled and consistent boiling range for stable processing',
            'High cracking efficiency with predictable yield performance'
        ],

        specifications: {
            purity: '99.0% minimum hydrocarbon content',
            packaging: 'Bulk vessel supply, ISO tanks, rail cars',
            casNumber: '8030-30-6',
            formula: 'C6H14 – C12H26'
        },

        certifications: [
            'ASTM D3735 Naphtha Specification',
            'Petrochemical Feedstock Grade'
        ],

        industries: [
            'Petrochemical & Refining',
            'Plastics & Polymer Manufacturing',
            'Rubber & Synthetic Materials',
            'Industrial Solvents & Fuel Blending'
        ],

        handling:
            'Highly flammable liquid. Store in approved, bonded containers away from heat, sparks, and open flames. Use explosion-proof electrical equipment and ensure proper grounding during transfer. Handle only in well-ventilated areas with appropriate personal protective equipment.'
    }
    ,
    {
        name: 'White Oil',
        description: 'Highly refined mineral oil for pharmaceutical and cosmetic use.',
        href: '/products/white-oil',
        backgroundImage: whiteoilimge,
        icon: <Droplets className="w-6 h-6" />,
        slug: 'white-oil',
        category: 'Petrochemicals',
        fullDescription: 'White oils are highly refined mineral oils that are extremely pure, stable, colorless, odorless, and chemically inert. Our pharmaceutical and technical grade white oils meet the most stringent purity requirements.',
        uses: ['Pharmaceuticals', 'Cosmetics', 'Plastics lubrication'],
        features: [
            'High purity mineral oil (USP/NF)',
            'Completely odorless and tasteless',
            'Excellent oxidation stability',
            'REACH and FDA compliant grades'
        ],
        specifications: {
            purity: '99.9% min',
            packaging: 'Bulk, IBCs, Drums',
            casNumber: '8042-47-5'
        },
        certifications: ['USP', 'NF', 'EP', 'JP'],
        industries: ['Pharmaceutical', 'Cosmetics', 'Medical Devices'],
        handling: 'Store in clean, dry conditions. Protect from extreme temperatures.'
    },
    {
        name: 'White Spirit',
        description: 'Refined hydrocarbon solvent widely used in paints, coatings, surface cleaning, and industrial degreasing applications.',
        href: '/products/white-spirit',
        backgroundImage: whiteSpiritImg,
        icon: <FlaskConical className="w-6 h-6" />,
        slug: 'white-spirit',
        category: 'Petrochemicals',

        fullDescription:
            'White Spirit is a petroleum-derived aliphatic solvent obtained from refined distillate fractions. It is extensively used as a thinner and solvent in the paints and coatings industry due to its controlled evaporation rate and strong solvency characteristics. Available in regular, low-aromatic, and low-odor grades, our white spirit is produced to meet strict quality standards, ensuring consistent performance in coating formulations, cleaning processes, and surface preparation applications.',

        uses: [
            'Thinning and formulation of paints, enamels, and varnishes',
            'Degreasing and cleaning of metal surfaces and mechanical parts',
            'Industrial and commercial cleaning applications',
            'Manufacturing of varnishes, sealers, and protective coatings'
        ],

        features: [
            'Low aromatic content options to reduce odor and health impact',
            'Controlled and consistent evaporation rate for uniform coating finish',
            'Strong solvency power for oils, greases, and resins',
            'Good color stability ensuring no discoloration in finished products'
        ],

        specifications: {
            purity: '99.0% minimum hydrocarbon content',
            packaging: 'Bulk supply, IBCs, steel drums, cans',
            casNumber: '64742-82-1'
        },

        certifications: [
            'ASTM D235 Mineral Spirits Specification',
            'BS 245 White Spirit Standard',
            'REACH Regulatory Compliance'
        ],

        industries: [
            'Paints & Coatings Manufacturing',
            'Printing Inks & Surface Treatments',
            'Industrial & Commercial Cleaning',
            'Adhesives & Sealants'
        ],

        handling:
            'Flammable liquid. Store in approved containers away from heat, sparks, and open flames. Ensure proper grounding during transfer operations. Use only in well-ventilated areas and wear appropriate personal protective equipment to avoid inhalation and prolonged skin contact.'
    }
    ,
    {
        name: 'Rubber Process Oil',
        description: 'Specialized hydrocarbon oils designed to improve the processing and physical properties of rubber compounds.',
        href: '/products/rubber-process-oil',
        backgroundImage: rubberOilImg,
        icon: <Factory className="w-6 h-6" />,
        slug: 'rubber-process-oil',
        category: 'Petrochemicals',
        fullDescription: 'Our Rubber Process Oils (RPO) serve as essential plasticizers. They facilitate the incorporation of fillers, improve flow during extrusion, and enhance the elasticity of the final vulcanizate. Available in high-aromatic (TDAE), naphthenic, and paraffinic grades.',
        uses: [
            'High-performance Tire Treads',
            'EPDM Rubber Profiles',
            'Molded Industrial Parts',
            'Conveyor Belting & Hoses'
        ],
        features: [
            'High Solvency & Elastomer Compatibility',
            'Low Volatility for High-Temp Processing',
            'Optimized Viscosity-Gravity Constant (VGC)',
            'Superior Thermal and UV Stability'
        ],
        specifications: {
            purity: 'Compliant with PCA < 3% (EU Standards)',
            packaging: 'Flexitanks, ISO Tanks, 200L Steel Drums',
            casNumber: '64742-52-5 / 64742-04-7',
        },
        certifications: ['ISO 9001:2015', 'ASTM D2226', 'REACH Compliant', 'EU 1907/2006'],
        industries: ['Automotive', 'Construction', 'Aerospace', 'Consumer Goods'],
        handling: 'Store in a cool, dry place. Avoid heat and open flames. Use oil-resistant gloves for handling.'
    },
    {
        name: 'Distillate Marine Oil',
        description: 'Low-sulfur distillate marine fuel formulated for reliable performance in modern and legacy marine diesel engines.',
        href: '/products/distillate-marine-oil',
        backgroundImage: distillateMarineOil,
        icon: <Waves className="w-6 h-6" />,
        slug: 'distillate-marine-oil',
        category: 'Petrochemicals',

        fullDescription:
            'Distillate Marine Oil is a refined petroleum distillate fuel specifically produced for use in marine diesel engines and auxiliary power systems. Commonly supplied as marine gas oil (MGO) or marine diesel oil (MDO), it offers clean combustion, stable ignition quality, and compliance with international maritime emission regulations. Our distillate marine fuels are blended and tested to meet ISO 8217 specifications and IMO 2020 sulfur limits, ensuring operational reliability, reduced emissions, and engine protection across a wide range of marine applications.',

        uses: [
            'Main propulsion fuel for marine diesel engines',
            'Fuel for auxiliary engines and onboard generators',
            'Offshore vessels and support craft operations',
            'Naval, fishing, and coastal marine vessels'
        ],

        features: [
            'Low sulfur content compliant with IMO 2020 regulations (<0.50% m/m)',
            'High cetane number for reliable ignition and smooth engine operation',
            'Good oxidation stability for safe storage and onboard fuel systems',
            'Suitable for use in modern and conventional marine diesel engines'
        ],

        specifications: {
            purity: '98.5% minimum distillate fuel content',
            packaging: 'Bunker barge supply, bulk delivery',
            casNumber: '68334-30-5'
        },

        certifications: [
            'ISO 8217:2017 Marine Distillate Fuel Standard',
            'IMO 2020 Sulfur Regulation Compliance',
            'MARPOL Annex VI Emission Requirements'
        ],

        industries: [
            'Commercial Shipping & Logistics',
            'Offshore Energy & Support Vessels',
            'Naval & Defense Fleets',
            'Fishing & Coastal Marine Operations'
        ],

        handling:
            'Handle strictly in accordance with marine bunkering procedures. Ensure proper filtration during transfer to prevent contamination. Avoid spills and discharge into the marine environment. Follow shipboard fuel management and safety guidelines at all times.'
    }
    ,

    // Solvents
    {
        name: 'Glycols',
        description: 'High-purity glycols used in antifreeze, polyester manufacturing, and industrial heat-transfer applications.',
        href: '/products/glycols',
        backgroundImage: glycolsImg,
        icon: <Beaker className="w-6 h-6" />,
        slug: 'glycols',
        category: 'Solvents',

        fullDescription:
            'Glycols such as Monoethylene Glycol (MEG) and Diethylene Glycol (DEG) are widely used industrial chemicals known for their excellent thermal stability, hygroscopic nature, and low freezing points. These glycols are essential raw materials in antifreeze formulations, polyester fiber and resin production, heat transfer fluids, and industrial humectants.',

        uses: [
            'Antifreeze and engine coolants',
            'Polyester fiber and PET resin manufacturing',
            'Heat transfer fluids',
            'Industrial humectants and dehydrating agents'
        ],

        features: [
            'High purity industrial-grade glycols',
            'Excellent heat transfer efficiency',
            'Low freezing point characteristics',
            'Consistent quality for polymer applications'
        ],

        specifications: {
            purity: '99.9% min (MEG), 99.5% min (DEG)',
            packaging: 'Bulk, ISO Tanks, IBCs, Drums',
            casNumber: '107-21-1 (MEG), 111-46-6 (DEG)',
            formula: 'C2H6O2 (MEG), C4H10O3 (DEG)'
        },

        certifications: [
            'Industrial Grade',
            'Fiber Grade',
            'Antifreeze Grade'
        ],

        industries: [
            'Automotive',
            'Textiles',
            'Packaging (PET)',
            'HVAC',
            'Chemical Manufacturing'
        ],

        handling:
            'Hygroscopic material. Store in tightly sealed containers to prevent moisture absorption. Avoid prolonged skin contact and inhalation of vapors or mists. Use in well-ventilated areas and follow standard industrial safety procedures.'
    },
    {
        name: 'Xylene',
        description: 'A widely used aromatic hydrocarbon solvent for industrial and laboratory applications.',
        href: '/products/xylene',
        backgroundImage: Xylene,
        icon: <Box className="w-6 h-6" />,
        slug: 'xylene',
        category: 'Solvents',
        chemicalId: 'mix-xylene',
        msdsPdfKey: 'Mix Xylene MSDS & TDS.pdf',

        fullDescription:
            'Xylene is a colorless, flammable aromatic hydrocarbon consisting of a mixture of ortho-, meta-, and para-xylene isomers. It is produced mainly from petroleum refining and catalytic reforming processes. Xylene is extensively used as an industrial solvent due to its strong dissolving power for resins, inks, rubber compounds, and adhesives.',

        uses: [
            'Solvent for paints and coatings',
            'Printing ink solvent',
            'Rubber processing solvent',
            'Leather treatment solvent',
            'Laboratory reagent',
            'Cleaning agent for industrial equipment'
        ],

        features: [
            'Excellent solvency for organic materials',
            'Stable aromatic hydrocarbon structure',
            'Moderate evaporation rate',
            'Consistent performance in industrial applications',
            'Available as mixed or individual isomers'
        ],

        specifications: {
            purity: '99.0% min (Mixed Xylenes)',
            // // appearance: 'Clear, colorless liquid',
            // odor: 'Sweet aromatic odor',
            // boilingPoint: '137–144 °C',
            // density: '0.86 g/cm³ at 20 °C',
            packaging: 'Bulk, ISO Tank, IBC, HDPE Drums',
            casNumber: '1330-20-7',
            formula: 'C8H10'
        },

        certifications: [
            'Technical Grade',
            'Industrial Grade',
            'ASTM D843',
            'ISO 9001 Manufacturing'
        ],

        industries: [
            'Paints & Coatings',
            'Printing & Packaging',
            'Rubber & Tyre Manufacturing',
            'Leather Processing',
            'Petrochemicals',
            'Laboratories'
        ],

        handling:
            'Highly flammable liquid. Vapors may form explosive mixtures with air. Avoid inhalation and skin contact. Use only in well-ventilated areas. Wear appropriate PPE including gloves, goggles, and respirators if required. Store away from heat, sparks, and open flames.'
    },

    {
        name: 'Butyl Acetate',
        description: 'Medium-evaporating ester solvent widely used in lacquers, enamels, printing inks, and high-performance coating systems.',
        href: '/products/butyl-acetate',
        backgroundImage: ButylAcetate,
        icon: <Droplets className="w-6 h-6" />,
        slug: 'butyl-acetate',
        category: 'Solvents',
        chemicalId: 'butyl-acetate',
        msdsPdfKey: 'Butyl Acetate MSDS & TDS.pdf',

        fullDescription:
            'Butyl acetate is a clear, colorless ester solvent with a characteristic mild fruity odor, produced by the esterification of n-butanol and acetic acid. It is extensively used in solvent-based coatings due to its balanced evaporation rate, strong solvency for resins, and excellent flow and leveling properties. These characteristics make it a preferred solvent in automotive, wood, and industrial coatings, as well as printing inks and specialty finishes.',

        uses: [
            'Solvent in lacquers, enamels, and industrial coating formulations',
            'Dissolution and processing of resins and polymers',
            'Surface finishing applications in leather and synthetic materials',
            'Printing inks and specialty film and coating applications'
        ],

        features: [
            'Controlled evaporation rate providing smooth film formation and leveling',
            'Excellent flow promotion and gloss development in coatings',
            'Good blush resistance in high-humidity application conditions',
            'High dilution ratio allowing efficient resin solubilization'
        ],

        specifications: {
            purity: '99.5% minimum assay',
            packaging: 'Bulk supply, IBCs, sealed steel drums',
            casNumber: '123-86-4',
            formula: 'C6H12O2'
        },

        certifications: [
            'ASTM D3130 Solvent Specification',
            'Technical Grade Industrial Solvent'
        ],

        industries: [
            'Automotive & Industrial Coatings',
            'Wood Finishes & Furniture',
            'Printing Inks & Packaging',
            'Leather & Synthetic Materials'
        ],

        handling:
            'Flammable liquid. Store in a cool, well-ventilated area away from ignition sources. Use spark-proof and grounded equipment during handling and transfer. Avoid prolonged inhalation of vapors and direct skin contact.'
    },

    {
        name: 'TDI (Toluene Diisocyanate)',
        description: 'Aromatic diisocyanate primarily used in the production of flexible polyurethane foams for furniture, bedding, and automotive applications.',
        href: '/products/tdi',
        backgroundImage: TDI,
        icon: <Microwave className="w-6 h-6" />,
        slug: 'tdi',
        category: 'Solvents',
        chemicalId: 'toluene-diisocyanate',
        msdsPdfKey: 'TOLUENE-DIISOCYANATE MSDS & TDS.pdf',
        fullDescription: 'Toluene Diisocyanate (TDI) is an aromatic diisocyanate mainly supplied as an 80/20 mixture of the 2,4-TDI and 2,6-TDI isomers. It is a key raw material in the manufacture of flexible polyurethane foams used in furniture, mattresses, automotive seating, and cushioning products. TDI reacts with polyols to form polyurethane polymers, providing elasticity, resilience, and durability to finished foam products. Due to its high reactivity and volatility, it must be handled under strictly controlled industrial conditions.',
        uses: [
            'Flexible polyurethane foam production',
            'Furniture cushions and mattresses',
            'Automotive seating and interior components',
            'Carpet underlay and packaging foam',
            'Adhesives, sealants, and elastomers (limited applications)'
        ],
        features: [
            'Typical 80/20 isomer ratio (2,4-/2,6-TDI)',
            'High purity ≥ 99.5%',
            'Low hydrolyzable chlorine content',
            'High reactivity with polyols',
            'Consistent quality for foam density control'
        ],
        specifications: {
            purity: '≥ 99.5%',
            packaging: 'Steel drums (~250 kg), IBCs, bulk ISO tankers',
            casNumber: '584-84-9',
            formula: 'C9H6N2O2'
        },
        certifications: ['ISO 9001 Manufacturing', 'REACH Registered'],
        industries: ['Flexible Foam Manufacturing', 'Furniture & Bedding', 'Automotive Interiors', 'Adhesives & Sealants'],
        handling: 'Moisture sensitive and toxic by inhalation. Store in dry conditions under nitrogen blanket at controlled temperature (typically 15–25°C). Use full PPE including respirators, chemical-resistant gloves, and protective clothing. Ensure proper ventilation and emergency safety equipment availability.'
    },

    {
        name: 'Toluene',
        description: 'High-purity aromatic hydrocarbon solvent and chemical feedstock used in coatings, adhesives, and petrochemical processing.',
        href: '/products/toluene',
        backgroundImage: Toluene,
        icon: <Wind className="w-6 h-6" />,
        slug: 'toluene',
        category: 'Solvents',
        chemicalId: 'toluene',
        msdsPdfKey: 'Toluene MSDS & TDS.pdf',

        fullDescription:
            'Toluene is a colorless, volatile aromatic hydrocarbon derived from petroleum refining and catalytic reforming processes. It is insoluble in water and has a characteristic aromatic odor commonly associated with paint thinners. Due to its strong solvency and chemical stability, toluene is extensively used as a solvent in paints, coatings, adhesives, and printing inks. It also serves as an important chemical feedstock in the production of benzene derivatives, explosives, and various specialty chemicals.',

        uses: [
            'Solvent in paints, coatings, and industrial finishing systems',
            'Chemical feedstock for synthesis of benzene derivatives and intermediates',
            'Component in adhesive, rubber, and sealant formulations',
            'Octane-enhancing blending component in gasoline formulations'
        ],

        features: [
            'High solvency power for resins, rubbers, and polymers',
            'Fast evaporation rate suitable for quick-drying applications',
            'Excellent dissolving capacity across a wide range of materials',
            'Good chemical and storage stability under normal conditions'
        ],

        specifications: {
            purity: '99.5% minimum assay',
            packaging: 'Bulk supply, ISO tanks, sealed steel drums',
            casNumber: '108-88-3',
            formula: 'C7H8'
        },

        certifications: [
            'Nitration Grade',
            'Industrial Grade',
            'ASTM D841 Aromatic Hydrocarbon Specification'
        ],

        industries: [
            'Paints & Coatings Manufacturing',
            'Pharmaceutical & Fine Chemicals',
            'Adhesives & Rubber Processing',
            'Petrochemical & Refining Industry'
        ],

        handling:
            'Highly flammable liquid. Handle with strict safety protocols. Avoid inhalation of vapors and prolonged skin contact. Use only in well-ventilated areas and ensure containers are properly grounded during storage and transfer operations.'
    },

    {
        name: 'Acetone',
        description: 'High-purity ketone solvent widely used for cleaning, extraction, and chemical manufacturing.',
        href: '/products/acetone',
        backgroundImage: Acetone,
        icon: <Pipette className="w-6 h-6" />,
        slug: 'acetone',
        category: 'Solvents',
        chemicalId: 'acetone',
        msdsPdfKey: 'Acetone MSDS.pdf',

        fullDescription:
            'Acetone (propanone) is a colorless, volatile, and highly flammable organic solvent and the simplest ketone. It is completely miscible with water and most organic solvents. Due to its strong solvency, rapid evaporation, and low residue, acetone is extensively used in chemical synthesis, pharmaceutical processing, surface cleaning, and cosmetics manufacturing.',

        uses: [
            'Industrial and laboratory cleaning solvent',
            'Chemical intermediate in pharmaceuticals',
            'Paint, resin, and coating solvent',
            'Cosmetics and nail polish remover base',
            'Degreasing agent for metal surfaces',
            'Extraction solvent in laboratories'
        ],

        features: [
            '100% water miscible',
            'Very fast evaporation rate',
            'Excellent degreasing and cleaning ability',
            'Low residue after evaporation',
            'Available in multiple purity grades'
        ],

        specifications: {
            purity: '99.8% min',
            // appearance: 'Clear, colorless liquid',
            // odor: 'Characteristic sweet odor',
            // boilingPoint: '56 °C',
            // meltingPoint: '-95 °C',
            // density: '0.79 g/cm³ at 20 °C',
            // flashPoint: '-20 °C (closed cup)',
            packaging: 'Bulk, ISO Tank, IBC, HDPE Drums',
            casNumber: '67-64-1',
            formula: 'C3H6O'
        },

        certifications: [
            'ACS Reagent Grade',
            'USP / NF',
            'Pharmacopoeia Grade',
            'Technical Grade',
            'ISO 9001 Certified Supply'
        ],

        industries: [
            'Pharmaceuticals',
            'Cosmetics & Personal Care',
            'Paints & Coatings',
            'Chemical Manufacturing',
            'Laboratories',
            'Electronics Cleaning'
        ],

        handling:
            'Extremely flammable liquid and vapor. Keep away from heat, sparks, and open flames. Use only in well-ventilated areas. Avoid inhalation of vapors and prolonged skin contact. Ground and bond containers during transfer. Store in tightly closed containers in a cool, dry place.'
    },

    {
        name: 'Ethyl Acetate',
        description: 'High-purity ester solvent widely used in coatings, printing inks, adhesives, pharmaceuticals, and food-related applications.',
        href: '/products/ethyl-acetate',
        backgroundImage: Ethylacetate,
        icon: <FlaskConical className="w-6 h-6" />,
        slug: 'ethyl-acetate',
        category: 'Solvents',
        chemicalId: 'ethyl-acetate-msds',
        msdsPdfKey: 'Ethyle Acetate MSDS & TDS.pdf',

        fullDescription:
            'Ethyl acetate is a colorless, volatile organic ester with a characteristic mild fruity odor. It is produced through the esterification of ethanol and acetic acid and is extensively used as a fast-evaporating solvent across multiple industries. Due to its excellent solvency for resins, polymers, and oils, ethyl acetate is a preferred solvent in coatings, inks, adhesives, and pharmaceutical processes. It is also widely accepted in food and flavor applications when supplied in food-grade quality.',

        uses: [
            'Primary solvent in surface coatings, lacquers, and varnishes',
            'Manufacturing of printing inks and packaging inks',
            'Solvent for adhesive formulations and laminating systems',
            'Extraction and purification processes in pharmaceutical and food industries'
        ],

        features: [
            'Fast evaporation rate enabling quick drying and high productivity',
            'Excellent solvency for a wide range of resins and polymers',
            'Relatively low toxicity compared to many hydrocarbon solvents',
            'Readily biodegradable under normal environmental conditions'
        ],

        specifications: {
            purity: '99.8% minimum assay',
            packaging: 'Bulk supply, IBCs, sealed steel drums',
            casNumber: '141-78-6',
            formula: 'C4H8O2'
        },

        certifications: [
            'Food Grade Quality',
            'Technical Grade Industrial Solvent',
            'USP / NF Pharmaceutical Compliance'
        ],

        industries: [
            'Printing Inks & Packaging',
            'Pharmaceutical Manufacturing',
            'Food & Flavor Industry',
            'Paints, Coatings & Adhesives'
        ],

        handling:
            'Highly flammable liquid. Keep away from heat, sparks, and open flames. Use grounded and explosion-proof equipment during transfer. Ensure adequate ventilation and avoid prolonged inhalation of vapors.'
    },

    {
        name: 'Butyl Glycol (EGBE)',
        description: 'High-purity glycol ether solvent used in coatings, industrial cleaners, inks, and specialty chemical formulations.',
        href: '/products/butyl-glycol',
        backgroundImage: butylGlycolGenerated,
        icon: <Beaker className="w-6 h-6" />,
        slug: 'butyl-glycol',
        category: 'Solvents',
        chemicalId: 'butyl-glycol',
        msdsPdfKey: 'BULK-BUTYL-GLYCOL MSDS & TDS.pdf',

        fullDescription:
            'Butyl Glycol, also known as Ethylene Glycol Monobutyl Ether (EGBE), is a clear, colorless liquid glycol ether with a mild odor, high boiling point, and excellent solvency characteristics. It is widely used as a solvent and coupling agent in water-based and solvent-based formulations. Due to its ability to dissolve both hydrophilic and hydrophobic substances, EGBE is an essential component in surface coatings, industrial and household cleaners, inks, and textile processing chemicals.',

        uses: [
            'Solvent and coalescing agent in water-based and solvent-based surface coatings',
            'Formulation of industrial, institutional, and household cleaning products',
            'Solvent for printing inks, dyes, and pigments',
            'Textile dyeing, finishing, and processing applications'
        ],

        features: [
            'Excellent coupling ability between water and organic components',
            'Slow and controlled evaporation rate for smooth film formation',
            'Good miscibility with water and most organic solvents',
            'Readily biodegradable under standard environmental conditions'
        ],

        specifications: {
            purity: '99.5% minimum assay',
            packaging: 'Bulk supply, IBCs, sealed steel drums',
            casNumber: '111-76-2',
            formula: 'C6H14O2'
        },

        certifications: [
            'Technical Grade Industrial Solvent',
            'REACH Registered Substance'
        ],

        industries: [
            'Paints & Coatings Manufacturing',
            'Industrial & Institutional Cleaning Products',
            'Textiles & Dye Processing',
            'Printing Inks & Pigment Formulations'
        ],

        handling:
            'Handle with adequate ventilation and avoid inhalation of vapors. Prevent prolonged or repeated skin contact by using appropriate protective gloves. Store in tightly closed containers in a cool, well-ventilated area away from incompatible materials.'
    },

    {
        name: 'Methyl Ethyl Ketone (MEK)',
        description: 'High-purity ketone solvent widely used for resins, adhesives, coatings, and industrial chemical processes.',
        href: '/products/mek',
        backgroundImage: MethylEthylKetone,
        icon: <Zap className="w-6 h-6" />,
        slug: 'mek',
        category: 'Solvents',
        chemicalId: 'mek',
        msdsPdfKey: 'BULK-METHYL-ETHYL-KETONE MEK MSDS & TDS.pdf',

        fullDescription:
            'Methyl Ethyl Ketone (MEK), also known as 2-butanone, is a colorless, volatile ketone solvent characterized by its strong solvency power and rapid evaporation rate. It is extensively used in the formulation of surface coatings, adhesives, and printing inks, particularly for dissolving gums, resins, cellulose acetate, and nitrocellulose systems. MEK is also employed as a process solvent and chemical intermediate in various industrial manufacturing operations.',

        uses: [
            'Solvent for surface coatings, lacquers, and industrial paints',
            'Formulation of solvent-based adhesives and sealants',
            'Manufacturing of printing inks and packaging inks',
            'Process solvent and intermediate in chemical manufacturing'
        ],

        features: [
            'Fast evaporation rate enabling quick drying and high throughput',
            'Strong solvency for a wide range of resins and polymers',
            'Low boiling point supporting efficient solvent recovery',
            'Excellent compatibility with nitrocellulose and acrylic resin systems'
        ],

        specifications: {
            purity: '99.7% minimum assay',
            packaging: 'Bulk supply, IBCs, sealed steel drums',
            casNumber: '78-93-3',
            formula: 'C4H8O'
        },

        certifications: [
            'Technical Grade Industrial Solvent',
            'ASTM D740 Specification Compliance'
        ],

        industries: [
            'Adhesives & Sealants',
            'Paints & Industrial Coatings',
            'Printing Inks & Packaging',
            'Chemical Processing & Manufacturing'
        ],

        handling:
            'Extremely flammable liquid. Enforce strict no-smoking policies and eliminate all ignition sources. Ground and bond all containers during transfer operations. Use explosion-proof electrical equipment and ensure adequate ventilation to prevent vapor accumulation.'
    }
    ,

    // Detergent & Chemical Raw Materials
    {
        name: 'LABSA 96%',
        description: 'Linear Alkyl Benzene Sulphonic Acid used as a primary surfactant in detergent formulations.',
        href: '/products/labsa',
        backgroundImage: LABSA96,
        icon: <Droplets className="w-6 h-6" />,
        slug: 'labsa',
        category: 'Detergent & Chemical Raw Materials',
        chemicalId: 'labsa-96',
        msdsPdfKey: 'Labsa COA.pdf',

        fullDescription:
            'LABSA 96% (Linear Alkyl Benzene Sulphonic Acid) is a high-activity anionic surfactant extensively used in the manufacture of household and industrial detergents. It offers excellent detergency, high foaming capacity, and effective soil removal. Due to its cost efficiency and biodegradability, LABSA remains the backbone raw material for detergent and cleaning product formulations worldwide.',

        uses: [
            'Laundry washing powders and liquids',
            'Dishwashing liquids',
            'Household surface cleaners',
            'Industrial and institutional cleaning products'
        ],

        features: [
            'High active matter content (96%)',
            'Strong detergency and emulsifying properties',
            'Excellent foaming performance',
            'Biodegradable under aerobic conditions'
        ],

        specifications: {
            purity: '96% min active matter',
            packaging: 'Bulk, IBCs, HDPE Drums',
            casNumber: '27176-87-0',
            formula: 'C18H30O3S'
        },

        certifications: [
            'ISO 9001 Certified Manufacturing',
            'REACH Compliant'
        ],

        industries: [
            'Detergent Manufacturing',
            'Household Cleaning Products',
            'Industrial Cleaning Chemicals',
            'Personal Care Formulations'
        ],

        handling:
            'Corrosive acidic material. Handle with chemical-resistant gloves, goggles, and protective clothing. Store in acid-resistant containers away from moisture and incompatible materials. Avoid direct contact with skin and eyes.'
    },

    {
        name: 'SLES 70%',
        description: 'Sodium Lauryl Ether Sulfate widely used as a primary surfactant in personal care and cleaning formulations.',
        href: '/products/sles',
        backgroundImage: SLES70,
        icon: <Beaker className="w-6 h-6" />,
        slug: 'sles',
        category: 'Detergent & Chemical Raw Materials',
        chemicalId: 'sles-70',
        msdsPdfKey: 'SLES-COA zhechem.pdf',

        fullDescription:
            'SLES 70% (Sodium Lauryl Ether Sulfate) is an anionic surfactant supplied as a high-active viscous paste. It provides excellent foaming, detergency, and wetting performance while remaining relatively mild to skin when properly formulated. SLES 70% is a core ingredient in shampoos, liquid soaps, body washes, and household cleaning products.',

        uses: [
            'Shampoos and hair cleansers',
            'Liquid hand soaps',
            'Body wash and shower gels',
            'Household liquid detergents'
        ],

        features: [
            'High active matter (70%)',
            'Rich and stable foam',
            'Good skin compatibility when diluted',
            'Readily biodegradable'
        ],

        specifications: {
            purity: '70% active matter',
            packaging: 'Bulk, IBCs, HDPE Drums',
            casNumber: '68585-34-2',
            formula: 'C12H25(OCH2CH2)nOSO3Na'
        },

        certifications: [
            'Cosmetic Grade',
            'REACH Registered',
            'ISO 22716 (GMP Cosmetics)'
        ],

        industries: [
            'Personal Care Products',
            'Cosmetics Manufacturing',
            'Household Cleaning Products',
            'Industrial Liquid Detergents'
        ],

        handling:
            'Store in tightly sealed containers away from direct sunlight. Avoid freezing or overheating. Use appropriate PPE when handling concentrated material to prevent irritation.'
    },

    {
        name: 'Soda Ash Light',
        description: 'Light-density sodium carbonate used in glass, detergents, and chemical processing.',
        href: '/products/soda-ash-light',
        backgroundImage: sodaAshGenerated,
        icon: <Layers className="w-6 h-6" />,
        slug: 'soda-ash-light',
        category: 'Detergent & Chemical Raw Materials',
        chemicalId: 'soda-ash-light',
        msdsPdfKey: 'Specification   Soda Ash Light .pdf',

        fullDescription:
            'Soda Ash Light (Sodium Carbonate) is a white, odorless, free-flowing powder with lower bulk density than dense soda ash. It is produced via the Solvay process and is widely used as an alkaline agent in glass manufacturing, detergent formulation, paper processing, and water treatment. Its light density makes it especially suitable for detergent blending and chemical reactions requiring fast dissolution.',

        uses: [
            'Glass manufacturing',
            'Detergent and soap production',
            'Paper and pulp processing',
            'Water softening and pH adjustment'
        ],

        features: [
            'High chemical purity',
            'Low iron content suitable for clear glass',
            'Good solubility in water',
            'Uniform particle size'
        ],

        specifications: {
            purity: '99.2% min',
            packaging: '25 kg bags, Jumbo bags, Bulk',
            casNumber: '497-19-8',
            formula: 'Na2CO3'
        },

        certifications: [
            'ISO 9001',
            'Technical Grade',
            'Glass Grade'
        ],

        industries: [
            'Glass Manufacturing',
            'Detergents & Soaps',
            'Water Treatment',
            'Metallurgy'
        ],

        handling:
            'Store in a cool, dry place away from moisture. Avoid dust generation during handling. Use appropriate PPE such as gloves and dust masks. Hygroscopic material—keep containers tightly closed.'
    },

    {
        name: 'Sodium Nitrate',
        description: 'Oxidizing agent for glass, explosives, and industrial chemical formulations.',
        href: '/products/sodium-nitrate',
        backgroundImage: SodiumNitrate,
        icon: <Box className="w-6 h-6" />,
        slug: 'sodium-nitrate',
        category: 'Detergent & Chemical Raw Materials',
        chemicalId: 'sodium-nitrate-coated',
        msdsPdfKey: 'Sodium Nitrate coated grade.pdf',
        fullDescription: 'Sodium Nitrate (NaNO3) is a white solid that is highly soluble in water. It is a powerful oxidizer used in several industrial processes, including glass making and as a chemical intermediate.',
        uses: ['Glass manufacturing', 'Pyrotechnics', 'Enamel glazes', 'Industrial chemistry'],
        features: ['Powerful oxidizer', 'High purity crystalline form', 'Fast-acting reagent'],
        specifications: { purity: '≥ 99%', casNumber: '7631-99-4', formula: 'NaNO3' },
        industries: ['Glass', 'Chemical Manufacturing', 'Industrial Processing'],
        handling: 'Strong oxidizer. Store away from flammable materials and reducing agents.'
    },

    {
        name: 'Titanium Dioxide',
        description: 'High-performance white pigment (TiO2) widely used for opacity, brightness, and UV resistance in paints, coatings, plastics, and specialty applications.',
        href: '/products/titanium-dioxide',
        backgroundImage: TitaniumDioxide,
        icon: <Paintbrush className="w-6 h-6" />,
        slug: 'titanium-dioxide',
        category: 'Detergent & Chemical Raw Materials',
        chemicalId: 'titanium-dioxide-ar',
        msdsPdfKey: 'Titanium Dioxide.pdf',
        fullDescription: 'Titanium Dioxide (TiO2) is a naturally occurring oxide of titanium and the most important white inorganic pigment used globally. It provides exceptional opacity, high refractive index, superior brightness, and excellent UV resistance. Rutile grade TiO2 is primarily used in paints, coatings, and plastics due to its superior durability and weather resistance, while anatase grade is used in paper, inks, and specialty applications. It enhances hiding power, improves color retention, and increases product lifespan.',
        uses: [
            'Architectural and industrial paints',
            'Powder and protective coatings',
            'Masterbatches and plastic compounding',
            'Paper coating and filling',
            'Printing inks',
            'Cosmetic and personal care formulations (select grades)'
        ],
        features: [
            'High refractive index for superior hiding power',
            'Excellent brightness and whiteness',
            'Outstanding UV resistance and weather durability',
            'Available in Rutile and Anatase grades',
            'High dispersibility in various media'
        ],
        specifications: {
            purity: '≥ 94% TiO2 content',
            packaging: '25 kg multi-layer paper bags, Jumbo bags',
            casNumber: '13463-67-7',
            formula: 'TiO2'
        },
        certifications: ['ISO 9001 Manufacturing', 'REACH Registered', 'ASTM D476 Classification'],
        industries: ['Paints & Coatings', 'Plastics & Polymers', 'Printing Inks', 'Paper & Packaging'],
        handling: 'Store in a dry, covered warehouse away from direct exposure to moisture. Ensure proper ventilation to control dust levels during handling. Use personal protective equipment including dust masks and gloves to prevent inhalation and skin contact.'
    },

    {
        name: 'Sodium Silicate',
        description: 'Versatile "liquid glass" used as a binder, detergent builder, and mining flotation aid.',
        href: '/products/sodium-silicate',
        backgroundImage: SodiumSilicate,
        icon: <Layers className="w-6 h-6" />,
        slug: 'sodium-silicate',
        category: 'Detergent & Chemical Raw Materials',
        chemicalId: 'sodium-silicate-cullets',
        msdsPdfKey: 'Soidum Silicate COA.pdf',
        fullDescription: 'Sodium Silicate is used as a binder in cements, a builder in detergents, and a corrosion inhibitor in water treatment. It also acts as a dispersant in mining flotation.',
        uses: ['Detergent building', 'Adhesives', 'Mining flotation', 'Water treatment'],
        features: ['Strong binding properties', 'Adjustable silica/alkali ratio', 'Liquid or solid forms'],
        specifications: { purity: 'Available as Neutral or Alkaline grades', casNumber: '1344-09-8', formula: 'Na2SiO3' },
        industries: ['Detergents', 'Mining', 'Construction', 'Water Treatment'],
        handling: 'Keep containers tightly closed. Highly alkaline; protect skin and eyes.'
    },

    {
        name: 'Sodium Sulphate (Anhydrous)',
        description: 'Essential filler for detergents and processing aid for glass and textiles.',
        href: '/products/sodium-sulphate',
        backgroundImage: SodiumSulphate,
        icon: <Layers className="w-6 h-6" />,
        slug: 'sodium-sulphate',
        category: 'Detergent & Chemical Raw Materials',
        chemicalId: 'sodium-sulphate-anhydrous',
        msdsPdfKey: 'Sodium Sulphate Anhydrous.pdf',
        fullDescription: 'Sodium Sulphate (anhydrous) is used primarily as a filler in powdered household detergents and as a fining agent in the glass industry to remove air bubbles.',
        uses: ['Powdered detergents', 'Glass manufacturing', 'Textile dyeing', 'Paper pulping'],
        features: ['Inert filler', 'High purity anhydrous form', 'Free-flowing white powder'],
        specifications: { purity: '≥ 99%', casNumber: '7757-82-6', formula: 'Na2SO4' },
        industries: ['Detergents', 'Glass', 'Textiles', 'Paper'],
        handling: 'Hygroscopic. Store in a dry area. Avoid dust generation.'
    },

    {
        name: 'Caustic Soda Flakes',
        description: 'Highly corrosive alkali used widely in soap, paper, textile, and chemical industries.',
        href: '/products/caustic-soda',
        backgroundImage: Casusticsoda,
        icon: <Box className="w-6 h-6" />,
        slug: 'caustic-soda',
        category: 'Detergent & Chemical Raw Materials',
        chemicalId: 'caustic-soda-flakes',
        msdsPdfKey: 'Caustic Soda Flakes COA.pdf',

        fullDescription:
            'Caustic Soda Flakes (Sodium Hydroxide) are a strong inorganic alkali produced by the electrolysis of sodium chloride brine. Supplied in solid white flakes, it is highly soluble in water and releases heat during dissolution. It is a critical raw material in soap and detergent manufacturing, pulp and paper processing, textiles, water treatment, and various chemical reactions.',

        uses: [
            'Soap and detergent manufacturing',
            'Pulp and paper processing',
            'Textile scouring and dyeing',
            'Water treatment and pH control'
        ],

        features: [
            'High chemical purity (≥99%)',
            'Low carbonate and chloride levels',
            'Rapid solubility in water',
            'Stable quality for industrial use'
        ],

        specifications: {
            purity: '99% min',
            packaging: '25 kg HDPE bags, Jumbo bags, Bulk',
            casNumber: '1310-73-2',
            formula: 'NaOH'
        },

        certifications: [
            'Technical Grade',
            'Food Grade (as per application)',
            'Pharma Grade (controlled use)'
        ],

        industries: [
            'Soap & Detergent Manufacturing',
            'Pulp & Paper',
            'Textiles',
            'Water Treatment'
        ],

        handling:
            'Extremely corrosive material. Use chemical-resistant gloves, goggles, and protective clothing. Store in airtight containers in a dry area away from moisture and acids. In case of skin or eye contact, rinse immediately with plenty of water and seek medical attention.'
    }
    ,

    // Water Treatment Chemicals
    {
        name: 'Aluminum Sulphate',
        description: 'Widely used inorganic coagulant for water and wastewater treatment.',
        href: '/products/aluminum-sulphate',
        backgroundImage: AluminumSulphate,
        icon: <Waves className="w-6 h-6" />,
        slug: 'aluminum-sulphate',
        category: 'Water Treatment Chemicals',
        chemicalId: 'aluminium-sulphate',
        msdsPdfKey: 'ALUMINIUM-SULPHATE- COA.pdf',
        fullDescription: 'Aluminum Sulphate is an inorganic salt commonly used as a primary coagulant in drinking water purification and wastewater treatment. It reacts with alkalinity in water to form aluminum hydroxide flocs, which effectively trap suspended solids, organic matter, and turbidity. It is supplied in solid (lumps or powder) and liquid forms for municipal and industrial applications.',
        uses: ['Drinking water treatment', 'Wastewater and effluent treatment', 'Paper sizing and manufacturing', 'pH control'],
        features: ['Fast and efficient coagulation', 'Effective turbidity removal', 'Reliable in neutral pH', 'Economical'],
        specifications: { purity: '17% Al2O3 min', packaging: '25 kg bags, Bulk', casNumber: '10043-01-3', formula: 'Al2(SO4)3' },
        industries: ['Municipal Water Treatment', 'Wastewater Treatment', 'Paper & Pulp'],
        handling: 'Store in a dry area. Avoid contact with skin and eyes. Use appropriate PPE.'
    },

    {
        name: 'Ferric Chloride',
        description: 'Powerful inorganic coagulant used in water treatment and etching applications.',
        href: '/products/ferric-chloride',
        backgroundImage: FerricChloride,
        icon: <Waves className="w-6 h-6" />,
        slug: 'ferric-chloride',
        category: 'Water Treatment Chemicals',
        chemicalId: 'ferric-chloride-anhydrous',
        msdsPdfKey: 'Ferric Chloride COA.pdf',
        fullDescription: 'Ferric Chloride is a highly effective primary coagulant used in municipal and industrial water treatment. It is particularly efficient at removing heavy metals, phosphorus, and suspended solids.',
        uses: ['Sewage treatment', 'Industrial effluent treatment', 'Etching of copper in PCB manufacturing', 'Drinking water purification'],
        features: ['Excellent heavy metal removal', 'Effective at wide pH ranges', 'High-purity liquid/anhydrous forms'],
        specifications: { purity: '40% solution / 98% anhydrous', casNumber: '7705-08-0', formula: 'FeCl3' },
        industries: ['Water Treatment', 'Electronics', 'Chemical Manufacturing'],
        handling: 'Highly corrosive and acidic. Store in plastic or rubber-lined containers. Use full acid-resistant PPE.'
    },

    {
        name: 'Sodium Hypochlorite',
        description: 'Powerful liquid disinfectant and bleaching agent used in water treatment, sanitation, and industrial cleaning.',
        href: '/products/sodium-hypochlorite',
        backgroundImage: sodiumHypochloriteGenerated,
        icon: <Droplets className="w-6 h-6" />,
        slug: 'sodium-hypochlorite',
        category: 'Water Treatment Chemicals',
        chemicalId: 'sodium-hypochlorite',
        msdsPdfKey: 'SODIUM HYPOCHLORITE COA.pdf',
        fullDescription: 'Sodium Hypochlorite (NaOCl) is a greenish-yellow liquid commonly known as liquid bleach. It is a powerful oxidizing agent widely used for water disinfection, municipal water treatment, swimming pool sanitation, and industrial bleaching processes. It effectively eliminates bacteria, viruses, and algae, ensuring safe and clean water supplies.',
        uses: [
            'Municipal water disinfection',
            'Swimming pool treatment',
            'Industrial bleaching',
            'Wastewater treatment',
            'Household and industrial sanitation'
        ],
        features: [
            'Effective broad-spectrum disinfectant',
            'Easy to dose liquid form',
            'Rapid action against pathogens',
            'High stability in solution'
        ],
        specifications: {
            purity: '10-15% available chlorine',
            packaging: 'HDPE drums, IBCs, Bulk',
            casNumber: '7681-52-9',
            formula: 'NaOCl'
        },
        industries: ['Water Treatment', 'Sanitation', 'Textiles', 'Pulp & Paper'],
        handling: 'Corrosive; causes skin and eye burns. Store in a cool, dark place away from acids and organic materials. Use appropriate PPE (gloves, goggles, apron). Handle with care to avoid chlorine gas release if mixed with acids.'
    },

    {
        name: 'Calcium Hypochlorite',
        description: 'Potent disinfecting agent for water treatment and sanitation.',
        href: '/products/calcium-hypochlorite',
        backgroundImage: CalciumHypochlorite,
        icon: <Droplets className="w-6 h-6" />,
        slug: 'calcium-hypochlorite',
        category: 'Water Treatment Chemicals',
        chemicalId: 'calcium-hypochlorite-lr',
        msdsPdfKey: 'CALCIUM HYPOCHLORITE COA.pdf',
        fullDescription: 'Calcium Hypochlorite is a widely used bleaching and disinfecting agent. It is a key chemical for swimming pool treatment and municipal water disinfection.',
        uses: ['Pool water sanitation', 'Industrial bleaching', 'Drinking water disinfection'],
        features: ['High chlorine content', 'Stable in solid form', 'Fast-acting sanitizer'],
        specifications: { purity: '65-70% available chlorine', casNumber: '7778-54-3', formula: 'Ca(ClO)2' },
        industries: ['Water Treatment', 'Sanitation', 'Textiles'],
        handling: 'Strong oxidizer. Store away from organic materials and acids. May cause fire on contact with other chemicals.'
    },

    {
        name: 'PAC (Polyaluminium Chloride)',
        description: 'High-efficiency inorganic coagulant for municipal and industrial water treatment.',
        href: '/products/pac',
        backgroundImage: pacGenerated,
        icon: <FlaskConical className="w-6 h-6" />,
        slug: 'pac',
        category: 'Water Treatment Chemicals',
        fullDescription: 'Polyaluminium Chloride (PAC) is a pre-hydrolyzed aluminum-based coagulant widely used in drinking water, wastewater, and industrial effluent treatment. Due to its polymeric structure and high charge density, PAC provides faster floc formation, improved turbidity removal, and stable performance even in cold water and low-alkalinity conditions compared to conventional alum.',
        uses: ['Drinking water clarification', 'Municipal and industrial wastewater treatment', 'Industrial water recycling systems', 'Paper and pulp processing'],
        features: ['High basicity and polymerized structure', 'Effective at low and high turbidity levels', 'Lower dosage compared to alum', 'Reduced sludge generation'],
        specifications: { purity: '28–30% Al2O3', packaging: 'Bulk, IBCs, Drums', casNumber: '1327-41-9', formula: '[Al2(OH)nCl6−n]m' },
        industries: ['Municipal Water Treatment', 'Wastewater Treatment', 'Industrial Processing', 'Paper Industry'],
        handling: 'Store in corrosion-resistant containers in a cool, dry place. Avoid contact with skin and eyes. Use appropriate PPE.'
    },

    // Cosmetics & Personal Care Chemicals
    {
        name: 'Glycerine (USP Grade)',
        description: 'High-purity USP grade glycerine suitable for food, pharmaceutical, and personal care formulations.',
        href: '/products/glycerine',
        backgroundImage: Glycerine,
        icon: <Droplets className="w-6 h-6" />,
        slug: 'glycerine',
        category: 'Cosmetics & Personal Care Chemicals',
        chemicalId: 'glycerine-cosmetic',
        msdsPdfKey: 'GLYCERINE MSDS & TDS.pdf',
        fullDescription: 'Glycerine (also known as glycerol) is a clear, colorless, odorless, and viscous liquid with excellent hygroscopic and humectant properties. It is widely used in cosmetic and personal care applications for moisture retention, texture enhancement, and product stability.',
        uses: ['Skin and hair moisturizers', 'Soaps and liquid cleansers', 'Creams and lotions', 'Oral care products'],
        features: ['USP-compliant pharmaceutical grade', 'High purity and clarity', 'Excellent moisturizing properties', 'Non-toxic and non-irritating'],
        specifications: { purity: '≥ 99.7%', packaging: 'Drums, IBCs, Bulk', casNumber: '56-81-5', formula: 'C3H8O3' },
        industries: ['Cosmetics & Personal Care', 'Pharmaceuticals', 'Oral Care'],
        handling: 'Store in tightly closed containers in a cool, dry place. Glycerine is hygroscopic.'
    },

    {
        name: 'Propylene Glycol',
        description: 'High-purity propylene glycol used as a humectant, solvent, and carrier in cosmetic, pharmaceutical, food, and industrial formulations.',
        href: '/products/propylene-glycol',
        backgroundImage: propyleneGlycolCosmeticGenerated,
        icon: <Beaker className="w-6 h-6" />,
        slug: 'propylene-glycol',
        category: 'Cosmetics & Personal Care Chemicals',
        chemicalId: 'propylene-glycol-usp',
        msdsPdfKey: 'PROPLYENE-GLYCOL-USP MSDS & TDS.pdf',
        fullDescription: 'Propylene Glycol (PG) is a colorless, odorless, hygroscopic liquid widely used as a humectant, solvent, and formulation stabilizer. It effectively retains moisture, enhances product texture, and improves the solubility of active ingredients in cosmetic and personal care products.',
        uses: [
            'Humectant for moisture retention',
            'Solvent for active ingredients and fragrances',
            'Carrier in pharmaceutical syrups'
        ],
        features: [
            'Available in USP and EP Grade',
            'Excellent hygroscopic and solvent properties',
            'Chemically stable and low volatility',
            'Low toxicity and skin-compatible'
        ],
        specifications: {
            purity: '99.5% – 99.9%',
            packaging: 'Drums, IBCs, Bulk',
            casNumber: '57-55-6',
            formula: 'C3H8O2'
        },
        certifications: ['USP', 'EP'],
        industries: ['Cosmetics & Personal Care', 'Pharmaceuticals'],
        handling: 'Store in tightly closed containers in a cool, dry place. Avoid contamination with moisture.'
    },

    {
        name: 'Stearic Acid',
        description: 'Fundamental fatty acid for cosmetics, soaps, and industrial lubricants.',
        href: '/products/stearic-acid',
        backgroundImage: StearicAcid,
        icon: <FlaskConical className="w-6 h-6" />,
        slug: 'stearic-acid',
        category: 'Cosmetics & Personal Care Chemicals',
        chemicalId: 'stearic-acid',
        msdsPdfKey: 'Stearic Acid COA.pdf',
        fullDescription: 'Stearic Acid is a saturated fatty acid used to thicken and stabilize cosmetic formulations and as a primary raw material in soap making and industrial rubber processing.',
        uses: ['Soap and detergent manufacturing', 'Cosmetic thickening agent', 'Rubber lubricant', 'Candle making'],
        features: ['Excellent emulsification', 'Pearlizing agent in shampoos', 'Triple pressed grades available'],
        specifications: { purity: '99%', casNumber: '57-11-4', formula: 'C18H36O2' },
        industries: ['Cosmetics', 'Personal Care', 'Rubber', 'Chemical Manufacturing'],
        handling: 'Store in a cool, dry area. Avoid inhalation of dust.'
    },

    // Paint & Coatings
    {
        name: 'Titanium Dioxide',
        description: 'High-performance white pigment (TiO2) widely used for opacity, brightness, and UV resistance in paints and coatings.',
        href: '/products/titanium-dioxide',
        backgroundImage: TitaniumDioxide,
        icon: <Paintbrush className="w-6 h-6" />,
        slug: 'titanium-dioxide-paint',
        category: 'Paint & Coatings Chemicals',
        chemicalId: 'titanium-dioxide-paint',
        msdsPdfKey: 'Titanium Dioxide.pdf',
        fullDescription: 'Titanium Dioxide (TiO2) is its naturally occurring oxide and is globaly the most important white inorganic pigment. It provides exceptional opacity, high refractive index, and superior brightness, enhancing hiding power and weather resistance in architectural and industrial coatings.',
        uses: ['Architectural and industrial paints', 'Powder and protective coatings', 'Masterbatches and plastic compounding', 'Printing inks'],
        features: ['High refractive index for superior hiding power', 'Excellent brightness and whiteness', 'Outstanding UV resistance and durability', 'High dispersibility'],
        specifications: { purity: '≥ 94% TiO2 content', packaging: '25 kg bags, Jumbo bags', casNumber: '13463-67-7', formula: 'TiO2' },
        industries: ['Paints & Coatings', 'Printing Inks', 'Paper & Packaging'],
        handling: 'Store in a dry, covered area. Avoid dust generation. Use personal protective equipment.'
    },

    {
        name: 'Calcium Carbonate',
        description: 'High-purity calcium carbonate used as a functional filler and extender in paints and coatings.',
        href: '/products/calcium-carbonate-industrial',
        backgroundImage: calciumCarbonateIndustrialGenerated,
        icon: <Box className="w-6 h-6" />,
        slug: 'calcium-carbonate-industrial',
        category: 'Paint & Coatings Chemicals',
        chemicalId: 'calcium-carbonate-industrial',
        msdsPdfKey: 'Calcium Carbonate COA.pdf',
        fullDescription: 'Calcium Carbonate (CaCO3) is a white, odorless powder used as a cost-effective filler and extender in paints and coatings. It improves gloss control, opacity, and rheology of the final product.',
        uses: ['Decorative and industrial paints', 'Architectural coatings', 'Plastics and masterbatches', 'Adhesives and sealants'],
        features: ['Excellent whiteness and brightness', 'Controlled particle size distribution', 'High calcium content', 'Improved rheological properties'],
        specifications: { purity: '≥ 98%', casNumber: '471-34-1', formula: 'CaCO3' },
        industries: ['Paints & Coatings', 'Construction', 'Plastics'],
        handling: 'Store in a cool, dry area. Avoid dust formation during handling.'
    },

    {
        name: 'Zinc Oxide',
        description: 'High-purity inorganic white pigment offering UV protection and corrosion resistance for coatings.',
        href: '/products/zinc-oxide',
        backgroundImage: zincOxideGenerated,
        icon: <ShieldCheck className="w-6 h-6" />,
        slug: 'zinc-oxide',
        category: 'Paint & Coatings Chemicals',
        chemicalId: 'zinc-oxide-paint',
        msdsPdfKey: 'Zinc Oxide, USP.pdf',
        fullDescription: 'Zinc Oxide (ZnO) is an inorganic compound appearing as a fine white powder. In coatings, it improves mildew resistance and durability, and provides excellent UV absorption and corrosion protection.',
        uses: ['Anti-corrosive paints and primers', 'UV absorbent coatings', 'Ceramic glazes', 'Industrial protective coatings'],
        features: ['Excellent UV absorption and protection', 'Anti-corrosive properties', 'Natural antimicrobial performance', 'High thermal stability'],
        specifications: { purity: '99.0% – 99.9%', packaging: '25 kg bags, Jumbo bags', casNumber: '1314-13-2', formula: 'ZnO' },
        industries: ['Paints & Coatings', 'Rubber Manufacturing', 'Ceramics & Glass'],
        handling: 'Avoid dust formation and inhalation. Store in tightly sealed containers in a cool, dry area.'
    },

    {
        name: 'Methyl Ethyl Ketone (MEK)',
        description: 'Fast-evaporating ketone solvent with strong solvency for coatings resins and lacquers.',
        href: '/products/mek',
        backgroundImage: mekPaintGenerated,
        icon: <Zap className="w-6 h-6" />,
        slug: 'mek-paint',
        category: 'Paint & Coatings Chemicals',
        chemicalId: 'mek-paint',
        msdsPdfKey: 'BULK-METHYL-ETHYL-KETONE MEK MSDS & TDS.pdf',
        fullDescription: 'Methyl Ethyl Ketone (MEK), also known as 2-butanone, is a colorless, volatile solvent with strong solvency power and rapid evaporation rate. It is extensively used in formulating surface coatings, lacquers, and nitrocellulose systems.',
        uses: ['Solvent for industrial paints and lacquers', 'Resin solubilization in coatings', 'Adhesive formulations', 'Cleaning agent for paint equipment'],
        features: ['Fast evaporation rate', 'Very strong solvency', 'Low boiling point', 'Consistent high purity'],
        specifications: { purity: '99.7% min', packaging: 'Drums, IBCs, Bulk', casNumber: '78-93-3', formula: 'C4H8O' },
        industries: ['Paints & Coatings', 'Adhesives & Sealants', 'Chemical Processing'],
        handling: 'Extremely flammable liquid. Ground/bond during transfer. Eliminate all ignition sources.'
    },

    {
        name: 'Butyl Acetate',
        description: 'Medium-evaporating ester solvent widely used in lacquers, enamels, and high-performance coating systems.',
        href: '/products/butyl-acetate',
        backgroundImage: ButylAcetate,
        icon: <Droplets className="w-6 h-6" />,
        slug: 'butyl-acetate-paint',
        category: 'Paint & Coatings Chemicals',
        chemicalId: 'butyl-acetate-paint',
        msdsPdfKey: 'Butyl Acetate MSDS & TDS.pdf',
        fullDescription: 'Butyl Acetate is a clear, colorless ester solvent with a balanced evaporation rate and strong solvency for resins. It is preferred in automotive and industrial coatings for its excellent flow and leveling properties.',
        uses: ['Industrial coating formulations', 'Lacquers and enamels', 'Surface finishing applications', 'Resin processing'],
        features: ['Controlled evaporation rate', 'Excellent flow and leveling', 'Good blush resistance', 'High dilution ratio'],
        specifications: { purity: '99.5% min', packaging: 'Drums, IBCs, Bulk', casNumber: '123-86-4', formula: 'C6H12O2' },
        industries: ['Automotive Coatings', 'Industrial Coatings', 'Wood Finishes'],
        handling: 'Flammable liquid. Store away from heat and ignition sources. Use grounded equipment.'
    },

    {
        name: 'Xylene',
        description: 'Aromatic hydrocarbon solvent essential for industrial paints, coatings, and resin dissolving.',
        href: '/products/xylene',
        backgroundImage: Xylene,
        icon: <Box className="w-6 h-6" />,
        slug: 'xylene-paint',
        category: 'Paint & Coatings Chemicals',
        chemicalId: 'mix-xylene-paint',
        msdsPdfKey: 'Mix Xylene MSDS & TDS.pdf',
        fullDescription: 'Xylene is a colorless, flammable aromatic hydrocarbon solvent with strong dissolving power for resins and polymers. It is a critical component in many industrial and protective coating systems.',
        uses: ['Solvent for architectural and industrial paints', 'Printing and packaging inks', 'Rubber processing', 'Degreasing agent for surfaces'],
        features: ['Strong solvency for resins and polymers', 'Moderate evaporation rate', 'Chemically stable aromatic structure', 'Versatile industrial solvent'],
        specifications: { purity: '99.0% min', packaging: 'Drums, IBCs, Bulk', casNumber: '1330-20-7', formula: 'C8H10' },
        industries: ['Paints & Coatings', 'Printing & Packaging', 'Petrochemical Manufacturing'],
        handling: 'Highly flammable liquid. Handle only in well-ventilated areas with appropriate PPE.'
    },

    {
        name: 'Solvent Naphtha',
        description: 'High-boiling aromatic hydrocarbon solvent used as a diluent and solvent in industrial coatings.',
        href: '/products/solvent-naphtha',
        backgroundImage: naphthaImg,
        icon: <Droplets className="w-6 h-6" />,
        slug: 'solvent-naphtha',
        category: 'Paint & Coatings Chemicals',
        chemicalId: 'solvent-naphtha',
        msdsPdfKey: 'Naphtha COA.pdf',
        fullDescription: 'Solvent Naphtha is a range of high-boiling petroleum distillates with high aromatic content. It is widely used in the paint industry for its excellent solvency and controlled evaporation, making it ideal for high-solids coatings and industrial finishes.',
        uses: ['Solvent for industrial and protective coatings', 'Varnishes and enamels', 'Agricultural chemicals solvent', 'Fuel and oil blending'],
        features: ['Excellent solvency power', 'High boiling range and flash point', 'Consistent aromatic composition', 'Good diluent properties'],
        specifications: { purity: 'High aromatic content', packaging: 'Drums, IBCs, Bulk', casNumber: '64742-95-6 / 8030-30-6', formula: 'Mixture' },
        industries: ['Paints & Coatings', 'Petrochemicals', 'Industrial Manufacturing'],
        handling: 'Flammable liquid. Handle in accordance with industrial petroleum standards. Avoid prolonged skin contact.'
    },

    // Mining
    {
        name: 'Sodium Cyanide',
        description: 'Highly toxic inorganic compound primarily used in gold and silver extraction through cyanidation processes in the mining industry.',
        href: '/products/sodium-cyanide',
        backgroundImage: SodiumCyanide,
        icon: <Hammer className="w-6 h-6" />,
        slug: 'sodium-cyanide',
        category: 'Mining Industry Chemicals',
        chemicalId: 'sodium-cyanide',
        msdsPdfKey: 'Sodium cyanide COA.pdf',
        fullDescription: 'Sodium Cyanide (NaCN) is a white, water-soluble, highly toxic inorganic compound widely used for the efficient extraction of gold and silver from ore through cyanidation process.',
        uses: ['Gold and silver ore extraction', 'Electroplating and metal finishing', 'Chemical intermediate in specialty synthesis'],
        features: ['High purity mining grade material', 'Rapid dissolution in water', 'Efficient metal complexing', 'Manufactured under strict safety controls'],
        specifications: { purity: '≥ 98%', casNumber: '143-33-9', formula: 'NaCN' },
        industries: ['Mining', 'Metallurgy', 'Electroplating'],
        handling: 'EXTREMELY TOXIC AND FATAL. Use full PPE. Handle only in controlled environments by trained personnel. Emergency kits must be available.'
    },

    {
        name: 'Activated Carbon',
        description: 'High-surface-area porous carbon specifically engineered for gold recovery and water purification.',
        href: '/products/activated-carbon',
        backgroundImage: ActivatedCarbon,
        icon: <Box className="w-6 h-6" />,
        slug: 'activated-carbon',
        category: 'Mining Industry Chemicals',
        chemicalId: 'activated-carbon',
        msdsPdfKey: 'Activated Carbon COA.pdf',
        fullDescription: 'Activated Carbon is a highly porous form of carbon produced from coconut shell, coal, or wood. In the mining industry, it is widely used for efficient gold recovery in Carbon-in-Pulp (CIP) and Carbon-in-Leach (CIL) processes.',
        uses: ['Gold recovery in CIP/CIL processes', 'Water purification and filtration', 'Air filtration and solvent recovery'],
        features: ['High surface area and iodine number', 'Excellent gold adsorption kinetics', 'Low attrition loss and high hardness'],
        specifications: { purity: 'High activity grades available', casNumber: '7440-44-0', formula: 'C' },
        industries: ['Mining & Metallurgy', 'Water Treatment', 'Environmental Solutions'],
        handling: 'Avoid dust generation and inhalation. Wear appropriate respiratory protection in confined spaces.'
    },

    {
        name: 'Hydrochloric Acid',
        description: 'Versatile strong mineral acid used in mining ore processing, metal pickling, and chemical synthesis.',
        href: '/products/hydrochloric-acid',
        backgroundImage: HydrochloricAcid,
        icon: <Droplets className="w-6 h-6" />,
        slug: 'hydrochloric-acid',
        category: 'Mining Industry Chemicals',
        chemicalId: 'hydrochloric-acid-mining',
        msdsPdfKey: 'HYDROCHLORIC ACID COA.pdf',
        fullDescription: 'Hydrochloric Acid (HCl) is a highly corrosive mineral acid essential for ore processing in the mining industry, acidizing of wells, and metal pickling.',
        uses: ['Mining and mineral extraction', 'Metal pickling and industrial cleaning', 'pH adjustment in industrial processes', 'Oil well acidizing'],
        features: ['Strong industrial acidity', 'Highly reactive mineral acid', 'Versatile reagent across industries'],
        specifications: { purity: '30-37% concentration', casNumber: '7647-01-0', formula: 'HCl' },
        industries: ['Mining & Metallurgy', 'Energy & Petrochemicals', 'Chemical Manufacturing'],
        handling: 'EXTREMELY CORROSIVE. Fumes cause respiratory damage. Use specialized contact PPE and acid-proof storage.'
    },

    {
        name: 'Sodium Silicate',
        description: 'Industrial-grade sodium silicate used in detergent formulations, mining flotation, and adhesive manufacturing.',
        href: '/products/sodium-silicate',
        backgroundImage: SodiumSilicate,
        icon: <FlaskConical className="w-6 h-6" />,
        slug: 'sodium-silicate-mining',
        category: 'Mining Industry Chemicals',
        chemicalId: 'sodium-silicate-mining',
        msdsPdfKey: 'SODIUM SILICATE COA.pdf',
        fullDescription: 'Sodium Silicate, commonly known as liquid glass, is widely used in the mining industry for mineral flotation and ore concentration, as well as in detergents and adhesives.',
        uses: ['Mineral flotation and ore concentration', 'Detergent binder and stabilizer', 'Adhesives and cement formulations', 'Foundation stabilization'],
        features: ['Excellent binding and dispersing properties', 'Adjustable SiO2 to Na2O ratio', 'Superior adhesive strength', 'Water glass versatility'],
        specifications: { purity: 'Multiple grades available', casNumber: '1344-09-8', formula: 'Na2SiO3' },
        industries: ['Mining & Mineral Processing', 'Detergents & Soaps', 'Construction'],
        handling: 'Store in suitable containers. Highly alkaline—avoid skin and eye contact. Wipe spills promptly to avoid slipping Hazards.'
    },

    {
        name: 'Sulphuric Acid',
        description: 'Critical industrial acid for mineral leaching, fertilizer production, and chemical synthesis.',
        href: '/products/sulphuric-acid',
        backgroundImage: SulphuricAcid,
        icon: <Flame className="w-6 h-6" />,
        slug: 'sulphuric-acid',
        category: 'Mining Industry Chemicals',
        chemicalId: 'sulphuric-acid-mining',
        msdsPdfKey: 'SULPHURIC ACID  COA.pdf',
        fullDescription: 'Sulphuric Acid (H2SO4) is a highly corrosive mineral acid. In mining, it is primarily used for leaching ores (such as copper and zinc) and producing sulfate chemicals.',
        uses: ['Mineral leaching (Copper, Zinc, Uranium)', 'Fertilizer production (Phosphates)', 'Industrial cleaning and pH control', 'Chemical synthesis intermediate'],
        features: ['Highly corrosive and reactive', 'Powerful dehydrating agent', 'High industrial concentration (98%)'],
        specifications: { purity: '98% concentration', casNumber: '7664-93-9', formula: 'H2SO4' },
        industries: ['Mining & Metallurgy', 'Agriculture', 'Industrial Chemicals'],
        handling: 'EXTREMELY CORROSIVE. Reacts violently with water. Use full specialized chemical contact PPE.'
    },

    // Textile
    {
        name: 'Hydrogen Peroxide',
        description: 'Strong oxidizing agent widely used for textile bleaching, pulp processing, and industrial disinfection.',
        href: '/products/hydrogen-peroxide',
        backgroundImage: HydrogenPeroxide,
        icon: <Droplets className="w-6 h-6" />,
        slug: 'hydrogen-peroxide-textile',
        category: 'Textile Industry Chemicals',
        chemicalId: 'hydrogen-peroxide-35',
        msdsPdfKey: 'HYDROGEN PEROXIDE COA.pdf',
        fullDescription: 'Hydrogen Peroxide (H2O2) is a clear, colorless liquid with strong oxidizing properties. In the textile industry, it is extensively used for fabric bleaching due to its ability to remove pigments without fiber damage. It decomposes into water and oxygen, making it an environmentally preferred agent.',
        uses: ['Fabric and cotton bleaching', 'Pulp and paper bleaching', 'Water treatment', 'Surface disinfection'],
        features: ['High oxidizing efficiency', 'Stabilized industrial grades (35%, 50%)', 'Environmentally compatible decomposition', 'Low residue formation'],
        specifications: { purity: '35%, 50% w/w solutions', packaging: 'Drums, IBCs, Bulk', casNumber: '7722-84-1', formula: 'H2O2' },
        industries: ['Textiles', 'Pulp & Paper', 'Water Treatment'],
        handling: 'Store in vented containers. Keep away from organics and heat. Use full chemical PPE.'
    },

    {
        name: 'Sodium Hydrosulphite',
        description: 'Powerful reducing agent used primarily in textile vat dyeing, indigo reduction, and industrial bleaching.',
        href: '/products/sodium-hydrosulphite',
        backgroundImage: sodiumHydrosulphiteGenerated,
        icon: <Beaker className="w-6 h-6" />,
        slug: 'sodium-hydrosulphite',
        category: 'Textile Industry Chemicals',
        chemicalId: 'sodium-hydrosulphite-ar',
        msdsPdfKey: 'Sodium Hydrosulphite COA.pdf',
        fullDescription: 'Sodium Hydrosulphite (Sodium Dithionite) is a crystalline powder with strong reducing capacity. It is critical for vat and indigo dyeing in the textile industry and for bleaching operations in pulp and paper.',
        uses: ['Vat and indigo dye reduction', 'Fabric bleaching and stripping', 'Pulp and paper bleaching', 'Chemical synthesis reducing agent'],
        features: ['High reducing strength', 'Fast dissolution and reaction', 'Consistent particle size', 'Textile and industrial grades available'],
        specifications: { purity: '≥ 88%', packaging: '50 kg steel drums', casNumber: '7775-14-6', formula: 'Na2S2O4' },
        industries: ['Textile Dyeing & Processing', 'Pulp & Paper'],
        handling: 'Store in a cool, dry area. Protect from moisture and air. Highly reactive with air/water when exposed.'
    },

    {
        name: 'Acetic Acid',
        description: 'Industrial-grade organic acid used for pH control in textile dyeing, neutralization, and chemical synthesis.',
        href: '/products/acetic-acid',
        backgroundImage: aceticAcidTextileGenerated,
        icon: <Droplets className="w-6 h-6" />,
        slug: 'acetic-acid-textile',
        category: 'Textile Industry Chemicals',
        chemicalId: 'acetic-acid-textile',
        msdsPdfKey: 'GLACIAL ACETIC ACID COA.pdf',
        fullDescription: 'Acetic Acid (CH3COOH) is an organic acid used in the textile industry for pH adjustment in dye baths, neutralization after alkaline treatments, and as a feedstock for various textile auxiliaries.',
        uses: ['pH control in dye baths', 'Neutralization of alkaline fabrics', 'Feedstock for textile chemicals', 'Descaling and industrial cleaning'],
        features: ['Clear, pungent liquid', 'Easily miscible with water', 'Effective acidifying agent', 'Available in Glacial and Diluted grades'],
        specifications: { purity: 'Glacial (99.8%) or Technical grades', packaging: 'Drums, IBCs, Bulk', casNumber: '64-19-7', formula: 'CH3COOH' },
        industries: ['Textiles & Apparel', 'Chemical Manufacturing', 'Leather Processing'],
        handling: 'Corrosive liquid. Handle with care. Use in well-ventilated areas. Store above 17°C to prevent freezing (Glacial).'
    },

    {
        name: 'Soda Ash',
        description: 'Sodium Carbonate used as a pH regulator and reactive dye fixative in textile processing.',
        href: '/products/soda-ash',
        backgroundImage: sodaAshGenerated,
        icon: <Layers className="w-6 h-6" />,
        slug: 'soda-ash-textile',
        category: 'Textile Industry Chemicals',
        chemicalId: 'soda-ash-textile',
        msdsPdfKey: 'Specification   Soda Ash Light .pdf',
        fullDescription: 'Soda Ash (Sodium Carbonate) is an essential alkaline agent in the textile industry, primarily used for setting reactive dyes on cotton and other cellulose fibers by adjusting the pH of the dye bath.',
        uses: ['Reactive dye fixation on fabrics', 'pH adjustment and water softening', 'Scouring and cleaning of fabrics', 'Synthetic fiber manufacturing'],
        features: ['Uniform particle size', 'Excellent solubility in water', 'High chemical purity', 'Available in Light and Dense grades'],
        specifications: { purity: '99.2% min', packaging: '25 kg bags, Jumbo bags', casNumber: '497-19-8', formula: 'Na2CO3' },
        industries: ['Textile Processing', 'Detergent & Soap', 'Glass Manufacturing'],
        handling: 'Store in a cool, dry place. Avoid dust generation. Keep containers tightly closed.'
    },
    {
        name: 'Polyether Polyols',
        description: 'High-performance polyether polyols used as a core component in the production of flexible and rigid polyurethane foams.',
        href: '/products/polyether-polyols',
        backgroundImage: polyetherPolyolsGenerated,
        icon: <Droplets className="w-6 h-6" />,
        slug: 'polyether-polyols',
        category: 'Foam Industry Chemicals',
        chemicalId: 'polyether-polyols',
        fullDescription: 'Polyether Polyols are key reactive components used in combination with isocyanates (TDI or MDI) to manufacture a wide range of polyurethane (PU) products. They provide excellent flexibility, resilience, and structural stability to foams used in furniture, bedding, automotive, and insulation applications.',
        uses: ['Flexible slabstock foam for mattresses and furniture', 'Molded foam for automotive seating', 'Rigid foam for thermal insulation', 'CASE (Coatings, Adhesives, Sealants, Elastomers) applications'],
        features: ['Excellent reactivity with isocyanates', 'High resilience and load-bearing properties', 'Consistent viscosity and molecular weight', 'Low vapor pressure for safer handling'],
        specifications: { purity: 'High-purity industrial grade', packaging: 'Drums, IBCs, Bulk', casNumber: '9003-11-6 / 25322-69-4', formula: 'Polymeric' },
        industries: ['Furniture & Bedding', 'Automotive', 'Construction & Insulation'],
        handling: 'Store in a cool, dry place. Product is hygroscopic; ensure containers are tightly sealed to prevent moisture absorption.'
    },

    {
        name: 'Silicone Surfactants',
        description: 'Advanced silicone-based surfactants engineered for cell stabilization and structure control in polyurethane foam manufacturing.',
        href: '/products/silicone-surfactants',
        backgroundImage: siliconeSurfactantsGenerated,
        icon: <Zap className="w-6 h-6" />,
        slug: 'silicone-surfactants',
        category: 'Foam Industry Chemicals',
        chemicalId: 'silicone-surfactants',
        fullDescription: 'Silicone Surfactants are essential additives in PU foam production, designed to stabilize the cell structure during the blowing process, control cell size distribution, and improve the overall airflow and mechanical properties of the final foam.',
        uses: ['Cell stabilization in flexible slabstock foam', 'Cell regulation in rigid insulation foam', 'Production of high-resilience (HR) foams', 'Specialty microcellular polyurethane systems'],
        features: ['Superior emulsification of foam components', 'Excellent cell-opening and stabilization characteristics', 'Enhances foam uniformity and feel', 'Effective at low dosage levels'],
        specifications: { purity: 'Formulated specialty chemical', packaging: 'Drums, IBCs', casNumber: 'Trade Secret / Polymeric', formula: 'Silicone-Polyether Copolymer' },
        industries: ['PU Foam Manufacturing', 'Specialty Chemicals', 'Polymer Processing'],
        handling: 'Store in original containers away from extreme temperatures. Follow standard industrial safety protocols for handling additives.'
    },

    {
        name: 'TDI (Toluene Diisocyanate)',
        description: 'Aromatic diisocyanate primarily used in the production of flexible polyurethane foams for furniture and automotive seating.',
        href: '/products/tdi',
        backgroundImage: TDI,
        icon: <Microwave className="w-6 h-6" />,
        slug: 'tdi-foam',
        category: 'Foam Industry Chemicals',
        chemicalId: 'tdi-foam',
        msdsPdfKey: 'TOLUENE-DIISOCYANATE MSDS & TDS.pdf',
        fullDescription: 'Toluene Diisocyanate (TDI) is an aromatic diisocyanate supplied as an 80/20 mixture of isomers. It is a critical raw material for flexible PU foams, reacting with polyols to provide the elasticity and durability required for high-quality cushioning.',
        uses: ['Flexible polyurethane foam manufacturing', 'Mattresses and furniture cushioning', 'Automotive interior components', 'Carpet underlays and sponges'],
        features: ['High reactivity for efficient foam production', 'Consistency in density and cell structure control', 'Established industry standard for flexible foam'],
        specifications: { purity: '≥ 99.5%', packaging: 'Steel drums (~250 kg)', casNumber: '584-84-9', formula: 'C9H6N2O2' },
        industries: ['Flexible Foam Industry', 'Furniture & Bedding', 'Automotive'],
        handling: 'Toxic and moisture-sensitive. Handle with full chemical PPE in well-ventilated areas. Store under nitrogen blanket.'
    },

    {
        name: 'MDI (Methylene Diphenyl Diisocyanate)',
        description: 'Versatile isocyanate used in rigid foam insulation, structural PU components, and specialty foam systems.',
        href: '/products/mdi',
        backgroundImage: mdiFoamGenerated,
        icon: <Box className="w-6 h-6" />,
        slug: 'mdi-foam',
        category: 'Foam Industry Chemicals',
        chemicalId: 'mdi-foam',
        msdsPdfKey: 'Methylene Diphenyl Diisocyanate (MDI) COA.pdf',
        fullDescription: 'Methylene Diphenyl Diisocyanate (MDI) is used to produce rigid polyurethane and polyisocyanurate (PIR) foams for superior thermal insulation. It offers higher functionality and lower volatility than TDI, making it ideal for structural and insulation applications.',
        uses: ['Rigid foam for thermal insulation panels', 'Refrigerator and appliance insulation', 'Construction insulation systems', 'Structural polyurethane elastomers'],
        features: ['Low vapor pressure and volatility', 'Excellent thermal insulation performance', 'Strong mechanical strength and adhesion'],
        specifications: { purity: 'Available in Polymeric and Pure grades', packaging: 'Drums, IBCs, Bulk', casNumber: '101-68-8', formula: 'C15H10N2O2' },
        industries: ['Construction & Insulation', 'Refrigeration', 'Automotive'],
        handling: 'Moisture sensitive. Store in dry conditions. Use appropriate PPE to prevent inhalation and skin contact.'
    },

    {
        name: 'Glycol Ethers',
        description: 'High-purity glycol ether solvents used as coupling agents and coalescents in printing inks and specialty coatings.',
        href: '/products/butyl-glycol',
        backgroundImage: butylGlycolGenerated,
        icon: <Beaker className="w-6 h-6" />,
        slug: 'glycol-ethers-ink',
        category: 'Printing Ink Chemicals',
        chemicalId: 'glycol-ethers-ink',
        msdsPdfKey: 'BULK-BUTYL-GLYCOL MSDS & TDS.pdf',
        fullDescription: 'Glycol Ethers, including Butyl Glycol (EGBE), are versatile solvents with a mild odor and high boiling point. In the printing industry, they serve as excellent coupling agents and slow-evaporating solvents that improve ink flow, leveling, and substrate wetting.',
        uses: ['Solvent for printing inks and dyes', 'Coupling agent in water-based inks', 'Coalescing agent for specialty coatings', 'Cleaning solvent for printing equipment'],
        features: ['Excellent coupling between water and organic phases', 'Slow and controlled evaporation rate', 'Superior wetting and flow promotion', 'High chemical stability'],
        specifications: { purity: '99.5% min', packaging: 'Drums, IBCs, Bulk', casNumber: '111-76-2', formula: 'C6H14O2' },
        industries: ['Printing & Packaging', 'Coatings', 'Industrial Cleaning'],
        handling: 'Use in well-ventilated areas. Avoid prolonged skin contact. Store in cool, dry conditions away from oxidizers.'
    },

    {
        name: 'Nitrocellulose',
        description: 'Fast-drying film-forming resin used extensively in flexographic and gravure printing inks and industrial lacquers.',
        href: '/products/nitrocellulose',
        backgroundImage: nitrocelluloseInkGenerated,
        icon: <Layers className="w-6 h-6" />,
        slug: 'nitrocellulose',
        category: 'Printing Ink Chemicals',
        chemicalId: 'nitrocellulose-ink',
        msdsPdfKey: 'Nitrocellulose Cotton COA.pdf',
        fullDescription: 'Nitrocellulose (Cellulose Nitrate) is the primary resin for many printing ink systems. It provides exceptional film formation, rapid solvent release, and excellent adhesion to various packaging substrates like paper, foil, and films.',
        uses: ['Flexographic printing inks', 'Gravure printing inks', 'High-gloss wood and leather finishes', 'Automotive refinishing lacquers'],
        features: ['Available in various viscosity grades', 'Rapid solvent release for fast-line speeds', 'Excellent pigment wetting and gloss', 'Supplied alcohol-wet for safety'],
        specifications: { purity: 'Textile/Ink grades available', packaging: 'Fiber drums', casNumber: '9004-70-0', formula: 'Polymeric' },
        industries: ['Printing & Packaging', 'Coatings & Lacquers'],
        handling: 'Highly flammable solid. Store alcohol-wet. Keep away from heat and ignition sources.'
    },

    {
        name: 'Toluene',
        description: 'Aromatic hydrocarbon solvent used as a primary solvent and chemical feedstock for printing ink formulations.',
        href: '/products/toluene',
        backgroundImage: tolueneInkGenerated,
        icon: <Wind className="w-6 h-6" />,
        slug: 'toluene-ink',
        category: 'Printing Ink Chemicals',
        chemicalId: 'toluene-ink',
        msdsPdfKey: 'Toluene MSDS & TDS.pdf',
        fullDescription: 'Toluene is a vital aromatic solvent for the printing industry, particularly in gravure ink formulations. It offers strong solvency for resins and a controlled evaporation rate essential for high-quality print definition.',
        uses: ['Primary solvent in gravure printing inks', 'Ink thinner and viscosity regulator', 'Solvent for specialized resins and rubbers', 'Cleaning agent for printing presses'],
        features: ['Fast evaporation rate', 'Strong resin solvency', 'High purity and consistent quality', 'Excellent dissolving capacity'],
        specifications: { purity: '99.5% min', packaging: 'Drums, IBCs, Bulk', casNumber: '108-88-3', formula: 'C7H8' },
        industries: ['Printing', 'Coatings', 'Chemical Manufacturing'],
        handling: 'Highly flammable liquid. Ensure proper grounding/bonding. Avoid inhalation of vapors.'
    },

    {
        name: 'Methyl Ethyl Ketone (MEK)',
        description: 'High-boiling ketone solvent with exceptional solvency for resins used in high-performance printing inks.',
        href: '/products/mek',
        backgroundImage: mekInkGenerated,
        icon: <Zap className="w-6 h-6" />,
        slug: 'mek-ink',
        category: 'Printing Ink Chemicals',
        chemicalId: 'mek-ink',
        msdsPdfKey: 'BULK-METHYL-ETHYL-KETONE MEK MSDS & TDS.pdf',
        fullDescription: 'Methyl Ethyl Ketone (MEK) is a powerful, fast-evaporating solvent used to dissolve resins and gums in the manufacture of printing inks, particularly those requiring rapid drying on non-porous substrates.',
        uses: ['Solvent for printing and packaging inks', 'Dissolving cellulose and vinyl resins', 'Adhesive and coating formulations', 'Industrial press cleaning'],
        features: ['Exceptional solvency power', 'Rapid evaporation for high-speed printing', 'Low boiling point', 'High purity industrial grade'],
        specifications: { purity: '99.7% min', packaging: 'Drums, IBCs, Bulk', casNumber: '78-93-3', formula: 'C4H8O' },
        industries: ['Printing & Packaging', 'Adhesives', 'Coatings'],
        handling: 'Extremely flammable. Use explosion-proof equipment. Ground all containers during transfer.'
    },

    {
        name: 'Ethyl Acetate',
        description: 'Fast-evaporating ester solvent widely used in flexographic and gravure inks for its excellent solvency and mild odor.',
        href: '/products/ethyl-acetate',
        backgroundImage: Ethylacetate,
        icon: <FlaskConical className="w-6 h-6" />,
        slug: 'ethyl-acetate-ink',
        category: 'Printing Ink Chemicals',
        chemicalId: 'ethyl-acetate-ink',
        msdsPdfKey: 'Ethyle Acetate MSDS & TDS.pdf',
        fullDescription: 'Ethyl Acetate is a preferred solvent for flexible packaging inks due to its balanced performance, rapid evaporation, and lower toxicity compared to many hydrocarbon solvents.',
        uses: ['Flexographic and gravure ink solvent', 'Solvent for laminating adhesives', 'Aluminum foil and film coatings', 'Extraction solvent'],
        features: ['Rapid evaporation enables high productivity', 'Excellent solvency for various resins', 'Mild fruity odor', 'Readily biodegradable'],
        specifications: { purity: '99.8% min', packaging: 'Drums, IBCs, Bulk', casNumber: '141-78-6', formula: 'C4H8O2' },
        industries: ['Printing & Packaging', 'Laminates'],
        handling: 'Highly flammable. Use in well-ventilated areas with appropriate PPE.'
    },

    {
        name: 'Resins & Pigments',
        description: 'Comprehensive range of binding resins and high-quality organic/inorganic pigments for ink applications.',
        href: '/products/printing-resins',
        backgroundImage: printingResinsPigmentsGenerated,
        icon: <Paintbrush className="w-6 h-6" />,
        slug: 'resins-pigments',
        category: 'Printing Ink Chemicals',
        chemicalId: 'resins-pigments-ink',
        fullDescription: 'We offer a wide selection of binding resins (Polyamide, Acrylic, PU) and concentrated organic/inorganic pigments designed for CMYK and specialty printing ink systems, ensuring superior color strength and durability.',
        uses: ['Binder resins for various ink systems', 'High-strength pigment dispersions', 'Coloring of plastic and paper packaging', 'UV-curable ink components'],
        features: ['Excellent color development and gloss', 'Superior adhesion to varied substrates', 'Stable particle size distribution', 'Broad compatibility across solvent systems'],
        specifications: { purity: 'Available in various grades', packaging: 'Bags, Drums', casNumber: 'Mixture', formula: 'Various' },
        industries: ['Printing Inks', 'Packaging & Masterbatches', 'Colors & Coatings'],
        handling: 'Store in dry conditions. Avoid contact with eyes and skin. Use appropriate dust protection for powdered pigments.'
    },

    {
        name: 'Isopropyl Alcohol (IPA)',
        description: 'High-purity, fast-evaporating solvent essential for fountain solutions and precision cleaning in printing.',
        href: '/products/ipa',
        backgroundImage: IsopropylAlcohol,
        icon: <Printer className="w-6 h-6" />,
        slug: 'ipa-ink',
        category: 'Printing Ink Chemicals',
        chemicalId: 'ipa-ink',
        msdsPdfKey: 'ISOPROPYL-ALCOHOL MSDS & TDS.pdf',
        fullDescription: 'Isopropyl Alcohol (IPA) is critical in offset printing as a wetting agent in fountain solutions. It helps control the ink-water balance and promotes rapid drying on high-speed presses.',
        uses: ['Offset printing fountain solutions', 'Flexographic and gravure ink thinner', 'Precision equipment cleaning', 'Solvent for dyes and resins'],
        features: ['High purity (99.9%)', 'Rapid evaporation rate', 'Excellent wetting properties', 'Miscible with water and organics'],
        specifications: { purity: '99.9% (Anhydrous)', packaging: 'Drums (~160 kg), Bulk', casNumber: '67-63-0', formula: 'C3H8O' },
        industries: ['Printing & Packaging', 'Industrial Cleaning', 'Electronics'],
        handling: 'Highly flammable. Use explosion-proof ventilation. Ground containers during transfer.'
    }
];