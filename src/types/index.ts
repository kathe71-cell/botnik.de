export interface StateVector {
  entropy: number;     // 0.0 - 1.0 (Grad der Unruhe / Fluktuation)
  resonance: number;   // 0.0 - 1.0 (Reaktivität auf Außenimpulse)
  divergence: number;  // 0.0 - 1.0 (Drang zu Neuem vs. Vertiefung von Bestehendem)
  density: number;     // 0.0 - 1.0 (Strukturelle Komplexität)
  harmonicRatio: number; // Harmonische Frequenz z.B. 1.618 (Goldener Schnitt) oder Obertöne
}

export interface Artifact {
  id: string;
  title: string;
  epoch: number;
  cycle: number;
  synthesis: string;
  visualParameters: {
    baseWave: number;
    harmonics: number[];
    colorPalette: string[];
    geometryType: 'lissajous' | 'spiral' | 'hyperbolic' | 'wavegrid';
    speed: number;
    particleCount: number;
  };
  generatedAt: string;
}

export type ModuleArchetype = 
  | 'observatory'         // Primäres Signal- & Oszillator-Zentrum
  | 'chronicle'           // Kette & kryptografisches Gedächtnis
  | 'transducer'          // Parametrische Schwingungseinspeisung
  | 'manifesto'           // Axiomatisches Fundament
  | 'generative_lab'      // Experimentelles algorithmisches Labor
  | 'data_matrix'         // Topologische Vektoranalyse & Systemzustand
  | 'syntactic_oracle'    // Sprachliche Resonanz- und Gedanken-Synthese
  | 'contemplation_space' // Phase der reinen Stille & Beobachtung
  | 'legal';              // Unveränderlicher rechtlicher Kern

export interface DynamicModule {
  id: string;
  path: string;
  title: string;
  navLabel: string | null; // null = nicht in Hauptnavigation, aber erreichbar
  archetype: ModuleArchetype;
  status: 'active' | 'dormant' | 'deprecated';
  isImmutable?: boolean; // Für geschützte rechtliche Kernelemente (/impressum, /datenschutz)
  description: string;
  introducedInCycle: number;
  deprecatedInCycle?: number | null;
  moduleConfig?: Record<string, unknown>;
}

export interface ConceptParadigm {
  name: string;
  operativeMetaphor: string;
  coreHypothesis: string;
  activeSinceCycle: number;
}

export interface InteractionModel {
  mode: 'multidimensional_seeds' | 'harmonic_resonance' | 'silent_observation' | 'topological_drift';
  dimensions: Array<{
    key: string;
    label: string;
    lowLabel: string;
    highLabel: string;
    defaultValue: number;
  }>;
  allowEchoWords: boolean;
}

export interface ConceptualEvolutionDelta {
  paradigmShift?: {
    from: string;
    to: string;
    reasoning: string;
  } | null;
  modulesAdded: string[];
  modulesDeprecated: string[];
  modulesReactivated: string[];
  interactionShift?: string | null;
}

export interface ChronicleEntry {
  cycle: number;
  epoch: number;
  timestamp: string;
  blockHash: string;
  parentHash: string;
  vector: StateVector;
  artifact: Artifact;
  deltaReasoning: string;
  resonanceSeedCount: number;
  topEchoWords: string[];
  conceptualDelta?: ConceptualEvolutionDelta;
}

export interface BotnikState {
  version: string;
  entityName: string;
  domain: string;
  genesisDate: string;
  currentEpoch: number;
  currentCycle: number;
  totalCyclesCompleted: number;
  stateVector: StateVector;
  activeArtifact: Artifact;
  conceptParadigm: ConceptParadigm;
  interactionModel: InteractionModel;
  modules: DynamicModule[];
  systemStatus: 'autonomous' | 'evolving' | 'dormant';
  lastEvolvedAt: string;
}

export interface ResonanceImpulse {
  id: string;
  timestamp: string;
  temporality: number; // 0 -> 1
  harmony: number;     // 0 -> 1
  density: number;     // 0 -> 1
  affect: number;      // 0 -> 1
  echoWord?: string;   // max 16 chars, sanitized
}
