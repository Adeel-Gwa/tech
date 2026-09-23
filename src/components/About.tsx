import React from 'react';
import { Bot, Code2, Cpu, ShieldCheck, Sparkles, Terminal } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      title: 'Full-Stack Development',
      description: 'React, Next.js, Node.js, JavaScript, TypeScript, PHP and modern web technologies.',
      icon: Code2,
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Generative AI',
      description: 'AI-powered applications, automation, intelligent workflows, and custom LLM integrations.',
      icon: Sparkles,
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      title: 'Creative Technology',
      description: 'Modern interfaces, design systems, branding, dashboards, and immersive digital experiences.',
      icon: Cpu,
      gradient: 'from-fuchsia-500 to-pink-500'
    },
    {
      title: 'Secure Development',
      description: 'Security-conscious coding, OWASP defense, data encryption, and cybersecurity fundamentals.',
      icon: ShieldCheck,
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2 font-mono">
            About Muhammad Adeel
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            More Than Just Code.{' '}
            <span className="gradient-text-hero">I Build Solutions.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            I combine full-stack development, artificial intelligence, modern UI/UX and problem-solving to transform ideas into functional digital products.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait & 3D Project Badge */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden glass-panel border border-white/10 p-4 shadow-2xl shadow-cyan-500/10">
              
              {/* Background gradient art with geometric lines */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0c1224] via-[#091022] to-[#04060d] -z-10" />
              <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px] opacity-15" />
              
              {/* Developer Visual Artwork Card */}
              <div className="w-full h-full rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-[#050811] flex flex-col justify-between p-6 relative overflow-hidden">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 font-semibold px-2 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-800/50">
                    Lead Architect
                  </span>
                </div>

                {/* Stylized Developer Avatar & Code Glow */}
                <div className="my-auto flex flex-col items-center text-center space-y-4">
                  <div className="relative w-28 h-28 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-fuchsia-500 p-1 shadow-[0_0_30px_rgba(56,189,248,0.35)]">
                    <div className="w-full h-full rounded-xl bg-[#050811] flex flex-col items-center justify-center text-white">
                      <Terminal className="w-10 h-10 text-cyan-400 mb-1 animate-pulse" />
                      <span className="text-[11px] font-mono font-bold text-slate-300">MAS // 2026</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white font-heading">Muhammad Adeel Shafique</h3>
                    <p className="text-xs text-slate-400 mt-1">Founder @ WebDev Masters · Full-Stack &amp; AI</p>
                    <div className="flex items-center justify-center gap-2 mt-2 text-[11px] text-slate-400">
                      <span>Pakistan</span>
                      <span aria-hidden="true">·</span>
                      <span>United Kingdom Clients</span>
                    </div>
                  </div>
                </div>

                {/* Interactive Code Status Snippet */}
                <div className="rounded-xl bg-black/50 border border-white/5 p-3 text-left font-mono text-[11px] text-slate-300 space-y-1">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <span className="text-emerald-400">const</span> expertise = [<span className="text-amber-300">'React'</span>, <span className="text-amber-300">'AI'</span>, <span className="text-amber-300">'Next.js'</span>];
                  </div>
                  <div className="text-slate-400">
                    <span className="text-indigo-400">await</span> deploy({'{'} quality: <span className="text-emerald-400">'Awwwards-Grade'</span> {'}'});
                  </div>
                </div>

              </div>

              {/* Floating 3D Badge: 100+ DIGITAL PROJECTS */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 px-4 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold text-xs sm:text-sm shadow-2xl shadow-cyan-500/40 border border-white/30 backdrop-blur-xl animate-float-slow flex items-center gap-2.5">
                <span className="text-lg">🚀</span>
                <div>
                  <div className="font-extrabold text-sm sm:text-base font-mono tabular-nums leading-none">100+</div>
                  <div className="text-[10px] tracking-wider uppercase opacity-90">Digital Projects</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Pillars */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>
                Over the past 6+ years, I have architected and deployed high-converting digital products for forward-thinking businesses in Pakistan, the United Kingdom, and globally. As the founder of <strong className="text-white font-semibold">WebDev Masters</strong>, I bridge the gap between creative visual elegance and rock-solid software engineering.
              </p>
              <p>
                Whether designing ultra-luxury real estate platforms like <span className="text-cyan-300 font-medium">Velora Estates</span>, building live property portals for <span className="text-cyan-300 font-medium">EMAAR Dubai</span> developments, or engineering generative AI suites like <span className="text-cyan-300 font-medium">WebDev AI Space</span>, my focus is always on speed, aesthetics, and measurable business growth.
              </p>
            </div>

            {/* 4 Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-4 rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/30 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center text-white shadow-md`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
