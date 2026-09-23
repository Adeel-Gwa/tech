import React from 'react';
import { ArrowUp, Github, Heart, Linkedin, Mail, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#03050c] border-t border-white/10 pt-16 pb-12 overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-xl font-bold tracking-tight text-white font-heading">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 via-indigo-500 to-fuchsia-500 flex items-center justify-center text-white text-xs font-black shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                MAS
              </span>
              <span>Muhammad Adeel Shafique</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Full-Stack Developer, Generative AI Expert, and Founder at WebDev Masters. Transforming ambitious ideas into high-performance web products, SaaS tools, and AI workflows.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com/in/muhammadadeelshafique"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400 hover:text-blue-400 text-slate-300 flex items-center justify-center transition-all cursor-pointer"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/MuhammadAdeelShafique"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Repositories"
                className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400 hover:text-purple-400 text-slate-300 flex items-center justify-center transition-all cursor-pointer"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="mailto:adeelgwa@gmail.com"
                title="Direct Email"
                className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 text-slate-300 flex items-center justify-center transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home &amp; Hero</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Muhammad</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">100+ Projects Showcase</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Specialized Services</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Digital Toolkit &amp; Tech</a></li>
              <li><a href="#experience" className="hover:text-cyan-400 transition-colors">Career Timeline</a></li>
            </ul>
          </div>

          {/* Featured Works links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              Highlighted Platforms
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="https://webdevai.space" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors flex items-center justify-between">
                  <span>WebDev AI Space</span>
                  <span className="text-[10px] font-mono text-cyan-400">webdevai.space ↗</span>
                </a>
              </li>
              <li>
                <a href="https://webdevproject-realestate.web.app" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors flex items-center justify-between">
                  <span>EMAAR Dubai Real Estate</span>
                  <span className="text-[10px] font-mono text-emerald-400">Live Portal ↗</span>
                </a>
              </li>
              <li>
                <span className="flex items-center justify-between text-slate-400">
                  <span>Velora Estates Luxury Living</span>
                  <span className="text-[10px] font-mono text-amber-400">Design System</span>
                </span>
              </li>
              <li>
                <span className="flex items-center justify-between text-slate-400">
                  <span>Medisync Healthcare App</span>
                  <span className="text-[10px] font-mono text-blue-400">Mobile UI/UX</span>
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Muhammad Adeel Shafique. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2">
            <span>Crafted with code &amp; creativity</span>
            <span aria-hidden="true">·</span>
            <span>Founder @ WebDev Masters</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};
