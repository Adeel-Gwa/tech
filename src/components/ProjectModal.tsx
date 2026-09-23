import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, ExternalLink, Github, Sparkles, X } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, onPrev, onNext]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop blur */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-xl transition-opacity animate-in fade-in duration-200"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl my-8 rounded-3xl glass-panel border border-white/20 bg-[#080d1d]/95 p-6 sm:p-8 shadow-2xl shadow-black/80 z-10 text-left max-h-[90vh] overflow-y-auto">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-cyan-400">
              #{project.code}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-white/10 text-white border border-white/10">
              {project.category}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              {project.clientMarket || 'Global Client'} · {project.year || '2025'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Prev/Next buttons */}
            <button
              onClick={onPrev}
              title="Previous Project (Left Arrow)"
              className="p-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={onNext}
              title="Next Project (Right Arrow)"
              className="p-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            {/* Close */}
            <button
              onClick={onClose}
              title="Close (Esc)"
              className="p-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Project Title & Status */}
        <div className="pt-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              {project.title}
            </h2>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/60 text-cyan-300 border border-cyan-800/50">
                {project.status}
              </span>
            </div>
          </div>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            {project.longDescription || project.description}
          </p>
        </div>

        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-1">
              The Challenge
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {project.challenge || 'Solving architectural complexity and ensuring frictionless user engagement.'}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-1">
              Engineering Solution
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {project.solution || 'Engineered modular components and real-time data flows with rigorous testing.'}
            </p>
          </div>
        </div>

        {/* Key Features List */}
        {project.features && project.features.length > 0 && (
          <div className="mt-6">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
              Key Features &amp; Architecture
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Verified Result */}
        {project.result && (
          <div className="mt-6 p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
            <span><strong className="font-semibold text-emerald-200">Outcome:</strong> {project.result}</span>
          </div>
        )}

        {/* Tech Stack Chips */}
        <div className="mt-6 pt-5 border-t border-white/10">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2.5">
            Technologies &amp; Libraries
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-xs transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            Close Window (Esc)
          </button>
        </div>

      </div>
    </div>
  );
};
