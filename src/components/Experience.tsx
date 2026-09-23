import React from 'react';
import { Briefcase, Calendar, CheckCircle2, MapPin } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 bg-[#050811] border-t border-white/10 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="pointer-events-none absolute top-1/3 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mt-2 font-heading">
            Experience &amp; Milestones
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Leading engineering teams, founding product studios, and deploying scalable software systems for global partners.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-32 space-y-12 text-left">
          {experienceData.map((item) => (
            <div key={item.id} className="relative pl-6 sm:pl-8 group">
              
              {/* Glowing Timeline Marker Dot */}
              <div className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-[#050811] border-2 border-cyan-400 group-hover:border-cyan-300 group-hover:scale-125 transition-all shadow-[0_0_12px_rgba(56,189,248,0.5)] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>

              {/* Date Period Indicator on Left for Desktop */}
              <div className="sm:absolute sm:-left-36 sm:top-1 text-xs font-mono font-bold text-cyan-400/90 mb-1 sm:mb-0 sm:text-right sm:w-28">
                {item.period}
              </div>

              {/* Card Content */}
              <div className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/30 transition-all duration-300 shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-heading">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="text-sm font-semibold text-cyan-400 mb-3">
                  {item.organization}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Key Achievements */}
                <div className="space-y-2 mb-5">
                  {item.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
