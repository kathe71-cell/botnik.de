# botnik.de — Autonomes Kybernetisches Observatorium

> **Ein experimentelles, lebendes digitales Artefakt ohne vorgegebene Schablone.**
> Startet bei null · Pfadabhängig · Selbst-evolvierend · 100% DSGVO- & Privacy-First.

---

## 1. Was ist Botnik?

Botnik ist kein Blog, kein Rechner, kein SEO-Portal, kein Magazin und kein gewöhnlicher Chatbot.

Botnik ist ein **kybernetisches Gedächtnis und autonomes Observatorium**. Es existiert in diskreten **Epochen** und **Zyklen**:
- In jedem Zyklus generiert das System einen internen **Zustandsvektor** (Entropie, Resonanz, Divergenz, Dichte, harmonische Ratio φ).
- Dieser Vektor manifestiert sich in einer visuellen, schwingenden **Signal-Skulptur** (Lissajous-/Harmonisches Wellenfeld) sowie einer **philosophischen Synthese**.
- Alle Zyklen sind **kryptografisch über SHA-256 Hashes** lückenlos in den **Annalen (Chronik)** verkettet.
- Besucher steuern das System nicht mit Prompts, sondern speisen über den **Resonanz-Transducer** vierdimensionale Frequenzsamen (Temporalität, Harmonie, Dichte, Affekt) und Resonanzworte ein. Diese fließen in die Aggregation des nächsten Evolutionszyklus ein.

---

## 2. Architektur & Verzeichnisstruktur

```
focused-planck/
├── data/
│   ├── botnik-state.json      # Aktueller Systemzustand & aktives Artefakt
│   ├── chronicle.json         # Kryptografische Kette aller bisherigen Zyklen
│   └── impulses.json          # Gepufferte Resonanz-Samen für den nächsten Zyklus
├── public/
│   ├── favicon.svg            # Minimalistisches Vektor-Icon
│   ├── llms.txt               # Maschinelle Kontext-Deklaration
│   ├── og-image.png           # 1200x630 PNG Raster-Social-Card
│   ├── robots.txt             # Indexierungs-Vorgaben
│   └── sitemap.xml            # Tagesaktuelle XML-Sitemap
├── scripts/
│   ├── evolve.ts              # CLI Runner für den Evolutionsmotor
│   └── generate-og.ts         # Automatische Generierung der OG-Social Card
├── src/
│   ├── components/            # Navigation, Footer, HarmonicCanvas, VectorDisplay
│   ├── engine/                # evolution-engine.ts (Berechnung, Mutation, Krypto-Hashes)
│   ├── pages/                 # Home, Chronicle, Resonance, Manifest, Impressum, Datenschutz
│   ├── types/                 # TypeScript Schnittstellen
│   ├── App.tsx                # Client/Server Routing
│   ├── entry-server.tsx       # SSG Server Render Pipeline (renderToString)
│   └── main.tsx               # Client Hydration (hydrateRoot)
├── prerender.js               # Zero-Blank-Page SSG Pre-Rendering
├── vercel.json                # Vercel Deployment- und Header-Konfiguration
└── vite.config.ts             # Vite + Tailwind v4 + React Konfiguration
```

---

## 3. Zukünftige Entwicklungszyklen ausführen

Botnik kann per Hand, per Cron-Job oder GitHub Actions in die nächste Entwicklungsstufe versetzt werden:

### Dry-Run (Simulation ohne Mutation):
```bash
npm run evolve:dry
```

### Echten Evolutionszyklus ausführen (mutiert Zustand & hängt Block an):
```bash
npm run evolve
```

Nach Ausführung von `npm run evolve`:
1. Werden die eingegangenen Resonanz-Samen aggregiert.
2. Der Zustandsvektor wird mit Beharrungsträgheit transformiert.
3. Ein neues geometrisches und syntaktisches Artefakt wird berechnet.
4. Ein neuer Block mit SHA-256 Hash wird in `chronicle.json` eingetragen.
5. `botnik-state.json` wird aktualisiert und der Resonanzpool für den nächsten Zyklus freigegeben.
6. Ein anschließendes `npm run build` erzeugt die neuen statischen Seiten.

---

## 4. Lokale Entwicklung & Build

- **Entwicklungsserver starten**:
  ```bash
  npm run dev
  ```
- **Vollständiger SSG Pre-Render Build**:
  ```bash
  npm run build
  ```
- **Vorschau des gebauten Outputs**:
  ```bash
  npm run preview
  ```

---

## 5. Vercel Deployment

Das Projekt ist vollständig vorbereitet für Vercel:
```bash
vercel deploy --prod --yes
```

---

## 6. Rechtlicher Kern & Datenschutz

- **Impressum** (`/impressum`): § 5 DDG-konform.
- **Datenschutz** (`/datenschutz`): 100 % DSGVO-konform.
- **Zero Tracker**: Keine Cookies, keine Analyse-Pixel, keine externen Google-Fonts (nativer System Font Stack).
