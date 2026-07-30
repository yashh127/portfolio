import React, { useState } from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Award, CheckCircle2, ShieldCheck, ExternalLink, Sparkles, X } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Certifications() {
  const [verifiedCert, setVerifiedCert] = useState(null);

  const handleVerify = (cert) => {
    setVerifiedCert(cert);
    
    // Fire celebratory confetti!
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  return (
    <section id="certs" className="py-20 cyber-bg-pattern relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Security Certifications & Badges
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Click any badge to launch interactive credential verification.
          </p>
        </div>

        {/* Cert Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 glass-card-hover flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                
                {/* Header Icon & Status */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{cert.status}</span>
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-xl font-bold text-white">{cert.name}</h3>
                  <p className="text-xs font-mono text-slate-400 mt-1">Issuer: {cert.issuer}</p>
                </div>

                <p className="text-slate-300 text-xs leading-relaxed">
                  {cert.desc}
                </p>

              </div>

              {/* Verify Action Button */}
              <button
                onClick={() => handleVerify(cert)}
                className="w-full py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-emerald-400 hover:border-emerald-500/50 text-xs font-mono font-semibold transition-all flex items-center justify-center gap-2 group"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verify Credential Token</span>
              </button>

            </div>
          ))}
        </div>

        {/* Verification Modal Popup */}
        {verifiedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <div className="glass-card bg-slate-900 border border-emerald-500/50 rounded-2xl max-w-md w-full p-6 sm:p-8 space-y-6 text-center relative shadow-[0_0_50px_rgba(16,185,129,0.2)]">
              
              <button
                onClick={() => setVerifiedCert(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                <ShieldCheck className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                  CRYPTOGRAPHICALLY VERIFIED
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">{verifiedCert.name}</h3>
                <p className="text-xs font-mono text-slate-400">Issued by {verifiedCert.issuer}</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-400 space-y-1">
                <p className="text-slate-500 text-[10px] uppercase">Token ID Hash:</p>
                <p className="break-all font-semibold">0x74f9...39a8-VERIFIED-SOC</p>
              </div>

              <button
                onClick={() => setVerifiedCert(null)}
                className="w-full py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold font-mono text-xs hover:bg-emerald-400"
              >
                Close Certificate View
              </button>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
