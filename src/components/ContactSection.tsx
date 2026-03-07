"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Linkedin, Globe } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
    return (
        <footer id="contact" className="py-24 px-6 relative z-10 bg-[#0a0b14] mx-4 rounded-[3rem] mt-24 border border-white/5 motion-gpu">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                                <Globe className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-[10px] font-black tracking-[0.4em] text-primary uppercase glow-primary transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(241,90,36,0.6)] cursor-default">Sangrila 2k26</span>
                        </div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30, letterSpacing: "-0.05em" }}
                            whileInView={{ opacity: 1, y: 0, letterSpacing: "0em" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                        >
                            GET IN TOUCH <br />
                            <span className="text-primary italic">CULTURAL FEST</span>
                        </motion.h2>
                        <p className="text-muted-foreground text-lg font-medium leading-relaxed">
                            Have questions? Reach out to our team or visit us at the university campus.
                        </p>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.15 } }
                        }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
                    >
                        {/* Email Card */}
                        <motion.div
                            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                            whileHover={{ y: -8 }}
                            className="group bg-[#11121d] p-6 rounded-[2rem] border border-white/5 hover:border-primary/40 transition-all duration-300 flex flex-col items-center text-center space-y-4"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary transition-colors duration-300">
                                <Mail className="w-6 h-6 text-primary group-hover:text-white" />
                            </div>
                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white opacity-40 mb-1">Email Us</h4>
                                <p className="text-white font-bold text-sm">sangrila2k26@gmail.com</p>
                            </div>
                        </motion.div>

                        {/* Phone Card */}
                        <motion.div
                            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                            whileHover={{ y: -8 }}
                            className="group bg-[#11121d] p-6 rounded-[2rem] border border-white/5 hover:border-primary/40 transition-all duration-300 flex flex-col items-center text-center space-y-4"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary transition-colors duration-300">
                                <Phone className="w-6 h-6 text-primary group-hover:text-white" />
                            </div>
                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white opacity-40 mb-1">Call Us</h4>
                                <p className="text-white font-bold text-sm">+91 8168906211</p>
                            </div>
                        </motion.div>

                        {/* Visit Card */}
                        <motion.div
                            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                            whileHover={{ y: -8 }}
                            className="group bg-[#11121d]/80 backdrop-blur-2xl p-6 rounded-[2rem] border border-white/5 hover:border-primary/40 transition-all duration-300 flex flex-col items-center text-center space-y-4 sm:col-span-2"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary transition-colors duration-300">
                                <MapPin className="w-6 h-6 text-primary group-hover:text-white" />
                            </div>
                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white opacity-40 mb-1">Visit Us</h4>
                                <p className="text-white font-bold text-sm">Geeta University Campus, Panipat, Haryana</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <div className="flex gap-4 pt-4">
                        <motion.a whileHover={{ y: -5, backgroundColor: "var(--primary)", borderColor: "transparent" }} href="#" className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl text-white/50 hover:text-white transition-all duration-300">
                            <Instagram className="w-5 h-5" />
                        </motion.a>
                        <motion.a whileHover={{ y: -5, backgroundColor: "var(--primary)", borderColor: "transparent" }} href="#" className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl text-white/50 hover:text-white transition-all duration-300">
                            <Linkedin className="w-5 h-5" />
                        </motion.a>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <ContactForm />
            </div>

            {/* Map Section - Moved below for better UX */}
            <div className="max-w-7xl mx-auto mt-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="h-[400px] w-full bg-white rounded-[3rem] overflow-hidden border border-white/5 relative group shadow-2xl"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.490740523293!2d76.938814775437!3d29.311910975298836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dd0f1a0000001%3A0xe677553b47833668!2sGeeta%20University!5e0!3m2!1sen!2sin!4v1707641234567!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                        className="group-hover:filter-none transition-all duration-1000"
                    ></iframe>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-4 group/footer">
                    <span className="text-xl font-black text-white tracking-tighter uppercase leading-none transition-all duration-300 group-hover/footer:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] group-hover/footer:scale-[1.03] cursor-default">SANGRILA <span className="text-primary italic transition-all duration-300 group-hover/footer:drop-shadow-[0_0_15px_rgba(241,90,36,0.8)]">2K26</span></span>
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                    © 2026 GEETA UNIVERSITY CULTURAL FEST. ALL RIGHTS RESERVED.
                </p>
                <div className="flex gap-8">
                    <Link href="#" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
                    <Link href="#" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
