import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', showLabel = false }) => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`group relative inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
        isDark
          ? 'bg-[#141f2d] border-white/15 text-slate-300 hover:text-white hover:border-[#f5d680]'
          : 'bg-white border-slate-300 text-slate-700 hover:text-slate-950 hover:border-amber-600 shadow-sm'
      } ${className}`}
      aria-label={isDark ? 'Switch to High-Contrast Light Mode' : 'Switch to Executive Dark Mode'}
      title={isDark ? 'Switch to High-Contrast Light Mode' : 'Switch to Executive Dark Mode'}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-3.5 h-3.5 text-[#f5d680] group-hover:rotate-45 transition-transform" />
        ) : (
          <Moon className="w-3.5 h-3.5 text-slate-800 group-hover:-rotate-12 transition-transform" />
        )}
      </div>
      {showLabel && (
        <span className="whitespace-nowrap">
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </span>
      )}
    </button>
  );
};
