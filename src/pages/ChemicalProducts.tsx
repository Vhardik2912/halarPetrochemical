import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ProductCard from '@/components/home/ProductCard';
import SplitText from '@/components/ui/SplitText';
import heroRefinery from "../assets/hero-refinery.jpg";
import { products } from '@/data/products';
import { ArrowRight, Beaker, Layers, ShieldCheck } from 'lucide-react';

const ChemicalProducts = () => {
    const chemicalProducts = products.filter(p => 
        p.category !== 'Petrochemicals'
    );

    // Group products by category
    const groupedProducts = chemicalProducts.reduce((acc, product) => {
        const category = product.category;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(product);
        return acc;
    }, {} as Record<string, typeof products>);

    const categories = Object.keys(groupedProducts);

    return (
        <Layout>
            <SEO
                title="Chemical Products - VANTARA ENERGY"
                description="Industrial-grade solvents (TDI, Xylene, Glycols), detergent raw materials (LABSA, SLES, Soda Ash), water treatment, paint industry, mining, textile, foam, and printing ink chemicals (IPA, Nitrocellulose, MEK)."
                keywords="solvents, TDI, Xylene, Glycols, Acetone, Toluene, LABSA, SLES, Sodium Cyanide, Activated Carbon, Sulphuric Acid, Hydrochloric Acid, Hydrogen Peroxide, Polyether Polyols, MDI, IPA, Nitrocellulose, printing ink chemicals, industrial chemicals"
            />

            {/* --- CINEMATIC HERO --- */}
            <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden bg-[#050c0e]">
                {/* Background Image with Mesh Gradient */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-40"
                        style={{ backgroundImage: `url(${heroRefinery})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050c0e] via-[#050c0e]/80 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#050c0e] to-transparent" />
                </div>

                {/* Decorative Grid Overlay */}
                <div className="absolute inset-0 z-0 opacity-[0.05]" style={{ backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

                <div className="container-custom relative z-10">
                    <Breadcrumbs items={[{ label: 'Portfolio', href: '/products' }, { label: 'Petrochemicals' }]} dark={true} />

                    <div className="grid lg:grid-cols-2 gap-20 items-center mt-12">
                        <div className="space-y-10">

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl xs:text-5xl sm:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.8] mb-8"
                            >
                                Petrochemicals <br /> <span className="text-accent underline decoration-white/10 underline-offset-[12px] sm:underline-offset-[16px]">Landscape.</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-xl text-white/60 leading-relaxed max-w-xl font-light"
                            >
                                From high-purity solvents to specialized detergent raw materials, our chemical portfolio is engineered for industrial scalability and uncompromising quality.
                            </motion.p>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- PRODUCT GRID --- */}
            <section className="py-32 bg-white text-primary">
                <div className="container-custom">
                    {categories.map((category, catIndex) => (
                        <div key={category} className={catIndex > 0 ? "mt-48" : ""}>
                            <ScrollReveal>
                                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                                    <div className="space-y-4">
                                        <h2 className="text-5xl md:text-7xl font-black text-primary uppercase tracking-tighter leading-[0.9]">
                                            {category}
                                        </h2>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-primary/5">
                                {groupedProducts[category].map((product, index) => (
                                    <div key={product.name} className="border-r last:border-r-0 border-b border-primary/5">
                                        <ProductCard
                                            name={product.name}
                                            description={product.description}
                                            href={product.href}
                                            icon={product.icon}
                                            index={index}
                                            backgroundImage={product.backgroundImage}
                                            category={category}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    );
};

export default ChemicalProducts;
