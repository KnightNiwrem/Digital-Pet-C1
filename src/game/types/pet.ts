import type { SpeciesId } from '../data/species';

export type PetRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export type GrowthStage = 'hatchling' | 'juvenile' | 'adult';

export type PetState =
  | 'idle'
  | 'sleeping'
  | 'traveling'
  | 'exploring'
  | 'battling'
  | 'in_activity'
  | 'dead';

export interface BattleStats {
  health: number;
  attack: number;
  defense: number;
  speed: number;
  action: number;
}

export interface Sickness {
  type: string;
  severity: number; // 0-100
  duration: number; // remaining ticks or timestamp
}

export interface Injury {
  type: string;
  severity: number; // 0-100
  bodyPart: string; // e.g., 'leg', 'wing'
}

export interface Pet {
  /** Identifier for the species */
  speciesId: SpeciesId;
  rarity: PetRarity;
  stage: GrowthStage;
  state: PetState;
  stats: BattleStats;
  energy: number;
  maxEnergy: number;

  // Visible care values (0-100)
  satiety: number;
  hydration: number;
  happiness: number;
  poop: number;

  // Hidden values
  life: number;

  // Hidden tick counters
  satietyTicks: number;
  hydrationTicks: number;
  happinessTicks: number;
  poopTicks: number;

  // Status arrays
  sicknesses: Sickness[];
  injuries: Injury[];

  // Known move identifiers (max 4)
  moves: string[];
}
