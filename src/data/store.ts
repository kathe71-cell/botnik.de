import botnikStateData from '../../data/botnik-state.json';
import chronicleData from '../../data/chronicle.json';
import impulsesData from '../../data/impulses.json';
import { BotnikState, ChronicleEntry, ResonanceImpulse } from '../types';

export const getBotnikState = (): BotnikState => {
  return botnikStateData as BotnikState;
};

export const getChronicle = (): ChronicleEntry[] => {
  return chronicleData as ChronicleEntry[];
};

export const getInitialImpulses = (): ResonanceImpulse[] => {
  return impulsesData as ResonanceImpulse[];
};
