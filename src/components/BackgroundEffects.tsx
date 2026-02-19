"use client";

import Image from "next/image";

export function BackgroundEffects() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#020205] pointer-events-none">
            {/* Base Dark Stage Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1c2e] via-[#020205] to-[#000000]" />

            {/* Concert Crowd Background Image - Fixed Layer */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/concert-crowd.png"
                    alt="Concert Background"
                    fill
                    className="object-cover object-bottom opacity-50 blur-[2px]"
                    priority
                    sizes="100vw"
                    quality={30}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-[#020205]/60 to-[#020205]/80" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#020205] via-transparent to-[#020205]/90" />
            </div>

            {/* CSS-only Spotlight Left */}
            <div className="hidden md:block absolute -top-[20%] -left-[10%] w-[40vw] h-[150vh] bg-gradient-to-b from-blue-500/15 via-purple-500/3 to-transparent blur-[30px] origin-top rotate-[-12deg] mix-blend-screen spotlight-left"
                style={{ clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)" }}
            />

            {/* CSS-only Spotlight Right */}
            <div className="hidden md:block absolute -top-[20%] -right-[10%] w-[40vw] h-[150vh] bg-gradient-to-b from-pink-500/15 via-purple-500/3 to-transparent blur-[30px] origin-top rotate-[12deg] mix-blend-screen spotlight-right"
                style={{ clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)" }}
            />

            {/* CSS-only Laser Beams - desktop only */}
            <div className="hidden md:block absolute -top-[10%] left-[20%] w-[1px] h-[150vh] bg-cyan-400/50 blur-[1px] origin-top mix-blend-screen laser-left" />
            <div className="hidden md:block absolute -top-[10%] right-[20%] w-[1px] h-[150vh] bg-fuchsia-400/50 blur-[1px] origin-top mix-blend-screen laser-right" />

            {/* Center Top Glow - static */}
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] bg-purple-500/10 rounded-full blur-[100px] glow-pulse" />

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 right-0 h-[20vh] bg-gradient-to-t from-black via-[#0a0b1e] to-transparent opacity-80" />
        </div>
    );
}
