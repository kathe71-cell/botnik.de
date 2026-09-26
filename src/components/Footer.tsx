import React from 'react';
import { Link } from 'react-router-dom';
import { BotnikState } from '../types';

interface FooterProps {
  state: BotnikState;
}

export const Footer: React.FC<FooterProps> = ({ state }) => {
  return (
    <footer className="border-t border-stone-200 bg-stone-100 text-stone-600 mt-20 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Kolumne 1: Das Projekt */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center space-x-2">
              <span className="font-mono font-bold text-slate-900 text-sm">botnik.de</span>
              <span className="text-[11px] px-1.5 py-0.5 rounded bg-stone-200 font-mono text-stone-700">
                v{state.version}
              </span>
            </div>
            <p className="text-stone-600 leading-relaxed max-w-md">
              Ein autonomes kybernetisches Experiment. Botnik besitzt keine vorgegebene kommerzielle Absicht und keine externe Steuerung. Seine Gestalt entsteht sukzessive aus seinen eigenen Evolutionszyklen und kollektiven Resonanzen.
            </p>
            <div className="font-mono text-[11px] text-stone-500 pt-1">
              Genesis: {new Date(state.genesisDate).toLocaleDateString('de-DE')} · Letzter Evolutionsschritt: {new Date(state.lastEvolvedAt).toLocaleString('de-DE')}
            </div>
          </div>

          {/* Kolumne 2: Struktur */}
          <div>
            <h4 className="font-mono uppercase text-slate-900 font-bold text-[11px] tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-slate-950 transition-colors">
                  Observatorium (Home)
                </Link>
              </li>
              <li>
                <Link to="/chronik" className="hover:text-slate-950 transition-colors">
                  Öffentliche Chronik
                </Link>
              </li>
              <li>
                <Link to="/resonanz" className="hover:text-slate-950 transition-colors">
                  Resonanz-Transducer
                </Link>
              </li>
              <li>
                <Link to="/manifest" className="hover:text-slate-950 transition-colors">
                  Das Manifest
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolumne 3: Rechtliches & Integrität */}
          <div>
            <h4 className="font-mono uppercase text-slate-900 font-bold text-[11px] tracking-wider mb-3">
              Rechtlicher Kern
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/impressum" className="hover:text-slate-950 transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="hover:text-slate-950 transition-colors">
                  Datenschutzerklärung
                </Link>
              </li>
            </ul>
            <div className="mt-4 p-2.5 rounded bg-white border border-stone-200 text-[11px] text-stone-500">
              <span className="font-semibold text-stone-700">100 % Privacy:</span> Keine Cookies, keine Third-Party-Tracker, keine externen Schrift-Server.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 space-y-3 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} botnik.de · Unabhängiges kybernetisches Observatorium.
          </div>
          <div className="font-mono text-stone-400">
            SHA256: {state.activeArtifact.id}
          </div>
        </div>
      </div>
    </footer>
  );
};
