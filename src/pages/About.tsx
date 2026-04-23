import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';
import {
  Target, Eye, Heart, Users, Lightbulb,
  Handshake, Calendar, Globe, ShieldCheck,
  Zap, ArrowRight
} from 'lucide-react';
import SEO from '@/components/SEO';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import heroRefinery from "../assets/hero-refinery.webp";
import placeholderAvatar from "../assets/hero-refinery.webp";

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};
// Unique effect: The large background year "1995" moves as you scroll
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: sectionScrollProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(sectionScrollProgress, [0, 1], ["0%", "-80%"]);
  // Parallax for background EST.1995 text
  const xTransform = useTransform(sectionScrollProgress, [0, 1], [0, -600]);

  const milestones = [
    {
      year: "2005",
      title: "The Foundation",
      desc: "VANTARA ENERGY was established with a vision to revolutionize energy trading in the Middle East."
    },
    {
      year: "2012",
      title: "Global Expansion",
      desc: "Expanded operations to over 20 countries, establishing key strategic storage hubs across global trade routes."
    },
    {
      year: "2017",
      title: "Digital Integration",
      desc: "Implemented advanced supply chain monitoring to ensure 100% logistics transparency and efficiency."
    },
    {
      year: "2020",
      title: "Sustainability Pivot",
      desc: "Launched our low-carbon initiative, focusing on ethical sourcing and operational waste reduction."
    },
    {
      year: "2024",
      title: "Industry Leader",
      desc: "Now serving 50+ global ports with a commitment to reliability, innovation, and partnership."
    }
  ];

  return (
    <Layout>
      <SEO
        title="About Us | Global Energy Solutions | VANTARA ENERGY"
        description="Learn how VANTARA ENERGY bridges the gap between global energy producers and industrial consumers with integrity and innovation."
      />

      {/* --- CINEMATIC HERO SECTION --- */}
      <section
        className="relative flex items-center min-h-[80vh] pt-32 pb-20 overflow-hidden bg-primary"
        style={{
          backgroundImage: `url(${heroRefinery})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0a1a1f]/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a1a1f] z-10" />

        <div className="container-custom relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8 sm:gap-12"
          >
            <div className="pt-8 text-left">
              <Breadcrumbs items={[{ label: 'About Us' }]} dark={true} />
            </div>

            <div className="relative mt-2 sm:mt-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute -top-8 sm:-top-12 left-0 sm:-left-12 text-accent font-serif italic text-lg sm:text-4xl opacity-30"
              >
                since 2005
              </motion.div>

              <h1 className="text-[2.6rem] xs:text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black text-white leading-[1] sm:leading-[0.85] tracking-tighter uppercase text-left">
                <span className="block italic font-serif text-accent/80 tracking-normal mb-[-0.1em]">Our</span>
                <span className="block">Journey</span>
              </h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="max-w-2xl border-l-[3px] border-accent pl-5 sm:pl-10 text-left"
            >
              <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-light leading-relaxed">
                Bridging global resources with industrial precision. VANTARA ENERGY is more than a supplier; we are the catalyst for your operational success.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 1: THE IDENTITY (Asymmetric & Layered) --- */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-24 items-center">

            {/* Massive Watermark for Identity */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[8rem] sm:text-[12rem] lg:text-[15rem] font-black text-primary/[0.02] select-none pointer-events-none uppercase tracking-widest -rotate-90 origin-left hidden sm:block">
              Human Scale
            </div>

            <div className="w-full lg:w-3/5 relative">
              <ScrollReveal>
                <div className="space-y-12">
                  <div className="space-y-4">
                    <span className="text-accent font-mono text-xs tracking-[0.5em] uppercase block">01 • The Core Identity</span>
                    <h2 className="text-4xl md:text-7xl font-black text-primary leading-[1] md:leading-[0.95] uppercase tracking-tighter">
                      Engineered <br />
                      <span className="font-serif italic capitalize text-foreground/80">for Reliability</span>
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12 text-lg text-foreground/70 leading-relaxed font-light">
                    <p className="border-t border-primary/10 pt-8">
                      Founded in the strategic hub of Ras Al Khaimah, VANTARA ENERGY has evolved from a local trader into a global powerhouse. We manage the complex heartbeat of global energy logistics.
                    </p>
                    <p className="border-t border-primary/10 pt-8">
                      By integrating cutting-edge supply chain intelligence with deep-rooted market expertise, we ensure that every drop of fuel reaches its destination with uncompromising quality.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="w-full lg:w-2/5">
              <ScrollReveal delay={0.3}>
                <div className="relative group">
                  <div className="bg-primary p-8 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem] text-white shadow-2xl relative z-10 overflow-hidden">
                    {/* Animated Glow in background */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px] group-hover:bg-accent/40 transition-colors duration-1000" />

                    <div className="space-y-12 relative z-10">
                      {[
                        { val: "50+", label: "Ports Served" },
                        { val: "100%", label: "Compliance" },
                        { val: "24Hr", label: "Monitoring" }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-6 group/item">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                          <div>
                            <h4 className="text-3xl font-black italic font-serif leading-none">{item.val}</h4>
                            <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 mt-1">{item.label}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Decorative Industrial Border */}
                  <div className="absolute -bottom-8 -right-8 w-full h-full border border-primary/10 rounded-[2.5rem] -z-10 group-hover:-bottom-4 group-hover:-right-4 transition-all duration-700" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE VISIONARY SPLIT (Artistic & High Contrast) --- */}
      <section className="py-0 bg-white">
        <div className="grid md:grid-cols-2 min-h-[70vh]">

          <motion.div
            whileHover="hover"
            className="bg-primary p-12 sm:p-20 md:p-32 text-white relative flex flex-col justify-center overflow-hidden border-b md:border-b-0 md:border-r border-white/5"
          >
            <motion.div
              variants={{ hover: { scale: 1.1, rotate: 5 } }}
              transition={{ duration: 1 }}
              className="absolute -right-20 -top-20 opacity-[0.03]"
            >
              <Eye size={500} strokeWidth={1} />
            </motion.div>

            <div className="relative z-10 space-y-6 sm:space-y-8">
              <span className="text-accent font-serif italic text-xl sm:text-2xl block">The Future View</span>
              <h3 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.9]">Our <br /> Vision</h3>
              <div className="h-px w-24 bg-accent" />
              <p className="text-xl text-white/60 font-light leading-relaxed max-w-md">
                To redefine the petrochemical landscape by becoming the world’s most agile energy partner—where sustainability meets industrial scale.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover="hover"
            className="bg-background p-12 sm:p-20 md:p-32 text-primary relative flex flex-col justify-center overflow-hidden"
          >
            <motion.div
              variants={{ hover: { scale: 1.1, rotate: -5 } }}
              transition={{ duration: 1 }}
              className="absolute -right-20 -top-20 opacity-[0.03]"
            >
              <Target size={500} strokeWidth={1} />
            </motion.div>

            <div className="relative z-10 space-y-6 sm:space-y-8">
              <span className="text-accent font-serif italic text-xl sm:text-2xl block">The Action Plan</span>
              <h3 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.9]">Our <br /> Mission</h3>
              <div className="h-px w-24 bg-accent" />
              <p className="text-xl text-foreground/60 font-light leading-relaxed max-w-md">
                We bridge global demand with ethical supply chains. Delivering high-spec energy products through optimized logistics that minimize waste.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- SECTION 3: THE EVOLUTION (Refined Horizontal Scroll) --- */}
      <section ref={sectionRef} className="relative h-[400vh] bg-[#0a1a1f] overflow-x-clip">
        <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden">
          {/* Header Area */}
          <div className="container-custom pt-32 pb-12 relative z-20">
            <ScrollReveal>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-accent" />
                  <span className="text-accent font-mono text-xs tracking-[0.5em] uppercase">Chronology</span>
                </div>
                <h2 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black text-white uppercase leading-[1] sm:leading-[0.8] tracking-tighter">
                  Decades of <br />
                  <span className="text-accent outline-text text-transparent" style={{ WebkitTextStroke: '1px var(--accent)' }}>Momentum</span>
                </h2>
              </div>
            </ScrollReveal>
          </div>

          {/* Horizontal Track */}
          <div className="flex-1 flex items-center relative overflow-hidden">
            <motion.div style={{ x }} className="flex gap-8 md:gap-20 px-6 md:px-[10vw]">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className="relative group min-w-[280px] sm:min-w-[450px] md:min-w-[60vw] lg:min-w-[45vw] aspect-[4/5] sm:aspect-[16/10] md:aspect-[16/9] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-[#12252a] border border-white/5 flex shadow-2xl"
                >
                  {/* Vertical Year Sidebar */}
                  <div className="w-16 sm:w-24 md:w-32 bg-primary flex flex-col items-center justify-center border-r border-white/5 relative z-20">
                    <span className="font-black text-white/10 text-4xl sm:text-6xl rotate-[-90deg] whitespace-nowrap tracking-tighter leading-none">
                      {m.year}
                    </span>
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-px h-12 bg-accent/30" />
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-px h-12 bg-accent/30" />
                  </div>

                  {/* Main Content Area */}
                  <div className="flex-1 relative overflow-hidden flex flex-col justify-end p-8 sm:p-12 md:p-16">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] group-hover:scale-110 opacity-20 grayscale scale-105"
                      style={{ backgroundImage: `url(${heroRefinery})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a1f] via-transparent to-transparent z-10" />

                    <div className="relative z-20 space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[10px] text-accent tracking-widest uppercase">UNIT // 0{i + 1}</span>
                        <div className="h-px flex-1 bg-white/10" />
                      </div>
                      <h4 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                        {m.title}
                      </h4>
                      <p className="text-white/50 text-base sm:text-lg font-light leading-relaxed max-w-xl">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="min-w-[20vw] h-1" />
            </motion.div>
          </div>

          {/* Bottom Progress */}

        </div>
      </section>

      {/* --- SECTION 4: CORE VALUES (Technical Matrix) --- */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-20">
            <div className="lg:col-span-1 space-y-8">
              <ScrollReveal>
                <span className="text-accent font-serif italic text-xl block">Our DNA</span>
                <h3 className="text-4xl sm:text-6xl font-black text-primary leading-[1] sm:leading-[0.9] uppercase tracking-tighter">
                  Principles <br /> of <span className="text-accent font-serif italic capitalize tracking-normal">Motion</span>
                </h3>
                <p className="text-lg text-foreground/60 font-light pt-6">
                  Values aren't just words on a wall for us. They are the operational parameters that define every transaction.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-px bg-primary/5 border border-primary/5">
              {[
                { title: "Integrity", desc: "Radical transparency in every barrel and every contract.", id: "INT-01" },
                { title: "Precision", desc: "Logistics optimized to the second, quality tested to the atom.", id: "PRE-02" },
                { title: "Innovation", desc: "Pushing the boundaries of petrochemical supply chains.", id: "INN-03" },
                { title: "Safety", desc: "Zero compromise on the preservation of life and environment.", id: "SAF-04" }
              ].map((val, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="group bg-background p-8 sm:p-12 space-y-8 sm:space-y-10 hover:bg-primary transition-colors duration-700">
                    <span className="font-mono text-[10px] sm:text-xs text-primary/30 group-hover:text-white/30 uppercase tracking-widest">{val.id}</span>
                    <div className="space-y-3 sm:space-y-4">
                      <h4 className="text-xl sm:text-2xl font-black text-primary group-hover:text-white uppercase tracking-tight">{val.title}</h4>
                      <p className="text-sm sm:text-base text-foreground/60 group-hover:text-white/60 font-light leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* --- FINAL CINEMATIC CTA --- */}
      <section className="py-24 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')` }} />

        <div className="container-custom relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="max-w-xl text-center md:text-left space-y-4">
            <h2 className="text-4xl sm:text-6xl font-black text-primary leading-[1] sm:leading-[0.9] uppercase tracking-tighter">
              Ready to <br /> <span className="text-white">Forge the Future?</span>
            </h2>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="px-12 py-6 bg-primary text-white font-black uppercase tracking-[0.3em] text-sm flex items-center gap-6 group shadow-2xl"
            >
              Partner With Us
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;