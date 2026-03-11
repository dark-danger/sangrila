"use client";

import { motion } from "framer-motion";
import { AlertCircle, Phone } from "lucide-react";

export function RegistrationForm() {
    return (
        <section className="py-12 md:py-24 px-4 md:px-6 relative z-10 transition-all duration-500">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto p-8 sm:p-12 md:p-16 rounded-[2rem] md:rounded-[3rem] bg-[#11121d] border border-white/5 shadow-2xl relative overflow-hidden"
            >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-[80px] -mr-32 -mt-32" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[80px] -ml-32 -mb-32" />

                <div className="relative z-10 text-center space-y-8">
                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tighter uppercase"
                    >
                        <span>SANGRILA 2K26</span> - <span className="text-primary italic">REGISTRATION</span>
                    </motion.h2>

                    {/* Closed Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-red-500/15 border border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.15)]"
                    >
                        <AlertCircle className="w-5 h-5 text-red-400 animate-pulse" />
                        <span className="text-red-400 font-black text-sm uppercase tracking-widest">Registration Closed</span>
                    </motion.div>

                    {/* Main Message */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-6"
                    >
                        <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                            <p className="text-white/80 text-base sm:text-lg font-bold leading-relaxed">
                                🚫 Registration for <span className="text-primary">Mr. & Mrs. Sangrila</span> is now <span className="text-red-400 font-black">CLOSED</span>.
                            </p>
                            <div className="w-16 h-[2px] mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                            <p className="text-white/70 text-sm sm:text-base font-semibold leading-relaxed">
                                If you want to participate <span className="text-secondary font-black">ONLY</span> in{" "}
                                <span className="text-primary font-black">Group Dance</span> or{" "}
                                <span className="text-primary font-black">Group Fashion</span>{" "}
                                (not in Mr. & Mrs. Sangrila), please contact us on the numbers below.
                            </p>
                        </div>

                        {/* Contact Numbers */}
                        <div className="space-y-3">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">For Queries, Contact</p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {/* Yash Khanna */}
                                <a
                                    href="tel:9211067540"
                                    className="flex items-center justify-center gap-3 px-5 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 group"
                                >
                                    <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                                    <div className="text-left">
                                        <p className="text-white font-bold text-sm">Yash Khanna</p>
                                        <p className="text-white/50 text-xs font-mono">9211067540</p>
                                    </div>
                                </a>

                                {/* Aditya Gupta */}
                                <a
                                    href="tel:8168906211"
                                    className="flex items-center justify-center gap-3 px-5 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 group"
                                >
                                    <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                                    <div className="text-left">
                                        <p className="text-white font-bold text-sm">Aditya Gupta</p>
                                        <p className="text-white/50 text-xs font-mono">8168906211</p>
                                    </div>
                                </a>

                                {/* Himanshu */}
                                <a
                                    href="tel:9991672526"
                                    className="flex items-center justify-center gap-3 px-5 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 group"
                                >
                                    <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                                    <div className="text-left">
                                        <p className="text-white font-bold text-sm">Himanshu</p>
                                        <p className="text-white/50 text-xs font-mono">9991672526</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Date Info */}
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 py-4 border-t border-white/5 text-white/40 text-xs font-medium">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                <span>13-14 March, 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(253,184,19,0.5)]" />
                                <span>Geeta University</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
