"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { events, categories } from "@/data/events";
import { EventCard } from "./EventCard";

export function EventsSection() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredEvents = activeCategory === "All"
        ? events
        : events.filter((e) => e.category === activeCategory);

    return (
        <section id="events" className="py-24 px-6 relative z-10 glass mx-4 rounded-[3rem] mt-12 border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-black text-white tracking-tighter drop-shadow-[0_0_20px_rgba(139,92,246,0.5)] uppercase italic"
                    >
                        EXPLORE THE <span className="text-primary not-italic">VIBE</span>
                    </motion.h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto font-medium">
                        Choose from 25 exciting events across multiple categories.
                        Showcase your talent and win big!
                    </p>
                </div>

                {/* Category Tabs */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    <motion.button
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        whileHover={{ scale: 1.05, boxShadow: activeCategory === "All" ? "0 0 20px rgba(139,92,246,0.4)" : "none" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveCategory("All")}
                        className={`px-6 py-2 rounded-full transition-all border font-bold text-sm uppercase tracking-widest ${activeCategory === "All"
                            ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                            : "bg-white/5 text-muted-foreground border-white/10 hover:border-primary/50 hover:text-primary"
                            }`}
                    >
                        All Events
                    </motion.button>
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            whileHover={{ scale: 1.05, boxShadow: activeCategory === category ? "0 0 20px rgba(139,92,246,0.4)" : "none" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full transition-all border font-bold text-sm uppercase tracking-widest ${activeCategory === category
                                ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                                : "bg-white/5 text-muted-foreground border-white/10 hover:border-primary/50 hover:text-primary"
                                }`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Events Grid */}
                <motion.div
                    layout
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredEvents.map((event, index) => (
                            <motion.div
                                key={event.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <EventCard event={event} _index={index} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredEvents.length === 0 && (
                    <div className="text-center py-20 text-muted-foreground">
                        No events found in this category.
                    </div>
                )}
            </div>
        </section>
    );
}
