import React, { useState } from 'react';
import { Atom, Bolt, Bot, Box, Boxes, Brain, Cpu, Database, Figma, FileCode, FileText, Flame, GitBranch, HardDrive, Image, Layers, Maximize, Package, PenTool, Server, Share2, Shield, Sparkles, Terminal, Wind, Zap } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { TechSkill } from '../types';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'AI & Machine Learning', 'Backend', 'Database & Cloud', 'Design & Tools'];

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom': return Atom;
      case 'Layers': return Layers;
      case 'FileCode': return FileCode;
      case 'Cpu': return Cpu;
      case 'Wind': return Wind;
      case 'Box': return Box;
      case 'Sparkles': return Sparkles;
      case 'Bot': return Bot;
      case 'Brain': return Brain;
      case 'Terminal': return Terminal;
      case 'Server': return Server;
      case 'Zap': return Zap;
      case 'FileText': return FileText;
      case 'Share2': return Share2;
      case 'Database': return Database;
      case 'HardDrive': return HardDrive;
      case 'Boxes': return Boxes;
      case 'Flame': return Flame;
      case 'Bolt': return Bolt;
      case 'GitBranch': return GitBranch;
      case 'Package': return Package;
      case 'Figma': return Figma;
      case 'Image': return Image;
      case 'PenTool': return PenTool;
      case 'Shield': return Shield;
      default: return Cpu;
    }
  };

  return (
    <section id="skills" className="relative py-24 bg-[#050811] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
            Digital Toolkit
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mt-2 font-heading">
            Technologies &amp; Frameworks
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            A comprehensive, battle-tested stack spanning full-stack frameworks, multi-modal generative AI pipelines, scalable databases, and UI/UX design tools.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400/40 font-semibold'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Pills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {filteredSkills.map((skill: TechSkill) => {
            const Icon = getIcon(skill.iconName);
            return (
              <div
                key={skill.name}
                className="group relative p-3.5 rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/40 transition-all duration-200 hover:-translate-y-1 flex items-center gap-3 text-left shadow-md hover:shadow-cyan-500/10 cursor-default"
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${
                  skill.highlight
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    : 'bg-white/5 text-slate-400 border border-white/10'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>

                <div className="overflow-hidden">
                  <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                    {skill.name}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate">
                    {skill.level}
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
