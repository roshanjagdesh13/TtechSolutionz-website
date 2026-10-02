import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  color: string;
  pulsePhase: number;
}

const COLORS = [
  'rgba(6,182,212,',   // cyan
  'rgba(99,102,241,',  // indigo
  'rgba(20,184,166,',  // teal
  'rgba(59,130,246,',  // blue
];

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLowPerf, setIsLowPerf] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { 
      alpha: true,
      desynchronized: true, // Better performance
    });
    if (!ctx) return;

    let animId = 0;
    let particles: Particle[] = [];
    let lastTime = performance.now();
    let fps = 60;
    let frameCount = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.min(window.innerHeight * 2, document.documentElement.scrollHeight);
    };
    resize();

    const spawnParticles = () => {
      particles = [];
      // Reduce particle count by 60%
      const count = Math.floor((canvas.width * canvas.height) / 45000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 0.5,
          alpha: Math.random() * 0.5 + 0.2,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };
    spawnParticles();

    // Performance monitoring
    setInterval(() => {
      if (fps < 30) {
        setIsLowPerf(true);
      }
    }, 3000);

    let t = 0;
    const draw = () => {
      const now = performance.now();
      const delta = now - lastTime;
      lastTime = now;
      
      // Calculate FPS
      frameCount++;
      if (frameCount % 60 === 0) {
        fps = 1000 / delta;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.01;

      // Draw aurora blobs (simplified - only 2 instead of 3)
      if (!isLowPerf) {
        const blobs = [
          { x: canvas.width * 0.2, y: canvas.height * 0.1, r: canvas.width * 0.3, color: 'rgba(6,182,212,0.035)' },
          { x: canvas.width * 0.8, y: canvas.height * 0.15, r: canvas.width * 0.25, color: 'rgba(99,102,241,0.03)' },
        ];

        blobs.forEach((blob, i) => {
          const ox = Math.sin(t + i * 1.7) * canvas.width * 0.03;
          const oy = Math.cos(t + i * 2.1) * canvas.height * 0.02;
          const grad = ctx.createRadialGradient(blob.x + ox, blob.y + oy, 0, blob.x + ox, blob.y + oy, blob.r);
          grad.addColorStop(0, blob.color);
          grad.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(blob.x + ox, blob.y + oy, blob.r, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      // Skip connection lines in low performance mode
      if (!isLowPerf) {
        // Only draw connections for nearby particles (optimization)
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < Math.min(i + 5, particles.length); j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 100) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(6,182,212,${(1 - dist / 100) * 0.06})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }

      // Draw + animate particles (removed mouse interaction for performance)
      particles.forEach((p) => {
        // Velocity damping
        p.vx *= 0.99;
        p.vy *= 0.99;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < -5) p.x = canvas.width + 5;
        if (p.x > canvas.width + 5) p.x = -5;
        if (p.y < -5) p.y = canvas.height + 5;
        if (p.y > canvas.height + 5) p.y = -5;

        const pulse = Math.sin(t * 2 + p.pulsePhase) * 0.15 + 0.85;
        const a = p.alpha * pulse;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${a})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      resize();
      spawnParticles();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isLowPerf]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
    />
  );
};
