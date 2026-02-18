"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { events, categories } from "@/data/events";
import { EventCard } from "./EventCard";

export function EventsSection() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredEvents = useMemo(() =>
        activeCategory === "All"
            ? events
            : events.filter((e) => e.category === activeCategory)
        , [activeCategory]);

    return (
        <section id="events" className="py-24 px-4 sm:px-6 relative z-10 glass mx-auto max-w-[95%] rounded-[3rem] mt-12 border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic"
                    >
                        EXPLORE THE <span className="text-primary not-italic">VIBE</span>
                    </motion.h2>
                    <p className="text-white/60 max-w-2xl mx-auto font-medium text-sm sm:text-base">
                        Choose from exciting events across multiple categories.
                        Showcase your talent and win big!
                    </p>
                </div>

                {/* Category Tabs - Optimized Scroll on Mobile */}
                <div className="overflow-x-auto pb-6 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
                    <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-3">
                        <button
                            onClick={() => setActiveCategory("All")}
                            className={`whitespace-nowrap px-6 py-2.5 rounded-full transition-all border font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] relative overflow-hidden flex-shrink-0 ${activeCategory === "All"
                                ? "bg-gradient-to-r from-secondary to-primary text-white border-transparent"
                                : "bg-white/5 text-white/60 border-white/10"
                                }`}
                        >
                            All Events
                        </button>

                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`whitespace-nowrap px-6 py-2.5 rounded-full transition-all border font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] relative overflow-hidden flex-shrink-0 ${activeCategory === category
                                    ? "bg-gradient-to-r from-secondary to-primary text-white border-transparent"
                                    : "bg-white/5 text-white/60 border-white/10"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Events Grid - Optimized for Performance */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <AnimatePresence mode="wait">
                        {filteredEvents.map((event) => (
                            <motion.div
                                key={event.id}
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <EventCard event={event} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredEvents.length === 0 && (
                    <div className="text-center py-20 text-white/40 font-bold uppercase tracking-widest">
                        No events found in this category.
                    </div>
                )}
            </div>
        </section>
    );
}
