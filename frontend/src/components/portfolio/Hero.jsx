import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { PROFILE } from "../../data/portfolioData";
import ParticlesBackground from "./ParticlesBackground";

const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const Hero = () => {
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            data-testid="hero-section"
            className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
        >
            {/* Mesh gradient */}
            <div className="mesh-bg" aria-hidden="true" />
            {/* Particles */}
            <div className="absolute inset-0">
                <ParticlesBackground />
            </div>
            {/* Vignette */}
            <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
                style={{
                    background:
                        "radial-gradient(ellipse at center, transparent 0%, #050505 85%)",
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-8">
                        {/* Open to roles badge */}
                        <motion.div {...fade(0)}>
                            <div
                                data-testid="hero-open-to-roles-badge"
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-400/30 bg-sky-400/5 backdrop-blur-sm"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75 glow-dot"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-300"></span>
                                </span>
                                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-sky-200">
                                    {PROFILE.openToRoles}
                                </span>
                            </div>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            {...fade(0.08)}
                            className="font-display mt-6 text-5xl sm:text-6xl lg:text-7xl font-medium text-white tracking-tighter leading-[0.95]"
                            data-testid="hero-name"
                        >
                            Deepesh<br />
                            <span className="text-zinc-400">Agrawal.</span>
                        </motion.h1>

                        {/* Title */}
                        <motion.p
                            {...fade(0.16)}
                            className="mt-6 max-w-2xl font-mono text-sm sm:text-base text-sky-300 uppercase tracking-[0.18em]"
                            data-testid="hero-title"
                        >
                            Senior AI Engineer &nbsp;/&nbsp; AI Architect<br className="hidden sm:block" />
                            <span className="text-zinc-400 normal-case tracking-wide font-sans">
                                GenAI &middot; Agentic AI &middot; Multimodal &middot; MLOps
                            </span>
                        </motion.p>

                        {/* Tagline */}
                        <motion.p
                            {...fade(0.24)}
                            className="mt-6 max-w-2xl text-lg sm:text-xl text-zinc-300 leading-relaxed"
                            data-testid="hero-tagline"
                        >
                            {PROFILE.tagline}
                        </motion.p>

                        {/* Location */}
                        <motion.div
                            {...fade(0.32)}
                            className="mt-5 flex items-center gap-2 text-zinc-500 text-sm"
                            data-testid="hero-locations"
                        >
                            <MapPin size={14} className="text-sky-400" />
                            <span>{PROFILE.locations.join(" / ")}</span>
                        </motion.div>

                        {/* CTAs */}
                        <motion.div
                            {...fade(0.4)}
                            className="mt-10 flex flex-wrap items-center gap-3"
                        >
                            <button
                                onClick={() => scrollTo("experience")}
                                data-testid="hero-cta-experience"
                                className="group inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors"
                            >
                                View Experience
                                <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                            </button>
                            <a
                                href={PROFILE.resumeUrl}
                                download
                                data-testid="hero-cta-resume"
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-sm border border-white/15 text-white text-sm font-medium hover:border-white/40 hover:bg-white/5 transition-colors"
                            >
                                <Download size={14} />
                                Download Resume
                            </a>
                            <button
                                onClick={() => scrollTo("contact")}
                                data-testid="hero-cta-contact"
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-sm border border-white/15 text-white text-sm font-medium hover:border-white/40 hover:bg-white/5 transition-colors"
                            >
                                <Mail size={14} />
                                Contact Me
                            </button>
                        </motion.div>

                        {/* Social links */}
                        <motion.div {...fade(0.48)} className="mt-8 flex items-center gap-5 text-zinc-400">
                            <a
                                href={PROFILE.github}
                                target="_blank"
                                rel="noreferrer"
                                data-testid="hero-link-github"
                                className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors"
                            >
                                <Github size={16} /> GitHub
                            </a>
                            <span className="text-zinc-700">/</span>
                            <a
                                href={PROFILE.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                data-testid="hero-link-linkedin"
                                className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors"
                            >
                                <Linkedin size={16} /> LinkedIn
                            </a>
                            <span className="text-zinc-700">/</span>
                            <a
                                href={`mailto:${PROFILE.email}`}
                                data-testid="hero-link-email"
                                className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors"
                            >
                                <Mail size={16} /> Email
                            </a>
                        </motion.div>
                    </div>

                    {/* Right column — profile photo + meta card */}
                    <motion.div
                        {...fade(0.5)}
                        className="lg:col-span-4 flex justify-center lg:justify-end"
                    >
                        <div className="relative w-full max-w-sm">
                            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-sky-500/20 via-transparent to-indigo-500/10 blur-2xl" aria-hidden="true" />
                            <div className="relative beam-card rounded-lg border border-white/10 bg-[#0A0A0A] overflow-hidden">
                                <div className="aspect-[4/5] overflow-hidden">
                                    <img
                                        src={PROFILE.photoUrl}
                                        alt="Deepesh Agrawal"
                                        data-testid="hero-profile-photo"
                                        className="w-full h-full object-cover grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                                <div className="p-4 border-t border-white/5 flex items-center justify-between">
                                    <div>
                                        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-sky-400">
                                            Currently @
                                        </div>
                                        <div className="text-white text-sm font-medium mt-0.5">
                                            Presight AI
                                        </div>
                                    </div>
                                    <div className="font-mono text-[10px] text-zinc-500">
                                        9+ yrs
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll cue */}
                <motion.div
                    {...fade(0.6)}
                    className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center text-zinc-500"
                >
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
                    <div className="mt-2 h-10 w-px bg-gradient-to-b from-zinc-500 to-transparent" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
