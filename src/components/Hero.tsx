"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden bg-[var(--background)]">
            <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center justify-center space-y-12">
                {/* Background Text Layer - Simple Fade */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.1 }}
                        transition={{ duration: 1.5 }}
                        className="text-[18vw] font-black leading-none uppercase select-none tracking-tighter"
                        style={{
                            WebkitTextStroke: '2px var(--primary)',
                            color: 'transparent',
                        }}
                    >
                        CULTURAL
                    </motion.h1>
                </div>

                {/* Main Content */}
                <div className="relative z-20 text-center space-y-6 md:space-y-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-black uppercase tracking-[0.4em] backdrop-blur-sm"
                    >
                        GEETA UNIVERSITY | 13.03.2026
                    </motion.div>

                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="flex flex-col items-center"
                        >
                            <div className="flex">
                                <h1 className="text-7xl md:text-[12rem] font-black tracking-tighter text-white leading-none uppercase drop-shadow-[0_0_30px_rgba(241,90,36,0.2)]">
                                    SANGRILA
                                </h1>
                            </div>

                            <div className="flex mt-2">
                                <h2 className="text-primary text-5xl md:text-[10rem] italic font-black drop-shadow-[0_0_20px_rgba(253,184,19,0.3)]">
                                    2K26
                                </h2>
                            </div>

                            {/* Action Buttons - Moved here to be at the exact bottom of 2K26 */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="flex flex-wrap items-center justify-center gap-4 mt-4"
                            >
                                <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                    <Link
                                        href="/#register"
                                        className="px-8 py-4 bg-gradient-to-r from-[#fdb813] via-[#f15a24] to-[#8b5cf6] text-white font-black rounded-full shadow-[0_10px_30px_rgba(241,90,36,0.3)] hover:shadow-[0_15px_40px_rgba(241,90,36,0.5)] transition-all active:scale-95 text-xl border border-white/10 flex items-center gap-2 relative overflow-hidden group"
                                    >
                                        <Sparkles className="w-5 h-5" />
                                        <span className="relative z-10">Register Now</span>
                                    </Link>
                                </motion.div>
                                <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                    <Link
                                        href="/events"
                                        className="px-8 py-4 bg-white/5 text-white border border-white/10 font-black rounded-full hover:bg-white/10 transition-all text-xl backdrop-blur-md"
                                    >
                                        View All Events
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="relative space-y-6 pt-12"
                        >
                            <h3 className="text-3xl md:text-5xl font-black tracking-[0.2em] uppercase relative">
                                <span className="gradient-text drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                                    Cultural Fest
                                </span>
                            </h3>
                            <p className="text-white/60 text-sm md:text-lg font-medium max-w-xl mx-auto leading-relaxed">
                                Join the most anticipated student-led cultural extravaganza.
                                A celebration of talent, creativity, and the spirit of Sangrila.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
