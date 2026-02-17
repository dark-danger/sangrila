"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

const navItems = [
    { name: "Home", href: "/#hero", emoji: "🏠" },
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
        handleScroll(); // Check once on mount
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-6 lg:px-12 h-[72px] md:h-[80px] transition-all duration-300 flex items-center ${scrolled
                    ? "glass border-b border-white/10 shadow-2xl"
                    : "bg-transparent"
                    }`}
            >
                <div className="flex items-center justify-between w-full h-full">

                    {/* Logo - Restored to your preferred custom alignment but made responsive */}
                    <Link href="/" className="flex items-center gap-1 group relative">
                        <Image
                            src="/logo.png"
                            alt="Geeta University Logo"
                            width={200}
                            height={200}
                            className="h-20 md:h-20 lg:h-28 w-auto object-contain hover:scale-105 transition-transform duration-300 relative 
                                       md:top-[22px] md:right-16 
                                       top-[10px] right-2"
                            priority
                        />
                        <div className="flex flex-col justify-center leading-none relative 
                                        md:right-32 right-4">
                            <span className="text-xl md:text-3xl lg:text-4xl font-black text-white tracking-tighter uppercase leading-none relative right-7 group-hover:text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(241,90,36,0.8),0_0_30px_rgba(139,92,246,0.4)]">
                                SANGRILA
                            </span>
                            <span className="text-[10px] md:text-sm text-primary font-black uppercase tracking-widest leading-none mt-1 relative right-7 group-hover:text-white transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8),0_0_30px_rgba(241,90,36,0.4)]">
                                2K26
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6 lg:gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`group relative transition-colors text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] ${scrolled ? "text-muted-foreground hover:text-white" : "text-white/80 hover:text-white"
                                    }`}
                            >
                                <span>{item.name}</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 group-hover:w-full transition-all duration-300" />
                            </Link>
                        ))}

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/#register"
                                className="px-4 lg:px-6 py-2 lg:py-2.5 bg-gradient-to-r from-secondary via-primary to-purple-600 text-white font-black rounded-full text-[10px] lg:text-xs uppercase tracking-wider lg:tracking-widest shadow-xl hover:shadow-[0_0_20px_rgba(241,90,36,0.3)] transition-all border border-white/20 flex items-center justify-center whitespace-nowrap relative overflow-hidden group"
                            >
                                <Sparkles className="w-3 h-3 mr-2 group-hover:animate-spin" />
                                <span className="relative z-10">Register Now</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="md:hidden text-primary bg-primary/5 p-2 rounded-xl border border-primary/10 flex items-center justify-center relative z-10"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl pt-24 px-6 md:hidden flex flex-col items-center"
                >
                    <div className="flex flex-col gap-6 w-full max-w-sm">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-between text-2xl font-black text-white hover:text-primary transition-colors p-4 border-b border-white/10"
                            >
                                <span>{item.name}</span>
                                <span className="text-xl">{item.emoji}</span>
                            </Link>
                        ))}
                        <motion.div whileTap={{ scale: 0.95 }}>
                            <Link
                                href="/#register"
                                onClick={() => setIsOpen(false)}
                                className="mt-6 block w-full py-4 bg-gradient-to-r from-secondary via-primary to-purple-600 text-white text-center font-black rounded-full text-lg border border-primary/30 relative overflow-hidden group"
                            >
                                <span className="relative z-10 uppercase tracking-widest">REGISTER NOW</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] animate-[shimmer_3s_infinite]" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            )}
        </>
    );
}
