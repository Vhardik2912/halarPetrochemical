import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import logo from '@/assets/logo.webp';

const LoadingScreen = () => {
    const [loading, setLoading] = useState(true);
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setPercent((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setLoading(false), 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        return () => clearInterval(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 1.1,
                        filter: "blur(20px)",
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#063a49] overflow-hidden"
                >
                    {/* Atmospheric Background */}
                    <div className="absolute inset-0 opacity-40">
                         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(131,180,179,0.15),transparent_70%)]" />
                         <motion.div 
                            animate={{ 
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.5, 0.3]
                            }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px]" 
                         />
                    </div>

                    <div className="relative z-10 flex flex-col items-center w-full px-6 max-w-4xl">
                        {/* Central Logo Container */}
                        <div className="relative mb-12 sm:mb-16">
                            {/* Spinning Progress Ring */}
                            <svg className="w-48 h-48 sm:w-64 sm:h-64 -rotate-90">
                                <circle
                                    cx="50%"
                                    cy="50%"
                                    r="48%"
                                    stroke="rgba(255,255,255,0.05)"
                                    strokeWidth="2"
                                    fill="none"
                                />
                                <motion.circle
                                    cx="50%"
                                    cy="50%"
                                    r="48%"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                    className="text-accent"
                                    initial={{ strokeDasharray: "0 1000" }}
                                    animate={{ strokeDasharray: `${(percent / 100) * 800} 1000` }}
                                    transition={{ duration: 0.1 }}
                                />
                            </svg>

                            {/* Logo with Glow */}
                            <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12">
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className="relative"
                                >
                                    <img 
                                        src={logo} 
                                        alt="Vantara Logo" 
                                        className="w-24 h-24 sm:w-32 sm:h-32 object-contain brightness-0 invert drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                    />
                                </motion.div>
                            </div>
                        </div>

                        {/* Text Reveal */}
                        <div className="flex flex-col items-center gap-4 sm:gap-6 text-center">
                            <div className="overflow-hidden">
                                <motion.h1
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-white text-4xl sm:text-6xl md:text-7xl font-black tracking-[0.3em] ml-[0.3em] uppercase drop-shadow-lg"
                                >
                                    VANTARA
                                </motion.h1>
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.8 }}
                                className="flex items-center gap-4 sm:gap-8 w-full"
                            >
                                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-accent/50 to-accent" />
                                <span className="text-accent text-[10px] sm:text-xs font-black tracking-[0.8em] ml-[0.8em] whitespace-nowrap">
                                    ENERGY
                                </span>
                                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-accent/50 to-accent" />
                            </motion.div>
                        </div>

                        {/* Progress Indicator */}
                        <div className="mt-16 sm:mt-24 flex flex-col items-center gap-4">
                            <div className="flex items-center gap-4 text-white/40 font-mono text-[10px] tracking-[0.4em] uppercase">
                                <span>Initializing</span>
                                <div className="flex gap-1">
                                    {[0, 1, 2].map((i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ opacity: [0.2, 1, 0.2] }}
                                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                            className="w-1 h-1 bg-accent rounded-full"
                                        />
                                    ))}
                                </div>
                                <span className="text-white font-bold ml-2 tabular-nums">{percent}%</span>
                            </div>
                        </div>
                    </div>

                    {/* Background Texture Overlay */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
