export interface Car {
  color: string;
  name: string;
  id: number;
}

export interface startCars {
  distance: number;
  velocity: number;
}

export interface winnerCars {
  id: number;
  wins: number;
  time: number;
}

export interface IFullInfo {
  id: number;
  color: string;
  name: string;
  wins: number;
  time: number;
}
