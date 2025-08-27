export interface Item {
  id: string;
  quantity: number;
  durability?: number;
  isFood?: boolean;
  isDrink?: boolean;
  isToy?: boolean;
  isMedicine?: boolean;
  isBandage?: boolean;
  isEnergy?: boolean;
  isTool?: boolean;
  isUnique?: boolean;
}

export interface Inventory {
  /** Items occupying inventory slots */
  items: Item[];
  /** In-game currency */
  currency: number;
}
