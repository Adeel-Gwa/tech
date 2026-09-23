import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { processSteps } from '../data/portfolioData';

export const Process: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#050811] border-t border-white/10 overflow-hidden">
      
      {/* Ambience */}
      <div className="pointer-events-none absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
            Methodology
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mt-2 font-heading">
            From Idea → High-Performance Product
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            A disciplined five-stage development lifecycle ensuring predictability, continuous communication, and exceptional software quality.
          </p>
        </div>

        {/* 5 Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {processSteps.map((step, idx) => (
            <div
              key={step.step}
              className="group relative rounded-3xl p-6 glass-panel border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between shadow-xl text-left"
            >
              <div>
                {/* Step number badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-extrabold text-white/20 group-hover:text-cyan-400/50 transition-colors">
                    {step.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400/40 group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_#38bdf8] transition-all" />
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors font-heading">
                  {step.title}
                </h3>
                <div className="text-xs font-medium text-cyan-400/90 mb-3">
                  {step.subtitle}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {/* Deliverables */}
              <div className="pt-4 border-t border-white/5 space-y-1.5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                  Deliverables:
                </div>
                {step.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                    <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
