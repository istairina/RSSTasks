import createRow from '../layout/winnersRow';
import { Car, winnerCars } from '../../common/interface';
import GetSpecNameCar from '../../garage/drivers/getSpecCar';

export default async function winnerCars() {
  const url = `http://127.0.0.1:3000/winners/?${new URLSearchParams({
    _page: '1',
    _limit: '10',
    _sort: 'id',
    _order: 'ASC',
  })}`;
  const response = await fetch(url);
  const cars = await response.json();

  const table = document.getElementById('tableWinners');
  if (table) {
    table.replaceChildren();
  }

  let count = 0;
  cars.forEach(async (car: winnerCars) => {
    const content: Car = await GetSpecNameCar(car.id);
    const carInfo = {
      id: car.id,
      color: content.color,
      name: content.name,
      wins: car.wins,
      time: car.time,
    };
    createRow(carInfo, ++count);
    // console.log(car);
  });

  console.log(cars.length);
  return cars;
}
