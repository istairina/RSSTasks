import GetSpecNameCar from './getSpecCar';

let currWinner = '';

export async function setCurrWinner(id: number) {
  if (id === 0) {
    currWinner = '';
  } else {
    currWinner = 'calculate...';
    const content = await GetSpecNameCar(id);
    currWinner = content.name;
  }
}

export function getCurrWinner() {
  return currWinner;
}
