import React, { useState, useEffect } from 'react';
import { Shield, Terminal, ArrowRight, Lock, Activity, Server, Cpu, CheckCircle2, Award } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import yashProfileImg from '../assets/yash-profile.jpg';

export default function Hero({ onOpenTerminal, onOpenPGP }) {
  const [textIndex, setTextIndex] = useState(0);
  const titles = [
    "SOC Operations Specialist",
    "Threat Detection Engineer",
    "SIEM & Incident Response Practitioner",
    "Cloud Infrastructure Hardener"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % titles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 cyber-bg-pattern min-h-[90vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Main Hero Container: Grid with Photo + Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text, Title & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            {/* Security Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-emerald-500/30 text-xs font-mono text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-300 font-semibold">{PROFILE.name}</span>
              <span className="text-emerald-500 font-bold">|</span>
              <span className="text-emerald-400 font-bold">{PROFILE.status}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Defending Digital Networks. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-300">
                  Hunting Cyber Threats.
                </span>
              </h1>
              
              {/* Animated Typing Title */}
              <div className="h-10 flex items-center justify-center lg:justify-start">
                <p className="text-lg sm:text-2xl font-mono text-emerald-400 tracking-wide font-semibold flex items-center gap-2">
                  <span className="text-slate-500">&gt;</span>
                  <span className="transition-all duration-500">{titles[textIndex]}</span>
                  <span className="w-2 h-6 bg-emerald-400 inline-block cursor-blink"></span>
                </p>
              </div>
            </div>

            {/* Bio Summary */}
            <p className="text-slate-300 text-base leading-relaxed max-w-2xl font-sans font-normal mx-auto lg:mx-0">
              {PROFILE.bio}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenTerminal}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold font-mono text-sm shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] hover:scale-[1.02] transition-all flex items-center gap-2"
              >
                <Terminal className="w-4 h-4 text-slate-950" />
                <span>Launch Cyber Shell</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl glass-card border border-slate-700 text-slate-200 font-mono text-sm font-semibold hover:border-emerald-500/50 hover:text-emerald-400 transition-all flex items-center gap-2"
              >
                <Server className="w-4 h-4 text-emerald-400" />
                <span>Explore SOC Labs</span>
              </a>

              <button
                onClick={onOpenPGP}
                className="px-4 py-3.5 rounded-xl glass-card border border-slate-800 text-slate-400 font-mono text-xs hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center gap-2"
              >
                <Lock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Contact Yash</span>
              </button>
            </div>

          </div>

          {/* Right Column: Profile Photo Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full">
              
              {/* Outer Cyber Glow Border Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500 animate-pulse"></div>

              {/* Photo Card Container */}
              <div className="relative glass-card rounded-2xl p-4 border border-emerald-500/40 shadow-2xl bg-slate-900/90 overflow-hidden scanline">
                
                {/* Photo Header Pill */}
                <div className="flex items-center justify-between px-3 py-2 bg-slate-950/80 rounded-xl border border-slate-800 mb-3 text-xs font-mono">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                    <span className="font-bold">SECURITY ENGINEER</span>
                  </div>
                  <span className="text-slate-400">LPU CSE '27</span>
                </div>

                {/* Profile Image Frame */}
                <div className="relative rounded-xl overflow-hidden border border-slate-700/80 aspect-[4/5] bg-slate-950">
                  <img
                    src={yashProfileImg}
                    alt="Yash Panjwani"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle gradient overlay at bottom of photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Overlay Badge on Photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-900/90 backdrop-blur-md border border-slate-800 text-xs font-mono space-y-1">
                    <div className="flex items-center justify-between text-emerald-400 font-bold">
                      <span>Yash Panjwani</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Top 1%</span>
                    </div>
                    <p className="text-[11px] text-slate-300">SOC Specialist • Threat Hunter</p>
                  </div>
                </div>

                {/* Card Footer Tech Strip */}
                <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-around text-[11px] font-mono text-slate-400">
                  <span className="text-emerald-400 font-semibold">130+ Day THM Streak</span>
                  <span>•</span>
                  <span className="text-cyan-400 font-semibold">150+ LeetCode</span>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Security Metrics Strip */}
        <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {PROFILE.metrics.map((metric, idx) => (
            <div key={idx} className="glass-card p-4 rounded-xl border border-slate-800/80 text-center glass-card-hover">
              <p className="text-2xl sm:text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300">
                {metric.value}
              </p>
              <p className="text-xs font-mono text-slate-400 mt-1">{metric.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
