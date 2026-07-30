import React from 'react';
import { ACHIEVEMENTS, EDUCATION } from '../data/portfolioData';
import { Trophy, GraduationCap, Flame, Code, Award, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export default function EducationAchievements() {
  return (
    <section id="education" className="py-20 bg-[#080c14] relative z-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section 1: Key Achievements Banner */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
              <Trophy className="w-3.5 h-3.5" />
              <span>ACCOMPLISHMENTS & GLOBAL RANKINGS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Competitive Milestones
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* TryHackMe Streak */}
            <div className="glass-card rounded-2xl p-6 border border-emerald-500/30 glass-card-hover space-y-4 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Flame className="w-6 h-6 animate-pulse" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold">
                  Top 1% Global
                </span>
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white">TryHackMe Top 1%</h3>
                <p className="text-xs font-mono text-emerald-400 font-semibold mt-1">130+ Day Active Cyber Streak</p>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Maintained a continuous 130+ day learning streak ranking among the top 1% cybersecurity learners globally on TryHackMe.
              </p>
            </div>

            {/* LeetCode Solved */}
            <div className="glass-card rounded-2xl p-6 border border-cyan-500/30 glass-card-hover space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <Code className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold">
                  150+ Problems
                </span>
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white">LeetCode Solver</h3>
                <p className="text-xs font-mono text-cyan-400 font-semibold mt-1">Data Structures & Algorithms</p>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Solved 150+ coding problems optimizing algorithmic efficiency, memory management, and data structures in C++ & Python.
              </p>
            </div>

            {/* HackerRank Gold */}
            <div className="glass-card rounded-2xl p-6 border border-amber-500/30 glass-card-hover space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <Award className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono font-bold">
                  Gold Badge
                </span>
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white">HackerRank Gold</h3>
                <p className="text-xs font-mono text-amber-400 font-semibold mt-1">Problem Solving Badge</p>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Earned Gold level badge in problem solving and coding challenges on HackerRank.
              </p>
            </div>

          </div>
        </div>

        {/* Section 2: Education History */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>ACADEMIC BACKGROUND</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Education & Academic Qualification
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-emerald-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {edu.period}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{edu.institution}</h3>
                  <p className="text-xs font-mono text-slate-300 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" /> {edu.location}
                  </p>
                  <p className="text-xs text-slate-300 font-semibold">{edu.degree}</p>
                </div>
                
                {edu.score && (
                  <div className="pt-2 border-t border-slate-800/80">
                    <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-emerald-400 text-xs font-mono font-semibold">
                      {edu.score}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
