import React, { useState } from 'react';
import { PROFILE } from '../data/portfolioData';
import { Mail, Lock, Key, Copy, Check, Send, ShieldCheck, Github, Linkedin } from 'lucide-react';

export default function Contact({ showPGPModal, onClosePGPModal }) {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isEncrypting, setIsEncrypting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyPGP = () => {
    navigator.clipboard.writeText(PROFILE.socials.pgpFingerprint);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEncrypting(true);
    setTimeout(() => {
      setIsEncrypting(false);
      setFormSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 bg-[#080c14] relative z-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Lock className="w-3.5 h-3.5" />
            <span>SECURE COMMUNICATION CHANNEL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Initiate Contact & Collaboration
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Reach out for SOC engineering roles, incident triage consultation, or cybersecurity projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Info & PGP Card (5 cols) */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Direct Channels</h3>
              <p className="text-xs text-slate-400 font-mono">End-to-End Encrypted Triage Channel</p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <p className="text-xs font-mono text-slate-500 uppercase">Primary Email</p>
                <a href={`mailto:${PROFILE.socials.email}`} className="text-sm font-mono text-emerald-400 hover:underline flex items-center gap-2 font-semibold">
                  <Mail className="w-4 h-4" />
                  <span>{PROFILE.socials.email}</span>
                </a>
              </div>

              {/* PGP Fingerprint Box */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                    <Key className="w-3.5 h-3.5" /> PGP Public Fingerprint:
                  </span>
                  <button
                    onClick={handleCopyPGP}
                    className="p-1 rounded text-slate-400 hover:text-emerald-400 transition-colors"
                    title="Copy Fingerprint"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-[11px] font-mono text-slate-300 break-all bg-slate-900 p-2 rounded border border-slate-800">
                  {PROFILE.socials.pgpFingerprint}
                </p>
                {copied && <p className="text-[10px] font-mono text-emerald-400">✓ Fingerprint copied to clipboard!</p>}
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={PROFILE.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all flex items-center gap-2 text-xs font-mono"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={PROFILE.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center gap-2 text-xs font-mono"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Message Form (7 cols) */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-slate-800">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Transmitted</h3>
                <p className="text-xs font-mono text-emerald-400 max-w-sm mx-auto">
                  [SUCCESS] Your message has been encrypted and routed to the SOC analyst inbox.
                </p>
                <button
                  onClick={() => { setFormSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
                  className="px-4 py-2 rounded-lg bg-slate-800 text-xs font-mono text-slate-300 hover:text-white"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-300">Your Name / Handle</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex (Security Recruiter / SOC Lead)"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm font-mono text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500/60"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-300">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm font-mono text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500/60"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-300">Message Content</label>
                  <textarea
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Discuss SOC position, project inquiry, or security lab feedback..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm font-mono text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500/60"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isEncrypting}
                  className="w-full py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold font-mono text-sm hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.25)]"
                >
                  {isEncrypting ? (
                    <span>[ ENCRYPTING WITH 4096-BIT PGP... ]</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-slate-950" />
                      <span>Encrypt & Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
