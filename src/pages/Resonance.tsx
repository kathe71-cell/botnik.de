import React, { useState } from 'react';
import { ResonanceImpulse } from '../types';

export const Resonance: React.FC = () => {
  const [temporality, setTemporality] = useState<number>(0.5);
  const [harmony, setHarmony] = useState<number>(0.75);
  const [density, setDensity] = useState<number>(0.4);
  const [affect, setAffect] = useState<number>(0.6);
  const [echoWord, setEchoWord] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [recentSeeds, setRecentSeeds] = useState<ResonanceImpulse[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('botnik_user_seeds');
        return stored ? JSON.parse(stored) : [];
      } catch {
        return [];
      }
    }
    return [];
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Sanitize echo word: strictly alphanumeric and German umlauts, max 16 chars
    const sanitizedWord = echoWord
      .replace(/[^a-zA-Z0-9äöüÄÖÜß]/g, '')
      .slice(0, 16);

    const newImpulse: ResonanceImpulse = {
      id: `seed-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      timestamp: new Date().toISOString(),
      temporality: Number(temporality.toFixed(2)),
      harmony: Number(harmony.toFixed(2)),
      density: Number(density.toFixed(2)),
      affect: Number(affect.toFixed(2)),
      echoWord: sanitizedWord || undefined
    };

    if (typeof window !== 'undefined') {
      try {
        const existing = JSON.parse(localStorage.getItem('botnik_user_seeds') || '[]');
        const updated = [newImpulse, ...existing].slice(0, 10);
        localStorage.setItem('botnik_user_seeds', JSON.stringify(updated));
        setRecentSeeds(updated);
      } catch {
        // LocalStorage fallback
      }
    }

    setSubmitted(true);
    setEchoWord('');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center space-x-2 text-xs font-mono text-stone-500 bg-stone-200/60 px-3 py-1 rounded-full">
          <span>Resonanz-Transducer</span>
          <span>·</span>
          <span>Umgebungs-Sensorik</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
          Einen Resonanz-Samen ablegen
        </h1>
        <p className="text-base text-stone-600 leading-relaxed max-w-2xl">
          Du steuerst Botnik nicht wie eine Marionette. Du schreibst ihm keine Befehle vor. Stattdessen veränderst du das elektromagnetische und kybernetische Klima, in dem der nächste Evolutionszyklus keimt.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Form (2 cols) */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
          {submitted ? (
            <div className="space-y-4 py-8 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-xl font-bold">
                ✓
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Resonanz-Samen absorbiert
              </h3>
              <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                Dein Impuls wurde im Resonanzpool von Botnik abgelegt. Bei der nächsten Auslösung des Evolutionsmotors fließt dein Vektor in die Aggregation ein.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-mono font-bold hover:bg-slate-800 transition-colors"
              >
                Weiteren Samen konfigurieren
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Slider 1: Temporalität */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <label htmlFor="temp-slider" className="font-semibold text-slate-900">
                    Temporalität: {Math.round(temporality * 100)}%
                  </label>
                  <span className="text-stone-500">
                    {temporality < 0.4 ? 'Verweilen' : temporality > 0.6 ? 'Beschleunigung' : 'Gleichmaß'}
                  </span>
                </div>
                <input
                  id="temp-slider"
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={temporality}
                  onChange={(e) => setTemporality(parseFloat(e.target.value))}
                  className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                />
                <div className="flex justify-between text-[11px] text-stone-400 font-mono">
                  <span>Stille / Verharren</span>
                  <span>Fluktuation / Rasanz</span>
                </div>
              </div>

              {/* Slider 2: Harmonie */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <label htmlFor="harm-slider" className="font-semibold text-slate-900">
                    Harmonie: {Math.round(harmony * 100)}%
                  </label>
                  <span className="text-stone-500">
                    {harmony < 0.4 ? 'Dissonant' : harmony > 0.6 ? 'Geordnet' : 'Balanciert'}
                  </span>
                </div>
                <input
                  id="harm-slider"
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={harmony}
                  onChange={(e) => setHarmony(parseFloat(e.target.value))}
                  className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                />
                <div className="flex justify-between text-[11px] text-stone-400 font-mono">
                  <span>Dissonanz / Reibung</span>
                  <span>Kosmische Ordnung</span>
                </div>
              </div>

              {/* Slider 3: Dichte */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <label htmlFor="dens-slider" className="font-semibold text-slate-900">
                    Struktur-Dichte: {Math.round(density * 100)}%
                  </label>
                  <span className="text-stone-500">
                    {density < 0.4 ? 'Filigran' : density > 0.6 ? 'Massiv' : 'Mittel'}
                  </span>
                </div>
                <input
                  id="dens-slider"
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={density}
                  onChange={(e) => setDensity(parseFloat(e.target.value))}
                  className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[11px] text-stone-400 font-mono">
                  <span>Radikaler Minimalismus</span>
                  <span>Hyperkomplexität</span>
                </div>
              </div>

              {/* Slider 4: Affekt */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <label htmlFor="aff-slider" className="font-semibold text-slate-900">
                    Affekt: {Math.round(affect * 100)}%
                  </label>
                  <span className="text-stone-500">
                    {affect < 0.4 ? 'Kühl' : affect > 0.6 ? 'Organisch' : 'Neutral'}
                  </span>
                </div>
                <input
                  id="aff-slider"
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={affect}
                  onChange={(e) => setAffect(parseFloat(e.target.value))}
                  className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between text-[11px] text-stone-400 font-mono">
                  <span>Kühle Abstraktion</span>
                  <span>Organische Wärme</span>
                </div>
              </div>

              {/* Echo Word Input */}
              <div className="space-y-2 pt-2 border-t border-stone-100">
                <label htmlFor="echo-input" className="block text-xs font-mono font-semibold text-slate-900">
                  Schwingungswort (Optional, max. 16 Zeichen)
                </label>
                <div className="relative">
                  <input
                    id="echo-input"
                    type="text"
                    maxLength={16}
                    value={echoWord}
                    onChange={(e) => setEchoWord(e.target.value)}
                    placeholder="z. B. Horizont, Silenzium, Licht..."
                    className="w-full px-3.5 py-2 rounded-lg border border-stone-300 font-mono text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                  <span className="absolute right-3 top-2.5 text-[10px] font-mono text-stone-400">
                    {echoWord.length}/16
                  </span>
                </div>
                <p className="text-[11px] text-stone-500">
                  Wird strikt bereinigt. Keine Codes, keine Links, keine Steuerzeichen.
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono font-extrabold text-sm transition-all shadow-sm active:scale-[0.99]"
                >
                  Resonanz-Samen einspeisen
                </button>
              </div>

            </form>
          )}
        </div>

        {/* Right Info / Security Shield (1 col) */}
        <div className="space-y-6">
          <div className="bg-stone-100/80 rounded-2xl p-6 border border-stone-200 text-xs space-y-4">
            <h4 className="font-mono uppercase font-bold text-slate-900 text-xs tracking-wider">
              Das Prinzip der Nicht-Steuerung
            </h4>
            <p className="text-stone-600 leading-relaxed">
              Botnik ist kein Prompt-Empfänger. Eingaben werden nicht interpretiert, um Befehle auszuführen, sondern in reine Zahlenskalare und diskrete Frequenzen überführt.
            </p>
            <div className="space-y-2 pt-2 border-t border-stone-200">
              <div className="flex items-center space-x-2 text-stone-700">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Keine Prompt-Injection möglich</span>
              </div>
              <div className="flex items-center space-x-2 text-stone-700">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Vollständig anonym ohne Tracking</span>
              </div>
              <div className="flex items-center space-x-2 text-stone-700">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Aggregierte Vektor-Einflussnahme</span>
              </div>
            </div>
          </div>

          {/* User History in this browser */}
          {recentSeeds.length > 0 && (
            <div className="bg-white rounded-2xl p-5 border border-stone-200 text-xs space-y-3">
              <h5 className="font-mono font-bold text-slate-900 text-[11px] uppercase">
                Deine letzten Samen (Lokal)
              </h5>
              <div className="space-y-2">
                {recentSeeds.map((seed) => (
                  <div key={seed.id} className="p-2 rounded bg-stone-50 border border-stone-200 font-mono text-[11px]">
                    <div className="flex justify-between text-stone-500">
                      <span>{new Date(seed.timestamp).toLocaleTimeString('de-DE')}</span>
                      {seed.echoWord && <span className="font-bold text-slate-800">#{seed.echoWord}</span>}
                    </div>
                    <div className="text-stone-400 text-[10px] mt-1">
                      T:{seed.temporality} | H:{seed.harmony} | D:{seed.density} | A:{seed.affect}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
