import React from 'react';
import { ArrowRight, ArrowUpRight, Bot, CheckCircle, Globe, Shield, Sparkles, TrendingUp, Zap } from 'lucide-react';

export const WebDevMasters: React.FC = () => {
  const highlights = [
    { title: 'Custom Web Development', desc: 'Scalable React, Next.js, and Node.js solutions built for ultra-fast performance.', icon: Globe },
    { title: 'Generative AI Integration', desc: 'Custom LLM tooling, document intelligence, and automated creative workflows.', icon: Bot },
    { title: 'High-Converting Landing Pages', desc: 'Aesthetic design systems focused on lead conversion and user retention.', icon: TrendingUp },
    { title: 'Digital Branding & UI/UX', desc: 'Design tokens, Figma prototypes, and identity systems tailored for modern tech startups.', icon: Sparkles },
    { title: 'E-Commerce & Portals', desc: 'Headless Shopify and custom Stripe checkouts designed for international sales.', icon: Zap },
    { title: 'Cybersecurity Awareness', desc: 'OWASP-compliant hardened architecture with zero-trust credentials defense.', icon: Shield }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#050811] via-[#0b1227] to-[#050811] border-t border-white/10 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Banner Card */}
        <div className="rounded-3xl p-8 sm:p-12 glass-panel border border-white/15 bg-[#091024]/80 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>FOUNDER &amp; ARCHITECT</span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading">
                  Building More Than Websites.{' '}
                  <span className="gradient-text-hero">Building Digital Businesses.</span>
                </h2>
                <div className="text-sm sm:text-base font-semibold text-cyan-400 mt-2 font-mono tracking-wide">
                  WebDev Masters · AI • Web • Digital Growth
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                As the founder of WebDev Masters, I partner with startup founders, real estate groups, and enterprise operators to turn complex technical requirements into high-value, aesthetically superior digital products.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#contact"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#projects"
                  className="px-6 py-3.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore WebDev Masters</span>
                  <ArrowUpRight className="w-4 h-4 text-cyan-400" />
                </a>
              </div>

            </div>

            {/* Right Pillars Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <Icon className="w-4 h-4 text-cyan-400" />
                      <h4 className="text-xs font-bold text-white">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {item.desc}
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
