import { IFullInfo } from '../../common/interface';
import CarSvg from '../../garage/layout/car_svg';

export default function createRow(car: IFullInfo) {
  // const id = '';
  // const car = '';
  // const name = '';
  // const wins = '';
  // const time = '';

  const table = document.getElementById('tableWinners');
  const tr = document.createElement('tr');

  if (table) {
    table.appendChild(tr);
  }

  const idCell = document.createElement('td');
  idCell.innerText = String(car.id);

  const carCell = document.createElement('td');
  carCell.innerHTML = CarSvg(car.color, '50', '25');
  const nameCell = document.createElement('td');
  nameCell.innerText = car.name;

  const winsCell = document.createElement('td');
  winsCell.innerText = String(car.wins);

  const timeCell = document.createElement('td');
  timeCell.innerText = String(car.time);

  tr.appendChild(idCell);
  tr.appendChild(carCell);
  tr.appendChild(nameCell);
  tr.appendChild(winsCell);
  tr.appendChild(timeCell);
}
