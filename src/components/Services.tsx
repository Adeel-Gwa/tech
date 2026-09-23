import React from 'react';
import { Bot, Check, Code, Cpu, Palette, Rocket, ShieldCheck, ShoppingBag, Sparkles } from 'lucide-react';
import { servicesData } from '../data/portfolioData';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return Code;
      case 'Sparkles':
        return Sparkles;
      case 'Rocket':
        return Rocket;
      case 'Palette':
        return Palette;
      case 'ShoppingBag':
        return ShoppingBag;
      case 'ShieldCheck':
        return ShieldCheck;
      default:
        return Cpu;
    }
  };

  return (
    <section id="services" className="relative py-24 bg-[#050811] border-t border-white/10 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
            What I Build
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mt-2 font-heading">
            Tailored Engineering &amp; Strategic Solutions
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            High-leverage development services transforming ambitious concepts into resilient, revenue-generating software systems.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <div
                key={service.id}
                className="group relative rounded-3xl p-7 glass-panel border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between shadow-xl hover:shadow-cyan-500/10 text-left"
              >
                {/* Top Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-white/20 group-hover:text-cyan-400/40 transition-colors">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 group-hover:border-cyan-400/40 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-heading">
                    {service.title}
                  </h3>
                  <div className="text-xs font-medium text-cyan-400/90 mt-1">
                    {service.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mt-5 space-y-2">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills at Bottom */}
                <div className="pt-6 mt-6 border-t border-white/5 flex flex-wrap gap-1.5">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
