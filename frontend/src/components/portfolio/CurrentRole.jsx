import React from "react";
import { motion } from "framer-motion";
import { Sparkles, MapPin, Calendar } from "lucide-react";
import { CURRENT_ROLE } from "../../data/portfolioData";

const CurrentRole = () => {
    const r = CURRENT_ROLE;
    return (
        <section
            id="current-role"
            data-testid="current-role-section"
            className="relative py-24 md:py-32 border-t border-white/5"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10 max-w-3xl">
                    <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-sky-400">
                        03 — Current Role
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="relative overflow-hidden rounded-lg border border-sky-500/20 bg-gradient-to-br from-[#0a1220] via-[#070a14] to-[#040a14]"
                >
                    {/* Glowing edge */}
                    <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-sky-400/80 to-transparent" />
                    <div className="absolute -bottom-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

                    <div className="relative p-8 md:p-12 grid lg:grid-cols-12 gap-10">
                        <div className="lg:col-span-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-400/30 bg-sky-400/5">
                                <Sparkles size={12} className="text-sky-300" />
                                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-sky-200">
                                    Currently Building
                                </span>
                            </div>
                            <h3 className="font-display mt-5 text-3xl md:text-4xl tracking-tighter text-white">
                                {r.company}
                            </h3>
                            <div className="mt-3 text-zinc-300 text-base">
                                {r.role}
                            </div>
                            <div className="mt-4 space-y-1.5 text-sm text-zinc-400">
                                <div className="flex items-center gap-2">
                                    <MapPin size={13} className="text-sky-400" />
                                    {r.location}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar size={13} className="text-sky-400" />
                                    {r.dates}
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-8">
                            <ul className="space-y-5">
                                {r.bullets.map((b, i) => (
                                    <li
                                        key={i}
                                        data-testid={`current-role-bullet-${i}`}
                                        className="flex gap-4"
                                    >
                                        <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                                        <p className="text-zinc-300 leading-relaxed">
                                            {b}
                                        </p>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 pt-6 border-t border-white/5">
                                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-3">
                                    Stack
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {r.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="font-mono text-[11px] px-2.5 py-1 rounded-sm border border-white/10 bg-white/[0.03] text-zinc-300"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CurrentRole;
