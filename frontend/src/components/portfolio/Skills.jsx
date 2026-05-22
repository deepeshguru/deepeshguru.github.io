import React from "react";
import { motion } from "framer-motion";
import { SKILLS } from "../../data/portfolioData";

const Skills = () => {
    return (
        <section
            id="skills"
            data-testid="skills-section"
            className="relative py-24 md:py-32 border-t border-white/5"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-14 max-w-3xl">
                    <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-sky-400">
                        06 — Skills
                    </div>
                    <h2 className="font-display mt-3 text-3xl sm:text-4xl md:text-5xl tracking-tighter text-white">
                        The toolkit.
                    </h2>
                </div>

                <div className="space-y-10">
                    {SKILLS.map((g, idx) => (
                        <motion.div
                            key={g.group}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{
                                duration: 0.55,
                                delay: idx * 0.05,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            data-testid={`skills-group-${idx}`}
                            className="grid lg:grid-cols-12 gap-6 items-start py-6 border-t border-white/5"
                        >
                            <div className="lg:col-span-3">
                                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-sky-400">
                                    {g.group}
                                </div>
                            </div>
                            <div className="lg:col-span-9 flex flex-wrap gap-2">
                                {g.items.map((item) => (
                                    <span
                                        key={item}
                                        className="font-mono text-[12px] px-3 py-1.5 rounded-sm border border-white/10 bg-white/[0.02] text-zinc-300 hover:border-sky-500/50 hover:bg-sky-500/10 hover:text-sky-100 transition-colors"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
