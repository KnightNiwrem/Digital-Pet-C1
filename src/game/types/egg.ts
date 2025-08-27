import type { PetRarity } from './pet';

export interface Egg {
  id: string;
  type: string; // egg type determines species roll
  rarity: PetRarity;
  startTime: number; // timestamp when incubation began
  hatchTime: number; // timestamp when egg will hatch
}
