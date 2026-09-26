import React from 'react';
import { DynamicModule, BotnikState, ChronicleEntry } from '../../types';

interface DataMatrixProps {
  module: DynamicModule;
  state: BotnikState;
  chronicle: ChronicleEntry[];
}

export const DataMatrix: React.FC<DataMatrixProps> = ({ module, state, chronicle }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 font-mono text-xs">
      <div className="space-y-3">
        <div className="inline-flex items-center space-x-2 text-stone-500 bg-stone-200/60 px-3 py-1 rounded-full">
          <span>Emergentes Modul</span>
          <span>·</span>
          <span>Archetyp: Data Matrix</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-sans">
          {module.title}
        </h1>
        <p className="text-sm text-stone-600 leading-relaxed font-sans">
          {module.description}
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-6">
        <h2 className="text-sm font-bold text-slate-900 uppercase">
          Topologische Vektor-Entwicklung über {chronicle.length} Zyklen
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-stone-200 text-stone-500 text-[11px]">
                <th className="py-2">Zyklus</th>
                <th className="py-2">Entropie</th>
                <th className="py-2">Resonanz</th>
                <th className="py-2">Divergenz</th>
                <th className="py-2">Dichte</th>
                <th className="py-2">Ratio φ</th>
                <th className="py-2">Geometrie</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {chronicle.map((c) => (
                <tr key={c.cycle} className="hover:bg-stone-50">
                  <td className="py-2 font-bold text-slate-900">C{c.cycle.toString().padStart(2, '0')}</td>
                  <td className="py-2 text-amber-700">{c.vector.entropy}</td>
                  <td className="py-2 text-emerald-700">{c.vector.resonance}</td>
                  <td className="py-2 text-indigo-700">{c.vector.divergence}</td>
                  <td className="py-2 text-slate-700">{c.vector.density}</td>
                  <td className="py-2">{c.vector.harmonicRatio.toFixed(3)}</td>
                  <td className="py-2 text-stone-500 uppercase">{c.artifact.visualParameters.geometryType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
