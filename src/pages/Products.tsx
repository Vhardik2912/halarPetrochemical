import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, LayoutGrid, Layers, Hexagon, Filter } from 'lucide-react';
import SEO from '@/components/SEO';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ProductCard from '@/components/home/ProductCard';
import SplitText from '@/components/ui/SplitText';
import heroRefinery from "../assets/hero-refinery.webp";
import { products } from '@/data/products';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');

  const filteredProducts = categoryFilter
    ? products.filter(product => product.category === categoryFilter)
    : products;

  const title = categoryFilter ? `${categoryFilter} Products` : 'Industrial Portfolio';

  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <Layout>
      <SEO
        title={title + " - VANTARA ENERGY"}
        description="Explore VANTARA ENERGY's comprehensive range of petrochemical products including fuel oil, gas oil, base oil, naphtha, and white spirit."
        keywords="petrochemical products, fuel oil, gas oil, base oil, naphtha, white spirit, UAE petrochemicals"
      />

      {/* --- CINEMATIC PORTFOLIO HERO --- */}
      <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden bg-[#050c0e]">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${heroRefinery})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050c0e] via-[#050c0e]/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-[#050c0e] to-transparent" />
        </div>

        {/* Industrial Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.05]" style={{ backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

        <div className="container-custom relative z-10 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start">
            <Breadcrumbs items={[{ label: 'Material Portfolio' }]} dark={true} />
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center mt-12">
            <div className="space-y-10">

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl xs:text-5xl sm:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.8] mb-8"
              >
                Material <br /> <span className="text-accent underline decoration-white/10 underline-offset-[12px] sm:underline-offset-[16px]">Catalog.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/60 leading-relaxed max-w-xl font-light mx-auto lg:mx-0"
              >
                A comprehensive ecosystem of high-purity petrochemical solutions and energy commodities, optimized for global industrial deployment.
              </motion.p>
            </div>

          </div>
        </div>
      </section>

      {/* --- PORTFOLIO EXPLORATION --- */}
      <section className="py-24 bg-white text-primary">
        <div className="container-custom">
          {/* Industrial Filter Plate */}
          {/* Desktop Category Navigation */}
          <div className="hidden md:flex mb-24 bg-[#f8f9fa] border border-primary/5 rounded-[2.5rem] p-10 flex-wrap items-center justify-center gap-4">
            <Link
              to="/products"
              className={`px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${!categoryFilter
                ? 'bg-primary text-white shadow-2xl'
                : 'bg-white border border-primary/10 text-primary/40 hover:text-primary hover:border-primary/30'
                }`}
            >
              Complete Catalog
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                to={`/products?category=${encodeURIComponent(category)}`}
                className={`px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${categoryFilter === category
                  ? 'bg-primary text-white shadow-2xl'
                  : 'bg-white border border-primary/10 text-primary/40 hover:text-primary hover:border-primary/30'
                  }`}
              >
                {category}
              </Link>
            ))}
          </div>

          {/* Mobile Category Dropdown */}
          <div className="md:hidden mb-16">
            <Select
              value={categoryFilter || "all"}
              onValueChange={(val) => {
                if (val === "all") {
                  setSearchParams({});
                } else {
                  setSearchParams({ category: val });
                }
              }}
            >
              <SelectTrigger className="w-full h-16 bg-[#f8f9fa] border-primary/5 rounded-2xl px-6 font-mono text-[10px] uppercase tracking-widest text-primary focus:ring-0">
                <div className="flex items-center gap-3">
                  <Filter className="w-4 h-4 text-accent" />
                  <SelectValue placeholder="Narrow Material Portfolio" />
                </div>
              </SelectTrigger>
              <SelectContent className="bg-white border-primary/5 rounded-xl overflow-hidden shadow-2xl">
                <SelectItem value="all" className="font-mono text-[10px] uppercase tracking-widest py-4 focus:bg-accent focus:text-white cursor-pointer">
                  Complete Catalog
                </SelectItem>
                {categories.map((category) => (
                  <SelectItem
                    key={category}
                    value={category}
                    className="font-mono text-[10px] uppercase tracking-widest py-4 focus:bg-accent focus:text-white cursor-pointer"
                  >
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 text-center md:text-left">
              <div className="space-y-4">
                <h2 className="text-3xl xs:text-5xl md:text-7xl font-black text-primary uppercase tracking-tighter leading-[0.9]">
                  {categoryFilter ? categoryFilter : 'Master Portfolio'}
                </h2>
              </div>
            </div>
          </ScrollReveal>

          {categoryFilter ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-primary/5 mb-32">
              {filteredProducts.map((product, index) => (
                <div key={product.name} className="border border-primary/5">
                  <ProductCard
                    name={product.name}
                    description={product.description}
                    href={product.href}
                    icon={product.icon}
                    index={index}
                    backgroundImage={product.backgroundImage}
                    category={categoryFilter}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-48">
              {categories.map((category, catIndex) => {
                const catProducts = products.filter(p => p.category === category);
                return (
                  <div key={category} className="relative">
                    <ScrollReveal>
                      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 text-center md:text-left">
                        <div className="space-y-4">
                          <h3 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tighter">
                            {category}
                          </h3>
                        </div>
                      </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-primary/5">
                      {catProducts.map((product, index) => (
                        <div key={product.name} className="border border-primary/5">
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
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* --- CUSTOM SOLUTIONS CTA --- */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-accent/10 rounded-full blur-[120px] -mr-32 -mt-32" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-12">
                <div className="space-y-6">
                  <div className="w-12 h-1px bg-accent" />
                  <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                    Custom Technical <br /> <span className="text-accent">Synthetics.</span>
                  </h2>
                </div>
                <p className="text-xl text-white/60 leading-relaxed font-light max-w-xl">
                  Beyond our standard catalog, we provide bespoke formulation services for specialized industrial requirements and high-performance applications.
                </p>
                <div className="flex flex-wrap gap-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-6 group"
                  >
                    <div className="bg-accent text-white font-black uppercase tracking-[0.2em] text-[10px] py-6 px-12 rounded-full group-hover:bg-white group-hover:text-primary transition-all duration-500 shadow-2xl">
                      Consult Technical Desk
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-500">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </Link>
                </div>
              </div>

              <div className="hidden lg:grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 p-10 rounded-3xl space-y-4">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <h4 className="font-black uppercase tracking-tight">Molecular Design</h4>
                  <p className="text-xs text-white/40 leading-relaxed">Tailored chemical structures for specific industrial outcomes.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-10 rounded-3xl space-y-4 mt-12">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <h4 className="font-black uppercase tracking-tight">Supply Agility</h4>
                  <p className="text-xs text-white/40 leading-relaxed">Direct-to-market logistics for high-output manufacturing.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
