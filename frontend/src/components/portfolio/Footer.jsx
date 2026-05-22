import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "../../data/portfolioData";

const Footer = () => {
    return (
        <footer
            data-testid="site-footer"
            className="relative border-t border-white/5 py-10"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                        <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-sm bg-sky-500/10 border border-sky-500/30">
                            <span className="font-mono text-[10px] text-sky-300">DA</span>
                        </span>
                        <div className="text-sm text-zinc-400">
                            <span className="text-white font-medium">Deepesh Agrawal</span>
                            <span className="mx-2 text-zinc-700">·</span>
                            <span>© {new Date().getFullYear()}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-zinc-500">
                        <a
                            href={PROFILE.github}
                            target="_blank"
                            rel="noreferrer"
                            data-testid="footer-link-github"
                            className="hover:text-white transition-colors"
                            aria-label="GitHub"
                        >
                            <Github size={16} />
                        </a>
                        <a
                            href={PROFILE.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            data-testid="footer-link-linkedin"
                            className="hover:text-white transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={16} />
                        </a>
                        <a
                            href={`mailto:${PROFILE.email}`}
                            data-testid="footer-link-email"
                            className="hover:text-white transition-colors"
                            aria-label="Email"
                        >
                            <Mail size={16} />
                        </a>
                    </div>

                    <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-600">
                        Built with care · Abu Dhabi / Bengaluru
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
