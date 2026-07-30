import React, { useState, useEffect } from 'react';
import { Shield, Activity, Lock, ExternalLink } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export default function Footer() {
  const [time, setTime] = useState(new Date().toUTCString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toUTCString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-12 text-xs font-mono text-slate-400 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white text-sm tracking-wider">{PROFILE.name}</span>
              <p className="text-[11px] text-slate-500">Cybersecurity Operations & Threat Hunting</p>
            </div>
          </div>

          {/* Live UTC Clock & SOC Node Status */}
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
              <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>SOC UTC CLOCK: <strong className="text-emerald-400">{time}</strong></span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
              <Lock className="w-3.5 h-3.5 text-cyan-400" />
              <span>LOG INTEGRITY: <strong className="text-cyan-400">VERIFIED HASH</strong></span>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} {PROFILE.name}. Built with React, Vite & Modern Cyber CSS.</p>
          <p className="flex items-center gap-1">
            <span>Mapped to MITRE ATT&CK® Enterprise Matrix v14</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
