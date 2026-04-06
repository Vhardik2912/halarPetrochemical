import { useRef, useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
import ScrollReveal from '@/components/ui/ScrollReveal';

// Local asset imports
import videoPetrochemicals from "@/assets/products/generated/pertollium.mp4";
import solventsvideo from "@/assets/products/generated/Solvents.mp4";
import waterchem from "@/assets/products/generated/watermark.mp4";
import miningchem from "@/assets/products/generated/minigind.mp4";
import beautifyvideo from "@/assets/products/generated/beautifyproduct.mp4"
import texttali from "@/assets/products/generated/texttali.mp4"
import printingink from "@/assets/products/generated/printingink.mp4"
import foamvideo from "@/assets/products/generated/formind.mp4"
import paintcaminacal from "@/assets/products/generated/paintcoating.mp4"
import rowchical from "@/assets/products/generated/chemicalraw.mp4"
import { products } from "@/data/products";

const slides = [
    {
        name: "Oil & Gas",
        video: videoPetrochemicals,
        description: "Premium-grade hydrocarbon products for energy, marine, and industrial manufacturing.",
        specs: ["High Calorific Value", "ISO 8217 Compliant", "Reduced Emissions"],
        metric: "Energy Grade"
    },
    {
        name: "Solvents",
        video: solventsvideo,
        description: "High-purity industrial solvents for coatings, cleaning, and chemical synthesis.",
        specs: ["Clear & Volatile", "Custom Blends", "ACS/USP Grades"],
        metric: "Tech Grade"
    },
    {
        name: "Detergent & Chemical Raw Materials",
        video: rowchical,
        description: "Essential surfactants and alkaline agents for household and industrial cleaning formulations.",
        specs: ["High Active Matter", "Biodegradable", "Pure Alkalis"],
        metric: "Base Chem"
    },
    {
        name: "Water Treatment Chemicals",
        video: waterchem,
        description: "Industrial-scale purification and coagulation agents for municipal and industrial water systems.",
        specs: ["Fast Coagulation", "High Purity", "NSF/ANSI 60"],
        metric: "Fluid Tech"
    },
    {
        name: "Cosmetics & Personal Care Chemicals",
        video: beautifyvideo,
        description: "Sophisticated humectants and active ingredients for high-end skincare and personal care.",
        specs: ["Derm-Compatible", "Hygroscopic", "USP/EP Grade"],
        metric: "Fine Chem"
    },
    {
        name: "Paint & Coatings Chemicals",
        video: paintcaminacal,
        description: "High-performance pigments, binders, and solvents for automotive and industrial finishes.",
        specs: ["UV Resistant", "High Opacity", "Optimized Flow"],
        metric: "Surface Tech"
    },
    {
        name: "Mining Industry Chemicals",
        video: miningchem,
        description: "Advanced reagents and adsorption agents for efficient mineral extraction and metallurgy.",
        specs: ["Gold Extraction", "High Hardness", "ICMC Compliant"],
        metric: "Deep Tech"
    },
    {
        name: "Textile Industry Chemicals",
        video: texttali,
        description: "Engineered bleaching and reducing agents for global fiber and fabric production.",
        specs: ["Color Stable", "Fiber Safe", "Environmentally Friendly"],
        metric: "Fiber Tech"
    },
    {
        name: "Foam Industry Chemicals",
        video: foamvideo,
        description: "Precise diisocyanate and polyol systems for advanced upholstery and insulation foams.",
        specs: ["Polyol Reactive", "Density Control", "Thermal Insulation"],
        metric: "Polymer Tech"
    },
    {
        name: "Printing Ink Chemicals",
        video: printingink,
        description: "Specific resins and fast-evaporating solvents optimized for high-speed printing systems.",
        specs: ["Pigment Carrier", "Rapid Solvent Release", "High Gloss"],
        metric: "Press Ops"
    },
];

import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";

import { forwardRef } from "react";

const IndustryItem = forwardRef<HTMLDivElement, any>(
    ({ item, isHovered, onMouseEnter, onMouseLeave, onClick, className, ...props }, ref) => (
        <div
            ref={ref}
            className={`group cursor-pointer py-6 sm:py-8 relative flex flex-col justify-start ${className || ''}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={(e) => {
                if (onClick) onClick(e);
                if (props.onClick) props.onClick(e);
            }}
            {...props}
        >
            {/* Top line container - using relative to position the animated line and arrow together */}
            <div className="absolute top-0 left-0 right-0 flex items-center -translate-y-1/2">
                <motion.div
                    initial={false}
                    animate={{
                        width: isHovered ? "calc(100% - 32px)" : "100%",
                    }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="h-[2px] bg-primary/20 group-hover:bg-accent transition-colors duration-300"
                />
                <motion.div
                    initial={false}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        x: isHovered ? 0 : -10
                    }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute right-0 text-accent flex items-center justify-center"
                >
                    <ArrowRight size={20} className="stroke-[3px]" />
                </motion.div>
            </div>

            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em] leading-[1.3] flex flex-wrap gap-x-[0.4em] gap-y-1 pr-4">
                {item.name.split(' ').map((word, wIdx) => (
                    <span key={wIdx} className="flex overflow-hidden relative">
                        {word.split('').map((char, cIdx) => (
                            <span key={cIdx} className="relative inline-block">
                                <motion.span
                                    className="inline-block text-primary/80"
                                    initial={false}
                                    animate={{
                                        y: isHovered ? "-100%" : "0%",
                                    }}
                                    transition={{ duration: 0.5, delay: (wIdx * 5 + cIdx) * 0.02, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    {char}
                                </motion.span>
                                <motion.span
                                    className="absolute left-0 top-0 inline-block text-accent"
                                    initial={false}
                                    animate={{
                                        y: isHovered ? "0%" : "100%",
                                    }}
                                    transition={{ duration: 0.5, delay: (wIdx * 5 + cIdx) * 0.02, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    {char}
                                </motion.span>
                            </span>
                        ))}
                    </span>
                ))}
            </h3>
        </div>
    )
);
IndustryItem.displayName = "IndustryItem";

const IndustriesSection = () => {
    const navigate = useNavigate();
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
    const [selectedIndustry, setSelectedIndustry] = useState<typeof slides[0] | null>(null);

    return (
        <section className="bg-background py-32 relative overflow-hidden">
            {/* Massive Watermark */}
            <div className="absolute top-0 right-0 text-[18rem] font-black text-primary/[0.02] select-none pointer-events-none uppercase tracking-tighter leading-none translate-x-1/4 -translate-y-1/4">
                Serve
            </div>

            <div className="container-custom relative z-10">
                <ScrollReveal>
                    <div className="mb-24">
                        <span className="text-accent font-mono text-xs tracking-[0.5em] uppercase block mb-4">Vertical Landscapes</span>
                        <h2 className="text-5xl md:text-7xl font-black text-primary leading-[0.95] uppercase tracking-tighter max-w-2xl">
                            Industries We <br />
                            <span className="font-serif italic capitalize text-foreground/80">Empower.</span>
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-0">
                    {slides.map((item, idx) => (
                        <ScrollReveal key={idx} delay={idx * 0.05}>
                            <Sheet>
                                <SheetTrigger asChild>
                                    <IndustryItem
                                        item={item}
                                        isHovered={hoveredIdx === idx}
                                        onMouseEnter={() => setHoveredIdx(idx)}
                                        onMouseLeave={() => setHoveredIdx(null)}
                                        onClick={() => setSelectedIndustry(item)}
                                    />
                                </SheetTrigger>
                                <SheetContent className="sm:max-w-xl w-full bg-background border-l border-primary/10 p-0 overflow-hidden">
                                    <div className="h-full flex flex-col">
                                        {/* Cinematic Header / Video */}
                                        <div className="relative h-1/3 w-full bg-black overflow-hidden">
                                            <video
                                                src={item.video}
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                className="w-full h-full object-cover opacity-60"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                                            <div className="absolute bottom-8 left-8 right-8">
                                                <span className="text-accent font-serif italic text-xl mb-2 block">{item.metric}</span>
                                                <h2 className="text-4xl font-black text-white uppercase tracking-tighter leading-none">{item.name}</h2>
                                            </div>
                                        </div>

                                        <div className="flex-1 p-8 sm:p-12 space-y-12 overflow-y-auto">
                                            <div className="space-y-6">
                                                <p className="text-xl text-foreground font-light leading-relaxed">
                                                    {item.description}
                                                </p>
                                                <div className="h-px w-20 bg-accent" />
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                                <div className="space-y-6">
                                                    <h4 className="font-black text-primary tracking-widest text-xs uppercase">Technical Dossier</h4>
                                                    <div className="grid gap-4">
                                                        {item.specs.map((spec, sidx) => (
                                                            <div key={sidx} className="flex items-center gap-4 group/spec">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover/spec:scale-150 transition-transform" />
                                                                <span className="text-foreground/70 group-hover:text-primary transition-colors text-lg">{spec}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="space-y-6">
                                                    <h4 className="font-black text-primary tracking-widest text-xs uppercase">Featured Portfolio</h4>
                                                    <div className="grid gap-4">
                                                        {products
                                                            .filter(p =>
                                                                p.industries?.some(ind => {
                                                                    const industryMap: Record<string, string[]> = {
                                                                        "Oil & Gas": ["Petrochemical", "Fuel", "Oil", "Gas", "Naphtha", "Base Oil", "Rubber Process", "Spirit", "Marine"],
                                                                        "Solvents": ["Solvent", "Glycol", "Acetate", "Ketone", "Toluene", "Xylene", "Acetone", "TDI"],
                                                                        "Detergent & Chemical Raw Materials": ["Detergent", "LABSA", "SLES", "Soda", "Sulphate", "Nitrate", "Silicate", "Titanium Dioxide"],
                                                                        "Water Treatment Chemicals": ["Water", "Treatment", "Sulphate", "Chloride", "PAC", "Hypochlorite"],
                                                                        "Cosmetics & Personal Care Chemicals": ["Cosmetic", "Personal Care", "Glycerine", "Propylene", "Stearic"],
                                                                        "Paint & Coatings Chemicals": ["Paint", "Coating", "Titanium Dioxide", "Carbonate", "Zinc", "Acetate", "Xylene", "MEK", "Naphtha"],
                                                                        "Mining Industry Chemicals": ["Mining", "Cyanide", "Carbon", "Hydrochloric", "Sulphuric", "Silicate"],
                                                                        "Textile Industry Chemicals": ["Textile", "Peroxide", "Hydrosulphite", "Soda Ash", "Acetic"],
                                                                        "Foam Industry Chemicals": ["Foam", "TDI", "MDI", "Polyether", "Silicone"],
                                                                        "Printing Ink Chemicals": ["Printing", "Ink", "IPA", "Acetate", "MEK", "Toluene", "Nitrocellulose", "Resin", "Pigment", "Glycol"]
                                                                    };
                                                                    return industryMap[item.name]?.some(keyword => ind.toLowerCase().includes(keyword.toLowerCase())) || ind.toLowerCase().includes(item.name.toLowerCase());
                                                                })
                                                            )
                                                            .slice(0, 3)
                                                            .map((prod, pidx) => (
                                                                <Link
                                                                    key={pidx}
                                                                    to={prod.href}
                                                                    className="group/prod flex items-center gap-4 p-2 rounded-xl hover:bg-secondary/10 transition-colors"
                                                                >
                                                                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-secondary/5 border border-primary/5 flex-shrink-0">
                                                                        <img src={prod.backgroundImage} alt={prod.name} className="w-full h-full object-cover group-hover/prod:scale-110 transition-transform duration-500" />
                                                                    </div>
                                                                    <div className="flex-1 min-w-0">
                                                                        <h5 className="font-bold text-[11px] sm:text-xs text-primary uppercase leading-tight line-clamp-2 whitespace-normal break-all">{prod.name}</h5>
                                                                        <div className="flex items-center gap-1 text-[10px] text-accent font-bold uppercase tracking-wider opacity-0 group-hover/prod:opacity-100 transition-opacity">
                                                                            View Specs <ArrowRight className="w-2 h-2" />
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pt-12">
                                                <button
                                                    onClick={() => {
                                                        navigate(`/products?category=${encodeURIComponent(item.name)}`);
                                                    }}
                                                    className="w-full py-6 bg-primary text-white font-black uppercase tracking-[0.3em] text-[10px] rounded-full hover:bg-accent transition-colors duration-500 shadow-2xl flex items-center justify-center gap-4 group"
                                                >
                                                    Explore Complete Portfolio
                                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;
