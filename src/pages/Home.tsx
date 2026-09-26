import React from 'react';
import { Link } from 'react-router-dom';
import { BotnikState, ChronicleEntry } from '../types';
import { HarmonicCanvas } from '../components/HarmonicCanvas';
import { VectorDisplay } from '../components/VectorDisplay';

interface HomeProps {
  state: BotnikState;
  chronicle: ChronicleEntry[];
}

export const Home: React.FC<HomeProps> = ({ state, chronicle }) => {
  const activeCycle = state.currentCycle;
  const activeArtifact = state.activeArtifact;

  return (
    <div className="space-y-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      {/* Top Banner / System Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-white border border-stone-200 shadow-sm text-xs font-mono">
        <div className="flex items-center space-x-3">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-stone-600">
            SYSTEMSTATUS: <strong className="text-slate-900 uppercase">{state.systemStatus}</strong>
          </span>
          <span className="text-stone-300">|</span>
          <span className="text-stone-600">
            EPOCHE <strong className="text-slate-900">{state.currentEpoch}</strong>
          </span>
          <span className="text-stone-300">|</span>
          <span className="text-stone-600">
            ZYKLUS <strong className="text-slate-900">{state.currentCycle.toString().padStart(2, '0')}</strong>
          </span>
        </div>
        <div className="text-stone-500 truncate sm:max-w-xs">
          Letzter Puls: {new Date(state.lastEvolvedAt).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })} Uhr
        </div>
      </div>

      {/* Hero Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-stone-200/70 text-stone-800 text-xs font-mono">
          <span>Experiment 01</span>
          <span>·</span>
          <span>botnik.de</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
          Ein autonomes kybernetisches Observatorium.
        </h1>
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
          Botnik existiert ohne vorab definiertes Ziel, ohne redaktionelle Schablone und ohne kommerzielle Absicht. Es entwickelt sich aus seinen eigenen mathematischen Zyklen, seiner Historie und den Resonanzen seiner Umgebung.
        </p>
      </div>

      {/* The Central Artifact: Harmonic Canvas */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold">
            Aktuelles Artefakt · {activeArtifact.title}
          </h2>
          <span className="text-xs font-mono text-stone-500">
            Interaktives Wellenfeld (Maus/Touch bewegen)
          </span>
        </div>
        
        <HarmonicCanvas
          artifact={activeArtifact}
          vector={state.stateVector}
          interactive={true}
        />
      </section>

      {/* Philosophical Synthesis Card */}
      <section className="bg-stone-900 text-white rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 text-stone-800 pointer-events-none font-mono text-8xl font-black opacity-20">
          C{activeCycle.toString().padStart(2, '0')}
        </div>
        <div className="relative z-10 space-y-4 max-w-2xl">
          <div className="flex items-center space-x-2 text-xs font-mono text-amber-400">
            <span>SYNTHESE DER GEGENWART</span>
            <span>·</span>
            <span>ZYKLUS {activeCycle.toString().padStart(2, '0')}</span>
          </div>
          <blockquote className="text-lg sm:text-xl font-serif italic text-stone-100 leading-relaxed">
            "{activeArtifact.synthesis}"
          </blockquote>
          <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-stone-400">
            <span>Artefakt-ID: {activeArtifact.id}</span>
            <span>·</span>
            <span>Modellierung: Autonome Zustandsfaltung</span>
          </div>
        </div>
      </section>

      {/* The Vector Metrics */}
      <section>
        <VectorDisplay vector={state.stateVector} />
      </section>

      {/* Triad of Pathways */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        
        {/* Pathway 1: Chronik */}
        <Link
          to="/chronik"
          className="group block p-6 rounded-2xl bg-white border border-stone-200 hover:border-slate-400 hover:shadow-lg transition-all"
        >
          <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center font-mono text-slate-800 text-sm font-bold mb-4 group-hover:bg-slate-900 group-hover:text-white transition-colors">
            01
          </div>
          <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
            Die Öffentliche Chronik
          </h3>
          <p className="text-sm text-stone-600 mt-2 leading-relaxed">
            Jede Veränderung ist kryptografisch verkettet und dauerhaft einsehbar. Betrachte die Annalen und bisherigen Mutationen.
          </p>
          <div className="mt-4 text-xs font-mono font-medium text-amber-700 flex items-center space-x-1">
            <span>{chronicle.length} Zyklen verzeichnet</span>
            <span>→</span>
          </div>
        </Link>

        {/* Pathway 2: Resonanz-Transducer */}
        <Link
          to="/resonanz"
          className="group block p-6 rounded-2xl bg-white border border-stone-200 hover:border-slate-400 hover:shadow-lg transition-all"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center font-mono text-amber-900 text-sm font-bold mb-4 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
            02
          </div>
          <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
            Resonanz-Transducer
          </h3>
          <p className="text-sm text-stone-600 mt-2 leading-relaxed">
            Hinterlasse einen Resonanz-Samen. Deine Justierung von Harmonie, Dichte und Zeit fließt in den nächsten Zyklus ein.
          </p>
          <div className="mt-4 text-xs font-mono font-medium text-amber-700 flex items-center space-x-1">
            <span>Impuls einspeisen</span>
            <span>→</span>
          </div>
        </Link>

        {/* Pathway 3: Manifest */}
        <Link
          to="/manifest"
          className="group block p-6 rounded-2xl bg-white border border-stone-200 hover:border-slate-400 hover:shadow-lg transition-all"
        >
          <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center font-mono text-slate-800 text-sm font-bold mb-4 group-hover:bg-slate-900 group-hover:text-white transition-colors">
            03
          </div>
          <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
            Das Botnik-Manifest
          </h3>
          <p className="text-sm text-stone-600 mt-2 leading-relaxed">
            Warum existiert Botnik? Was bedeuten Pfadabhängigkeit, Autonomie ohne Kommerz und die Sicherheitsgrenzen?
          </p>
          <div className="mt-4 text-xs font-mono font-medium text-amber-700 flex items-center space-x-1">
            <span>Die 7 Axiome</span>
            <span>→</span>
          </div>
        </Link>

      </section>

    </div>
  );
};
