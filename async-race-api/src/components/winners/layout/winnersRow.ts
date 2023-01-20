import { IFullInfo } from '../../common/interface';
import CarSvg from '../../garage/layout/car_svg';

export default function createRow(car: IFullInfo, count: number) {
  const table = document.getElementById('tableWinners');
  const tr = document.createElement('tr');

  if (table) {
    table.appendChild(tr);
  }

  const countCell = document.createElement('td');
  countCell.innerText = String(count);

  const carCell = document.createElement('td');
  carCell.innerHTML = CarSvg(car.color, '50', '25');
  const nameCell = document.createElement('td');
  nameCell.innerText = car.name;

  const winsCell = document.createElement('td');
  winsCell.innerText = String(car.wins);

  const timeCell = document.createElement('td');
  timeCell.innerText = String(car.time);

  tr.appendChild(countCell);
  tr.appendChild(carCell);
  tr.appendChild(nameCell);
  tr.appendChild(winsCell);
  tr.appendChild(timeCell);
}
