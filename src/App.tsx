import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Chronicle } from './pages/Chronicle';
import { Resonance } from './pages/Resonance';
import { Manifest } from './pages/Manifest';
import { Impressum } from './pages/Impressum';
import { Datenschutz } from './pages/Datenschutz';
import { getBotnikState, getChronicle } from './data/store';

export const App: React.FC = () => {
  const state = getBotnikState();
  const chronicle = getChronicle();

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6] text-slate-900 selection:bg-amber-200 selection:text-slate-950">
      <Navigation state={state} />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home state={state} chronicle={chronicle} />} />
          <Route path="/chronik" element={<Chronicle chronicle={chronicle} />} />
          <Route path="/resonanz" element={<Resonance />} />
          <Route path="/manifest" element={<Manifest />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<Home state={state} chronicle={chronicle} />} />
        </Routes>
      </main>

      <Footer state={state} />
    </div>
  );
};

export default App;
