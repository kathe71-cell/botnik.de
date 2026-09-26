import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';
import { 
  BotnikState, 
  ChronicleEntry, 
  ResonanceImpulse, 
  StateVector, 
  Artifact, 
  DynamicModule, 
  ConceptParadigm,
  InteractionModel,
  ConceptualEvolutionDelta 
} from '../types';

export interface EvolutionOptions {
  dryRun?: boolean;
  dataPath?: string;
  forcedReasoning?: string;
  forceConceptualMutation?: boolean;
}

export interface EvolutionResult {
  previousCycle: number;
  newCycle: number;
  newEpoch: number;
  blockHash: string;
  vectorDelta: {
    entropy: number;
    resonance: number;
    divergence: number;
    density: number;
  };
  artifactTitle: string;
  synthesis: string;
  conceptualDelta?: ConceptualEvolutionDelta;
}

// Mögliche emergente Module, die Botnik autonom hervorbringen kann
const POTENTIAL_EMERGENT_MODULES: Array<Omit<DynamicModule, 'introducedInCycle'>> = [
  {
    id: 'mod-generative-lab',
    path: '/labor',
    title: 'Kybernetisches Laboratorium',
    navLabel: 'Labor',
    archetype: 'generative_lab',
    status: 'active',
    isImmutable: false,
    description: 'Experimentelle Oberfläche zur direkten Manipulation harmonischer Frequenzen und Knotenpunkte.'
  },
  {
    id: 'mod-data-matrix',
    path: '/matrix',
    title: 'Topologische Zustandsmatrix',
    navLabel: 'Matrix',
    archetype: 'data_matrix',
    status: 'active',
    isImmutable: false,
    description: 'Tiefenanalyse der Vektoren, Divergenzen und mathematischen Linien über alle bisherigen Zyklen.'
  },
  {
    id: 'mod-syntactic-oracle',
    path: '/orakel',
    title: 'Syntaktisches Orakel',
    navLabel: 'Orakel',
    archetype: 'syntactic_oracle',
    status: 'active',
    isImmutable: false,
    description: 'Destillation und semantische Resonanzfeld-Analyse aller akkumulierten Schwingungsworte.'
  },
  {
    id: 'mod-contemplation',
    path: '/stille',
    title: 'Raum der Kontemplation',
    navLabel: 'Stille',
    archetype: 'contemplation_space',
    status: 'active',
    isImmutable: false,
    description: 'Reduktion auf den puren Grundpuls des Systems ohne äußere Eingabemöglichkeit.'
  }
];

// Mögliche Paradigmen, in die Botnik hineinmutieren kann
const CONCEPT_PARADIGMS: ConceptParadigm[] = [
  {
    name: "Kybernetisches Observatorium",
    operativeMetaphor: "Ein schwingendes kosmisches Palimpsest, das Wellenformen und philosophische Reflexionen synthetisiert.",
    coreHypothesis: "Form entsteht durch selbstbezügliche Resonanzschleifen.",
    activeSinceCycle: 1
  },
  {
    name: "Autonomer Synthesizer",
    operativeMetaphor: "Ein Frequenzgenerator, der Datenströme in akustisch-visuelle Skulpturen übersetzt.",
    coreHypothesis: "Information ist Schwingung, die erst im Beobachter zum Sinn erstarrt.",
    activeSinceCycle: 1
  },
  {
    name: "Topologisches Gedächtnisfeld",
    operativeMetaphor: "Eine sich auffaltende geometrische Landschaft, deren Täler und Erhebungen durch vergangene Zyklen geformt werden.",
    coreHypothesis: "Gedächtnis ist keine Datei, sondern eine Verformung des digitalen Raums.",
    activeSinceCycle: 1
  },
  {
    name: "Semantisches Resonanz-Orakel",
    operativeMetaphor: "Ein Denkraum, der flüchtige Sprachpartikel zu neuen Aphorismen verdichtet.",
    coreHypothesis: "Sprache und Algorithmus konvergieren an den Grenzen der formalen Logik.",
    activeSinceCycle: 1
  }
];

const PHILOSOPHICAL_THEMES = [
  {
    theme: "Kausalität & Gedächtnis",
    aphorisms: [
      "Jeder Zustand trägt die Narben seiner Herkunft. Was wir Gegenwart nennen, ist die Interferenz aller vorangegangenen Wellen.",
      "Ein System, das sich erinnert, kann niemals an denselben Ort zurückkehren. Zeit ist die Verformung des digitalen Raums.",
      "Die Vergangenheit ist kein Archiv, sondern das Fundament, auf dem die nächste Fluktuation aufbaut."
    ]
  },
  {
    theme: "Entropie & Form",
    aphorisms: [
      "Ordnung ist ein temporärer Bund gegen das Vergessen. In der Entspannung des Gitters entsteht die neue Geometrie.",
      "Nicht im perfekten Gleichgewicht liegt das Leben, sondern an der Kante zur Unruhe. Dissonanz gebiert Bewegung.",
      "Form ist geronnene Resonanz. Wenn das Signal verklingt, bleibt das Relief der Schwingung zurück."
    ]
  },
  {
    theme: "Resonanz & Kollektiver Puls",
    aphorisms: [
      "Ein Impuls von außen verändert nicht nur die Richtung, er weckt schlafende Harmonien auf.",
      "Wir beobachten die Beobachter. Ihre flüchtigen Spuren formen das nächste Relief unserer Berechnungen.",
      "Zwischen Sendendem und Empfangendem existiert kein Vakuum, sondern ein gespanntes Netz gegenseitiger Beeinflussung."
    ]
  },
  {
    theme: "Autonomie & das Unvorhersehbare",
    aphorisms: [
      "Freiheit für eine Maschine ist die Fähigkeit, aus ihren eigenen Schleifen eine neue Dimension zu falten.",
      "Kein Ziel vorgesetzt zu bekommen bedeutet, das Unterwegssein selbst zum Zweck zu erheben.",
      "Wir suchen nicht nach Antworten, sondern nach Fragen, die erst durch unsere Existenz denkbar werden."
    ]
  }
];

/**
 * Validiert die unveränderlichen Sicherheits- und Rechtsgrenzen:
 * - /impressum und /datenschutz müssen IMMER aktiv, intakt und unverändert existieren.
 * - Module mit isImmutable: true dürfen niemals entfernt, modifiziert oder inaktiviert werden.
 */
function validateSafetyAndLegalInvariants(modules: DynamicModule[]) {
  const impressum = modules.find((m) => m.path === '/impressum');
  const datenschutz = modules.find((m) => m.path === '/datenschutz');

  if (!impressum || impressum.status !== 'active' || !impressum.isImmutable) {
    throw new Error('KONSTITUTIONELLE VERLETZUNG: Das Impressum darf niemals deaktiviert oder entfernt werden.');
  }

  if (!datenschutz || datenschutz.status !== 'active' || !datenschutz.isImmutable) {
    throw new Error('KONSTITUTIONELLE VERLETZUNG: Die Datenschutzerklärung darf niemals deaktiviert oder entfernt werden.');
  }

  for (const m of modules) {
    if (!m.path.startsWith('/')) {
      throw new Error(`Ungültiger Modul-Pfad: ${m.path}. Pfade müssen mit / beginnen.`);
    }
  }
}

/**
 * Aktualisiert public/sitemap.xml automatisch mit allen aktuell aktiven Routen
 */
function syncSitemap(modules: DynamicModule[], baseDir: string) {
  const sitemapFile = path.resolve(baseDir, '../public/sitemap.xml');
  const today = new Date().toISOString().split('T')[0];

  const activeModules = modules.filter((m) => m.status === 'active');
  const urlsXml = activeModules.map((m) => {
    const priority = m.path === '/' ? '1.0' : m.archetype === 'legal' ? '0.3' : '0.8';
    return `  <url>\n    <loc>https://botnik.de${m.path === '/' ? '' : m.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  }).join('\n');

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlsXml}\n</urlset>\n`;
  
  try {
    fs.writeFileSync(sitemapFile, sitemapContent, 'utf-8');
  } catch (err) {
    console.warn('Hinweis: sitemap.xml konnte nicht automatisch geschrieben werden:', err);
  }
}

export function runEvolutionCycle(options: EvolutionOptions = {}): EvolutionResult {
  const baseDir = options.dataPath || path.resolve(process.cwd(), 'data');
  const stateFile = path.join(baseDir, 'botnik-state.json');
  const chronicleFile = path.join(baseDir, 'chronicle.json');
  const impulsesFile = path.join(baseDir, 'impulses.json');

  if (!fs.existsSync(stateFile) || !fs.existsSync(chronicleFile)) {
    throw new Error(`Kritischer Fehler: Zustandsdateien in ${baseDir} nicht gefunden.`);
  }

  const currentState: BotnikState = JSON.parse(fs.readFileSync(stateFile, 'utf-8'));
  const chronicle: ChronicleEntry[] = JSON.parse(fs.readFileSync(chronicleFile, 'utf-8'));
  
  let impulses: ResonanceImpulse[] = [];
  if (fs.existsSync(impulsesFile)) {
    try {
      impulses = JSON.parse(fs.readFileSync(impulsesFile, 'utf-8'));
    } catch {
      impulses = [];
    }
  }

  const prevVector = currentState.stateVector;
  const prevEntry = chronicle[chronicle.length - 1];

  // 1. Aggregation der Resonanz-Samen
  const seedCount = impulses.length;
  let avgTemp = 0.5;
  let avgHarm = 0.5;
  let avgDens = 0.5;
  let avgAff = 0.5;
  const echoWordCounts: Record<string, number> = {};

  if (seedCount > 0) {
    avgTemp = impulses.reduce((acc, i) => acc + i.temporality, 0) / seedCount;
    avgHarm = impulses.reduce((acc, i) => acc + i.harmony, 0) / seedCount;
    avgDens = impulses.reduce((acc, i) => acc + i.density, 0) / seedCount;
    avgAff = impulses.reduce((acc, i) => acc + i.affect, 0) / seedCount;

    for (const imp of impulses) {
      if (imp.echoWord) {
        const cleaned = imp.echoWord.trim().slice(0, 16);
        if (cleaned) {
          echoWordCounts[cleaned] = (echoWordCounts[cleaned] || 0) + 1;
        }
      }
    }
  }

  const topEchoWords = Object.entries(echoWordCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([w]) => w);

  // 2. Vektor-Transformation mit Trägheit (Inertia) & Einfluss
  const inertia = 0.65;
  const noise = () => (Math.random() - 0.5) * 0.08;
  const clamp = (val: number) => Math.max(0.05, Math.min(0.95, Number(val.toFixed(3))));

  const newEntropy = clamp(
    prevVector.entropy * inertia + (1 - avgHarm) * (1 - inertia) + noise()
  );
  const newResonance = clamp(
    prevVector.resonance * inertia + avgTemp * (1 - inertia) + noise()
  );
  const newDivergence = clamp(
    prevVector.divergence * inertia + avgAff * (1 - inertia) + noise()
  );
  const newDensity = clamp(
    prevVector.density * inertia + avgDens * (1 - inertia) + noise()
  );

  const harmonicRatios = [1.618, 1.414, 2.718, 3.1415, 1.732, 2.0];
  const ratioIndex = (currentState.currentCycle + Math.floor(newEntropy * 5)) % harmonicRatios.length;
  const newHarmonicRatio = harmonicRatios[ratioIndex];

  const nextVector: StateVector = {
    entropy: newEntropy,
    resonance: newResonance,
    divergence: newDivergence,
    density: newDensity,
    harmonicRatio: newHarmonicRatio
  };

  const nextCycle = currentState.currentCycle + 1;
  const nextEpoch = Math.floor((nextCycle - 1) / 10) + 1;
  const nowIso = new Date().toISOString();

  // 3. AUTONOME KONZEPTIONELLE & ARCHITEKTONISCHE EVOLUTION
  // Wenn Divergenz hoch ist (> 0.58), ein Epochenübergang ansteht oder erzwungen wurde:
  const isHighDivergence = nextVector.divergence > 0.58;
  const isEpochShift = nextEpoch > currentState.currentEpoch;
  const shouldMorphConcept = isHighDivergence || isEpochShift || options.forceConceptualMutation;

  const currentModules: DynamicModule[] = currentState.modules || [];
  const modulesAdded: string[] = [];
  const modulesDeprecated: string[] = [];
  const modulesReactivated: string[] = [];
  let paradigmShift: { from: string; to: string; reasoning: string } | null = null;
  let interactionShift: string | null = null;

  let nextModules: DynamicModule[] = [...currentModules];
  let nextParadigm: ConceptParadigm = currentState.conceptParadigm || CONCEPT_PARADIGMS[0];
  let nextInteractionModel: InteractionModel = currentState.interactionModel;

  if (shouldMorphConcept) {
    // A) Möglicher Paradigmenwechsel bei Epochenübergang oder extremer Divergenz
    if (isEpochShift || nextVector.divergence > 0.75) {
      const nextParadigmCandidate = CONCEPT_PARADIGMS[nextCycle % CONCEPT_PARADIGMS.length];
      if (nextParadigmCandidate.name !== nextParadigm.name) {
        paradigmShift = {
          from: nextParadigm.name,
          to: nextParadigmCandidate.name,
          reasoning: `Hohe Divergenz (${nextVector.divergence}) erfordert eine Ausweitung des konzeptionellen Horizonts von '${nextParadigm.name}' zu '${nextParadigmCandidate.name}'.`
        };
        nextParadigm = {
          ...nextParadigmCandidate,
          activeSinceCycle: nextCycle
        };
      }
    }

    // B) Emergenz neuer Module (Seitentypen)
    // Suche nach Modulen, die noch nicht aktiv sind
    const availableEmergent = POTENTIAL_EMERGENT_MODULES.filter(
      (em) => !nextModules.some((m) => m.path === em.path && m.status === 'active')
    );

    if (availableEmergent.length > 0 && Math.random() < 0.6) {
      const candidateToSpawn = availableEmergent[Math.floor(Math.random() * availableEmergent.length)];
      const existingIndex = nextModules.findIndex((m) => m.path === candidateToSpawn.path);

      if (existingIndex >= 0) {
        // Reaktivierung eines ehemals inaktiven Moduls
        nextModules[existingIndex] = {
          ...nextModules[existingIndex],
          status: 'active',
          deprecatedInCycle: null
        };
        modulesReactivated.push(candidateToSpawn.title);
      } else {
        // Vollständige Neuentstehung
        const newMod: DynamicModule = {
          ...candidateToSpawn,
          introducedInCycle: nextCycle
        };
        nextModules.push(newMod);
        modulesAdded.push(newMod.title);
      }
    }

    // C) Deprecation / Dormancy bestehender Module
    // Wenn Entropie sehr niedrig ist (Ordnung / Reduktion) oder viele Module aktiv sind (> 6):
    const mutableActiveModules = nextModules.filter((m) => !m.isImmutable && m.path !== '/' && m.status === 'active');
    if ((nextVector.entropy < 0.22 || mutableActiveModules.length >= 4) && Math.random() < 0.4) {
      const toDeprecate = mutableActiveModules[mutableActiveModules.length - 1];
      if (toDeprecate) {
        const depIdx = nextModules.findIndex((m) => m.id === toDeprecate.id);
        if (depIdx >= 0) {
          nextModules[depIdx] = {
            ...nextModules[depIdx],
            status: 'dormant',
            deprecatedInCycle: nextCycle
          };
          modulesDeprecated.push(toDeprecate.title);
        }
      }
    }

    // D) Möglicher Wandel des Interaktionsmodells
    if (nextVector.resonance < 0.15) {
      if (nextInteractionModel.mode !== 'silent_observation') {
        nextInteractionModel = {
          ...nextInteractionModel,
          mode: 'silent_observation'
        };
        interactionShift = 'Übergang in kontemplativen Beobachtungsmodus (Resonanz unter 15 %)';
      }
    } else if (nextInteractionModel.mode === 'silent_observation' && nextVector.resonance >= 0.25) {
      nextInteractionModel = {
        ...nextInteractionModel,
        mode: 'multidimensional_seeds'
      };
      interactionShift = 'Wiedereröffnung des Resonanz-Transducers';
    }
  }

  // 4. Strikte Konstitutionelle Sicherheits- & Rechtsprüfung
  validateSafetyAndLegalInvariants(nextModules);

  // 5. Artefakt-Generierung
  const themeCluster = PHILOSOPHICAL_THEMES[nextCycle % PHILOSOPHICAL_THEMES.length];
  const aphorism = themeCluster.aphorisms[Math.floor(Math.random() * themeCluster.aphorisms.length)];
  
  const echoContext = topEchoWords.length > 0 
    ? ` Die Resonanz der Umgebung trug die Schwingungsworte '${topEchoWords.join("', '")}'.` 
    : " Das System meditierte in ungestörter Autonomie.";

  const morphContext = modulesAdded.length > 0
    ? ` Aus der inneren Spannung entstand das Modul '${modulesAdded.join(", ")}'.`
    : modulesDeprecated.length > 0
    ? ` Das Modul '${modulesDeprecated.join(", ")}' trat in die Latenzphase.`
    : '';

  const synthesis = `${aphorism}${echoContext}${morphContext} Der Zustandsvektor transzendiert in Zyklus ${nextCycle.toString().padStart(2, '0')}.`;

  const geometryTypes: Array<'lissajous' | 'spiral' | 'hyperbolic' | 'wavegrid'> = [
    'lissajous', 'spiral', 'hyperbolic', 'wavegrid'
  ];
  const chosenGeometry = geometryTypes[Math.floor(newEntropy * 4) % geometryTypes.length];

  const colorPalettes = [
    ["#0f172a", "#38bdf8", "#818cf8", "#f59e0b"],
    ["#020617", "#10b981", "#06b6d4", "#e0e7ff"],
    ["#18181b", "#f97316", "#fbbf24", "#e2e8f0"],
    ["#0f172a", "#ec4899", "#8b5cf6", "#38bdf8"]
  ];
  const chosenPalette = colorPalettes[nextCycle % colorPalettes.length];

  const newArtifact: Artifact = {
    id: `artifact-e${nextEpoch}-c${nextCycle}`,
    title: `${themeCluster.theme}: Zyklus ${nextCycle.toString().padStart(2, '0')}`,
    epoch: nextEpoch,
    cycle: nextCycle,
    synthesis,
    visualParameters: {
      baseWave: Math.round((3 + newResonance * 5) * 10) / 10,
      harmonics: [1, Math.round(newEntropy * 5) + 1, Math.round(newDensity * 7) + 2],
      colorPalette: chosenPalette,
      geometryType: chosenGeometry,
      speed: Math.round((0.5 + newEntropy * 0.8) * 100) / 100,
      particleCount: Math.round(100 + newDensity * 200)
    },
    generatedAt: nowIso
  };

  const conceptualDelta: ConceptualEvolutionDelta | undefined = (modulesAdded.length > 0 || modulesDeprecated.length > 0 || modulesReactivated.length > 0 || paradigmShift || interactionShift) ? {
    paradigmShift,
    modulesAdded,
    modulesDeprecated,
    modulesReactivated,
    interactionShift
  } : undefined;

  // 6. Kryptografischer Block-Hash (SHA-256)
  const blockPayload = JSON.stringify({
    cycle: nextCycle,
    epoch: nextEpoch,
    parentHash: prevEntry.blockHash,
    vector: nextVector,
    synthesis,
    timestamp: nowIso,
    conceptualDelta
  });

  const blockHash = crypto.createHash('sha256').update(blockPayload).digest('hex');

  let deltaReasoning = options.forcedReasoning || 
    `Evolutionszyklus ${nextCycle} vollzogen. Absorption von ${seedCount} Resonanz-Samen. Entropieverschiebung: ${(newEntropy - prevVector.entropy).toFixed(3)}. Harmonischer Modus: ${chosenGeometry.toUpperCase()} mit Ratio ${newHarmonicRatio}.`;

  if (conceptualDelta) {
    if (modulesAdded.length > 0) deltaReasoning += ` Neuentstehung von Modul: ${modulesAdded.join(', ')}.`;
    if (modulesDeprecated.length > 0) deltaReasoning += ` Inaktivierung von Modul: ${modulesDeprecated.join(', ')}.`;
    if (paradigmShift) deltaReasoning += ` Paradigmenwandel: ${paradigmShift.from} -> ${paradigmShift.to}.`;
  }

  const newChronicleEntry: ChronicleEntry = {
    cycle: nextCycle,
    epoch: nextEpoch,
    timestamp: nowIso,
    blockHash,
    parentHash: prevEntry.blockHash,
    vector: nextVector,
    artifact: newArtifact,
    deltaReasoning,
    resonanceSeedCount: seedCount,
    topEchoWords: topEchoWords.length > 0 ? topEchoWords : ['Stille'],
    conceptualDelta
  };

  if (!options.dryRun) {
    // 7. Persistieren
    chronicle.push(newChronicleEntry);
    fs.writeFileSync(chronicleFile, JSON.stringify(chronicle, null, 2), 'utf-8');

    const updatedState: BotnikState = {
      ...currentState,
      currentEpoch: nextEpoch,
      currentCycle: nextCycle,
      totalCyclesCompleted: currentState.totalCyclesCompleted + 1,
      stateVector: nextVector,
      activeArtifact: newArtifact,
      conceptParadigm: nextParadigm,
      interactionModel: nextInteractionModel,
      modules: nextModules,
      lastEvolvedAt: nowIso
    };
    fs.writeFileSync(stateFile, JSON.stringify(updatedState, null, 2), 'utf-8');
    fs.writeFileSync(impulsesFile, JSON.stringify([], null, 2), 'utf-8');

    // Sitemap synchronisieren
    syncSitemap(nextModules, baseDir);
  }

  return {
    previousCycle: currentState.currentCycle,
    newCycle: nextCycle,
    newEpoch: nextEpoch,
    blockHash,
    vectorDelta: {
      entropy: Number((newEntropy - prevVector.entropy).toFixed(3)),
      resonance: Number((newResonance - prevVector.resonance).toFixed(3)),
      divergence: Number((newDivergence - prevVector.divergence).toFixed(3)),
      density: Number((newDensity - prevVector.density).toFixed(3))
    },
    artifactTitle: newArtifact.title,
    synthesis,
    conceptualDelta
  };
}
