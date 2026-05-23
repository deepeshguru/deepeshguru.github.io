import React from "react";
import "@/App.css";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Expertise from "@/components/portfolio/Expertise";
import CurrentRole from "@/components/portfolio/CurrentRole";
import Experience from "@/components/portfolio/Experience";
import CaseStudies from "@/components/portfolio/CaseStudies";
import Skills from "@/components/portfolio/Skills";
import Education from "@/components/portfolio/Education";
import Certifications from "@/components/portfolio/Certifications";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Portfolio = () => {
    return (
        <div className="App grain relative bg-[#050505] min-h-screen text-white selection:bg-sky-500/30">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Expertise />
                <CurrentRole />
                <Experience />
                <CaseStudies />
                <Skills />
                <Education />
                <Certifications />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Portfolio />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
