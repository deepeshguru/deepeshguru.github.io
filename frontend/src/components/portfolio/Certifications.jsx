import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { CERTIFICATIONS } from "../../data/portfolioData";

const Certifications = () => {
    return (
        <section
            id="certifications"
            data-testid="certifications-section"
            className="relative py-24 md:py-32 border-t border-white/5"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-14 max-w-3xl">
                    <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-sky-400">
                        08 — Certifications
                    </div>
                    <h2 className="font-display mt-3 text-3xl sm:text-4xl md:text-5xl tracking-tighter text-white">
                        Credentials & continuous learning.
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {CERTIFICATIONS.map((cert, i) => {
                        const [title, issuer] = cert.split(" — ");
                        return (
                            <motion.div
                                key={cert}
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{
                                    duration: 0.5,
                                    delay: (i % 3) * 0.06,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                data-testid={`certification-card-${i}`}
                                className="p-5 rounded-sm border border-white/10 bg-[#0a0a0a] hover:bg-[#101013] hover:border-sky-500/30 transition-colors"
                            >
                                <BadgeCheck
                                    size={16}
                                    strokeWidth={1.6}
                                    className="text-sky-400"
                                />
                                <div className="mt-4 text-white text-[15px] leading-snug font-medium">
                                    {title}
                                </div>
                                {issuer && (
                                    <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                                        {issuer}
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
