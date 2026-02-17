"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { User, School, Hash, Trophy, CreditCard, Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from "lucide-react";

import { events } from "@/data/events";

export function RegistrationForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");
    const [isTeamEvent, setIsTeamEvent] = useState(false);

    // REPLACE THIS URL with your Google Apps Script Web App URL after deployment
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzhVYKQqBOiWTUyDOgX0o4wsczNftDc-iPopL-7J9DQgZzIjFf38ncsyASPDiiRHh2VMg/exec";

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!SCRIPT_URL) {
            setStatus("error");
            setMessage("Please configure the Google Apps Script URL in the code.");
            return;
        }

        setStatus("loading");
        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch(SCRIPT_URL, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                setStatus("success");
                setMessage("Registration submitted successfully! Our team will contact you soon.");
                (e.target as HTMLFormElement).reset();
            } else {
                throw new Error("Failed to submit registration");
            }
        } catch {
            setStatus("error");
            setMessage("Something went wrong. Please try again later.");
        }
    };

    return (
        <section id="register" className="py-24 px-4 md:px-6 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto p-5 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-[#11121d]/80 backdrop-blur-2xl border border-white/5 shadow-2xl relative overflow-hidden"
            >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] -ml-32 -mb-32 animate-pulse" />

                <div className="relative z-10">
                    <div className="text-center mb-8 md:mb-12">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tighter uppercase mb-4 transition-all duration-300 group-hover:drop-shadow-[0_10px_30px_rgba(241,90,36,0.2)] cursor-default relative group/reg"
                        >
                            <span className="hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(241,90,36,0.8)]">SANGRILA 2K26</span> - <span className="text-primary italic hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">REGISTRATION</span>
                            <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-primary via-white to-primary group-hover/reg:w-full transition-all duration-700 rounded-full opacity-50" />
                        </motion.h2>
                        <div className="space-y-4 text-muted-foreground font-medium max-w-3xl mx-auto text-xs sm:text-sm leading-relaxed">
                            <p className="text-white text-sm sm:text-base font-bold">Participate in the ultimate celebration of talent! 🎭✨</p>

                            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 py-4 border-y border-white/5 my-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    <span>13-14 March, 2026</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(253,184,19,0.5)]" />
                                    <span>Geeta University</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <div className="space-y-2 group">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-2 group-focus-within:text-primary transition-colors">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/50 group-focus-within:text-primary transition-colors" />
                                    <input required name="name" type="text" placeholder="Your Name" className="w-full pl-12 sm:pl-14 pr-4 sm:pr-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all" />
                                </div>
                            </div>
                            <div className="space-y-2 group">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-2 group-focus-within:text-primary transition-colors">Email</label>
                                <div className="relative">
                                    <Send className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/50 group-focus-within:text-primary transition-colors" />
                                    <input required name="email" type="email" placeholder="email@example.com" className="w-full pl-12 sm:pl-14 pr-4 sm:pr-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all" />
                                </div>
                            </div>
                            <div className="space-y-2 group">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-2 group-focus-within:text-primary transition-colors">University</label>
                                <div className="relative">
                                    <School className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/50 group-focus-within:text-primary transition-colors" />
                                    <input required name="college" type="text" placeholder="College Name" className="w-full pl-12 sm:pl-14 pr-4 sm:pr-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all" />
                                </div>
                            </div>
                            <div className="space-y-2 group">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-2 group-focus-within:text-primary transition-colors">Roll Number / ID</label>
                                <div className="relative">
                                    <Hash className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/50 group-focus-within:text-primary transition-colors" />
                                    <input required name="rollno" type="text" placeholder="Ex: 2024GU001" className="w-full pl-12 sm:pl-14 pr-4 sm:pr-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all" />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <div className="space-y-2 group">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-2 group-focus-within:text-primary transition-colors">Event</label>
                                <div className="relative">
                                    <Trophy className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/50 group-focus-within:text-primary transition-colors" />
                                    <select
                                        required
                                        name="event"
                                        defaultValue=""
                                        onChange={(e) => {
                                            const selectedEvent = events.find(event => event.name === e.target.value);
                                            setIsTeamEvent(selectedEvent?.participants?.includes("-") || (selectedEvent?.participants ? parseInt(selectedEvent.participants) > 1 : false));
                                        }}
                                        className="w-full pl-12 sm:pl-14 pr-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-[#0a0b14] border border-white/10 text-white text-sm focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled>Select an Event</option>
                                        {events.map(e => <option key={e.id} value={e.name}>{e.name} ({e.fee})</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-2 group">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-2 group-focus-within:text-primary transition-colors">Transaction ID</label>
                                <div className="relative">
                                    <CreditCard className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/50 group-focus-within:text-primary transition-colors" />
                                    <input required name="transactionId" type="text" placeholder="TID / UTR Number" className="w-full pl-12 sm:pl-14 pr-4 sm:pr-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all" />
                                </div>
                            </div>
                        </div>

                        {/* Payment QR Section */}
                        <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10 text-center space-y-4 hover:bg-white/10 transition-colors duration-500 group">
                            <h3 className="text-xs font-black text-white uppercase tracking-widest flex items-center justify-center gap-2">
                                <Sparkles className="w-3 h-3 text-secondary animate-pulse" />
                                Payment QR Code
                            </h3>
                            <div className="relative w-48 h-48 mx-auto bg-white rounded-2xl p-3 shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:scale-105 transition-transform duration-500">
                                <Image
                                    src="/qr-code.png"
                                    alt="Payment QR Code"
                                    fill
                                    className="object-contain p-2"
                                />
                            </div>
                            <p className="text-[10px] text-white/40 font-mono">geetauniversity.62417837@hdfcbank</p>
                        </div>

                        <motion.button
                            disabled={status === "loading"}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full py-4 md:py-5 rounded-[2rem] bg-gradient-to-r from-secondary via-primary to-purple-600 text-white font-black text-xs md:text-sm uppercase tracking-widest shadow-xl hover:shadow-[0_0_40px_rgba(241,90,36,0.4)] transition-all flex items-center justify-center gap-3 disabled:opacity-50 relative overflow-hidden group/btn"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] animate-[shimmer_4s_infinite]" />
                            {status === "loading" ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                <>
                                    <span className="relative z-10">Register & Join Fest</span>
                                    <CheckCircle2 className="w-5 h-5 relative z-10 group-hover/btn:scale-110 transition-transform" />
                                </>
                            )}
                        </motion.button>

                        <AnimatePresence>
                            {status === "success" && (
                                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-4 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold text-center flex items-center justify-center gap-2">
                                    <CheckCircle2 className="w-4 h-4" />
                                    Registration submitted successfully!
                                </motion.div>
                            )}
                            {status === "error" && (
                                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold text-center flex items-center justify-center gap-2">
                                    <AlertCircle className="w-4 h-4" />
                                    {message || "Submission failed. Please try again."}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>
                </div>
            </motion.div>
        </section>
    );
}
