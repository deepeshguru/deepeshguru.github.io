import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, PROFILE } from "../../data/portfolioData";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNavClick = (id) => {
        setOpen(false);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <header
            data-testid="site-navbar"
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-black/60 backdrop-blur-2xl border-b border-white/5"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-16 flex items-center justify-between">
                    <button
                        onClick={() => handleNavClick("home")}
                        data-testid="nav-brand"
                        className="group flex items-center gap-2.5"
                    >
                        <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-sm bg-sky-500/10 border border-sky-500/30">
                            <span className="font-mono text-[11px] text-sky-300">
                                DA
                            </span>
                        </span>
                        <span className="font-display text-base font-medium tracking-tight text-white">
                            Deepesh Agrawal
                        </span>
                    </button>

                    <nav className="hidden lg:flex items-center gap-7">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.id}
                                data-testid={`nav-link-${item.id}`}
                                onClick={() => handleNavClick(item.id)}
                                className="text-sm text-zinc-400 hover:text-white transition-colors font-medium"
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        <a
                            href={PROFILE.resumeUrl}
                            download
                            data-testid="nav-resume-btn"
                            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors"
                        >
                            Resume
                        </a>
                        <button
                            data-testid="nav-mobile-toggle"
                            aria-label="Toggle menu"
                            className="lg:hidden p-2 text-white"
                            onClick={() => setOpen((v) => !v)}
                        >
                            {open ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile drawer */}
            {open && (
                <div
                    data-testid="nav-mobile-panel"
                    className="lg:hidden border-t border-white/5 bg-black/95 backdrop-blur-xl"
                >
                    <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 gap-2">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.id}
                                data-testid={`nav-mobile-link-${item.id}`}
                                onClick={() => handleNavClick(item.id)}
                                className="text-left text-sm text-zinc-300 hover:text-white py-2 px-3 rounded-sm hover:bg-white/5"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
