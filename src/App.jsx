import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Terminal from './components/Terminal';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CaseStudies from './components/CaseStudies';
import Certifications from './components/Certifications';
import EducationAchievements from './components/EducationAchievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Guarantee browser opens at the very top (Hero section) on load/refresh
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  const scrollToTerminal = () => {
    const termEl = document.getElementById('terminal');
    if (termEl) {
      termEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-emerald-500/20 selection:text-emerald-900">
      <Navbar onOpenTerminal={scrollToTerminal} />
      <main className="flex-1">
        <Hero onOpenTerminal={scrollToTerminal} onOpenPGP={scrollToContact} />
        <Terminal />
        <Projects />
        <Skills />
        <CaseStudies />
        <Certifications />
        <EducationAchievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
