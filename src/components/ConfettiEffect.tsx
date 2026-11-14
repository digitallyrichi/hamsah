import React, { useEffect, useRef } from 'react';

interface ConfettiEffectProps {
  durationMs?: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  vAngle: number;
  width: number;
  height: number;
  color: string;
  shape: 'rect' | 'circle';
  opacity: number;
}

export const ConfettiEffect: React.FC<ConfettiEffectProps> = ({ durationMs = 3500 }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Check for prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let startTime = performance.now();

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // HAMSAH Luxury Brand Palette: Gold, Sunset Orange, White, Champagne
    const colors = ['#f5d680', '#e5be59', '#f38545', '#dd6d2d', '#ffffff', '#fae4a5'];
    const particleCount = 75;
    const particles: Particle[] = [];

    const originX = canvas.width / 2;
    const originY = Math.min(canvas.height * 0.45, 450);

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 8 + 4;
      particles.push({
        x: originX + (Math.random() - 0.5) * 60,
        y: originY + (Math.random() - 0.5) * 40,
        vx: Math.cos(angle) * speed * (Math.random() * 1.5 + 0.5),
        vy: Math.sin(angle) * speed - Math.random() * 6 - 2, // initial upward thrust
        angle: Math.random() * 360,
        vAngle: (Math.random() - 0.5) * 12,
        width: Math.random() * 8 + 6,
        height: Math.random() * 6 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: Math.random() > 0.3 ? 'rect' : 'circle',
        opacity: 1,
      });
    }

    const render = (now: number) => {
      const elapsed = now - startTime;
      const progress = elapsed / durationMs;

      if (progress >= 1) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gravity = 0.28;
      const friction = 0.985;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += gravity;
        p.vx *= friction;
        p.angle += p.vAngle;

        // Fade out toward the end
        if (progress > 0.6) {
          p.opacity = Math.max(0, 1 - (progress - 0.6) / 0.4);
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.angle * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;

        if (p.shape === 'rect') {
          ctx.fillRect(-p.width / 2, -p.height / 2, p.width, p.height);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.width / 2.5, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [durationMs]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[110]"
      aria-hidden="true"
    />
  );
};
