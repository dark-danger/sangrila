"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, School, Hash, Trophy, CreditCard, Send, CheckCircle2, AlertCircle, Loader2, QrCode, Upload } from "lucide-react";

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
        <section id="register" className="py-24 px-6 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto p-8 md:p-12 rounded-[3rem] bg-[#11121d]/80 backdrop-blur-2xl border border-white/5 shadow-2xl relative overflow-hidden"
            >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px] -ml-32 -mb-32" />

                <div className="relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase mb-4">
                            SANGRILA 2K26 - <span className="text-primary italic">EXTERNAL REGISTRATION</span>
                        </h2>
                        <div className="space-y-6 text-muted-foreground font-medium max-w-3xl mx-auto text-sm leading-relaxed">
                            <div className="space-y-4">
                                <p className="text-white text-base font-bold">Welcome to Sangrila 2K26, the ultimate celebration of talent, culture, and entertainment! 🎭✨</p>
                                <p>This form is exclusively for external participants who wish to be a part of Sangrila 2K26. Whether you&apos;re here to showcase your skills, compete in thrilling events, or simply experience an unforgettable evening featuring <span className="text-primary font-black uppercase tracking-widest">Star Night</span>, this is your gateway to an extraordinary fest!</p>
                            </div>

                            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 py-6 border-y border-white/5 my-8">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(241,90,36,0.5)]" />
                                    <span>Date: <span className="text-white">13-14 March, 2026</span></span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(253,184,19,0.5)]" />
                                    <span>Venue: <span className="text-white">Geeta University</span></span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-white/20" />
                                    <span>Contact: <span className="text-primary">+91 8168906211</span></span>
                                </div>
                            </div>

                            <div className="text-left bg-white/5 p-6 rounded-3xl border border-white/10 space-y-3">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4">Registration Guidelines:</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <p className="flex items-start gap-3 flex-1"><span className="text-primary mt-1">•</span> Fill in the required details accurately.</p>
                                    <p className="flex items-start gap-3"><span className="text-primary mt-1">•</span> Complete payment via UPI/QR Code & enter Transaction ID (TID).</p>
                                    <p className="flex items-start gap-3"><span className="text-primary mt-1">•</span> Upload a screenshot of the payment for confirmation.</p>
                                    <p className="flex items-start gap-3"><span className="text-primary mt-1">•</span> Information must match your payment details.</p>
                                    <p className="flex items-start gap-3 md:col-span-2"><span className="text-primary mt-1">•</span> Multiple entries allowed for different event categories.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Personal Info */}
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-2">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
                                        <input required name="name" type="text" placeholder="Your Name" className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-2">Email</label>
                                    <div className="relative">
                                        <Send className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
                                        <input required name="email" type="email" placeholder="email@example.com" className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all" />
                                    </div>
                                </div>
                            </div>

                            {/* Academic Info */}
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-2">University/College</label>
                                    <div className="relative">
                                        <School className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
                                        <input required name="college" type="text" placeholder="College Name" className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-2">Roll Number / ID</label>
                                    <div className="relative">
                                        <Hash className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
                                        <input required name="rollno" type="text" placeholder="Ex: 2024GU001" className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Academic & Event Selection */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-2">Academic Year</label>
                                <div className="relative">
                                    <School className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
                                    <select required name="year" defaultValue="" className="w-full pl-14 pr-12 py-4 rounded-2xl bg-[#0a0b14] border border-white/10 text-white focus:outline-none focus:border-primary/50 transition-all appearance-none cursor-pointer">
                                        <option value="" disabled>Select Your Year</option>
                                        <option value="1st Year">1st Year</option>
                                        <option value="2nd Year">2nd Year</option>
                                        <option value="3rd Year">3rd Year</option>
                                        <option value="4th Year">4th Year</option>
                                        <option value="5th Year">5th Year</option>
                                        <option value="Post Graduate">Post Graduate</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-2">Select Event</label>
                                <div className="relative">
                                    <Trophy className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
                                    <select
                                        required
                                        name="event"
                                        defaultValue=""
                                        onChange={(e) => {
                                            const selectedEvent = events.find(event => event.name === e.target.value);
                                            setIsTeamEvent(selectedEvent?.participants?.includes("-") || (selectedEvent?.participants ? parseInt(selectedEvent.participants) > 1 : false));
                                        }}
                                        className="w-full pl-14 pr-12 py-4 rounded-2xl bg-[#0a0b14] border border-white/10 text-white focus:outline-none focus:border-primary/50 transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled>Select an Event</option>
                                        {events.map(e => <option key={e.id} value={e.name}>{e.name} ({e.fee})</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Dynamic Team Members Section */}
                        <AnimatePresence>
                            {isTeamEvent && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="space-y-6 pt-8 border-t border-white/5"
                                >
                                    <div className="p-6 rounded-[2rem] bg-primary/5 border border-primary/20">
                                        <h3 className="text-xl font-black text-white uppercase mb-4">Add Team Members</h3>
                                        <p className="text-sm text-white/60 mb-6 italic">
                                            If you&apos;re participating individually, skip the team member section.
                                            You can add up to 15 members including the team leader.
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {[...Array(14)].map((_, i) => (
                                                <div key={i} className="space-y-2">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-2">Member {i + 2}</label>
                                                    <input
                                                        name={`member_${i + 2}`}
                                                        type="text"
                                                        placeholder="Name & Roll No"
                                                        className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-primary/50 transition-all"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Payment Section (Matching Screenshot) */}
                        <div className="space-y-8 pt-8 border-t border-white/5">
                            <div className="text-center space-y-4">
                                <h3 className="text-xl font-black text-white uppercase">PAYMENT QR CODE</h3>
                                <div className="max-w-[280px] mx-auto p-4 bg-white rounded-3xl shadow-2xl">
                                    {/* Using a placeholder that looks like the screenshot QR */}
                                    <div className="aspect-square bg-white rounded-2xl flex items-center justify-center relative overflow-hidden group">
                                        <img
                                            src="/qr-code.png"
                                            alt="Payment QR Code"
                                            className="w-full h-full object-contain"
                                            onError={(e) => {
                                                // If image is missing, show a helpful message
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.parentElement!.innerHTML = '<div class="text-center p-4 text-gray-400 text-[10px] font-bold uppercase">Insert "qr-code.png" into public folder</div>';
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/60">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    Scan to Pay: <span className="text-white font-black">geetauniversity.62417837@hdfcbank</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-2">Payment Screenshot</label>
                                    <div className="relative group">
                                        <Upload className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50 group-hover:text-primary transition-colors" />
                                        <input
                                            name="screenshot"
                                            type="file"
                                            accept="image/*"
                                            className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white file:hidden cursor-pointer focus:outline-none focus:border-primary/50 transition-all"
                                        />
                                        <div className="absolute left-14 top-1/2 -translate-y-1/2 text-white/20 text-sm pointer-events-none group-hover:text-white/40 transition-colors">
                                            Upload Screenshot (PNG/JPG)
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-2">Transaction ID (TID) *</label>
                                    <div className="relative">
                                        <CreditCard className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
                                        <input required name="transactionId" type="text" placeholder="Enter UTR / TID" className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            disabled={status === "loading"}
                            type="submit"
                            className="w-full py-5 rounded-[2rem] bg-gradient-to-r from-[#fdb813] via-[#f15a24] to-[#8b5cf6] text-white font-black text-sm uppercase tracking-[0.3em] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-500 flex items-center justify-center gap-3 disabled:opacity-50 group/btn"
                        >
                            {status === "loading" ? (
                                <Loader2 className="w-6 h-6 animate-spin" />
                            ) : (
                                <>
                                    <span>Register & Join Fest</span>
                                    <CheckCircle2 className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                </>
                            )}
                        </button>

                        <AnimatePresence>
                            {status === "success" && (
                                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="p-4 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-bold flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5" />
                                    {message}
                                </motion.div>
                            )}
                            {status === "error" && (
                                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-bold flex items-center gap-3">
                                    <AlertCircle className="w-5 h-5" />
                                    {message}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>
                </div>
            </motion.div>
        </section>
    );
}
