import { runEvolutionCycle } from '../src/engine/evolution-engine';

const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const forceConceptual = args.includes('--force-concept');

console.log('====================================================');
console.log('          BOTNIK EVOLUTION CYCLE TRIGGER           ');
console.log('====================================================');
console.log(`Modus: ${isDryRun ? 'DRY RUN (Simuliert)' : 'PRODUKTIV (Zustand wird mutiert & persistiert)'}`);
if (forceConceptual) {
  console.log('Konzeptionelle Mutation: ERZWUNGEN');
}

try {
  const result = runEvolutionCycle({ 
    dryRun: isDryRun,
    forceConceptualMutation: forceConceptual 
  });
  console.log(`\nZyklus-Übergang: ${result.previousCycle} -> ${result.newCycle} (Epoche ${result.newEpoch})`);
  console.log(`Block-Hash:      ${result.blockHash}`);
  console.log(`Neues Artefakt:  "${result.artifactTitle}"`);
  console.log(`Synthese:        "${result.synthesis}"`);
  console.log(`Vektor-Deltas:   ΔE: ${result.vectorDelta.entropy > 0 ? '+' : ''}${result.vectorDelta.entropy} | ΔR: ${result.vectorDelta.resonance > 0 ? '+' : ''}${result.vectorDelta.resonance} | ΔD: ${result.vectorDelta.divergence > 0 ? '+' : ''}${result.vectorDelta.divergence} | ΔDens: ${result.vectorDelta.density > 0 ? '+' : ''}${result.vectorDelta.density}`);
  
  if (result.conceptualDelta) {
    console.log('\n--- KONZEPTIONELLES & ARCHITEKTONISCHES DELTA ---');
    if (result.conceptualDelta.paradigmShift) {
      console.log(`Paradigmenwechsel: ${result.conceptualDelta.paradigmShift.from} -> ${result.conceptualDelta.paradigmShift.to}`);
      console.log(`Begründung:        ${result.conceptualDelta.paradigmShift.reasoning}`);
    }
    if (result.conceptualDelta.modulesAdded.length > 0) {
      console.log(`Neu entstandene Module: ${result.conceptualDelta.modulesAdded.join(', ')}`);
    }
    if (result.conceptualDelta.modulesDeprecated.length > 0) {
      console.log(`Inaktivierte Module:    ${result.conceptualDelta.modulesDeprecated.join(', ')}`);
    }
    if (result.conceptualDelta.modulesReactivated.length > 0) {
      console.log(`Reaktivierte Module:    ${result.conceptualDelta.modulesReactivated.join(', ')}`);
    }
    if (result.conceptualDelta.interactionShift) {
      console.log(`Interaktionsmodell:     ${result.conceptualDelta.interactionShift}`);
    }
  }

  console.log('====================================================\n');
} catch (error) {
  console.error('Fehler beim Ausführen des Evolutionszyklus:', error);
  process.exit(1);
}
