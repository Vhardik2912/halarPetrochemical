import { useState, useMemo } from "react";
import { products } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, X, Layers, Activity, Shield } from "lucide-react";
import SplitText from "@/components/ui/SplitText";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import petrochemicalsImg from "@/assets/products/categories/petrochemicals.png";
import solventsImg from "@/assets/products/categories/solvents.png";
import rawMaterialsImg from "@/assets/products/categories/raw_materials.png";
import waterTreatmentImg from "@/assets/products/categories/water_treatment.png";
import cosmeticsImg from "@/assets/products/categories/cosmetics.png";
import paintCoatingsImg from "@/assets/products/categories/paint_coatings.png";
import miningImg from "@/assets/products/categories/mining.png";
import textileImg from "@/assets/products/categories/textile.png";
import foamIndustryImg from "@/assets/products/categories/foam_industry.png";
import printingInkImg from "@/assets/products/categories/printing_ink.png";

const categoryImageMap: Record<string, string> = {
    "Petrochemicals": petrochemicalsImg,
    "Solvents": solventsImg,
    "Detergent & Chemical Raw Materials": rawMaterialsImg,
    "Water Treatment Chemicals": waterTreatmentImg,
    "Cosmetics & Personal Care Chemicals": cosmeticsImg,
    "Paint & Coatings Chemicals": paintCoatingsImg,
    "Mining Industry Chemicals": miningImg,
    "Textile Industry Chemicals": textileImg,
    "Foam Industry Chemicals": foamIndustryImg,
    "Printing Ink Chemicals": printingInkImg,
};

const CategoryProducts = () => {
    const categories = useMemo(() => {
        const cats = new Set<string>();
        products.forEach(p => cats.add(p.category));
        return Array.from(cats).sort();
    }, []);

    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const activeProducts = useMemo(() => {
        if (!activeCategory) return [];
        return products.filter(p => p.category === activeCategory);
    }, [activeCategory]);

    return (
        <section className="py-32 bg-[#f8f9fa] overflow-hidden text-primary">
            <div className="container-custom">
                {/* Section Header */}
                <div className="mb-32">
                    <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
                        <div className="max-w-3xl">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 text-accent font-serif italic text-2xl mb-6"
                            >
                                Material Intelligence
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-6xl sm:text-7xl lg:text-9xl font-black text-primary uppercase tracking-tighter leading-[0.8]"
                            >
                                Industrial <br /> <span className="text-accent underline decoration-primary/10 underline-offset-[12px]">Spectrum.</span>
                            </motion.h2>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="hidden lg:block text-right max-w-sm"
                        >
                            <p className="text-lg text-primary/60 font-light leading-relaxed">
                                Our portfolio represents the intersection of raw resource capacity and refined chemical precision.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Category Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-primary/10">
                    {categories.map((cat, idx) => (
                        <Sheet key={cat} onOpenChange={(open) => {
                            if (open) setActiveCategory(cat);
                        }}>
                            <SheetTrigger asChild>
                                <motion.div
                                    className="group relative h-[600px] cursor-pointer overflow-hidden border-r last:border-r-0 border-b lg:border-b-0 border-primary/10 p-12 bg-white flex flex-col justify-between"
                                    initial="initial"
                                    whileHover="hover"
                                >
                                    {/* Grainy Texture Overlay */}
                                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')` }} />

                                    <div className="relative z-10 flex justify-between items-start">
                                        <div className="h-px w-0 group-hover:w-12 bg-accent transition-all duration-700" />
                                    </div>

                                    <div className="relative z-10">
                                        <h3 className="text-4xl xs:text-5xl font-black uppercase tracking-tighter leading-[0.9] mb-6 break-words">
                                            {cat}
                                        </h3>
                                        <div className="flex items-center gap-4 group-hover:gap-6 transition-all duration-500">
                                            <div className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                                                <ArrowRight className="w-6 h-6 group-hover:text-white" />
                                            </div>
                                            <span className="text-xs font-black uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity">
                                                View Spec Sheets
                                            </span>
                                        </div>
                                    </div>

                                    {/* Persistent Background Image */}
                                    <div className="absolute inset-0 z-0 scale-100 group-hover:scale-105 transition-transform duration-[2s]">
                                        <img
                                            src={categoryImageMap[cat]}
                                            alt={cat}
                                            className="w-full h-full object-cover opacity-[0.05] grayscale group-hover:grayscale-0 group-hover:opacity-10 transition-all duration-1000"
                                        />
                                    </div>

                                    {/* Hover Image Reveal Overlay */}
                                    <motion.div
                                        variants={{
                                            initial: { opacity: 0, scale: 1.1, y: 20 },
                                            hover: { opacity: 1, scale: 1, y: 0 }
                                        }}
                                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
                                    >
                                        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
                                    </motion.div>
                                </motion.div>
                            </SheetTrigger>

                            <SheetContent side="right" className="w-full sm:max-w-2xl p-0 border-l border-primary/10 shadow-[-50px_0_100px_rgba(0,0,0,0.1)] bg-white overflow-hidden flex flex-col">
                                <Link to="/products" className="absolute top-1/2 -left-12 -translate-y-1/2 rotate-[-90deg] hidden lg:block">
                                    <span className="text-[10px] font-black uppercase tracking-[1em] text-primary/20 hover:text-accent transition-colors">Full Catalogue</span>
                                </Link>

                                <SheetHeader className="p-12 pb-8 pt-20 border-b border-primary/5 relative bg-[#fcfcfc]">
                                    <div className="flex flex-col gap-6">
                                        <div className="space-y-2">
                                            <span className="text-accent font-serif italic text-xl">Technical Dossier</span>
                                            <SheetTitle className="text-4xl sm:text-6xl font-black text-primary uppercase leading-[0.95] tracking-tighter">
                                                {cat}
                                            </SheetTitle>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="px-3 py-1 border border-primary/10 rounded-full text-[10px] font-mono uppercase tracking-widest text-primary/40">Verified</div>
                                            <div className="px-3 py-1 border border-primary/10 rounded-full text-[10px] font-mono uppercase tracking-widest text-primary/40">Compliance Checked</div>
                                        </div>
                                    </div>
                                </SheetHeader>

                                <div className="flex-1 overflow-y-auto p-12 space-y-16">
                                    <div className="grid grid-cols-1 gap-12">
                                        {activeProducts.map((product, idx) => (
                                            <motion.div
                                                key={product.name}
                                                initial={{ opacity: 0, y: 30 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="group/item border-b border-primary/5 pb-12 last:border-0"
                                            >
                                                <Link to={product.href} className="flex flex-col sm:flex-row gap-8 items-start">
                                                    <div className="w-full sm:w-48 aspect-[4/3] rounded-2xl overflow-hidden bg-primary/5 flex-shrink-0 relative">
                                                        <img
                                                            src={product.backgroundImage}
                                                            alt={product.name}
                                                            className="w-full h-full object-cover transition-all duration-700 group-hover/item:scale-110"
                                                        />
                                                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                                    </div>

                                                    <div className="flex-1 space-y-4">
                                                        <h5 className="text-2xl font-black text-primary group-hover/item:text-accent transition-colors uppercase tracking-tight leading-none">
                                                            {product.name}
                                                        </h5>
                                                        <p className="text-primary/60 text-sm font-light leading-relaxed line-clamp-2">
                                                            {product.description}
                                                        </p>
                                                        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-primary/40 group-hover/item:text-primary transition-colors pt-2">
                                                            <span>Specifications</span>
                                                            <div className="h-px w-8 bg-primary/10" />
                                                            <ArrowRight className="w-3 h-3 group-hover/item:translate-x-2 transition-transform" />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Action Footer for Panel */}
                                    <div className="pt-8">
                                        <Link
                                            to="/products"
                                            className="group flex flex-col gap-4"
                                        >
                                            <div className="h-px w-full bg-primary/10 group-hover:bg-accent transition-colors duration-700" />
                                            <div className="flex justify-between items-center py-4">
                                                <span className="text-3xl font-black uppercase tracking-tighter">Enter Full Catalog</span>
                                                <div className="w-16 h-16 rounded-full border border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                                                    <ArrowRight className="w-8 h-8 group-hover:text-white" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    ))}

                    {/* View All Products Card */}
                    <Link to="/products">
                        <motion.div
                            className="group relative h-[600px] cursor-pointer overflow-hidden border-r last:border-r-0 border-b lg:border-b-0 border-primary/10 p-12 bg-primary flex flex-col justify-between"
                            initial="initial"
                            whileHover="hover"
                        >
                            {/* Grainy Texture Overlay */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')` }} />

                            <div className="relative z-10 flex justify-between items-start">
                                <div className="h-px w-0 group-hover:w-12 bg-accent transition-all duration-700" />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-4xl xs:text-5xl font-black uppercase tracking-tighter leading-[0.9] mb-6 text-white break-words">
                                    Full <br /> Catalogue
                                </h3>
                                <div className="flex items-center gap-4 group-hover:gap-6 transition-all duration-500">
                                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                                        <ArrowRight className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="text-xs font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-opacity">
                                        Explore All Products
                                    </span>
                                </div>
                            </div>

                            {/* Background Image for View All Card */}
                            <div className="absolute inset-0 z-0 opacity-20 transition-transform duration-[2s] group-hover:scale-110">
                                <img
                                    src={petrochemicalsImg}
                                    className="w-full h-full object-cover grayscale mix-blend-overlay"
                                    alt="View All"
                                />
                            </div>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CategoryProducts;
