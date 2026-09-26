import React, { useEffect, useRef } from 'react';
import { Artifact, StateVector } from '../types';

interface HarmonicCanvasProps {
  artifact: Artifact;
  vector: StateVector;
  interactive?: boolean;
}

export const HarmonicCanvas: React.FC<HarmonicCanvasProps> = ({
  artifact,
  vector,
  interactive = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
        active: true
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const { visualParameters } = artifact;
    const { speed, baseWave, harmonics, geometryType } = visualParameters;

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      // Weicher Hintergrund-Glow
      const bgGrad = ctx.createRadialGradient(
        w / 2, h / 2, 10,
        w / 2, h / 2, Math.max(w, h) * 0.7
      );
      bgGrad.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
      bgGrad.addColorStop(1, 'rgba(245, 245, 240, 0.4)');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      // Mausinteraktions-Einfluss
      const mx = mouseRef.current.active ? (mouseRef.current.x - 0.5) * 2 : 0;
      const my = mouseRef.current.active ? (mouseRef.current.y - 0.5) * 2 : 0;

      const centerX = w / 2;
      const centerY = h / 2;
      const radius = Math.min(w, h) * 0.38;

      time += 0.015 * speed;

      ctx.save();
      ctx.translate(centerX, centerY);

      // Zeichnen je nach Geometrie-Typ
      if (geometryType === 'lissajous') {
        const lines = 4;
        for (let l = 0; l < lines; l++) {
          const lPhase = l * (Math.PI / 4) + time * 0.5;
          ctx.beginPath();
          ctx.lineWidth = 1.4;
          ctx.strokeStyle = l === 0 ? 'rgba(15, 23, 42, 0.85)' : `rgba(217, 119, 6, ${0.4 - l * 0.08})`;

          const steps = 300;
          for (let i = 0; i <= steps; i++) {
            const t = (i / steps) * Math.PI * 2;
            const freqX = baseWave + (harmonics[1] || 2) * 0.2 + mx * 0.5;
            const freqY = (harmonics[0] || 1) * 2 + vector.harmonicRatio + my * 0.5;

            const x = Math.sin(t * freqX + time + lPhase) * radius * (1 - vector.entropy * 0.2);
            const y = Math.cos(t * freqY + lPhase) * radius * (1 - vector.entropy * 0.2);

            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      } else {
        // Spiral / Hyperbolic Harmonic Wave
        const coils = 5;
        ctx.beginPath();
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = 'rgba(15, 23, 42, 0.8)';

        const totalPoints = 400;
        for (let i = 0; i < totalPoints; i++) {
          const angle = (i / totalPoints) * Math.PI * 2 * coils + time;
          const r = (i / totalPoints) * radius + Math.sin(angle * (harmonics[0] || 2) + time) * 12 * vector.resonance;
          const x = Math.cos(angle) * r;
          const y = Math.sin(angle) * r;

          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Orbital-Punkte / Resonanz-Partikel
      const particleTotal = Math.min(60, visualParameters.particleCount);
      for (let p = 0; p < particleTotal; p++) {
        const pAngle = (p / particleTotal) * Math.PI * 2 + time * (p % 2 === 0 ? 0.3 : -0.2);
        const pDist = radius * (0.6 + 0.35 * Math.sin(pAngle * 2 + time));
        const px = Math.cos(pAngle) * pDist;
        const py = Math.sin(pAngle) * pDist;

        ctx.beginPath();
        const pSize = (p % 3 === 0 ? 2.5 : 1.5);
        ctx.arc(px, py, pSize, 0, Math.PI * 2);
        ctx.fillStyle = p % 2 === 0 ? '#0f172a' : '#d97706';
        ctx.fill();
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [artifact, vector, interactive]);

  return (
    <div className="relative w-full aspect-[16/10] sm:aspect-[2/1] rounded-2xl overflow-hidden border border-stone-300/80 bg-white shadow-sm flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-crosshair"
      />
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-stone-500 pointer-events-none">
        <span className="bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded border border-stone-200">
          Modus: {artifact.visualParameters.geometryType.toUpperCase()} · Freq: {artifact.visualParameters.baseWave}Hz
        </span>
        <span className="hidden sm:inline bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded border border-stone-200">
          φ = {vector.harmonicRatio.toFixed(3)}
        </span>
      </div>
    </div>
  );
};
