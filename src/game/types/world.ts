import type { LocationId } from '../data/locations';

export interface WorldState {
  location: LocationId;
  event?: { id: string; progress: number };
}
