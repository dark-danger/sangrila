"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";
import { teamMembers } from "@/data/team";

export function TeamSection() {
    return (
        <section id="team" className="py-24 px-6 relative z-10 glass mx-4 rounded-[3rem] mt-24 border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 30, letterSpacing: "-0.05em" }}
                        whileInView={{ opacity: 1, y: 0, letterSpacing: "0em" }}
                        animate={{ textShadow: ["0 0 15px rgba(139,92,246,0.3)", "0 0 25px rgba(139,92,246,0.6)", "0 0 15px rgba(139,92,246,0.3)"] }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, textShadow: { duration: 2, repeat: Infinity } }}
                        className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                    >
                        CORE TEAM
                    </motion.h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto font-medium text-sm md:text-base">
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
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
                >
                    {teamMembers.map((member) => (
                        <motion.div
                            key={member.id}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: { opacity: 1, y: 0 }
                            }}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                            className="group relative bg-[#11121d] rounded-[2rem] border border-white/10 hover:border-primary/50 transition-all duration-500 shadow-xl hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] overflow-hidden flex flex-col"
                        >
                            {/* Shine Effect */}
                            <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                            </div>

                            {/* Image Container */}
                            <div className="relative w-full h-[380px] md:h-[450px] overflow-hidden">
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#05060f] via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                                {/* Image */}
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className={`object-cover object-top transition-transform duration-700 group-hover:scale-110 ${member.rotate ? "rotate-90 scale-150 group-hover:scale-[1.65]" : ""}`}
                                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                                    priority={parseInt(member.id) <= 2}
                                    quality={45}
                                />

                                {/* Social Links */}
                                <div className="absolute top-4 right-4 z-30 flex flex-col gap-2 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                    {member.instagram && (
                                        <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="p-2 md:p-3 bg-white/10 hover:bg-primary backdrop-blur-md rounded-full text-white transition-colors duration-300 transform hover:scale-110">
                                            <Instagram size={18} />
                                        </a>
                                    )}
                                    {member.linkedin && (
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 md:p-3 bg-white/10 hover:bg-[#0077b5] backdrop-blur-md rounded-full text-white transition-colors duration-300 transform hover:scale-110 delay-75">
                                            <Linkedin size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Content Overlaid at Bottom */}
                            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="space-y-1">
                                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300 tracking-tight drop-shadow-md">
                                        {member.name}
                                    </h3>
                                    <p className="text-primary/90 font-semibold text-xs md:text-sm uppercase tracking-wider mb-2">
                                        {member.role}
                                    </p>
                                </div>

                                {/* Animated Line */}
                                <div className="w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mt-3" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
