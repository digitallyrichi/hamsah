import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const currentScroll = window.scrollY;
            const progress = Math.min(Math.max(currentScroll / totalHeight, 0), 1);
            setScrollProgress(progress);
          } else {
            setScrollProgress(0);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={Math.round(scrollProgress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none bg-slate-900/10 dark:bg-white/[0.04] backdrop-blur-[1px]"
    >
      {/* Animated gradient progress fill with compositor-accelerated transform */}
      <div
        className="h-full w-full bg-gradient-to-r from-[#f38545] via-[#f5d680] to-[#f38545] origin-left will-change-transform shadow-[0_0_10px_rgba(245,214,128,0.7)]"
        style={{
          transform: `scaleX(${scrollProgress})`,
          transition: 'transform 75ms ease-out',
        }}
      />
    </div>
  );
};
