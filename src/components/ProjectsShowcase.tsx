import React, { useMemo, useState } from 'react';
import { Filter, Grid, LayoutList, RotateCcw, Search, Sparkles } from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { ProjectCard } from './ProjectCard';

interface ProjectsShowcaseProps {
  projects: Project[];
  onOpenModal: (project: Project) => void;
}

const CATEGORIES: ProjectCategory[] = [
  'ALL',
  'WEB APPS',
  'SAAS',
  'AI',
  'E-COMMERCE',
  'BUSINESS',
  'EDUCATION',
  'DASHBOARDS',
  'CYBERSECURITY',
  'DESIGN'
];

const INITIAL_DISPLAY_COUNT = 12;
const LOAD_MORE_STEP = 12;

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ projects, onOpenModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);
  const [viewMode, setViewMode] = useState<'grid' | 'compact'>('grid');

  // Compute dynamic project count per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { ALL: projects.length };
    CATEGORIES.forEach((cat) => {
      if (cat !== 'ALL') {
        counts[cat] = projects.filter((p) => p.category === cat).length;
      }
    });
    return counts;
  }, [projects]);

  // Filtered and searched projects
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = selectedCategory === 'ALL' || p.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q) ||
        p.code.includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  // Visible sliced projects
  const visibleProjects = useMemo(() => {
    return filteredProjects.slice(0, displayCount);
  }, [filteredProjects, displayCount]);

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + LOAD_MORE_STEP);
  };

  const handleShowAll = () => {
    setDisplayCount(filteredProjects.length);
  };

  const handleResetFilters = () => {
    setSelectedCategory('ALL');
    setSearchQuery('');
    setDisplayCount(INITIAL_DISPLAY_COUNT);
  };

  return (
    <section id="projects" className="relative py-24 bg-[#050811] overflow-hidden border-t border-white/10">
      
      {/* Background glow effects */}
      <div className="pointer-events-none absolute top-10 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FULL PRODUCTION CATALOG</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            100+ PROJECTS.{' '}
            <span className="gradient-text-hero">ONE CREATIVE JOURNEY.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Explore a collection of websites, SaaS products, AI applications, dashboards, e-commerce platforms and digital experiences I've designed and developed.
          </p>
        </div>

        {/* Filter Bar & Controls Container */}
        <div className="space-y-6 mb-12">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((category) => {
              const count = categoryCounts[category] || 0;
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setDisplayCount(INITIAL_DISPLAY_COUNT);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400/40 font-semibold scale-105'
                      : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 hover:text-white'
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      isSelected ? 'bg-black/30 text-white' : 'bg-white/10 text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Bar & View Mode Toggle */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 max-w-4xl mx-auto">
            
            {/* Live Search Input */}
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setDisplayCount(INITIAL_DISPLAY_COUNT);
                }}
                placeholder="Search 100+ projects by title, keyword, tech..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400/60 focus:bg-white/10 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Match Counter & View Switcher */}
            <div className="flex items-center justify-between w-full sm:w-auto gap-4">
              <div className="text-xs font-mono text-slate-400">
                Found <strong className="text-cyan-400 font-bold">{filteredProjects.length}</strong> of{' '}
                {projects.length}
              </div>

              <div className="flex items-center gap-1 p-1 rounded-lg bg-white/5 border border-white/10">
                <button
                  onClick={() => setViewMode('grid')}
                  title="Grid View"
                  className={`p-1.5 rounded-md text-xs transition-colors cursor-pointer ${
                    viewMode === 'grid' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewMode('compact')}
                  title="Compact List View"
                  className={`p-1.5 rounded-md text-xs transition-colors cursor-pointer ${
                    viewMode === 'compact' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <LayoutList className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Projects Grid or Compact List */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center glass-panel rounded-3xl border border-white/10 p-8 max-w-md mx-auto">
            <Filter className="w-8 h-8 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">No projects found</h3>
            <p className="text-xs text-slate-400 mt-1 mb-4">
              No matching projects for "{searchQuery}" in category {selectedCategory}.
            </p>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={onOpenModal}
              />
            ))}
          </div>
        ) : (
          /* Compact List View */
          <div className="space-y-3">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onOpenModal(project)}
                className="project-card-interactive group p-4 rounded-xl glass-panel border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-center gap-3 text-left">
                  <span className="font-mono text-xs font-bold text-slate-400">
                    #{project.code}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-1">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {project.category}
                  </span>
                  <span className="text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
                    View Details →
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More / Pagination Bar */}
        {visibleProjects.length < filteredProjects.length && (
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              Load More Projects ({filteredProjects.length - visibleProjects.length} remaining)
            </button>

            <button
              onClick={handleShowAll}
              className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-medium transition-all cursor-pointer"
            >
              Show All {filteredProjects.length} Projects
            </button>
          </div>
        )}

        {/* Bottom Progress Bar */}
        <div className="mt-8 text-center text-xs font-mono text-slate-400">
          Showing <span className="text-white font-bold">{visibleProjects.length}</span> of{' '}
          <span className="text-cyan-400 font-bold">{filteredProjects.length}</span> matching projects
        </div>

      </div>
    </section>
  );
};
