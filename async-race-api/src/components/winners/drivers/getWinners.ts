import createRow from '../layout/winnersRow';
import { Car, winnerCars } from '../../common/interface';
import GetSpecNameCar from '../../garage/drivers/getSpecCar';

export default async function winnerCars(page = 1, sortBy = 'id', sortOrder = 'ASC') {
  const url = `http://127.0.0.1:3000/winners/?${new URLSearchParams({
    _page: String(page),
    _limit: '10',
    _sort: sortBy,
    _order: sortOrder,
  })}`;
  const response = await fetch(url);
  const cars = await response.json();
  // const totalAmount = await response.headers.get('X-Total-Count');

  const table = document.getElementById('tableWinners');
  if (table) {
    table.replaceChildren();
  }

  let count = 0;
  if (page != 1) {
    count = (page - 1) * 10;
  }
  if (cars.length > 0) {
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
    });
  }
  const winsHead = document.getElementById('winsWinners');
  const timeHead = document.getElementById('timeWinners');
  if (winsHead && timeHead) {
    switch (sortBy) {
      case 'wins':
        sortOrder === 'ASC' ? (winsHead.innerHTML = 'Wins) ↓') : (winsHead.innerHTML = 'Wins ↑');
        timeHead.innerHTML = 'Best time (sec)';
        break;
      case 'time':
        sortOrder === 'ASC' ? (timeHead.innerHTML = 'Best time (sec) ↓') : (timeHead.innerHTML = 'Best time (sec) ↑');
        winsHead.innerHTML = 'Wins';
        break;
      default:
        winsHead.innerHTML = 'Wins';
        timeHead.innerHTML = 'Best time (sec)';
        break;
    }
  }

  // console.log(cars.length);
  return cars;
}
