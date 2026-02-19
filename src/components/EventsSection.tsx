"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { events, categories } from "@/data/events";
import { EventCard } from "./EventCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function EventsSection({ limit }: { limit?: number }) {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredEvents = useMemo(() => {
        if (limit) return events.slice(0, limit);
        return activeCategory === "All"
            ? events
            : events.filter((e) => e.category === activeCategory);
    }, [activeCategory, limit]);

    return (
        <section id="events" className="py-24 px-4 sm:px-6 relative z-10 bg-[#0a0b14] mx-auto max-w-[95%] rounded-[3rem] mt-12 border border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic"
                    >
                        {limit ? "FEATURED " : "EXPLORE THE "}
                        <span className="text-primary not-italic">{limit ? "EVENTS" : "VIBE"}</span>
                    </motion.h2>
                    <p className="text-white/60 max-w-2xl mx-auto font-medium text-sm sm:text-base">
                        {limit
                            ? "Catch a glimpse of the most exciting events. Don't miss out on the thrill!"
                            : "Choose from exciting events across multiple categories. Showcase your talent and win big!"
                        }
                    </p>
                </div>

                {/* Category Tabs - Only show if not limited */}
                {!limit && (
                    <div className="overflow-x-auto pb-6 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
                        <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-2 sm:gap-3">
                            <button
                                onClick={() => setActiveCategory("All")}
                                className={`whitespace-nowrap px-5 py-2 rounded-full transition-all border font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] relative overflow-hidden flex-shrink-0 ${activeCategory === "All"
                                    ? "bg-primary text-white border-transparent"
                                    : "bg-white/5 text-white/40 border-white/5"
                                    }`}
                            >
                                All Events
                            </button>

                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`whitespace-nowrap px-5 py-2 rounded-full transition-all border font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] relative overflow-hidden flex-shrink-0 ${activeCategory === category
                                        ? "bg-primary text-white border-transparent"
                                        : "bg-white/5 text-white/40 border-white/5"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Events Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    <AnimatePresence>
                        {filteredEvents.map((event) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            >
                                <EventCard event={event} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {limit && (
                    <div className="mt-16 text-center">
                        <Link
                            href="/events"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white font-black uppercase tracking-widest text-xs transition-all hover:gap-5 group"
                        >
                            View All Events
                            <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                )}

                {filteredEvents.length === 0 && !limit && (
                    <div className="text-center py-20 text-white/40 font-bold uppercase tracking-widest">
                        No events found in this category.
                    </div>
                )}
            </div>
        </section>
    );
}

