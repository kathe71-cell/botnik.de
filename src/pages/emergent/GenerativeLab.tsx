import React, { useState, useEffect, useRef } from 'react';
import { DynamicModule, BotnikState } from '../../types';

interface GenerativeLabProps {
  module: DynamicModule;
  state: BotnikState;
}

export const GenerativeLab: React.FC<GenerativeLabProps> = ({ module, state }) => {
  const [nodes, setNodes] = useState<number>(6);
  const [phaseMod, setPhaseMod] = useState<number>(1.618);
  const [damping, setDamping] = useState<number>(0.98);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.fillStyle = 'rgba(250, 249, 246, 0.25)';
      ctx.fillRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.min(w, h) * 0.36;

      t += 0.01;

      ctx.save();
      ctx.translate(cx, cy);

      ctx.beginPath();
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = '#0f172a';

      for (let i = 0; i <= 360; i += 2) {
        const rad = (i * Math.PI) / 180;
        const r = radius * (0.8 + 0.2 * Math.sin(rad * nodes + t * phaseMod) * damping);
        const x = Math.cos(rad) * r;
        const y = Math.sin(rad) * r;

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [nodes, phaseMod, damping]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      <div className="space-y-3">
        <div className="inline-flex items-center space-x-2 text-xs font-mono text-stone-500 bg-stone-200/60 px-3 py-1 rounded-full">
          <span>Emergentes Modul</span>
          <span>·</span>
          <span>Archetyp: Generative Lab</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
          {module.title}
        </h1>
        <p className="text-base text-stone-600 leading-relaxed">
          {module.description}
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-6">
        <div className="relative aspect-[16/9] bg-stone-50 rounded-xl overflow-hidden border border-stone-200">
          <canvas ref={canvasRef} className="w-full h-full block" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs">
          <div>
            <label className="block text-stone-700 font-bold mb-1">
              Harmonische Knoten: {nodes}
            </label>
            <input
              type="range"
              min="2"
              max="16"
              value={nodes}
              onChange={(e) => setNodes(parseInt(e.target.value))}
              className="w-full h-2 bg-stone-200 rounded accent-slate-900"
            />
          </div>
          <div>
            <label className="block text-stone-700 font-bold mb-1">
              Phasen-Modulation: {phaseMod.toFixed(2)}
            </label>
            <input
              type="range"
              min="0.5"
              max="4.0"
              step="0.1"
              value={phaseMod}
              onChange={(e) => setPhaseMod(parseFloat(e.target.value))}
              className="w-full h-2 bg-stone-200 rounded accent-amber-600"
            />
          </div>
          <div>
            <label className="block text-stone-700 font-bold mb-1">
              Dämpfungs-Faktor: {damping.toFixed(2)}
            </label>
            <input
              type="range"
              min="0.2"
              max="1.5"
              step="0.05"
              value={damping}
              onChange={(e) => setDamping(parseFloat(e.target.value))}
              className="w-full h-2 bg-stone-200 rounded accent-emerald-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
