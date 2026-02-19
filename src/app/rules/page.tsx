"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { BookOpen, AlertTriangle, Users, Trophy, Clock, MapPin, ShieldCheck, Ban } from "lucide-react";

const ruleCategories = [
    {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: "General Rules",
        color: "from-primary to-orange-400",
        rules: [
            "All participants must carry a valid college ID card.",
            "Registration is mandatory for all events before the deadline.",
            "Participants must report to the event venue 15 minutes before the scheduled time.",
            "The decision of the judges will be final and binding.",
            "Any form of misbehavior or indiscipline will lead to immediate disqualification.",
            "Participants must follow the dress code specified for each event.",
        ]
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Team Events",
        color: "from-purple-500 to-violet-400",
        rules: [
            "Team size must be as per the event guidelines.",
            "No substitution of team members is allowed after registration.",
            "Team leader is responsible for the conduct of all team members.",
            "Inter-college teams are not allowed unless specified.",
        ]
    },
    {
        icon: <Trophy className="w-6 h-6" />,
        title: "Competition Guidelines",
        color: "from-secondary to-yellow-400",
        rules: [
            "Use of any pre-recorded material is prohibited unless specified.",
            "Plagiarism of any form will lead to disqualification.",
            "Props and costumes must be arranged by the participants themselves.",
            "Time limits for each event must be strictly followed.",
            "Vulgar or offensive content is strictly prohibited.",
        ]
    },
    {
        icon: <Ban className="w-6 h-6" />,
        title: "Prohibited Activities",
        color: "from-red-500 to-rose-400",
        rules: [
            "Consumption of alcohol or any intoxicating substance is strictly prohibited.",
            "Ragging in any form will not be tolerated.",
            "Damage to college property will result in penalty.",
            "Use of fire, harmful chemicals, or dangerous props is not allowed.",
            "No outside food or beverages are allowed in event venues.",
        ]
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: "Schedule & Timing",
        color: "from-blue-500 to-cyan-400",
        rules: [
            "Events will follow the published schedule strictly.",
            "Late entries will not be entertained.",
            "Results will be announced at the closing ceremony.",
            "All participants must vacate the venue by the specified closing time.",
        ]
    },
    {
        icon: <MapPin className="w-6 h-6" />,
        title: "Venue & Logistics",
        color: "from-emerald-500 to-green-400",
        rules: [
            "Parking will be available at designated areas only.",
            "Participants are responsible for their personal belongings.",
            "Emergency exits must not be blocked at any time.",
            "Follow the instructions of the organizing committee at all times.",
        ]
    },
];

export default function RulesPage() {
    return (
        <main className="min-h-screen relative overflow-hidden">
            <BackgroundEffects />
            <Navbar />

            <section className="pt-32 pb-24 px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-black uppercase tracking-[0.4em] backdrop-blur-sm"
                        >
                            <BookOpen className="w-4 h-4" />
                            SANGRILA 2K26
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30, letterSpacing: "-0.05em" }}
                            animate={{ opacity: 1, y: 0, letterSpacing: "0em" }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase"
                        >
                            Rules &{" "}
                            <span className="gradient-text">Guidelines</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-muted-foreground max-w-2xl mx-auto font-medium text-sm md:text-base"
                        >
                            Please read all the rules carefully before participating. Adherence to these rules ensures a fair and enjoyable experience for everyone.
                        </motion.p>
                    </div>

                    {/* Important Notice */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mb-12 p-6 rounded-2xl bg-primary/5 border border-primary/20 backdrop-blur-sm flex items-start gap-4"
                    >
                        <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                            <h3 className="text-white font-black text-sm uppercase tracking-wider mb-1">Important Notice</h3>
                            <p className="text-muted-foreground text-sm">
                                Violation of any rule may lead to disqualification and/or ban from future events. The organizing committee reserves the right to modify rules at any time. For queries, contact the event coordinators.
                            </p>
                        </div>
                    </motion.div>

                    {/* Rule Categories Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {ruleCategories.map((category, catIndex) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 + catIndex * 0.1 }}
                                className="group bg-[#0a0b14] rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden"
                            >
                                {/* Category Header */}
                                <div className={`p-5 bg-gradient-to-r ${category.color} bg-opacity-10 flex items-center gap-3`}>
                                    <div className="p-2.5 bg-white/10 rounded-xl text-white backdrop-blur-sm">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-white font-black text-lg uppercase tracking-wider">
                                        {category.title}
                                    </h3>
                                </div>

                                {/* Rules List */}
                                <div className="p-5 space-y-3">
                                    {category.rules.map((rule, ruleIndex) => (
                                        <div key={ruleIndex} className="flex items-start gap-3">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-white/5 text-primary text-xs font-black flex items-center justify-center mt-0.5">
                                                {ruleIndex + 1}
                                            </span>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                {rule}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Footer Note */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="text-center mt-16"
                    >
                        <p className="text-muted-foreground text-sm">
                            These rules are subject to change. Final rulebook will be shared before the event.
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
