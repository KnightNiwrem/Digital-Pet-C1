import type { Pet, Egg, Inventory, WorldState, TimeState, MetaState } from './types';

export const CURRENT_SAVE_VERSION = 1;

export interface GameState {
  version: number;
  pet?: Pet;
  eggs: Egg[];
  inventory: Inventory;
  world: WorldState;
  time: TimeState;
  meta: MetaState;
}

export function createInitialGameState(): GameState {
  return {
    version: CURRENT_SAVE_VERSION,
    pet: undefined,
    eggs: [],
    inventory: {
      items: [],
      currency: 0,
    },
    world: {
      location: 'home',
    },
    time: {
      lastSaved: Date.now(),
      tick: 0,
    },
    meta: {
      settings: {
        textScale: 1,
        colorBlindMode: false,
        highContrast: false,
        reducedMotion: false,
        volume: 1,
      },
      tutorialStep: 0,
      memorialLog: [],
    },
  };
}
