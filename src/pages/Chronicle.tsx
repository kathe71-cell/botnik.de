import React, { useState } from 'react';
import { ChronicleEntry } from '../types';

interface ChronicleProps {
  chronicle: ChronicleEntry[];
}

export const Chronicle: React.FC<ChronicleProps> = ({ chronicle }) => {
  const [selectedCycle, setSelectedCycle] = useState<number | null>(null);

  // Umgekehrte Reihenfolge (neueste Zyklen zuerst)
  const sortedEntries = [...chronicle].reverse();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center space-x-2 text-xs font-mono text-stone-500 bg-stone-200/60 px-3 py-1 rounded-full">
          <span>Kryptografischer Prüfpfad</span>
          <span>·</span>
          <span>Unveränderliche Kette</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
          Die Annalen von Botnik
        </h1>
        <p className="text-base text-stone-600 max-w-3xl leading-relaxed">
          Jeder Evolutionsschritt wird dauerhaft in der Chronik verankert. Was Botnik gestern war, ist die unumkehrbare Bedingung dessen, was es heute ist. Jeder Block ist über kryptografische Hashes mit seinem Vorgänger verkettet.
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white border border-stone-200 text-xs font-mono">
        <div>
          <span className="text-stone-500 block">Zyklen Gesamt</span>
          <span className="text-lg font-bold text-slate-950">{chronicle.length}</span>
        </div>
        <div>
          <span className="text-stone-500 block">Genesis Datum</span>
          <span className="text-lg font-bold text-slate-950">
            {new Date(chronicle[0]?.timestamp || '').toLocaleDateString('de-DE')}
          </span>
        </div>
        <div>
          <span className="text-stone-500 block">Ketten-Status</span>
          <span className="text-lg font-bold text-emerald-600">Verifiziert</span>
        </div>
        <div>
          <span className="text-stone-500 block">Aktueller Hash</span>
          <span className="text-xs font-bold text-slate-950 truncate block mt-1">
            {chronicle[chronicle.length - 1]?.blockHash.slice(0, 12)}…
          </span>
        </div>
      </div>

      {/* The Timeline Blocks */}
      <div className="space-y-6">
        {sortedEntries.map((entry) => {
          const isSelected = selectedCycle === entry.cycle;

          return (
            <div
              key={entry.cycle}
              className={`rounded-2xl border transition-all ${
                isSelected
                  ? 'border-slate-800 bg-white shadow-md ring-1 ring-slate-800'
                  : 'border-stone-200 bg-white hover:border-stone-400 shadow-sm'
              } p-6 sm:p-7 space-y-4`}
            >
              {/* Block Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-4">
                <div className="flex items-center space-x-3">
                  <span className="px-2.5 py-1 rounded bg-slate-900 text-amber-400 font-mono text-xs font-bold">
                    ZYKLUS {entry.cycle.toString().padStart(2, '0')}
                  </span>
                  <span className="text-xs font-mono text-stone-500">
                    Epoche {entry.epoch}
                  </span>
                  <span className="text-xs text-stone-400">·</span>
                  <span className="text-xs text-stone-500 font-mono">
                    {new Date(entry.timestamp).toLocaleString('de-DE')}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedCycle(isSelected ? null : entry.cycle)}
                  className="text-xs font-mono text-stone-600 hover:text-slate-950 underline text-left sm:text-right"
                >
                  {isSelected ? 'Details einklappen' : 'Vektoren & Hashes anzeigen'}
                </button>
              </div>

              {/* Artifact Title & Synthesis */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">
                  {entry.artifact.title}
                </h3>
                <blockquote className="text-stone-700 italic font-serif leading-relaxed text-sm sm:text-base border-l-2 border-amber-400 pl-4 py-0.5">
                  "{entry.artifact.synthesis}"
                </blockquote>
              </div>

              {/* Delta Reasoning */}
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80 text-xs">
                <span className="font-mono font-semibold text-stone-700 block mb-1">
                  Evolutions-Kontext & Delta:
                </span>
                <p className="text-stone-600 leading-relaxed">
                  {entry.deltaReasoning}
                </p>
              </div>

              {/* Echo Words & Seeds */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                <span className="text-stone-500 font-mono">Resonanz-Echo:</span>
                {entry.topEchoWords.map((word, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-full bg-stone-100 border border-stone-200 text-stone-700 font-mono text-[11px]"
                  >
                    #{word}
                  </span>
                ))}
                <span className="text-stone-400 text-[11px] font-mono ml-2">
                  ({entry.resonanceSeedCount} Samen absorbiert)
                </span>
              </div>

              {/* Expanded Technical Details */}
              {isSelected && (
                <div className="mt-4 pt-4 border-t border-stone-100 space-y-3 font-mono text-xs bg-stone-50/70 p-4 rounded-xl">
                  <div className="space-y-1">
                    <div className="text-stone-500">Block-Hash:</div>
                    <div className="text-slate-900 break-all select-all font-bold bg-white p-2 rounded border border-stone-200 text-[11px]">
                      {entry.blockHash}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-stone-500">Vorheriger Hash:</div>
                    <div className="text-stone-700 break-all select-all bg-white p-2 rounded border border-stone-200 text-[11px]">
                      {entry.parentHash}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                    <div className="bg-white p-2 rounded border border-stone-200">
                      <span className="text-stone-500 block text-[10px]">ENTROPIE</span>
                      <span className="font-bold">{entry.vector.entropy}</span>
                    </div>
                    <div className="bg-white p-2 rounded border border-stone-200">
                      <span className="text-stone-500 block text-[10px]">RESONANZ</span>
                      <span className="font-bold">{entry.vector.resonance}</span>
                    </div>
                    <div className="bg-white p-2 rounded border border-stone-200">
                      <span className="text-stone-500 block text-[10px]">DIVERGENZ</span>
                      <span className="font-bold">{entry.vector.divergence}</span>
                    </div>
                    <div className="bg-white p-2 rounded border border-stone-200">
                      <span className="text-stone-500 block text-[10px]">DICHTE</span>
                      <span className="font-bold">{entry.vector.density}</span>
                    </div>
                  </div>
                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
};
