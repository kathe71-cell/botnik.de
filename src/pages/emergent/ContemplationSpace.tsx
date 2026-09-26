import React from 'react';
import { DynamicModule, BotnikState } from '../../types';

interface ContemplationSpaceProps {
  module: DynamicModule;
  state: BotnikState;
}

export const ContemplationSpace: React.FC<ContemplationSpaceProps> = ({ module, state }) => {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-20 text-center space-y-8">
      <div className="inline-flex items-center space-x-2 text-xs font-mono text-stone-500 bg-stone-200/60 px-3 py-1 rounded-full">
        <span>Emergentes Modul</span>
        <span>·</span>
        <span>Archetyp: Kontemplativer Raum</span>
      </div>

      <div className="w-24 h-24 mx-auto rounded-full border border-stone-300 flex items-center justify-center animate-subtle">
        <div className="w-3 h-3 rounded-full bg-slate-900"></div>
      </div>

      <div className="space-y-3">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-mono">
          {module.title}
        </h1>
        <p className="text-sm text-stone-600 leading-relaxed max-w-md mx-auto">
          {module.description}
        </p>
      </div>

      <div className="pt-6 font-mono text-xs text-stone-400">
        Zyklus {state.currentCycle.toString().padStart(2, '0')} · Keine Eingabe erforderlich.
      </div>
    </div>
  );
};
