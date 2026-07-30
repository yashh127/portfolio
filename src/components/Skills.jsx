import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { ShieldAlert, Cloud, Search, Terminal, Cpu } from 'lucide-react';

const iconMap = {
  ShieldAlert: ShieldAlert,
  Cloud: Cloud,
  Search: Search,
  Terminal: Terminal
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 cyber-bg-pattern relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>SECURITY COMPETENCIES & MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Cyber Security & Technical Toolkit
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Hands-on proficiency across security monitoring, cloud hardening, forensic investigation, and automated detection scripting.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const IconComponent = iconMap[cat.icon] || ShieldAlert;
            
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 glass-card-hover space-y-6"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-emerald-400 shadow-md">
                    <IconComponent className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                    <p className="text-xs font-mono text-slate-400">Core Operational Domain #{idx + 1}</p>
                  </div>
                </div>

                {/* Skill Bars List */}
                <div className="space-y-4 pt-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className="text-slate-200 font-semibold">{skill.name}</span>
                        <span className="text-emerald-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
