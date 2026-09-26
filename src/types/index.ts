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
  synthesis: string; // Philosophischer / kybernetischer Gedankenstrom
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
  systemStatus: 'autonomous' | 'evolving' | 'dormant';
  lastEvolvedAt: string;
}

export interface ResonanceImpulse {
  id: string;
  timestamp: string;
  temporality: number; // 0 (Stille/Verweilen) -> 1 (Beschleunigung)
  harmony: number;     // 0 (Dissonanz/Chaos) -> 1 (Reine Ordnung)
  density: number;     // 0 (Minimalismus) -> 1 (Hyperkomplexität)
  affect: number;      // 0 (Kühle Abstraktion) -> 1 (Organische Wärme)
  echoWord?: string;   // max 16 chars, sanitized
}
