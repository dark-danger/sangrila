"use client";

import { motion } from "framer-motion";
import { Calendar, Music, Palette, Theater, Camera, UtensilsCrossed, Star, PartyPopper, Mic2, Shirt } from "lucide-react";

const day1Events = [
    { time: "09:00 AM", title: "Registration & Check-in", icon: <Calendar className="w-4 h-4" />, color: "from-blue-500 to-cyan-400" },
    { time: "10:00 AM", title: "Opening Ceremony", icon: <PartyPopper className="w-4 h-4" />, color: "from-primary to-orange-400" },
    { time: "10:30 AM", title: "Dance Events", icon: <Music className="w-4 h-4" />, color: "from-pink-500 to-rose-400" },
    { time: "11:00 AM", title: "Fine Arts & Sketching", icon: <Palette className="w-4 h-4" />, color: "from-amber-500 to-orange-400" },
    { time: "12:00 PM", title: "Singing Events", icon: <Mic2 className="w-4 h-4" />, color: "from-violet-500 to-purple-400" },
    { time: "01:00 PM", title: "Lunch Break", icon: <UtensilsCrossed className="w-4 h-4" />, color: "from-green-500 to-emerald-400" },
    { time: "02:00 PM", title: "Theatre & Poetry", icon: <Theater className="w-4 h-4" />, color: "from-emerald-500 to-teal-400" },
    { time: "03:00 PM", title: "Life Skills & Photography", icon: <Camera className="w-4 h-4" />, color: "from-cyan-500 to-blue-400" },
    { time: "04:00 PM", title: "Fashion Show & Mr./Ms. Sangrila", icon: <Shirt className="w-4 h-4" />, color: "from-fuchsia-500 to-pink-400" },
    { time: "06:00 PM", title: "Results & Prize Distribution", icon: <Star className="w-4 h-4" />, color: "from-yellow-500 to-amber-400" },
];

const day2Events = [
    { time: "05:00 PM", title: "Gates Open", icon: <Calendar className="w-4 h-4" />, color: "from-blue-500 to-cyan-400" },
    { time: "06:00 PM", title: "DJ & EDM Night", icon: <Music className="w-4 h-4" />, color: "from-purple-500 to-violet-400" },
    { time: "08:00 PM", title: "⭐ Star Night — Asees Kaur Live", icon: <Star className="w-4 h-4" />, color: "from-primary to-yellow-400" },
    { time: "10:00 PM", title: "Grand Finale & Closing", icon: <PartyPopper className="w-4 h-4" />, color: "from-secondary to-primary" },
];

export function EventFlow() {
    return (
        <section className="py-24 px-4 sm:px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase"
                    >
                        EVENT{" "}
                        <span className="gradient-text">FLOW</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-muted-foreground max-w-2xl mx-auto font-medium text-sm md:text-base"
                    >
                        Your complete guide to the 2-day experience at Sangrila 2K26
                    </motion.p>
                </div>

                {/* Day 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-primary to-orange-400 text-white font-black text-sm uppercase tracking-widest">
                            Day 1
                        </div>
                        <div className="text-white/60 font-bold text-sm">
                            13th March 2026 — <span className="text-white">All Events & Competitions</span>
                        </div>
                    </div>

                    {/* Snake Timeline */}
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-5 md:left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-secondary opacity-30" />

                        <div className="space-y-3">
                            {day1Events.map((event, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="relative flex items-start gap-4 group motion-gpu"
                                >
                                    {/* Dot on line */}
                                    <div className={`relative z-10 flex-shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${event.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        {event.icon}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 pb-3 pt-1">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                                            <span className="text-primary font-black text-xs tracking-widest uppercase">
                                                {event.time}
                                            </span>
                                            <span className="text-white font-bold text-sm md:text-base">
                                                {event.title}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Day 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-purple-500 to-violet-400 text-white font-black text-sm uppercase tracking-widest">
                            Day 2
                        </div>
                        <div className="text-white/60 font-bold text-sm">
                            14th March 2026 — <span className="text-white">⭐ Star Night</span>
                        </div>
                    </div>

                    {/* Snake Timeline */}
                    <div className="relative">
                        <div className="absolute left-5 md:left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-primary to-secondary opacity-30" />

                        <div className="space-y-3">
                            {day2Events.map((event, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.08 }}
                                    className={`relative flex items-start gap-4 group motion-gpu ${event.title.includes("Star Night") ? "scale-105 origin-left" : ""}`}
                                >
                                    {/* Dot on line */}
                                    <div className={`relative z-10 flex-shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${event.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 ${event.title.includes("Star Night") ? "ring-2 ring-primary/50 shadow-[0_0_20px_rgba(241,90,36,0.3)]" : ""}`}>
                                        {event.icon}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 pb-3 pt-1">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                                            <span className="text-primary font-black text-xs tracking-widest uppercase">
                                                {event.time}
                                            </span>
                                            <span className={`font-bold text-sm md:text-base ${event.title.includes("Star Night") ? "text-primary text-lg md:text-xl" : "text-white"}`}>
                                                {event.title}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
