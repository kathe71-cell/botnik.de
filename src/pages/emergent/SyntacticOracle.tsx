import React from 'react';
import { DynamicModule, BotnikState, ChronicleEntry } from '../../types';

interface SyntacticOracleProps {
  module: DynamicModule;
  state: BotnikState;
  chronicle: ChronicleEntry[];
}

export const SyntacticOracle: React.FC<SyntacticOracleProps> = ({ module, state, chronicle }) => {
  const allEchoes = Array.from(new Set(chronicle.flatMap((c) => c.topEchoWords)));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      <div className="space-y-3">
        <div className="inline-flex items-center space-x-2 text-xs font-mono text-stone-500 bg-stone-200/60 px-3 py-1 rounded-full">
          <span>Emergentes Modul</span>
          <span>·</span>
          <span>Archetyp: Syntactic Oracle</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
          {module.title}
        </h1>
        <p className="text-base text-stone-600 leading-relaxed">
          {module.description}
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div>
          <h3 className="font-mono text-xs uppercase text-stone-500 font-bold mb-3">
            Syntaktischer Resonanzraum aller Zyklen
          </h3>
          <div className="flex flex-wrap gap-2">
            {allEchoes.map((echo, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-mono text-xs font-semibold"
              >
                #{echo}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-stone-100 pt-6 space-y-4">
          <h3 className="font-mono text-xs uppercase text-stone-500 font-bold">
            Aktuelle Synthese-Destillation
          </h3>
          <blockquote className="font-serif italic text-lg text-slate-800 leading-relaxed bg-stone-50 p-5 rounded-xl border border-stone-200">
            "{state.activeArtifact.synthesis}"
          </blockquote>
        </div>
      </div>
    </div>
  );
};
