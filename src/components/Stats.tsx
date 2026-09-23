import React, { useEffect, useRef, useState } from 'react';

interface StatItem {
  id: string;
  targetValue: number;
  suffix: string;
  label: string;
  subLabel: string;
  gradient: string;
}

const statsConfig: StatItem[] = [
  {
    id: 'projects',
    targetValue: 100,
    suffix: '+',
    label: 'Projects Completed',
    subLabel: 'Web, SaaS, AI & Mobile UI',
    gradient: 'from-cyan-400 to-blue-500'
  },
  {
    id: 'experience',
    targetValue: 6,
    suffix: '+',
    label: 'Years Experience',
    subLabel: 'Full-Stack & Digital Growth',
    gradient: 'from-violet-400 to-indigo-500'
  },
  {
    id: 'technologies',
    targetValue: 20,
    suffix: '+',
    label: 'Technologies Mastered',
    subLabel: 'React, Next.js, AI & Cloud',
    gradient: 'from-fuchsia-400 to-pink-500'
  },
  {
    id: 'markets',
    targetValue: 2,
    suffix: '',
    label: 'International Markets',
    subLabel: 'Pakistan + United Kingdom',
    gradient: 'from-emerald-400 to-teal-500'
  },
  {
    id: 'ai-products',
    targetValue: 10,
    suffix: '+',
    label: 'AI Products Built',
    subLabel: 'Gemini, RAG & Automations',
    gradient: 'from-amber-400 to-orange-500'
  },
  {
    id: 'industries',
    targetValue: 5,
    suffix: '+',
    label: 'Business Industries',
    subLabel: 'Real Estate, Health, EdTech...',
    gradient: 'from-blue-400 to-cyan-500'
  }
];

export const Stats: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    projects: 0,
    experience: 0,
    technologies: 0,
    markets: 0,
    'ai-products': 0,
    industries: 0
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate counters
          const duration = 1800;
          const startTime = performance.now();

          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // Ease out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);

            const newCounts: { [key: string]: number } = {};
            statsConfig.forEach((stat) => {
              newCounts[stat.id] = Math.floor(easeOutProgress * stat.targetValue);
            });

            setCounts(newCounts);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              // Ensure final exact values
              const finalCounts: { [key: string]: number } = {};
              statsConfig.forEach((stat) => {
                finalCounts[stat.id] = stat.targetValue;
              });
              setCounts(finalCounts);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="relative py-20 bg-[#050811] border-y border-white/10 overflow-hidden">
      {/* Subtle Background Lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
            Proven Track Record
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 font-heading">
            Engineering Impact at Scale
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Measurable results across high-performance web products, generative AI workflows, and cross-border client operations.
          </p>
        </div>

        {/* 6 Statistics Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {statsConfig.map((stat) => {
            const currentVal = counts[stat.id] ?? 0;
            return (
              <div
                key={stat.id}
                className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col items-center text-center group relative overflow-hidden"
              >
                {/* Glow pill behind number */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl group-hover:bg-cyan-500/25 transition-all" />

                {/* Animated Number */}
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-mono tabular-nums tracking-tight">
                  <span className={`bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {currentVal}
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <div className="text-xs sm:text-sm font-bold text-white mt-2 font-heading">
                  {stat.label}
                </div>

                {/* Subtitle */}
                <div className="text-[11px] text-slate-400 mt-1">
                  {stat.subLabel}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
