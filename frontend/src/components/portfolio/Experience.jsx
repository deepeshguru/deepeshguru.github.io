import React from "react";
import { motion } from "framer-motion";
import {
    Building2,
    FlaskConical,
    BrainCircuit,
    Cpu,
    Network,
    Layers,
    Plane,
    MapPin,
} from "lucide-react";
import { EXPERIENCE } from "../../data/portfolioData";

const ICONS = { Building2, FlaskConical, BrainCircuit, Cpu, Network, Layers, Plane };

const Experience = () => {
    return (
        <section
            id="experience"
            data-testid="experience-section"
            className="relative py-24 md:py-32 border-t border-white/5"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-14 max-w-3xl">
                    <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-sky-400">
                        04 — Experience
                    </div>
                    <h2 className="font-display mt-3 text-3xl sm:text-4xl md:text-5xl tracking-tighter text-white">
                        Nine years. Seven teams. One throughline — shipping AI.
                    </h2>
                </div>

                <div className="relative">
                    {/* vertical line */}
                    <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                    <div className="space-y-12">
                        {EXPERIENCE.map((exp, i) => {
                            const Icon = ICONS[exp.icon] || Building2;
                            return (
                                <motion.div
                                    key={exp.company + i}
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{
                                        duration: 0.6,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    data-testid={`experience-card-${i}`}
                                    className="relative pl-16 sm:pl-20"
                                >
                                    {/* node */}
                                    <div className="absolute left-0 top-1">
                                        <div className="w-11 h-11 grid place-items-center rounded-md border border-white/10 bg-[#0a0a0a]">
                                            <Icon
                                                size={18}
                                                strokeWidth={1.6}
                                                className="text-sky-300"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                                        <div>
                                            <h3 className="font-display text-2xl text-white tracking-tight">
                                                {exp.company}
                                            </h3>
                                            <div className="mt-1 text-zinc-300 text-sm">
                                                {exp.role}
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-500 font-mono">
                                            <span className="inline-flex items-center gap-1.5">
                                                <MapPin size={11} />
                                                {exp.location}
                                            </span>
                                            <span className="text-zinc-700">·</span>
                                            <span>{exp.dates}</span>
                                        </div>
                                    </div>

                                    <ul className="mt-5 space-y-2.5">
                                        {exp.highlights.map((h, j) => (
                                            <li
                                                key={j}
                                                className="flex gap-3 text-[15px] text-zinc-400 leading-relaxed"
                                            >
                                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sky-500/70" />
                                                <span>{h}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-5 flex flex-wrap gap-1.5">
                                        {exp.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="font-mono text-[10.5px] px-2 py-0.5 rounded-sm border border-white/10 bg-white/[0.02] text-zinc-400"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
