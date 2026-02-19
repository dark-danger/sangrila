"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Sparkles, ChevronRight, IndianRupee, Clock } from "lucide-react";
import type { Event } from "@/data/events";
import Link from "next/link";

const categoryColors: Record<string, { from: string; to: string; emoji: string; text: string; bg: string; glow: string }> = {
    "Dance": { from: "from-[#f15a24]", to: "to-[#c2410c]", emoji: "💃", text: "text-[#f15a24]", bg: "bg-[#f15a24]/10", glow: "shadow-[#f15a24]/20" },
    "Singing": { from: "from-[#fdb813]", to: "to-[#b48608]", emoji: "🎤", text: "text-[#fdb813]", bg: "bg-[#fdb813]/10", glow: "shadow-[#fdb813]/20" },
    "Fine Arts": { from: "from-[#1d355e]", to: "to-[#112240]", emoji: "🎨", text: "text-[#60a5fa]", bg: "bg-[#1d355e]/30", glow: "shadow-[#1d355e]/20" },
    "Fashion": { from: "from-[#fefae0]", to: "to-[#e9edc9]", emoji: "👗", text: "text-[#eab308]", bg: "bg-[#fefae0]/10", glow: "shadow-[#fefae0]/20" },
    "Life Skills": { from: "from-[#301934]", to: "to-[#1a0f1d]", emoji: "🎯", text: "text-[#a78bfa]", bg: "bg-[#301934]/30", glow: "shadow-[#301934]/20" },
    "Theatre": { from: "from-[#ea580c]", to: "to-[#9a3412]", emoji: "🎭", text: "text-[#fb923c]", bg: "bg-[#ea580c]/10", glow: "shadow-[#ea580c]/20" },
    "Health & Wellness": { from: "from-[#fcd34d]", to: "to-[#d97706]", emoji: "🧘", text: "text-[#fbbf24]", bg: "bg-[#fcd34d]/10", glow: "shadow-[#fcd34d]/20" },
};

export function EventCard({ event }: { event: Event }) {
    const colors = categoryColors[event.category] || { from: "from-[#f15a24]", to: "to-[#c2410c]", emoji: "✨", text: "text-[#f15a24]", bg: "bg-[#f15a24]/10", glow: "shadow-[#f15a24]/20" };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover="hovered"
            className="group relative bg-[#11121d] p-4 rounded-[2.5rem] border border-white/5 hover:border-primary/40 transition-all duration-500 shadow-2xl overflow-hidden h-[520px] flex flex-col motion-gpu"
        >
            {/* Image Container */}
            <div className="relative w-full h-[280px] rounded-[2rem] overflow-hidden mb-6 shrink-0">
                {event.image ? (
                    <Image
                        src={event.image}
                        alt={event.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={80}
                    />
                ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${colors.from} ${colors.to} opacity-20 flex items-center justify-center`}>
                        <Sparkles className={`w-12 h-12 ${colors.text} opacity-30`} />
                    </div>
                )}

                {/* Category Badge overlay */}
                <div className="absolute top-4 left-4 z-20">
                    <div className={`px-4 py-1.5 rounded-full ${colors.bg} ${colors.text} text-[10px] font-black uppercase tracking-[0.2em] bg-black/60 border border-white/10 shadow-lg`}>
                        <span className="mr-2">{colors.emoji}</span>
                        {event.category}
                    </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#05060f]/50 to-transparent pointer-events-none" />
            </div>

            {/* Content Area */}
            <div className="px-3 pb-4 space-y-4 flex-grow flex flex-col">
                <div className="space-y-2">
                    <Link href={`/events/${event.id}`}>
                        <h3 className="text-2xl font-black text-white uppercase tracking-tight leading-tight hover:text-primary transition-colors cursor-pointer">
                            {event.name}
                        </h3>
                    </Link>
                    <div className="flex items-center gap-3 text-white/40 text-[11px] font-black uppercase tracking-widest">
                        <Clock size={12} className="text-primary/60" />
                        <span>{event.timeLimit}</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <IndianRupee size={12} className="text-primary/60" />
                        <span>{event.fee}</span>
                    </div>
                </div>

                <p className="text-muted-foreground text-xs font-medium leading-relaxed line-clamp-4">
                    {event.description}
                </p>

                <div className="pt-4 mt-auto border-t border-white/5 flex flex-col gap-3 relative">
                    <div className="flex items-center justify-between transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-4">
                        <Link
                            href={`/events/${event.id}`}
                            className="flex items-center gap-1.5 px-4 py-2 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white rounded-full transition-all group/details"
                        >
                            <span className="text-[10px] font-black tracking-widest uppercase">Details</span>
                            <ChevronRight size={14} className="group-hover/details:translate-x-1 transition-transform" />
                        </Link>
                        <div className="flex items-center gap-1.5 opacity-60">
                            <Users size={14} className="text-white/40" />
                            <span className="text-white/40 font-black text-[10px] tracking-widest uppercase">{event.participants}</span>
                        </div>
                    </div>

                    <motion.div
                        variants={{
                            initial: { opacity: 0, y: 20, scale: 0.95 },
                            hovered: { opacity: 1, y: 0, scale: 1 }
                        }}
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                        className="absolute inset-x-0 bottom-0 px-0 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
                    >
                        <Link
                            href={`/#register?event=${encodeURIComponent(event.name)}`}
                            className="w-full py-4 bg-gradient-to-r from-secondary via-primary to-purple-600 text-white rounded-2xl text-center text-[10px] font-black uppercase tracking-[0.2em] transition-all shadow-[0_10px_30px_rgba(241,90,36,0.3)] hover:shadow-[0_15px_40px_rgba(241,90,36,0.5)] flex items-center justify-center gap-2 group/reg relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover/reg:animate-[shimmer_2s_infinite]" />
                            <Sparkles className="w-3 h-3 group-hover/reg:animate-pulse" />
                            <span>Register Now</span>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Decoration Glow */}
            <div className={`absolute -bottom-10 -right-10 w-24 h-24 rounded-full blur-[50px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-[#f15a24] to-[#fdb813]`} />
        </motion.div>
    );
}
