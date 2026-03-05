"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    // REPLACE THIS URL with your Google Apps Script Web App URL after deployment
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxIyNhLJ2mkQZxDf1fMCKG12EqFcgLvypkxzp-iawyOneGDHtYPr3ufsRjt1xMRfucHzQ/exec";

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!SCRIPT_URL || SCRIPT_URL.includes("REPLACE_THIS")) {
            setStatus("error");
            setMessage("Script URL not configured. Please check GOOGLE_SHEET_SETUP.md");
            return;
        }

        setStatus("loading");
        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            // Using URLSearchParams for Google Apps Script compatibility
            const params = new URLSearchParams();
            formData.forEach((value, key) => {
                params.append(key, value as string);
            });

            // For Google Apps Script, we use 'no-cors' due to redirect behavior
            await fetch(SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: params.toString(),
            });

            // Since it's no-cors, we assume success if no error is thrown
            setStatus("success");
            setMessage("Message sent successfully! We'll get back to you soon.");
            form.reset();

        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
            setMessage("Something went wrong. Please try again later.");
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2.5rem] bg-[#11121d]/80 backdrop-blur-2xl border border-white/5 shadow-2xl relative overflow-hidden group motion-gpu"
        >
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/30 transition-all duration-500" />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2 group">
                            <label htmlFor="name" className="text-[10px] font-black uppercase tracking-[0.2em] text-white opacity-40 ml-2 group-focus-within:text-primary transition-colors">Full Name</label>
                            <input
                                required
                                type="text"
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300"
                            />
                        </div>
                        <div className="space-y-2 group">
                            <label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.2em] text-white opacity-40 ml-2 group-focus-within:text-primary transition-colors">Email Address</label>
                            <input
                                required
                                type="email"
                                id="email"
                                name="email"
                                placeholder="john@example.com"
                                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300"
                            />
                        </div>
                    </div>

                    <div className="space-y-2 group">
                        <label htmlFor="subject" className="text-[10px] font-black uppercase tracking-[0.2em] text-white opacity-40 ml-2 group-focus-within:text-primary transition-colors">Subject</label>
                        <select
                            id="subject"
                            name="subject"
                            className="w-full px-6 py-4 rounded-2xl bg-[#0a0b14] border border-white/10 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300 appearance-none cursor-pointer"
                        >
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Registration Issue">Registration Issue</option>
                            <option value="Event Participation">Event Participation</option>
                            <option value="Sponsorship">Sponsorship</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="space-y-2 group">
                        <label htmlFor="message" className="text-[10px] font-black uppercase tracking-[0.2em] text-white opacity-40 ml-2 group-focus-within:text-primary transition-colors">Your Message</label>
                        <textarea
                            required
                            id="message"
                            name="message"
                            rows={4}
                            placeholder="How can we help you?"
                            className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300 resize-none"
                        ></textarea>
                    </div>
                </div>

                <motion.button
                    disabled={status === "loading"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 md:py-5 rounded-[2rem] bg-gradient-to-r from-secondary via-primary to-purple-600 text-white font-black text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group/btn shadow-[0_0_20px_rgba(241,90,36,0.3)] hover:shadow-[0_0_40px_rgba(241,90,36,0.5)] relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] animate-[shimmer_4s_infinite]" />
                    {status === "loading" ? (
                        <div className="flex items-center gap-2 relative z-10">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Sending...</span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-3 relative z-10">
                            <Send className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            <span>Send Message</span>
                        </div>
                    )}
                </motion.button>

                <AnimatePresence>
                    {status === "success" && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="flex items-center gap-2 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium"
                        >
                            <CheckCircle2 className="w-4 h-4" />
                            {message}
                        </motion.div>
                    )}

                    {status === "error" && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium"
                        >
                            <AlertCircle className="w-4 h-4" />
                            {message}
                        </motion.div>
                    )}
                </AnimatePresence>
            </form>
        </motion.div>
    );
}
