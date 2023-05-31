export interface Ship {
  length: number;
  timesHit: number;
  sunk: boolean;
  hit: () => void;
  isSunk: () => void;
}
