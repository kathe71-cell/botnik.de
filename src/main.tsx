import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import './index.css';

const container = document.getElementById('root');

if (container) {
  const appElement = (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );

  // Wenn Server-Side pre-rendered Markup vorhanden ist: Hydrate, sonst Fallback createRoot
  if (container.hasChildNodes()) {
    hydrateRoot(container, appElement);
  } else {
    createRoot(container).render(appElement);
  }
}
