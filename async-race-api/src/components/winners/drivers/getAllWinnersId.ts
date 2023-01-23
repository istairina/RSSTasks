import { Car } from '../../common/interface';
import TotalWinnersAmount from './getTotalWinners';
import winnerCars from './getWinners';

export async function getAllWinnersId() {
  const total = await TotalWinnersAmount();
  const pages = Math.ceil(total / 10);
  const resArrId: number[] = [];
  for (let i = 0; i < pages; i++) {
    const carsOnPage = await winnerCars(1);
    carsOnPage.forEach((car: Car) => resArrId.push(car.id));
  }
  return resArrId;
}
