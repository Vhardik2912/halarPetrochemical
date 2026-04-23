import { useState, useRef, useEffect } from "react";
import WorldMap from '@/components/home/WorldMap';
import SEO from '@/components/SEO';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Activity,
  Shield
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import HeroSearch from '@/components/home/HeroSearch';
import IndustriesSection from '@/components/home/IndustriesSection';
import ScrollReveal from '@/components/ui/ScrollReveal';

// Assets
import heroVideo from '@/assets/mainvideo.mp4';
import portraitVideo from '@/assets/mainvideo-potrait.mp4';
import Aboutimage from '@/assets/image.webp';
import heroRefinery from "../assets/hero-refinery.webp";
import { products } from '@/data/products';

const features = [
  'Global Supply Chain Network',
  'Quality Certified Products',
  'Competitive Market Pricing',
  'Reliable Logistics Support',
  'Technical Expertise',
  '24/7 Customer Service'
];

const Index = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };

    updateSelection();
    carouselApi.on("select", updateSelection);

    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <Layout>
      <SEO
        title="VANTARA ENERGY - Leading Petrochemical Supplier"
        description="Global supplier of premium petrochemical products including fuel oil, gas oil, base oil, naphtha, and white spirit."
        keywords="petrochemicals, fuel oil, gas oil, base oil, naphtha, white spirit, industrial chemicals"
      />

      {/* Hero Section - Redesigned for Humanly Unique Look */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#0a1a1f]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-[#0a1a1f] z-10" />
          <video
            className="w-full h-full object-cover opacity-60 scale-105"
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            style={{ filter: 'grayscale(0.2) contrast(1.1)' }}
          />
        </div>

        {/* Cinematic Grain Overlay */}
        <div className="absolute inset-0 z-[5] pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')` }} />

        <div className="container-custom relative z-20 w-full pt-32 pb-20">
          <div className="flex flex-col lg:flex-row items-end lg:items-center justify-between gap-12 lg:gap-20">

            {/* Left Column: Massive Typography */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-2/3"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mb-8"
              >
                <span className="inline-block text-accent font-serif italic text-xl md:text-2xl mb-2">Sustainable Energy</span>
                <div className="h-[1px] w-12 bg-accent/50" />
              </motion.div>

              <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter uppercase text-white mix-blend-lighten break-words">
                <span className="block overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="block"
                  >
                    VANTARA
                  </motion.span>
                </span>
                <span className="block overflow-hidden mt-2">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-wrap items-baseline gap-x-4"
                  >
                    <span className="text-accent">ENERGY</span>
                  </motion.span>
                </span>
              </h1>
            </motion.div>

            {/* Right Column: Narrative & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="w-full lg:w-1/3 space-y-8 lg:pb-12"
            >
              <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed border-l border-white/20 pl-6">
                Redefining the petrochemical landscape through <span className="text-white font-medium">precision logistics</span> and <span className="text-white font-medium">ethical sourcing</span> for a global industrial future.
              </p>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
                <Link
                  to="/products"
                  className="group relative overflow-hidden bg-white text-primary px-8 py-5 rounded-none font-black uppercase tracking-widest text-xs transition-all duration-500 hover:text-white"
                >
                  <span className="relative z-10">Explore Portfolio</span>
                  <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
                </Link>
                <Link
                  to="/contact"
                  className="group flex items-center gap-4 text-white font-black uppercase tracking-widest text-xs py-2"
                >
                  <span>Request Quote</span>
                  <div className="flex-1 h-[1px] bg-white/20 group-hover:bg-accent transition-colors" />
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30 [writing-mode:vertical-lr]">Scroll</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-accent to-transparent relative overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-white"
            />
          </div>
        </motion.div>

        {/* Decorative Industrial Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-20" />
      </section>

      {/* Hero Search */}
      <HeroSearch />

      {/* Industries We Serve Section */}
      <IndustriesSection />
      {/* Redesigned About Section - Layered Industrial Aesthetic */}
      <section className="py-24 sm:py-32 lg:py-48 bg-background relative overflow-hidden">
        {/* Background Watermark */}
        <div className="absolute top-20 right-[-5%] text-[20rem] font-black text-primary/[0.03] select-none pointer-events-none hidden lg:block">
          EST.2018
        </div>

        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-center lg:items-start">

            {/* Left Content: Typography Focused */}
            <div className="w-full lg:w-1/2 relative space-y-12">
              <ScrollReveal>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-px bg-accent" />
                  </div>

                  <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-primary leading-[0.9] uppercase tracking-tighter">
                    Global <span className="text-accent">Precision.</span> <br />
                    Human <span className="font-serif italic capitalize text-foreground/80">Scale.</span>
                  </h2>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="relative pl-8 border-l-2 border-primary/10 space-y-8">
                  <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed font-light">
                    VANTARA ENERGY isn't just a trading entity. We are the architects of a <span className="text-primary font-medium">seamless energy future</span>. Based in RAK, UAE, we bridge the gap between global resources and industrial necessity with uncompromising integrity.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-8">
                    {features.slice(0, 4).map((feature, index) => (
                      <div key={feature} className="space-y-2">
                        <div className="flex items-center gap-3 text-primary">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span className="font-black uppercase tracking-widest text-sm">{feature}</span>
                        </div>
                        <div className="h-px w-full bg-primary/5" />
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="pt-6">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-6 group"
                  >
                    <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                      <ArrowRight className="w-6 h-6 text-primary group-hover:text-white transition-colors group-hover:translate-x-1" />
                    </div>
                    <span className="text-sm font-black uppercase tracking-[0.3em] text-primary group-hover:text-accent transition-colors">Our Full Narrative</span>
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Content: Layered Visuals */}
            <div className="w-full lg:w-1/2 relative mt-20 lg:mt-0">
              <ScrollReveal delay={0.3}>
                <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[3/4] w-full max-w-xl mx-auto">
                  {/* Main Image Layer */}
                  <div className="absolute inset-0 z-10 overflow-hidden rounded-[3rem] shadow-2xl border border-primary/5 bg-[#0a1a1f]">
                    <motion.video
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                      src={portraitVideo}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover  transition-all duration-1000 opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent rounded-full opacity-10 blur-3xl animate-pulse" />
                  <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary rounded-full opacity-5 blur-3xl" />

                  {/* Floating Metric Card 1 */}
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="absolute -right-8 top-1/4 z-20 bg-white p-8 rounded-3xl shadow-2xl border border-primary/5 hidden sm:block"
                  >
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <span className="text-3xl font-black text-primary block tracking-tighter">99.9%</span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary/40">Logistics Precision</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Metric Card 2 */}
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="absolute -left-12 -bottom-8 z-20 bg-primary p-10 rounded-[2.5rem] shadow-2xl hidden md:block"
                  >
                    <div className="space-y-6">
                      <div className="space-y-1">
                        <span className="text-4xl font-black text-white block tracking-tighter">ZERO</span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Compliance Delay</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Industrial Border Accent */}
                  <div className="absolute -inset-6 border border-primary/5 rounded-[4rem] pointer-events-none" />
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>



      {/* World Map Section */}
      <WorldMap />

      {/* Parallax Background Section */}
      <section
        className="relative py-24 sm:py-32 lg:py-48 bg-fixed bg-center bg-cover overflow-hidden"
        style={{
          backgroundImage: `url(${heroRefinery})`,
        }}
      >
        <div className="absolute inset-0 bg-primary/70 backdrop-blur-[2px]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-center text-white max-w-5xl mx-auto"
          >
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              Reliable Energy Solutions for a <span className="text-accent">Sustainable Future</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              We are committed to responsible sourcing and efficient distribution, minimizing environmental impact while maximizing value for our global partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-accent hover:bg-accent/90 text-white px-10 py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-accent/20"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Slider Section - REMOVED */}


    </Layout>
  );
};

export default Index;