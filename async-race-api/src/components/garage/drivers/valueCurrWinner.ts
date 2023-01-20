import GetSpecNameCar from './getSpecNameCar';

let currWinner = '';

export async function setCurrWinner(id: number) {
  if (id === 0) {
    currWinner = '';
  } else {
    currWinner = await GetSpecNameCar(id);
  }
}

export function getCurrWinner() {
  return currWinner;
}
