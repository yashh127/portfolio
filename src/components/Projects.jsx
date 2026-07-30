import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ExternalLink, Github, Layers, ShieldCheck, Cpu, ArrowUpRight, X, Check, Activity, Terminal } from 'lucide-react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'SOC & SIEM', 'Automation & CTI', 'Cryptography & Dev'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()) || p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-[#080c14] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Yash's Project Repositories</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured Cyber Labs & Tools
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeCategory === cat
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 glass-card-hover flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Header Badge & GitHub direct link */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                    {project.badge}
                  </span>
                  
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-emerald-500/50 text-xs font-mono flex items-center gap-1.5 transition-colors shadow-sm"
                    title="View GitHub Repository"
                  >
                    <Github className="w-3.5 h-3.5 text-emerald-400" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>

                {/* Title & Short Desc */}
                <div onClick={() => setSelectedProject(project)} className="cursor-pointer">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2">
                    {project.shortDesc}
                  </p>
                </div>

                {/* MITRE ATT&CK Badges */}
                <div className="space-y-2 pt-2">
                  <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Mapped MITRE ATT&CK:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.mitreTechniques.map((tech, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-900 border border-cyan-500/20 text-cyan-300 text-[11px] font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Tags & Action Link Footer */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-col gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-slate-900/90 text-slate-300 text-xs font-mono">
                      #{tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-1 text-slate-500 text-xs font-mono">+{project.tags.length - 4}</span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-emerald-400 font-semibold transition-colors"
                  >
                    <Github className="w-4 h-4 text-emerald-400" />
                    <span>Repository Link</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono text-emerald-400 hover:underline font-semibold flex items-center gap-1"
                  >
                    <span>Architecture &rarr;</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <div className="glass-card bg-slate-900/95 border border-slate-700 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 relative shadow-2xl">
              
              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-10">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                    {selectedProject.category}
                  </span>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-emerald-400 text-xs font-mono flex items-center gap-1 hover:border-emerald-400"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>{selectedProject.githubUrl.replace('https://github.com/', '')}</span>
                  </a>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Full Description */}
              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedProject.fullDesc}
              </p>

              {/* Architecture Flow Diagram Box */}
              <div className="bg-slate-950/90 border border-slate-800 rounded-xl p-4 sm:p-6 space-y-3">
                <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  <span>SOC Pipeline & Architecture Flow</span>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2 text-center text-xs font-mono">
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg">
                    <p className="text-slate-400 text-[10px] uppercase">1. Telemetry</p>
                    <p className="text-white font-semibold mt-1">{selectedProject.architecture.sources[0]}</p>
                  </div>
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg">
                    <p className="text-slate-400 text-[10px] uppercase">2. Ingestion</p>
                    <p className="text-cyan-300 font-semibold mt-1">{selectedProject.architecture.ingestion}</p>
                  </div>
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg">
                    <p className="text-slate-400 text-[10px] uppercase">3. SIEM Engine</p>
                    <p className="text-emerald-400 font-semibold mt-1">{selectedProject.architecture.analytics}</p>
                  </div>
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg">
                    <p className="text-slate-400 text-[10px] uppercase">4. Response</p>
                    <p className="text-amber-300 font-semibold mt-1">{selectedProject.architecture.response}</p>
                  </div>
                </div>
              </div>

              {/* Key Highlights List */}
              <div className="space-y-3">
                <h4 className="text-sm font-mono text-white font-semibold uppercase tracking-wider flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" /> Key Features & Outcomes
                </h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                      <span className="text-emerald-400 font-mono text-xs mt-0.5">[&gt;]</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Modal Actions */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs font-mono flex items-center gap-2 hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                >
                  <Github className="w-4 h-4 text-slate-950" />
                  <span>Open GitHub Repository &rarr;</span>
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-mono font-semibold"
                >
                  Close Window
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
