import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { DynamicModuleDispatcher } from './components/DynamicModuleDispatcher';
import { getBotnikState, getChronicle } from './data/store';

export const App: React.FC = () => {
  const state = getBotnikState();
  const chronicle = getChronicle();

  // Aktive Module ermitteln
  const activeModules = state.modules.filter((m) => m.status === 'active');
  const primaryModule = activeModules.find((m) => m.path === '/') || activeModules[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6] text-slate-900 selection:bg-amber-200 selection:text-slate-950">
      <Navigation state={state} />
      
      <main className="flex-grow">
        <Routes>
          {activeModules.map((module) => (
            <Route
              key={module.id}
              path={module.path}
              element={
                <DynamicModuleDispatcher
                  module={module}
                  state={state}
                  chronicle={chronicle}
                />
              }
            />
          ))}
          {/* Fallback für nicht existente Routen */}
          <Route
            path="*"
            element={
              <DynamicModuleDispatcher
                module={primaryModule}
                state={state}
                chronicle={chronicle}
              />
            }
          />
        </Routes>
      </main>

      <Footer state={state} />
    </div>
  );
};

export default App;
