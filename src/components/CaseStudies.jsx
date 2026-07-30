import React, { useState } from 'react';
import { INCIDENT_CASE_STUDY } from '../data/portfolioData';
import { AlertTriangle, ShieldCheck, Clock, FileCode, CheckCircle, ArrowRight, Play } from 'lucide-react';

export default function CaseStudies() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = INCIDENT_CASE_STUDY.steps[activeStepIndex];

  return (
    <section id="casestudies" className="py-20 bg-[#080c14] relative z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>INTERACTIVE INCIDENT RESPONSE WALKTHROUGH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Live DFIR Incident Triage Timeline
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Interactive breakdown of a simulated enterprise ransomware containment operation mapped to MITRE ATT&CK.
          </p>
        </div>

        {/* Incident Timeline Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Step Selector List (4 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {INCIDENT_CASE_STUDY.steps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStepIndex(idx)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-4 ${
                  activeStepIndex === idx
                    ? 'bg-slate-900 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.15)]'
                    : 'glass-card border-slate-800 hover:border-slate-700 opacity-70 hover:opacity-100'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5 ${
                  activeStepIndex === idx ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                }`}>
                  0{idx + 1}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-emerald-400 font-semibold">{step.tactic}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">{step.time}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{step.phase}</h4>
                  <p className="text-xs text-slate-400 line-clamp-1">{step.desc}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Right Active Step Detailed View (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/80 space-y-6 scanline">
              
              {/* Header Badge & Status */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Phase {activeStepIndex + 1} of 4</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">{activeStep.phase}</h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{activeStep.status}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {activeStep.desc}
              </p>

              {/* Log Evidence Console Snippet Box */}
              <div className="space-y-2">
                <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-cyan-400" /> Log / Forensic Evidence:
                </p>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-300 overflow-x-auto">
                  <code>{activeStep.evidence}</code>
                </div>
              </div>

              {/* Action Taken Box */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                <p className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">Incident Analyst Response:</p>
                <p className="text-xs sm:text-sm text-slate-300">{activeStep.action}</p>
              </div>

              {/* Next Phase Quick Button */}
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setActiveStepIndex((activeStepIndex + 1) % INCIDENT_CASE_STUDY.steps.length)}
                  className="px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/20 text-xs font-mono flex items-center gap-2"
                >
                  <span>Advance to Next Step</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
