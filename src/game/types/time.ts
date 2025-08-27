export interface Timer {
  id: string;
  start: number; // start timestamp
  end: number; // end timestamp
}

export type ActivityType = 'travel' | 'activity' | 'sleep' | 'training';

export interface ActivityTimer extends Timer {
  type: ActivityType;
}

export interface TimeState {
  lastSaved: number; // timestamp of last save
  tick: number; // scheduler tick count
  activity?: ActivityTimer;
}
