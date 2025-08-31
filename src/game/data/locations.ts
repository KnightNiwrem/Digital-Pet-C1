export const locations = [
  { id: 'home', name: 'Home' },
  { id: 'park', name: 'Park' },
  { id: 'shop', name: 'Shop' },
] as const;

export type LocationId = (typeof locations)[number]['id'];
