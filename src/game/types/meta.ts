export interface Settings {
  textScale: number;
  colorBlindMode: boolean;
  highContrast: boolean;
  reducedMotion: boolean;
  volume: number;
}

export interface MetaState {
  settings: Settings;
  tutorialStep: number;
  memorialLog: string[];
}
