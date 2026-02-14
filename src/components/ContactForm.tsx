"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

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
                setMessage("Message sent successfully! We'll get back to you soon.");
                (e.target as HTMLFormElement).reset();
            } else {
                throw new Error("Failed to send message");
            }
        } catch {
            setStatus("error");
            setMessage("Something went wrong. Please try again later.");
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2.5rem] bg-[#11121d]/80 backdrop-blur-2xl border border-white/5 shadow-2xl relative overflow-hidden group"
        >
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/30 transition-all duration-500" />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-[10px] font-black uppercase tracking-[0.2em] text-white opacity-40 ml-2">Full Name</label>
                            <input
                                required
                                type="text"
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all duration-300"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.2em] text-white opacity-40 ml-2">Email Address</label>
                            <input
                                required
                                type="email"
                                id="email"
                                name="email"
                                placeholder="john@example.com"
                                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all duration-300"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-[10px] font-black uppercase tracking-[0.2em] text-white opacity-40 ml-2">Subject</label>
                        <select
                            id="subject"
                            name="subject"
                            className="w-full px-6 py-4 rounded-2xl bg-[#0a0b14] border border-white/10 text-white focus:outline-none focus:border-primary/50 transition-all duration-300 appearance-none"
                        >
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Registration Issue">Registration Issue</option>
                            <option value="Event Participation">Event Participation</option>
                            <option value="Sponsorship">Sponsorship</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-[10px] font-black uppercase tracking-[0.2em] text-white opacity-40 ml-2">Your Message</label>
                        <textarea
                            required
                            id="message"
                            name="message"
                            rows={4}
                            placeholder="How can we help you?"
                            className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all duration-300 resize-none"
                        ></textarea>
                    </div>
                </div>

                <button
                    disabled={status === "loading"}
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-primary text-white font-black text-sm uppercase tracking-[0.2em] hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group/btn shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
                >
                    {status === "loading" ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Sending...</span>
                        </>
                    ) : (
                        <>
                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            <span>Send Message</span>
                        </>
                    )}
                </button>

                {status === "success" && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
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
                        className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium"
                    >
                        <AlertCircle className="w-4 h-4" />
                        {message}
                    </motion.div>
                )}
            </form>
        </motion.div>
    );
}
