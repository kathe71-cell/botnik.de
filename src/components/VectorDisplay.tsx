import React from 'react';
import { StateVector } from '../types';

interface VectorDisplayProps {
  vector: StateVector;
}

export const VectorDisplay: React.FC<VectorDisplayProps> = ({ vector }) => {
  const metrics = [
    {
      key: 'entropy',
      label: 'Entropie-Rate',
      desc: 'Fluktuationsgrad und innere Unruhe des Zustands',
      value: vector.entropy,
      formatted: `${Math.round(vector.entropy * 100)} %`,
      accent: 'bg-amber-500'
    },
    {
      key: 'resonance',
      label: 'Resonanz-Frequenz',
      desc: 'Reaktivität auf eingehende äußere Resonanzimpulse',
      value: vector.resonance,
      formatted: `${Math.round(vector.resonance * 100)} %`,
      accent: 'bg-emerald-600'
    },
    {
      key: 'divergence',
      label: 'Divergenz-Drang',
      desc: 'Tendenz zur Mutation vs. Konsolidierung bisheriger Formen',
      value: vector.divergence,
      formatted: `${Math.round(vector.divergence * 100)} %`,
      accent: 'bg-indigo-600'
    },
    {
      key: 'density',
      label: 'Struktur-Dichte',
      desc: 'Komplexitätsgrad der geometrischen und syntaktischen Konstrukte',
      value: vector.density,
      formatted: `${Math.round(vector.density * 100)} %`,
      accent: 'bg-slate-900'
    }
  ];

  return (
    <div className="bg-white rounded-2xl border border-stone-200/90 p-5 sm:p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-100 mb-5">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-stone-500 font-semibold">
            Kybernetischer Zustandsvektor
          </h3>
          <p className="text-sm font-bold text-slate-900 mt-0.5">
            Aktuelle Vektorenmatrix des Systems
          </p>
        </div>
        <div className="mt-2 sm:mt-0 font-mono text-xs px-2.5 py-1 rounded bg-stone-100 text-stone-800 border border-stone-200">
          Harmonische Basis φ: <span className="font-bold">{vector.harmonicRatio.toFixed(3)}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <div key={m.key} className="bg-stone-50/80 rounded-xl p-3.5 border border-stone-200/60">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="font-mono text-stone-600 font-medium">{m.label}</span>
              <span className="font-mono font-bold text-slate-950">{m.formatted}</span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden my-2">
              <div
                className={`h-full rounded-full transition-all duration-700 ${m.accent}`}
                style={{ width: `${m.value * 100}%` }}
              />
            </div>

            <p className="text-[11px] text-stone-500 leading-tight">
              {m.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
