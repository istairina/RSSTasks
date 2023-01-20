import GetSpecNameCar from './getSpecNameCar';

let currWinner = '';

export async function setCurrWinner(id: number) {
  if (id === 0) {
    currWinner = '';
  } else {
    const content = await GetSpecNameCar(id);
    currWinner = content.name;
  }
}

export function getCurrWinner() {
  return currWinner;
}
