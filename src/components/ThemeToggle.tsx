import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial preference from localStorage or root class
    const savedTheme = localStorage.getItem('mas-portfolio-theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('mas-portfolio-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('mas-portfolio-theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to Light Creative Mode' : 'Switch to Dark Luxury Mode'}
      title={isDark ? 'Switch to Light Creative Mode' : 'Switch to Dark Luxury Mode'}
      className="relative p-2 rounded-xl border border-white/10 dark:border-white/10 bg-white/5 dark:bg-white/5 hover:bg-white/10 text-slate-300 dark:text-slate-300 hover:text-white transition-all cursor-pointer flex items-center justify-center"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-cyan-400 transition-transform hover:-rotate-12" />
      )}
    </button>
  );
};
