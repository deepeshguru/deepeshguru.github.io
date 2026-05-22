import React from "react";
import { motion } from "framer-motion";
import { ABOUT_TEXT, HIGHLIGHTS, PROFILE } from "../../data/portfolioData";

const SectionHeading = ({ overline, title, subtitle }) => (
    <div className="mb-12 md:mb-16 max-w-3xl">
        <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-sky-400">
            {overline}
        </div>
        <h2 className="font-display mt-3 text-3xl sm:text-4xl md:text-5xl tracking-tighter text-white">
            {title}
        </h2>
        {subtitle && (
            <p className="mt-4 text-zinc-400 leading-relaxed">{subtitle}</p>
        )}
    </div>
);

const About = () => {
    return (
        <section
            id="about"
            data-testid="about-section"
            className="relative py-24 md:py-32 border-t border-white/5"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    overline="01 — About"
                    title="Architecting AI systems that ship & scale."
                />

                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-7"
                    >
                        <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
                            {ABOUT_TEXT}
                        </p>

                        <div className="mt-8 grid sm:grid-cols-2 gap-3">
                            <a
                                href={`mailto:${PROFILE.email}`}
                                data-testid="about-email-card"
                                className="group flex items-center justify-between p-4 border border-white/10 hover:border-sky-500/40 hover:bg-sky-500/5 transition-colors"
                            >
                                <div>
                                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                                        Email
                                    </div>
                                    <div className="text-white text-sm mt-1">
                                        {PROFILE.email}
                                    </div>
                                </div>
                                <span className="text-zinc-500 group-hover:text-sky-400 transition-colors">
                                    →
                                </span>
                            </a>
                            <a
                                href={PROFILE.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                data-testid="about-linkedin-card"
                                className="group flex items-center justify-between p-4 border border-white/10 hover:border-sky-500/40 hover:bg-sky-500/5 transition-colors"
                            >
                                <div>
                                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                                        LinkedIn
                                    </div>
                                    <div className="text-white text-sm mt-1">
                                        /in/deepesh-agrawal
                                    </div>
                                </div>
                                <span className="text-zinc-500 group-hover:text-sky-400 transition-colors">
                                    →
                                </span>
                            </a>
                        </div>
                    </motion.div>

                    <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                        {HIGHLIGHTS.map((h, i) => (
                            <motion.div
                                key={h.label}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{
                                    duration: 0.6,
                                    delay: i * 0.08,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                data-testid={`about-highlight-${i}`}
                                className="beam-card rounded-md p-5 border border-white/10 bg-[#0A0A0A] hover:bg-[#101013] transition-colors"
                            >
                                <div className="font-display text-2xl md:text-3xl text-white">
                                    {h.value}
                                </div>
                                <div className="mt-2 text-[13px] text-zinc-400 leading-snug">
                                    {h.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
