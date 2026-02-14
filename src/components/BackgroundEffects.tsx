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
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[var(--background)]">
            {/* STATIC Orbs for depth without movement */}
            <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-[#f15a24]/5 rounded-full blur-[120px] mix-blend-screen" />
            <div className="absolute top-[10%] right-[-10%] w-[60vw] h-[60vw] bg-[#fdb813]/5 rounded-full blur-[120px] mix-blend-screen" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-[#8b5cf6]/5 rounded-full blur-[100px] mix-blend-screen" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[50vw] h-[50vw] bg-[#3b82f6]/5 rounded-full blur-[100px] mix-blend-screen" />

            {/* Subtle noise/texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blend-soft-light" />
        </div>
    );
}
