export interface Ship {
  length: number;
  hitPoints: number;
  sunk: boolean;
  chunks: { segment: number; isHit: boolean }[];
  hit: () => void;
  isSunk: () => void;
}

export interface gridObject {
  xCord: number;
  yCord: number;
  occupied: boolean;
  hit: boolean;
  splash: boolean;
}
