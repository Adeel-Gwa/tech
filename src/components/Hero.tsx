import React from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { Hero3D } from './Hero3D';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Ambience Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse-glow" />
      <div className="pointer-events-none absolute top-1/3 -right-20 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-10 w-80 h-80 bg-fuchsia-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-cyan-300">
                Available for Freelance &amp; Collaboration
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
              I BUILD{' '}
              <span className="gradient-text-hero">
                DIGITAL EXPERIENCES
              </span>{' '}
              THAT STAND OUT.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
              I'm <strong className="text-white font-semibold">Muhammad Adeel Shafique</strong> — a Full-Stack Developer and Generative AI Expert building modern websites, SaaS products, AI-powered applications and digital experiences for businesses and organizations.
            </p>

            {/* Micro Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3 w-full border-y border-white/10">
              <div>
                <div className="text-2xl font-bold text-white font-mono tabular-nums">6+</div>
                <div className="text-xs text-slate-400">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400 font-mono tabular-nums">100+</div>
                <div className="text-xs text-slate-400">Projects Built</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 font-mono tabular-nums">20+</div>
                <div className="text-xs text-slate-400">Technologies</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-400 font-mono tabular-nums">PK + UK</div>
                <div className="text-xs text-slate-400">Client Markets</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="group px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-sm backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Let's Work Together</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-400" />
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="pt-4 flex items-center gap-2 text-xs text-slate-400">
              <ArrowDown className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
              <span>Scroll to explore</span>
            </div>
          </div>

          {/* Right 3D Interactive Composition */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <Hero3D />
          </div>

        </div>
      </div>
    </section>
  );
};
