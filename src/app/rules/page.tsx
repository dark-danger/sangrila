"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    BookOpen,
    AlertTriangle,
    Trophy,
    Clock,
    Users,
    IndianRupee,
    ChevronDown,
    Phone,
    Calendar,
    Shield,
    ListChecks,
    Award,
    Building,
} from "lucide-react";
import {
    eventCategories,
    generalRules,
    accommodationRules,
    type EventRule,
} from "@/data/eventRules";

/* ───────────────── Accordion Event Card ───────────────── */
function EventCard({ event, catColor }: { event: EventRule; catColor: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-white/10 transition-colors">
            {/* Summary Row — always visible */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left cursor-pointer group"
            >
                <div className="flex-1 min-w-0">
                    <h4 className="text-white font-bold text-base md:text-lg tracking-wide">
                        {event.name}
                    </h4>
                    {/* Quick info chips */}
                    <div className="flex flex-wrap gap-2 mt-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 text-xs text-muted-foreground">
                            <IndianRupee className="w-3 h-3 text-green-400" />
                            {event.registrationFee}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3 text-blue-400" />
                            {event.timeLimit}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 text-xs text-muted-foreground">
                            <Users className="w-3 h-3 text-purple-400" />
                            {event.teamSize}
                        </span>
                    </div>
                </div>
                <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 ml-3 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>

            {/* Expanded Details */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-4 md:px-5 pb-5 space-y-5 border-t border-white/5 pt-4">
                            {/* Code of Conduct */}
                            <DetailSection
                                icon={<Shield className="w-4 h-4" />}
                                title="Code of Conduct"
                                items={event.codeOfConduct}
                            />

                            {/* Event Guidelines */}
                            <DetailSection
                                icon={<ListChecks className="w-4 h-4" />}
                                title="Event Guidelines"
                                items={event.guidelines}
                            />

                            {/* Judging Criteria */}
                            <div>
                                <h5 className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider mb-2">
                                    <Award className="w-4 h-4 text-yellow-400" />
                                    Judging Criteria
                                </h5>
                                <div className="flex flex-wrap gap-2">
                                    {event.judgingCriteria.map((c, i) => (
                                        <span
                                            key={i}
                                            className={`px-3 py-1.5 rounded-lg bg-gradient-to-r ${catColor} bg-opacity-10 text-xs font-semibold text-white/90`}
                                            style={{ background: "rgba(255,255,255,0.06)" }}
                                        >
                                            {c}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {/* Prize */}
                            <div>
                                <h5 className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider mb-2">
                                    <Trophy className="w-4 h-4 text-primary" />
                                    Prize
                                </h5>
                                <p className="text-muted-foreground text-sm pl-1">
                                    {event.prize}
                                </p>
                            </div>



                            {/* Last Date & Contacts */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Calendar className="w-4 h-4 text-primary" />
                                    <span>
                                        Last Date:{" "}
                                        <span className="text-white font-semibold">
                                            {event.lastDate}
                                        </span>
                                    </span>
                                </div>
                                <div className="flex flex-wrap items-center gap-3">
                                    <Phone className="w-4 h-4 text-emerald-400" />
                                    {event.contacts.map((c, i) => (
                                        <a
                                            key={i}
                                            href={`tel:${c.phone}`}
                                            className="text-sm text-muted-foreground hover:text-white transition-colors"
                                        >
                                            {c.name}:{" "}
                                            <span className="text-white/80 font-medium">
                                                {c.phone}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

/* ───────────── Detail Section (bulleted list) ───────────── */
function DetailSection({
    icon,
    title,
    items,
}: {
    icon: React.ReactNode;
    title: string;
    items: string[];
}) {
    const [expanded, setExpanded] = useState(false);
    const preview = items.slice(0, 3);
    const rest = items.slice(3);

    return (
        <div>
            <h5 className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider mb-2">
                {icon}
                {title}
            </h5>
            <ul className="space-y-1.5 text-muted-foreground text-sm pl-1">
                {preview.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                        {item}
                    </li>
                ))}
                {rest.length > 0 && expanded &&
                    rest.map((item, i) => (
                        <li key={`rest-${i}`} className="flex items-start gap-2">
                            <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                            {item}
                        </li>
                    ))}
            </ul>
            {rest.length > 0 && (
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="text-primary/80 hover:text-primary text-xs font-semibold mt-1.5 cursor-pointer"
                >
                    {expanded ? "Show less" : `+${rest.length} more`}
                </button>
            )}
        </div>
    );
}

/* ═══════════════════════ MAIN PAGE ═══════════════════════ */
export default function RulesPage() {
    const [activeCategory, setActiveCategory] = useState(
        eventCategories[0].id,
    );
    const [showGeneral, setShowGeneral] = useState(false);
    const [showAccommodation, setShowAccommodation] = useState(false);

    const activeCat = eventCategories.find((c) => c.id === activeCategory)!;

    return (
        <main className="min-h-screen relative overflow-hidden">
            <section className="pt-32 pb-24 px-4 sm:px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* ─── Header ─── */}
                    <div className="text-center mb-14 space-y-5">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-black uppercase tracking-[0.4em] backdrop-blur-sm shadow-[0_0_20px_rgba(241,90,36,0.1)]">
                                <BookOpen className="w-4 h-4" />
                                SANGRILA 2K26
                            </div>
                            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 text-yellow-500 text-xs font-black uppercase tracking-[0.4em] backdrop-blur-sm shadow-[0_0_20px_rgba(253,184,19,0.1)]">
                                <Trophy className="w-4 h-4" />
                                1 Lakh Prize Pool
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase"
                        >
                            Rules &{" "}
                            <span className="gradient-text">Guidelines</span>
                        </motion.h1>

                        <p className="text-muted-foreground max-w-2xl mx-auto font-medium text-sm md:text-base">
                            Welcome to Sangrila 2K26 — the Annual Cultural Fest on{" "}
                            <span className="text-white font-semibold">
                                13th & 14th March 2026
                            </span>. Total Prize Pool:{" "}
                            <span className="text-primary font-bold tracking-wider">₹1,00,000</span>
                        </p>
                    </div>

                    {/* ─── Important Notice ─── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mb-8 p-5 rounded-2xl bg-primary/5 border border-primary/20 backdrop-blur-sm flex items-start gap-4"
                    >
                        <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                            <h3 className="text-white font-black text-sm uppercase tracking-wider mb-1">
                                Important Notice
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                All decisions taken by the organizing committee and judges will
                                be final and binding. By registering for any event, participants
                                agree to abide by the rules stated in this document. The
                                registration fee is non-refundable.
                            </p>
                        </div>
                    </motion.div>

                    {/* ─── General Rules + Transport (Collapsible) ─── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="space-y-4 mb-10"
                    >
                        {/* General Rules */}
                        <div className="rounded-2xl border border-white/5 bg-[#0a0b18] overflow-hidden">
                            <button
                                onClick={() => setShowGeneral(!showGeneral)}
                                className="w-full flex items-center justify-between p-5 cursor-pointer"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 bg-gradient-to-br from-primary to-orange-400 rounded-xl text-white">
                                        <Shield className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-white font-black text-lg uppercase tracking-wider">
                                        General Rules
                                    </h3>
                                </div>
                                <ChevronDown
                                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${showGeneral ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <AnimatePresence>
                                {showGeneral && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-5 pb-5 space-y-2 border-t border-white/5 pt-4">
                                            {generalRules.map((rule, i) => (
                                                <div key={i} className="flex items-start gap-3">
                                                    <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-white/5 text-primary text-xs font-black flex items-center justify-center mt-0.5">
                                                        {i + 1}
                                                    </span>
                                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                                        {rule}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Accommodation Only */}
                        <div className="rounded-2xl border border-white/5 bg-[#0a0b18] overflow-hidden">
                            <button
                                onClick={() => setShowAccommodation(!showAccommodation)}
                                className="w-full flex items-center justify-between p-5 cursor-pointer"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl text-white">
                                        <Building className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-white font-black text-lg uppercase tracking-wider">
                                        Accommodation Only
                                    </h3>
                                </div>
                                <ChevronDown
                                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${showAccommodation ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <AnimatePresence>
                                {showAccommodation && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-5 pb-5 space-y-2 border-t border-white/5 pt-4">
                                            {accommodationRules.map((rule, i) => (
                                                <div key={i} className="flex items-start gap-3">
                                                    <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-white/5 text-blue-400 text-xs font-black flex items-center justify-center mt-0.5">
                                                        {i + 1}
                                                    </span>
                                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                                        {rule}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* ─── Category Tabs ─── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mb-8"
                    >
                        <div className="flex overflow-x-auto scrollbar-hide gap-2 pb-2 -mx-1 px-1">
                            {eventCategories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-300 cursor-pointer flex-shrink-0 ${activeCategory === cat.id
                                        ? "bg-white/10 text-white border border-white/20 shadow-lg"
                                        : "bg-white/[0.03] text-muted-foreground border border-white/5 hover:bg-white/[0.06] hover:text-white/80"
                                        }`}
                                >
                                    <span className="text-lg">{cat.icon}</span>
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* ─── Active Category Content ─── */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCat.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.35 }}
                        >
                            {/* Category Header Card */}
                            <div
                                className={`rounded-2xl bg-gradient-to-r ${activeCat.color} p-[1px] mb-6`}
                            >
                                <div className="rounded-2xl bg-[#0a0b18] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                    <div className="flex items-center gap-3">
                                        <span className="text-3xl">{activeCat.icon}</span>
                                        <div>
                                            <h2 className="text-white font-black text-xl md:text-2xl uppercase tracking-wide">
                                                {activeCat.name}
                                            </h2>
                                            <p className="text-muted-foreground text-sm">
                                                {activeCat.events.length} event
                                                {activeCat.events.length > 1 ? "s" : ""}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Event Cards */}
                            <div className="space-y-3">
                                {activeCat.events.map((event) => (
                                    <EventCard
                                        key={event.id}
                                        event={event}
                                        catColor={activeCat.color}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* ─── Footer Note ─── */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="text-center mt-16"
                    >
                        <p className="text-muted-foreground text-sm">
                            All decisions taken by the organizing committee and judges will be
                            final and binding.
                        </p>
                        <p className="text-primary/70 text-xs font-bold uppercase tracking-widest mt-2">
                            — Sangrila Organizing Committee
                        </p>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
