import React, { useState, useEffect } from 'react';
import { Shield, Terminal as TerminalIcon, Menu, X, Lock, Activity } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import yashProfileImg from '../assets/yash-profile.jpg';

export default function Navbar({ onOpenTerminal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#hero' },
    { name: 'CLI Terminal', href: '#terminal', action: onOpenTerminal },
    { name: 'SOC Labs', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Incident Timeline', href: '#casestudies' },
    { name: 'Certifications', href: '#certs' },
    { name: 'Achievements & Edu', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Profile Avatar */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-emerald-500/40 group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all bg-slate-900 shrink-0">
            <img src={yashProfileImg} alt="Yash Portfolio" className="w-full h-full object-cover object-top" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-100 tracking-wider text-base">Yash Portfolio</span>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                SOC-ENG
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono hidden sm:block">TryHackMe Top 1% • LPU B.Tech CSE</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={link.action ? (e) => { e.preventDefault(); link.action(); } : undefined}
              className="text-xs font-mono tracking-wider text-slate-300 hover:text-emerald-400 transition-colors py-1 flex items-center gap-1.5"
            >
              {link.name === 'CLI Terminal' && <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />}
              {link.name}
            </a>
          ))}
        </nav>

        {/* Status Badge & CLI Launcher */}
        <div className="hidden sm:flex items-center gap-3">
          
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 font-semibold">{PROFILE.status}</span>
          </div>

          <button
            onClick={onOpenTerminal}
            className="px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 text-xs font-mono hover:bg-emerald-500/20 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all flex items-center gap-2"
          >
            <TerminalIcon className="w-4 h-4 text-emerald-400" />
            <span>Launch CLI Shell</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenTerminal}
            className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono"
            title="Launch Terminal"
          >
            <TerminalIcon className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-t border-slate-800 px-4 pt-3 pb-6 mt-3 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                if (link.action) link.action();
                setMobileMenuOpen(false);
              }}
              className="block px-3 py-2 rounded-lg text-sm font-mono text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
