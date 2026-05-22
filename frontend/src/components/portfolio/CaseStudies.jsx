import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CASE_STUDIES } from "../../data/portfolioData";

const CaseStudies = () => {
    return (
        <section
            id="projects"
            data-testid="case-studies-section"
            className="relative py-24 md:py-32 border-t border-white/5"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-14 max-w-3xl">
                    <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-sky-400">
                        05 — Projects
                    </div>
                    <h2 className="font-display mt-3 text-3xl sm:text-4xl md:text-5xl tracking-tighter text-white">
                        Selected case studies.
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-5">
                    {CASE_STUDIES.map((cs, i) => {
                        const isWide = i === 0 || i === 3;
                        return (
                            <motion.div
                                key={cs.number}
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{
                                    duration: 0.6,
                                    delay: (i % 3) * 0.06,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                data-testid={`case-study-${i}`}
                                className={`beam-card group relative overflow-hidden p-7 md:p-9 rounded-md border border-white/10 bg-[#0a0a0a] hover:border-white/20 transition-colors ${
                                    isWide ? "lg:col-span-7" : "lg:col-span-5"
                                }`}
                            >
                                <div className="flex items-start justify-between">
                                    <span className="font-mono text-[11px] text-sky-400 tracking-[0.2em]">
                                        / {cs.number}
                                    </span>
                                    <ArrowUpRight
                                        className="text-zinc-500 group-hover:text-sky-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                                        size={18}
                                    />
                                </div>

                                <h3 className="font-display mt-6 text-2xl md:text-3xl text-white tracking-tight leading-tight">
                                    {cs.title}
                                </h3>
                                <p className="mt-4 text-zinc-400 leading-relaxed max-w-2xl">
                                    {cs.description}
                                </p>

                                <div className="mt-6 pt-6 border-t border-white/5">
                                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-3">
                                        {cs.accent}
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {cs.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="font-mono text-[10.5px] px-2 py-0.5 rounded-sm border border-white/10 bg-white/[0.02] text-zinc-400"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
