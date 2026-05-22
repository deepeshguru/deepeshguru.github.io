import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2, CheckCircle2 } from "lucide-react";
import { Toaster, toast } from "sonner";
import { PROFILE } from "../../data/portfolioData";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle | sending | sent

    const handle = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

    const submit = async (e) => {
        e.preventDefault();
        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            toast.error("Please fill in all fields.");
            return;
        }
        setStatus("sending");
        try {
            await axios.post(`${API}/contact`, form);
            setStatus("sent");
            toast.success("Message sent. I'll get back to you shortly.");
            setForm({ name: "", email: "", message: "" });
            setTimeout(() => setStatus("idle"), 4000);
        } catch (err) {
            setStatus("idle");
            const detail =
                err?.response?.data?.detail ||
                "Could not send your message. Please try again.";
            toast.error(typeof detail === "string" ? detail : "Submit failed.");
        }
    };

    return (
        <section
            id="contact"
            data-testid="contact-section"
            className="relative py-24 md:py-32 border-t border-white/5"
        >
            <Toaster theme="dark" position="bottom-right" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-14 max-w-3xl">
                    <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-sky-400">
                        09 — Contact
                    </div>
                    <h2 className="font-display mt-3 text-4xl sm:text-5xl md:text-6xl tracking-tighter text-white">
                        Let's build the next AI system.
                    </h2>
                    <p className="mt-4 text-zinc-400 leading-relaxed">
                        Open to senior AI engineering, AI architect, and GenAI platform
                        roles. Best reached via email or the form below.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                    <motion.form
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        onSubmit={submit}
                        data-testid="contact-form"
                        className="lg:col-span-7 space-y-8"
                    >
                        <div>
                            <label
                                htmlFor="contact-name"
                                className="block font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500 mb-2"
                            >
                                Name
                            </label>
                            <input
                                id="contact-name"
                                type="text"
                                value={form.name}
                                onChange={handle("name")}
                                data-testid="contact-input-name"
                                placeholder="Your full name"
                                className="w-full bg-transparent border-b border-white/15 pb-3 focus:outline-none focus:border-sky-400 text-white text-lg placeholder:text-zinc-700 transition-colors"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="contact-email"
                                className="block font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500 mb-2"
                            >
                                Email
                            </label>
                            <input
                                id="contact-email"
                                type="email"
                                value={form.email}
                                onChange={handle("email")}
                                data-testid="contact-input-email"
                                placeholder="you@company.com"
                                className="w-full bg-transparent border-b border-white/15 pb-3 focus:outline-none focus:border-sky-400 text-white text-lg placeholder:text-zinc-700 transition-colors"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="contact-message"
                                className="block font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500 mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                id="contact-message"
                                rows={4}
                                value={form.message}
                                onChange={handle("message")}
                                data-testid="contact-input-message"
                                placeholder="Briefly describe your project, role, or question…"
                                className="w-full bg-transparent border-b border-white/15 pb-3 focus:outline-none focus:border-sky-400 text-white text-lg placeholder:text-zinc-700 transition-colors resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            data-testid="contact-submit-btn"
                            className="group inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {status === "sending" && (
                                <>
                                    <Loader2 size={16} className="animate-spin" />
                                    Sending…
                                </>
                            )}
                            {status === "sent" && (
                                <>
                                    <CheckCircle2 size={16} />
                                    Sent
                                </>
                            )}
                            {status === "idle" && (
                                <>
                                    Send Message
                                    <Send
                                        size={14}
                                        className="transition-transform group-hover:translate-x-0.5"
                                    />
                                </>
                            )}
                        </button>
                    </motion.form>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-5 space-y-6"
                    >
                        <a
                            href={`mailto:${PROFILE.email}`}
                            data-testid="contact-info-email"
                            className="group block p-5 rounded-sm border border-white/10 hover:border-sky-400/40 hover:bg-sky-500/5 transition-colors"
                        >
                            <div className="flex items-start gap-4">
                                <Mail className="text-sky-400 shrink-0 mt-1" size={18} />
                                <div>
                                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                                        Email
                                    </div>
                                    <div className="text-white mt-1">{PROFILE.email}</div>
                                </div>
                            </div>
                        </a>

                        <div
                            data-testid="contact-info-phone"
                            className="p-5 rounded-sm border border-white/10"
                        >
                            <div className="flex items-start gap-4">
                                <Phone className="text-sky-400 shrink-0 mt-1" size={18} />
                                <div>
                                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                                        Phone
                                    </div>
                                    {PROFILE.phones.map((p) => (
                                        <a
                                            key={p}
                                            href={`tel:${p.replace(/[^+\d]/g, "")}`}
                                            className="block text-white mt-1 hover:text-sky-300 transition-colors"
                                        >
                                            {p}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div
                            data-testid="contact-info-location"
                            className="p-5 rounded-sm border border-white/10"
                        >
                            <div className="flex items-start gap-4">
                                <MapPin className="text-sky-400 shrink-0 mt-1" size={18} />
                                <div>
                                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                                        Location
                                    </div>
                                    <div className="text-white mt-1">
                                        {PROFILE.locations.join(" / ")}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <a
                                href={PROFILE.github}
                                target="_blank"
                                rel="noreferrer"
                                data-testid="contact-link-github"
                                className="flex-1 group inline-flex items-center justify-center gap-2 px-4 py-3 rounded-sm border border-white/10 text-white hover:border-white/30 hover:bg-white/5 transition-colors"
                            >
                                <Github size={16} />
                                <span className="text-sm">GitHub</span>
                            </a>
                            <a
                                href={PROFILE.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                data-testid="contact-link-linkedin"
                                className="flex-1 group inline-flex items-center justify-center gap-2 px-4 py-3 rounded-sm border border-white/10 text-white hover:border-white/30 hover:bg-white/5 transition-colors"
                            >
                                <Linkedin size={16} />
                                <span className="text-sm">LinkedIn</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
