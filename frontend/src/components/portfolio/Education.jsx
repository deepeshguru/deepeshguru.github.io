import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { EDUCATION } from "../../data/portfolioData";

const Education = () => {
    return (
        <section
            id="education"
            data-testid="education-section"
            className="relative py-24 md:py-32 border-t border-white/5"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-14 max-w-3xl">
                    <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-sky-400">
                        07 — Education
                    </div>
                    <h2 className="font-display mt-3 text-3xl sm:text-4xl md:text-5xl tracking-tighter text-white">
                        Academic foundation.
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                    {EDUCATION.map((edu, i) => (
                        <motion.div
                            key={edu.degree}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{
                                duration: 0.55,
                                delay: i * 0.08,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            data-testid={`education-card-${i}`}
                            className="beam-card p-7 rounded-md border border-white/10 bg-[#0a0a0a] hover:bg-[#101013] hover:border-white/15 transition-colors"
                        >
                            <div className="w-11 h-11 grid place-items-center rounded-sm border border-white/10 bg-white/[0.02] text-sky-300">
                                <GraduationCap size={20} strokeWidth={1.6} />
                            </div>
                            <h3 className="mt-5 font-display text-xl md:text-2xl text-white tracking-tight">
                                {edu.degree}
                            </h3>
                            <div className="mt-2 text-zinc-300">{edu.school}</div>
                            <div className="mt-1 font-mono text-xs text-zinc-500">
                                {edu.dates}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
