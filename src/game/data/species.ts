export const species = [
  { id: 'cat', name: 'Cat' },
  { id: 'dog', name: 'Dog' },
  { id: 'dragon', name: 'Dragon' },
] as const;

export type SpeciesId = (typeof species)[number]['id'];
