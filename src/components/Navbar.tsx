"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

const navItems = [
    { name: "Events", href: "/events", emoji: "🎯" },
    { name: "Team", href: "/#team", emoji: "👥" },
    { name: "Contact", href: "/#contact", emoji: "📞" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-4 transition-all duration-300 ${scrolled ? "glass border-b border-white/10 py-3 shadow-2xl" : "bg-transparent py-5"
                    }`}
            >
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                    {/* Logo - Premium */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative">
                            <Sparkles className="w-8 h-8 text-secondary drop-shadow-[0_0_15px_rgba(253,184,19,0.8)]" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-black text-white tracking-tighter uppercase leading-none">
                                SANGRILA
                            </span>
                            <span className="text-[10px] text-primary font-black uppercase tracking-[0.2em] leading-none mt-1">2K26</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`group relative transition-colors text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2 ${scrolled ? "text-muted-foreground hover:text-white" : "text-white/80 hover:text-white"
                                    }`}
                            >
                                <span>{item.name}</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#fdb813] to-[#8b5cf6] group-hover:w-full transition-all duration-300" />
                            </Link>
                        ))}

                        <Link
                            href="/#register"
                            className="px-6 py-2.5 bg-gradient-to-r from-[#fdb813] to-[#f15a24] text-white font-black rounded-full text-xs uppercase tracking-widest shadow-xl hover:brightness-110 transition-all border border-white/20"
                        >
                            Register Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-primary bg-primary/5 p-2 rounded-xl border border-primary/10"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-[var(--background)]/95 backdrop-blur-2xl pt-24 px-6 md:hidden flex flex-col items-center"
                >
                    <div className="flex flex-col gap-8 w-full max-w-sm">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-between text-3xl font-black text-white hover:text-primary transition-colors p-4 border-b border-white/10"
                            >
                                <span>{item.name}</span>
                                <span className="text-2xl">{item.emoji}</span>
                            </Link>
                        ))}
                        <Link
                            href="/#register"
                            onClick={() => setIsOpen(false)}
                            className="mt-8 block w-full py-4 bg-primary text-white text-center font-black rounded-full text-xl border border-primary/30"
                        >
                            REGISTER NOW
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}
