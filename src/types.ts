export interface Ship {
  length: number;
  hitPoints: number;
  sunk: boolean;
  chunks: { segment: number; isHit: boolean }[];
  hit: () => void;
  isSunk: () => void;
}
