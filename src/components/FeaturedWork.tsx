import React from 'react';
import { ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface FeaturedWorkProps {
  onOpenModal: (project: Project) => void;
  projects: Project[];
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onOpenModal, projects }) => {
  // Grab 4 primary flagship featured works
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="relative py-24 bg-[#050811] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SELECTED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Featured Flagship Projects
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Architected for measurable enterprise impact, sub-second latency, and intuitive interaction design.
          </p>
        </div>

        {/* Asymmetric Editorial Project Showcase */}
        <div className="space-y-12">
          {featured.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={project.id}
                className="project-card-interactive group rounded-3xl glass-panel border border-white/10 hover:border-cyan-500/40 p-6 sm:p-8 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Visual / Mockup Preview Side */}
                <div
                  onClick={() => onOpenModal(project)}
                  className={`lg:col-span-6 cursor-pointer ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-[#050811] border border-white/10 p-6 flex flex-col justify-between group-hover:scale-[1.01] transition-transform shadow-2xl">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-cyan-400">
                        #{project.code} · {project.category}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white/10 text-white border border-white/10">
                        {project.status}
                      </span>
                    </div>

                    <div className="my-auto text-center space-y-2">
                      <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                        {project.title}
                      </div>
                      <p className="text-xs text-slate-300 max-w-md mx-auto line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/5 pt-3">
                      <span>{project.clientMarket || 'Global Market'}</span>
                      <span className="text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        Read Case Study →
                      </span>
                    </div>
                  </div>
                </div>

                {/* Editorial Story / Challenge & Solution Side */}
                <div className={`lg:col-span-6 text-left space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                      Case Overview
                    </span>
                    <h3
                      onClick={() => onOpenModal(project)}
                      className="text-2xl sm:text-3xl font-bold text-white font-heading mt-1 hover:text-cyan-300 transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.longDescription}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                      <strong className="text-amber-400 font-mono block mb-1">Challenge:</strong>
                      <span className="text-slate-300">{project.challenge}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                      <strong className="text-cyan-400 font-mono block mb-1">Result:</strong>
                      <span className="text-slate-300">{project.result}</span>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action row */}
                  <div className="pt-2 flex items-center gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all cursor-pointer"
                      >
                        <span>Visit Live Platform</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    <button
                      onClick={() => onOpenModal(project)}
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                    >
                      Deep Dive Specs →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
