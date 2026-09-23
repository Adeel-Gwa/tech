import React from 'react';
import { ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'AI':
        return 'text-purple-400 bg-purple-950/60 border-purple-800/50';
      case 'SAAS':
        return 'text-pink-400 bg-pink-950/60 border-pink-800/50';
      case 'CYBERSECURITY':
        return 'text-cyan-400 bg-cyan-950/60 border-cyan-800/50';
      case 'E-COMMERCE':
        return 'text-amber-400 bg-amber-950/60 border-amber-800/50';
      case 'EDUCATION':
        return 'text-emerald-400 bg-emerald-950/60 border-emerald-800/50';
      case 'DASHBOARDS':
        return 'text-blue-400 bg-blue-950/60 border-blue-800/50';
      case 'DESIGN':
        return 'text-rose-400 bg-rose-950/60 border-rose-800/50';
      case 'WEB APPS':
        return 'text-teal-400 bg-teal-950/60 border-teal-800/50';
      default:
        return 'text-slate-300 bg-slate-800/60 border-slate-700/50';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return 'text-emerald-400 bg-emerald-950/50 border-emerald-500/40';
      case 'Production':
        return 'text-cyan-400 bg-cyan-950/50 border-cyan-500/40';
      case 'Enterprise':
        return 'text-indigo-400 bg-indigo-950/50 border-indigo-500/40';
      default:
        return 'text-slate-300 bg-white/5 border-white/10';
    }
  };

  return (
    <div className="project-card-interactive group relative rounded-2xl p-5 glass-panel border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-lg hover:shadow-cyan-500/10">
      
      {/* Top Meta Bar */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-slate-400 tracking-wider">
              #{project.code}
            </span>
            <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border ${getCategoryColor(project.category)}`}>
              {project.category}
            </span>
          </div>

          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border flex items-center gap-1 ${getStatusColor(project.status)}`}>
            {project.status === 'Live' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />}
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h3
          onClick={() => onOpenModal(project)}
          className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer text-left leading-snug"
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-slate-300 mt-2 text-left line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md text-slate-500">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Bottom Actions Bar */}
      <div className="pt-5 mt-5 border-t border-white/5 flex items-center justify-between gap-2">
        {/* Case Study Details trigger */}
        <button
          onClick={() => onOpenModal(project)}
          className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 cursor-pointer"
        >
          <span>Details</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </button>

        {/* Live Link Button (if available) */}
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-colors cursor-pointer"
          >
            <span>Visit Live</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        ) : (
          <span className="text-[10px] font-mono text-slate-500">
            {project.clientMarket || 'Proprietary'}
          </span>
        )}
      </div>

    </div>
  );
};
