import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isProjectCard, setIsProjectCard] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop devices with fine pointer
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, input, textarea, [role="button"]');
      const projectCard = target.closest('.project-card-interactive');

      setIsHovered(!!interactive);
      setIsProjectCard(!!projectCard);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300">
      {/* Outer Follower Ring */}
      <div
        className={`fixed -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-150 ease-out flex items-center justify-center ${
          isProjectCard
            ? 'w-16 h-16 bg-cyan-500/20 border-cyan-400 text-[10px] font-bold tracking-widest text-cyan-200 backdrop-blur-xs scale-100'
            : isHovered
            ? 'w-12 h-12 bg-white/10 border-white/40 scale-100'
            : 'w-8 h-8 border-cyan-400/40 scale-75'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      >
        {isProjectCard && <span>VIEW</span>}
      </div>

      {/* Center Pin Point */}
      <div
        className={`fixed -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-75 ${
          isProjectCard ? 'scale-0' : 'w-1.5 h-1.5 bg-cyan-400 shadow-[0_0_8px_#38bdf8]'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      />
    </div>
  );
};
