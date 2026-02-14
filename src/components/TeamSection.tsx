"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import { teamMembers } from "@/data/team";

export function TeamSection() {
    return (
        <section id="team" className="py-24 px-6 relative z-10 glass mx-4 rounded-[3rem] mt-24 border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 30, letterSpacing: "-0.05em" }}
                        whileInView={{ opacity: 1, y: 0, letterSpacing: "0em" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                    >
                        CORE TEAM
                    </motion.h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto font-medium">
                        The visionary minds working behind the scenes to make Sangrila 2026 a reality.
                    </p>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
                >
                    {teamMembers.map((member, _index) => (
                        <motion.div
                            key={member.id}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: { opacity: 1, y: 0 }
                            }}
                            whileHover={{
                                y: -15,
                                transition: { duration: 0.4 }
                            }}
                            className="group relative bg-[#11121d]/80 backdrop-blur-2xl p-4 rounded-[2.5rem] border border-white/5 hover:border-primary/40 transition-all duration-500 shadow-2xl overflow-hidden h-full flex flex-col"
                        >
                            {/* Rectangular Image Container */}
                            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-white/5 group-hover:bg-white/10 transition-all duration-500">
                                {/* Placeholder Gradient/Pattern until real images are added */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#05060f]/80 z-10" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <User className="w-24 h-24 text-white/10 group-hover:text-primary/20 group-hover:scale-110 transition-all duration-700" />
                                </div>

                                {/* Real image placeholder logic */}
                                {member.image && (
                                    <div className="absolute inset-0 opacity-40 group-hover:opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110">
                                        <img
                                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}

                                {/* Glow effect behind image */}
                                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Content Area */}
                            <div className="px-3 py-6 w-full text-center relative z-20 flex-grow flex flex-col justify-center">
                                <h3 className="text-xl font-black text-white mb-2 group-hover:text-primary transition-colors duration-300 tracking-tight uppercase">
                                    {member.name}
                                </h3>
                                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mt-auto mx-auto">
                                    <p className="text-secondary text-[10px] font-black uppercase tracking-[0.2em] drop-shadow-[0_0_8px_rgba(139,92,246,0.3)]">
                                        {member.role}
                                    </p>
                                </div>
                            </div>

                            {/* Decorative corner glow */}
                            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 blur-2xl rounded-full -mr-8 -mt-8 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
