import React, { useEffect, useRef } from 'react';

/**
 * A beautiful, animated particle network that visually represents 
 * "connecting people across the globe".
 */
const CanvasNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: { x: number, y: number, vx: number, vy: number, radius: number }[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      // Calculate particle count based on screen size so it's not too dense on mobile
      const numParticles = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 12000), 120); 
      
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          radius: Math.random() * 1.5 + 0.5,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update positions
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off walls
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Draw particle dot
        ctx.fillStyle = 'rgba(0, 153, 204, 0.6)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connecting lines if close enough
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 140; // The threshold distance to draw a connecting line

          if (dist < maxDist) {
            // Opacity scales based on distance so lines fade in/out smoothly
            const opacity = 0.25 * (1 - dist / maxDist);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 153, 204, ${opacity})`;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60 mix-blend-screen" />;
};

interface GlobalBackgroundProps {
  /**
   * Choose which visual variant to display.
   * Options mirror those from PageHero.
   */
  variant?: 'floating-orbs' | 'aurora' | 'particles' | 'mesh' | 'waves' | 'bubbles' | 'default';
}

const getBackgroundElements = (variant: string) => {
  switch (variant) {
    case 'particles':
      // The new interactive network canvas!
      return <CanvasNetwork />;
    case 'floating-orbs':
      return (
        <>
          <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] animate-pulse" style={{ animation: 'float-orb-1 15s ease-in-out infinite' }} />
          <div className="absolute top-40 right-1/4 w-[350px] h-[350px] bg-secondary/15 rounded-full blur-[100px]" style={{ animation: 'float-orb-2 18s ease-in-out infinite' }} />
          <div className="absolute bottom-10 left-1/3 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[90px]" style={{ animation: 'float-orb-3 12s ease-in-out infinite' }} />
        </>
      );
    case 'aurora':
      return (
        <>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 -left-1/2 w-full h-96 bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-3xl" style={{ animation: 'aurora-wave 8s ease-in-out infinite' }} />
            <div className="absolute top-1/3 -left-1/2 w-full h-80 bg-gradient-to-r from-transparent via-secondary/20 to-transparent blur-3xl" style={{ animation: 'aurora-wave 10s ease-in-out infinite 2s' }} />
          </div>
        </>
      );
    case 'mesh':
      return (
        <>
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px] mix-blend-screen" style={{ animation: 'mesh-shift 20s ease-in-out infinite' }} />
          <div className="absolute -top-40 right-1/4 w-[450px] h-[450px] bg-secondary/12 rounded-full blur-[130px] mix-blend-screen" style={{ animation: 'mesh-shift 15s ease-in-out infinite 3s' }} />
          <div className="absolute bottom-0 left-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] mix-blend-screen" style={{ animation: 'mesh-shift 18s ease-in-out infinite 1.5s' }} />
        </>
      );
    case 'waves':
      return (
        <>
          <div className="absolute top-1/3 left-0 right-0 h-48 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent blur-2xl" style={{ animation: 'wave-motion 6s ease-in-out infinite' }} />
          <div className="absolute top-1/2 left-0 right-0 h-40 bg-gradient-to-b from-secondary/15 via-secondary/5 to-transparent blur-2xl" style={{ animation: 'wave-motion 8s ease-in-out infinite 1s', animationDirection: 'reverse' }} />
        </>
      );
    case 'bubbles':
      return (
        <>
          <div className="absolute left-1/4 bottom-0 w-32 h-32 border border-primary/30 rounded-full" style={{ animation: 'bubble-rise 8s ease-out infinite' }} />
          <div className="absolute left-1/3 bottom-0 w-24 h-24 border border-secondary/25 rounded-full" style={{ animation: 'bubble-rise 10s ease-out infinite 1s' }} />
          <div className="absolute right-1/4 bottom-0 w-28 h-28 border border-accent/20 rounded-full" style={{ animation: 'bubble-rise 9s ease-out infinite 0.5s' }} />
          <div className="absolute right-1/3 bottom-0 w-20 h-20 border border-primary/20 rounded-full" style={{ animation: 'bubble-rise 11s ease-out infinite 1.5s' }} />
        </>
      );
    default:
      // default subtle glow
      return <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-secondary/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />;
  }
};

export const GlobalBackground: React.FC<GlobalBackgroundProps> = ({ variant = 'particles' }) => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[40]">
      {getBackgroundElements(variant)}
    </div>
  );
};
