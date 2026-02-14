"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function BackgroundEffects() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#020205] pointer-events-none">
            {/* Base Dark Stage Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1c2e] via-[#020205] to-[#000000]" />

            {/* Concert Crowd Background Image - Fixed Layer */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/concert-crowd.png"
                    alt="Concert Background"
                    className="w-full h-full object-cover object-bottom opacity-50 blur-[2px]"
                />
                {/* Gradient Overlays to blend image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-[#020205]/60 to-[#020205]/80" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#020205] via-transparent to-[#020205]/90" />
            </div>

            {/* Animated Spotlights */}
            {/* Left Beam */}
            <motion.div
                animate={{
                    rotate: [-15, -5, -15],
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -top-[20%] -left-[10%] w-[40vw] h-[150vh] bg-gradient-to-b from-blue-500/20 via-purple-500/5 to-transparent blur-[30px] transform origin-top rotate-[-12deg] mix-blend-screen"
                style={{ clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)" }}
            />

            {/* Right Beam */}
            <motion.div
                animate={{
                    rotate: [15, 5, 15],
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute -top-[20%] -right-[10%] w-[40vw] h-[150vh] bg-gradient-to-b from-pink-500/20 via-purple-500/5 to-transparent blur-[30px] transform origin-top rotate-[12deg] mix-blend-screen"
                style={{ clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)" }}
            />

            {/* Sharp Laser Beams */}
            <motion.div
                animate={{
                    rotate: [-25, 25, -25],
                    opacity: [0, 0.8, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute -top-[10%] left-[20%] w-[2px] h-[150vh] bg-cyan-400 blur-[1px] origin-top mix-blend-screen box-shadow-[0_0_10px_#22d3ee]"
            />
            <motion.div
                animate={{
                    rotate: [25, -25, 25],
                    opacity: [0, 0.8, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.5
                }}
                className="absolute -top-[10%] right-[20%] w-[2px] h-[150vh] bg-fuchsia-400 blur-[1px] origin-top mix-blend-screen box-shadow-[0_0_10px_#e879f9]"
            />
            <motion.div
                animate={{
                    rotate: [-40, 40, -40],
                    opacity: [0.2, 0.6, 0.2],
                    scaleY: [0.8, 1.2, 0.8]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-0 left-1/2 w-[1px] h-[120vh] bg-purple-500/80 blur-[0.5px] origin-top -translate-x-1/2"
            />

            {/* Center Top Glow */}
            <motion.div
                animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[50vw] h-[50vw] bg-purple-500/10 rounded-full blur-[100px] mix-blend-screen"
            />

            {/* Floating Orbs - Stage Lights */}
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[30%] left-[20%] w-[30vh] h-[30vh] bg-[#f15a24]/10 rounded-full blur-[80px] mix-blend-screen"
            />
            <motion.div
                animate={{
                    x: [0, -50, 0],
                    y: [0, -30, 0],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute bottom-[20%] right-[20%] w-[40vh] h-[40vh] bg-[#3b82f6]/10 rounded-full blur-[80px] mix-blend-screen"
            />

            {/* Atmospheric Noise/Grain */}
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

            {/* Rising Particles / Dust Motes */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white rounded-full"
                        style={{
                            width: Math.random() * 2 + 1 + "px",
                            height: Math.random() * 2 + 1 + "px",
                            left: Math.random() * 100 + "%",
                            top: Math.random() * 100 + "%",
                            opacity: Math.random() * 0.5 + 0.1,
                        }}
                        animate={{
                            y: [0, -100],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 right-0 h-[20vh] bg-gradient-to-t from-black via-[#0a0b1e] to-transparent opacity-80" />
        </div>
    );
}
