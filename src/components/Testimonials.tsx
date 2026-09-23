import React from 'react';
import { MessageSquareQuote, Quote, ShieldCheck, Star } from 'lucide-react';
import { testimonialsData } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#050811] border-t border-white/10 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="pointer-events-none absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
            Endorsements
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mt-2 font-heading">
            Client Feedback &amp; Trust
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Collaborating with international partners across real estate portals, SaaS architectures, and generative AI research.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className={`rounded-3xl p-6 glass-panel border transition-all duration-300 flex flex-col justify-between text-left shadow-xl ${
                t.isPlaceholder
                  ? 'border-dashed border-white/20 bg-white/[0.01]'
                  : 'border-white/10 hover:border-cyan-500/30'
              }`}
            >
              <div>
                {/* 3D Quote mark & stars */}
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-6 h-6 text-cyan-400/50" />
                  {!t.isPlaceholder && (
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400" />
                      ))}
                    </div>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{t.feedback}"
                </p>
              </div>

              {/* Author info */}
              <div className="pt-4 border-t border-white/5">
                <div className="text-xs font-bold text-white font-heading">
                  {t.client}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {t.role} · {t.company}
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2 font-mono">
                  <span>{t.market}</span>
                  <span className="text-cyan-400/80">{t.projectTitle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
