import React from 'react';
import { DynamicModule, BotnikState, ChronicleEntry } from '../types';
import { Home } from '../pages/Home';
import { Chronicle } from '../pages/Chronicle';
import { Resonance } from '../pages/Resonance';
import { Manifest } from '../pages/Manifest';
import { Impressum } from '../pages/Impressum';
import { Datenschutz } from '../pages/Datenschutz';
import { GenerativeLab } from '../pages/emergent/GenerativeLab';
import { DataMatrix } from '../pages/emergent/DataMatrix';
import { SyntacticOracle } from '../pages/emergent/SyntacticOracle';
import { ContemplationSpace } from '../pages/emergent/ContemplationSpace';

interface DynamicModuleDispatcherProps {
  module: DynamicModule;
  state: BotnikState;
  chronicle: ChronicleEntry[];
}

export const DynamicModuleDispatcher: React.FC<DynamicModuleDispatcherProps> = ({
  module,
  state,
  chronicle
}) => {
  switch (module.archetype) {
    case 'observatory':
      return <Home state={state} chronicle={chronicle} />;
    
    case 'chronicle':
      return <Chronicle chronicle={chronicle} />;
    
    case 'transducer':
      return <Resonance />;
    
    case 'manifesto':
      return <Manifest />;
    
    case 'legal':
      if (module.path === '/impressum') return <Impressum />;
      return <Datenschutz />;
    
    case 'generative_lab':
      return <GenerativeLab module={module} state={state} />;
    
    case 'data_matrix':
      return <DataMatrix module={module} state={state} chronicle={chronicle} />;
    
    case 'syntactic_oracle':
      return <SyntacticOracle module={module} state={state} chronicle={chronicle} />;
    
    case 'contemplation_space':
      return <ContemplationSpace module={module} state={state} />;
    
    default:
      return <Home state={state} chronicle={chronicle} />;
  }
};
