"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, IndianRupee, Sparkles } from "lucide-react";
import type { Event } from "@/data/events";

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
            {/* Image Container */}
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6">
                {/* Event Image or Placeholder */}
                {event.image ? (
                    <Image
                        src={event.image}
                        alt={event.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${colors.from} ${colors.to} opacity-20 flex items-center justify-center`}>
                        <Sparkles className={`w-12 h-12 ${colors.text} opacity-30`} />
                    </div>
                )}

                {/* Category Badge overlay */}
                <div className="absolute top-4 left-4 z-20">
                    <div className={`px-4 py-1.5 rounded-full ${colors.bg} ${colors.text} text-[10px] font-black uppercase tracking-[0.2em] backdrop-blur-xl border border-white/10 shadow-lg`}>
                        <span className="mr-2">{colors.emoji}</span>
                        {event.category}
                    </div>
                </div>

                {/* Registration Overlay on Hover */}
                <div className="absolute inset-0 bg-[#05060f]/70 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-4 z-30">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            href="/#register"
                            className="px-8 py-3 bg-gradient-to-r from-secondary via-primary to-purple-600 text-white font-black rounded-full text-xs uppercase tracking-widest shadow-[0_0_30px_rgba(241,90,36,0.5)] border border-white/20 flex items-center justify-center relative overflow-hidden group/btn"
                        >
                            <span className="relative z-10">Register Now</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover/btn:translate-x-[150%] transition-transform duration-700" />
                        </Link>
                    </motion.div>
                    <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                        <Users className="w-3 h-3" />
                        {event.participants} Participants
                    </p>
                </div>

                {/* Shadow/Gradient for text readability backup */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#05060f]/50 to-transparent pointer-events-none" />
            </div>

            {/* Content Area */}
            <div className="px-3 pb-4 space-y-4 flex-grow flex flex-col">
                <div className="space-y-2">
                    <h3 className="text-2xl font-black text-white group-hover:text-primary transition-colors duration-300 uppercase tracking-tight leading-none">
                        {event.name}
                    </h3>
                    <div className="flex items-center gap-3 text-white/40 text-[11px] font-black uppercase tracking-widest">
                        <span>Main Stage</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span>{event.timeLimit}</span>
                    </div>
                </div>

                <p className="text-muted-foreground text-xs font-medium leading-relaxed line-clamp-2">
                    {event.description}
                </p>

                <div className="pt-4 mt-auto border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                        <IndianRupee className="w-3.5 h-3.5 text-primary" />
                        <span className="text-white font-black text-sm">{event.fee}</span>
                    </div>
                    <div className="flex items-center gap-1.5 opacity-60">
                        <Users className="w-3.5 h-3.5 text-white/40" />
                        <span className="text-white/40 font-black text-[10px] tracking-widest">{event.participants}</span>
                    </div>
                </div>
            </div>

            {/* Decoration Glow */}
            <div className={`absolute -bottom-10 -right-10 w-24 h-24 rounded-full blur-[50px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-[#8b5cf6] to-[#3b82f6]`} />
        </motion.div>
    );
}
