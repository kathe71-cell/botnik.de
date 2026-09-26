import { runEvolutionCycle } from '../src/engine/evolution-engine';

const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');

console.log('====================================================');
console.log('          BOTNIK EVOLUTION CYCLE TRIGGER           ');
console.log('====================================================');
console.log(`Modus: ${isDryRun ? 'DRY RUN (Simuliert)' : 'PRODUKTIV (Zustand wird mutiert & persistiert)'}`);

try {
  const result = runEvolutionCycle({ dryRun: isDryRun });
  console.log(`\nZyklus-Übergang: ${result.previousCycle} -> ${result.newCycle} (Epoche ${result.newEpoch})`);
  console.log(`Block-Hash:      ${result.blockHash}`);
  console.log(`Neues Artefakt:  "${result.artifactTitle}"`);
  console.log(`Synthese:        "${result.synthesis}"`);
  console.log(`Vektor-Deltas:   ΔE: ${result.vectorDelta.entropy > 0 ? '+' : ''}${result.vectorDelta.entropy} | ΔR: ${result.vectorDelta.resonance > 0 ? '+' : ''}${result.vectorDelta.resonance} | ΔD: ${result.vectorDelta.divergence > 0 ? '+' : ''}${result.vectorDelta.divergence} | ΔDens: ${result.vectorDelta.density > 0 ? '+' : ''}${result.vectorDelta.density}`);
  console.log('====================================================\n');
} catch (error) {
  console.error('Fehler beim Ausführen des Evolutionszyklus:', error);
  process.exit(1);
}
