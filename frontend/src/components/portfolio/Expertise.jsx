import React from "react";
import { motion } from "framer-motion";
import {
    Bot,
    Database,
    Cpu,
    AudioLines,
    Eye,
    GitBranch,
    Languages,
    Gauge,
} from "lucide-react";
import { EXPERTISE } from "../../data/portfolioData";

const ICONS = { Bot, Database, Cpu, AudioLines, Eye, GitBranch, Languages, Gauge };

const Expertise = () => {
    return (
        <section
            id="expertise"
            data-testid="expertise-section"
            className="relative py-24 md:py-32 border-t border-white/5"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 md:mb-16 max-w-3xl">
                    <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-sky-400">
                        02 — Expertise
                    </div>
                    <h2 className="font-display mt-3 text-3xl sm:text-4xl md:text-5xl tracking-tighter text-white">
                        Production-grade across the AI stack.
                    </h2>
                    <p className="mt-4 text-zinc-400 leading-relaxed">
                        Specializations spanning agentic systems, retrieval, multimodal
                        inference, MLOps, and low-level model optimization.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {EXPERTISE.map((e, i) => {
                        const Icon = ICONS[e.icon] || Bot;
                        return (
                            <motion.div
                                key={e.title}
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{
                                    duration: 0.55,
                                    delay: (i % 4) * 0.06,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                data-testid={`expertise-card-${i}`}
                                className="group relative p-6 lg:p-7 border border-white/5 -ml-px -mt-px hover:bg-[#0d0d10] hover:border-white/15 transition-colors"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="w-10 h-10 grid place-items-center rounded-sm border border-white/10 bg-white/[0.02] text-sky-300 group-hover:border-sky-500/40 group-hover:text-sky-200 transition-colors">
                                        <Icon size={18} strokeWidth={1.6} />
                                    </div>
                                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                </div>
                                <h3 className="mt-6 text-white text-lg font-medium tracking-tight">
                                    {e.title}
                                </h3>
                                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                                    {e.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
