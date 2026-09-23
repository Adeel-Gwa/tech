import React from 'react';
import { ArrowUpRight, Compass, Eye, Heart, Layers, Sparkles, Stethoscope, Utensils, Zap } from 'lucide-react';
import { Project } from '../types';

interface UiUxSpotlightProps {
  onSelectProject: (project: Project) => void;
  projects: Project[];
}

export const UiUxSpotlight: React.FC<UiUxSpotlightProps> = ({ onSelectProject, projects }) => {
  // Find the specific projects from the dataset
  const velora = projects.find((p) => p.id === 1);
  const emaar = projects.find((p) => p.id === 2);
  const medisync = projects.find((p) => p.id === 3);
  const cookspecial = projects.find((p) => p.id === 4);
  const globegears = projects.find((p) => p.id === 5);
  const estudy = projects.find((p) => p.id === 6);

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#050811] via-[#080d1e] to-[#050811] border-t border-white/10 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="pointer-events-none absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-950/40 border border-fuchsia-500/30 text-fuchsia-300 text-xs font-mono font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FEATURED UI/UX PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Crafted Interfaces &amp; Design Systems
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              From manual paper wireframes to luxury real estate portals and complete mobile telemedicine apps. Designed in Figma with pixel-precision and user-centered clarity.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>6 Key Flagship Design Systems</span>
          </div>
        </div>

        {/* 6 Spotlight Visual Showcase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Velora Estates Luxury Living */}
          {velora && (
            <div
              onClick={() => onSelectProject(velora)}
              className="project-card-interactive group cursor-pointer rounded-3xl p-5 glass-panel border border-white/10 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl hover:shadow-amber-500/10"
            >
              {/* Visual Mockup Container */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-b from-[#121624] to-[#080b14] border border-white/10 p-3 flex flex-col justify-between mb-5">
                <div className="flex items-center justify-between text-[11px] font-mono text-amber-300/80">
                  <span className="flex items-center gap-1.5 font-bold">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    VELORA ESTATES
                  </span>
                  <span className="text-slate-400">Luxury Living</span>
                </div>

                {/* Dark Luxury UI Preview Representation */}
                <div className="my-auto text-center space-y-1.5">
                  <div className="text-[10px] uppercase tracking-widest text-amber-200/70">Exclusive Residences</div>
                  <div className="text-base sm:text-lg font-extrabold text-white font-heading">
                    Redefining Luxury Living
                  </div>
                  <div className="flex items-center justify-center gap-2 text-[10px] text-slate-300 pt-1">
                    <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10">70+ Sold</span>
                    <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10">100+ Rented</span>
                    <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10">★ 4.9 Rating</span>
                  </div>
                </div>

                {/* Villa bellavista chip */}
                <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] text-slate-400">
                  <span>Villa Bellavista · Lucente Mansion</span>
                  <span className="text-amber-300 group-hover:translate-x-0.5 transition-transform">Explore →</span>
                </div>
              </div>

              {/* Text Info */}
              <div className="text-left">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono text-amber-400 font-semibold">{velora.code} · {velora.category}</span>
                  <span className="text-[11px] text-slate-400">Design System</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {velora.title}
                </h3>
                <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                  {velora.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {velora.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Card 2: EMAAR Dubai Live Platform */}
          {emaar && (
            <div
              onClick={() => onSelectProject(emaar)}
              className="project-card-interactive group cursor-pointer rounded-3xl p-5 glass-panel border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl hover:shadow-emerald-500/10"
            >
              {/* Visual Mockup Container */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-b from-[#0e1d24] to-[#071116] border border-white/10 p-3 flex flex-col justify-between mb-5">
                <div className="flex items-center justify-between text-[11px] font-mono text-emerald-300/80">
                  <span className="flex items-center gap-1.5 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    EMAAR DUBAI
                  </span>
                  <span className="text-emerald-400 font-semibold">LIVE WEB APP ↗</span>
                </div>

                <div className="my-auto text-center space-y-1.5">
                  <div className="text-[10px] uppercase tracking-wider text-emerald-300/70">Leading Real Estate Developer</div>
                  <div className="text-base sm:text-lg font-extrabold text-white font-heading">
                    Vida Residences — Dubai Hills
                  </div>
                  <div className="text-[11px] text-slate-300">
                    Downtown Dubai · Emaar South · The Oasis
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] text-slate-400">
                  <span className="truncate max-w-[180px]">webdevproject-realestate.web.app</span>
                  <span className="text-emerald-300 flex items-center gap-0.5">
                    Live <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="text-left">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono text-emerald-400 font-semibold">{emaar.code} · {emaar.category}</span>
                  <span className="text-[11px] text-emerald-300 font-medium">Production Live</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {emaar.title}
                </h3>
                <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                  {emaar.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {emaar.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Card 3: Medisync Healthcare & Doctor Booking */}
          {medisync && (
            <div
              onClick={() => onSelectProject(medisync)}
              className="project-card-interactive group cursor-pointer rounded-3xl p-5 glass-panel border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl hover:shadow-blue-500/10"
            >
              {/* Visual Mockup Container */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-b from-[#131b33] to-[#0a0f1f] border border-white/10 p-3 flex flex-col justify-between mb-5">
                <div className="flex items-center justify-between text-[11px] font-mono text-blue-300/80">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Stethoscope className="w-3.5 h-3.5 text-blue-400" />
                    MEDISYNC
                  </span>
                  <span className="text-slate-400">Mobile Telehealth</span>
                </div>

                <div className="my-auto text-center space-y-1.5">
                  <div className="text-[10px] uppercase tracking-widest text-blue-200/70">Find The Best Doctor</div>
                  <div className="text-base sm:text-lg font-extrabold text-white font-heading">
                    Prof. Dr. Jan Foster
                  </div>
                  <div className="flex items-center justify-center gap-2 text-[10px] text-slate-300 pt-1">
                    <span className="px-2 py-0.5 rounded bg-blue-950/60 border border-blue-800/40">Cardiologist</span>
                    <span className="px-2 py-0.5 rounded bg-blue-950/60 border border-blue-800/40">★ 4.9 (1.2k)</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-800/40">Available Today</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] text-slate-400">
                  <span>Splash · Auth · Appointment Flow</span>
                  <span className="text-blue-300 group-hover:translate-x-0.5 transition-transform">Details →</span>
                </div>
              </div>

              {/* Text Info */}
              <div className="text-left">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono text-blue-400 font-semibold">{medisync.code} · {medisync.category}</span>
                  <span className="text-[11px] text-slate-400">Mobile UI/UX</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                  {medisync.title}
                </h3>
                <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                  {medisync.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {medisync.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Card 4: CookSpecial Recipe & Ingredients Discovery */}
          {cookspecial && (
            <div
              onClick={() => onSelectProject(cookspecial)}
              className="project-card-interactive group cursor-pointer rounded-3xl p-5 glass-panel border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl hover:shadow-orange-500/10"
            >
              {/* Visual Mockup Container */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-b from-[#25150f] to-[#120a07] border border-white/10 p-3 flex flex-col justify-between mb-5">
                <div className="flex items-center justify-between text-[11px] font-mono text-orange-300/80">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Utensils className="w-3.5 h-3.5 text-orange-400" />
                    COOKSPECIAL
                  </span>
                  <span className="text-slate-400">Wireframe → UI</span>
                </div>

                <div className="my-auto text-center space-y-1.5">
                  <div className="text-[10px] uppercase tracking-widest text-orange-200/70">Cook Special Every Day</div>
                  <div className="text-base sm:text-lg font-extrabold text-white font-heading">
                    Let's Find Delicious Food!
                  </div>
                  <div className="flex items-center justify-center gap-2 text-[10px] text-slate-300 pt-1">
                    <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10">Korean Ramen</span>
                    <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10">Cheese Pasta</span>
                    <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10">Cocoa Muffins</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] text-slate-400">
                  <span>Pantry Search · Categories · Cooking Steps</span>
                  <span className="text-orange-300 group-hover:translate-x-0.5 transition-transform">Details →</span>
                </div>
              </div>

              {/* Text Info */}
              <div className="text-left">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono text-orange-400 font-semibold">{cookspecial.code} · {cookspecial.category}</span>
                  <span className="text-[11px] text-slate-400">Wireframe to High-Fi</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-orange-300 transition-colors">
                  {cookspecial.title}
                </h3>
                <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                  {cookspecial.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {cookspecial.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Card 5: Globegears Travel App */}
          {globegears && (
            <div
              onClick={() => onSelectProject(globegears)}
              className="project-card-interactive group cursor-pointer rounded-3xl p-5 glass-panel border border-white/10 hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl hover:shadow-teal-500/10"
            >
              {/* Visual Mockup Container */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-b from-[#0d2222] to-[#071313] border border-white/10 p-3 flex flex-col justify-between mb-5">
                <div className="flex items-center justify-between text-[11px] font-mono text-teal-300/80">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Compass className="w-3.5 h-3.5 text-teal-400" />
                    GLOBEGEARS
                  </span>
                  <span className="text-slate-400">Travel Companion</span>
                </div>

                <div className="my-auto text-center space-y-1.5">
                  <div className="text-[10px] uppercase tracking-widest text-teal-200/70">World Explorer</div>
                  <div className="text-base sm:text-lg font-extrabold text-white font-heading">
                    Explore The Beautiful World
                  </div>
                  <div className="flex items-center justify-center gap-2 text-[10px] text-slate-300 pt-1">
                    <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10">Rome</span>
                    <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10">Dubai</span>
                    <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10">London</span>
                    <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10">Bangkok</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] text-slate-400">
                  <span>Itinerary Planner · City Guides · Flights</span>
                  <span className="text-teal-300 group-hover:translate-x-0.5 transition-transform">Details →</span>
                </div>
              </div>

              {/* Text Info */}
              <div className="text-left">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono text-teal-400 font-semibold">{globegears.code} · {globegears.category}</span>
                  <span className="text-[11px] text-slate-400">Mobile Travel UX</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                  {globegears.title}
                </h3>
                <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                  {globegears.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {globegears.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Card 6: E-Study EdTech & Checkout System */}
          {estudy && (
            <div
              onClick={() => onSelectProject(estudy)}
              className="project-card-interactive group cursor-pointer rounded-3xl p-5 glass-panel border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl hover:shadow-cyan-500/10"
            >
              {/* Visual Mockup Container */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-b from-[#0c1c24] to-[#061014] border border-white/10 p-3 flex flex-col justify-between mb-5">
                <div className="flex items-center justify-between text-[11px] font-mono text-cyan-300/80">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Layers className="w-3.5 h-3.5 text-cyan-400" />
                    E-STUDY
                  </span>
                  <span className="text-slate-400">EdTech &amp; Checkout</span>
                </div>

                <div className="my-auto text-center space-y-1.5">
                  <div className="text-[10px] uppercase tracking-widest text-cyan-200/70">Course Cart &amp; Payment</div>
                  <div className="text-base sm:text-lg font-extrabold text-white font-heading">
                    User Interface Design &amp; ML
                  </div>
                  <div className="flex items-center justify-center gap-2 text-[10px] text-slate-300 pt-1">
                    <span className="px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-800/40">Credit Card</span>
                    <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10">PayPal</span>
                    <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10">1-Tap Receipt</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] text-slate-400">
                  <span>Auth · Shopping Cart · Multi-Method Checkout</span>
                  <span className="text-cyan-300 group-hover:translate-x-0.5 transition-transform">Details →</span>
                </div>
              </div>

              {/* Text Info */}
              <div className="text-left">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono text-cyan-400 font-semibold">{estudy.code} · {estudy.category}</span>
                  <span className="text-[11px] text-slate-400">Fintech &amp; EdTech</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {estudy.title}
                </h3>
                <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                  {estudy.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {estudy.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
