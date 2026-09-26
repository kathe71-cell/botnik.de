import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BotnikState } from '../types';

interface NavigationProps {
  state: BotnikState;
}

export const Navigation: React.FC<NavigationProps> = ({ state }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Dynamische Navigations-Links basierend auf aktiven Modulen
  const navLinks = state.modules
    .filter((m) => m.status === 'active' && m.navLabel)
    .map((m) => ({
      path: m.path,
      label: m.navLabel as string
    }));

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo / Domain */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-amber-400 font-mono text-sm font-bold shadow-sm group-hover:scale-105 transition-transform">
            β
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-mono text-lg font-bold tracking-tight text-slate-950 group-hover:text-amber-700 transition-colors">
                botnik.de
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-medium bg-amber-100 text-amber-950 border border-amber-300">
                E{state.currentEpoch} : C{state.currentCycle.toString().padStart(2, '0')}
              </span>
            </div>
            <p className="text-[10px] text-stone-500 font-mono tracking-wider uppercase">
              {state.conceptParadigm?.name || 'Kybernetisches Gedächtnis'}
            </p>
          </div>
        </Link>

        {/* Navigation Links (Dynamisch) */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-stone-700 hover:text-slate-950 hover:bg-stone-200/60'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* System Pulse Indicator */}
        <div className="flex items-center space-x-2 font-mono text-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
          </span>
          <span className="hidden sm:inline text-stone-600 font-medium uppercase">
            {state.systemStatus}
          </span>
        </div>

      </div>

      {/* Mobile Sub-Nav (Dynamisch) */}
      <div className="md:hidden flex overflow-x-auto border-t border-stone-200/60 px-4 py-2 space-x-2 bg-stone-100/50">
        {navLinks.map((link) => {
          const isActive = currentPath === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`whitespace-nowrap px-2.5 py-1 rounded text-xs font-medium ${
                isActive
                  ? 'bg-slate-900 text-white'
                  : 'text-stone-700 bg-white border border-stone-200'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
};
