import { getPageWinNum } from '../drivers/valueCurrPageWinners';
import winnerCars from '../drivers/getWinners';

export default function tableWinners() {
  const table = document.createElement('table');
  table.classList.add('table');

  const thead = document.createElement('thead');
  table.appendChild(thead);

  const tableHead = document.createElement('tr');
  thead.appendChild(tableHead);

  const idHead = document.createElement('th');
  idHead.setAttribute('id', 'idWinners');
  idHead.innerText = '#';
  tableHead.appendChild(idHead);

  const carHead = document.createElement('th');
  carHead.innerText = 'Car';
  tableHead.appendChild(carHead);

  const nameHead = document.createElement('th');
  nameHead.innerText = 'Name';
  tableHead.appendChild(nameHead);

  const winsHead = document.createElement('th');
  winsHead.setAttribute('id', 'winsWinners');
  winsHead.innerText = 'Wins';
  winsHead.style.cursor = 'pointer';
  winsHead.setAttribute('title', 'Click to sort by wins amount');
  tableHead.appendChild(winsHead);

  let winsOrder = 'ASC';
  winsHead.addEventListener('click', () => {
    winsOrder = winsOrder === 'ASC' ? 'DESC' : 'ASC';
    winnerCars(getPageWinNum(), 'wins', winsOrder);
  });

  const timeHead = document.createElement('th');
  timeHead.setAttribute('id', 'timeWinners');
  timeHead.setAttribute('title', 'Click to sort by time');
  timeHead.style.cursor = 'pointer';
  timeHead.innerText = 'Best time (sec)';
  tableHead.appendChild(timeHead);

  let timeOrder = 'DESC';
  timeHead.addEventListener('click', () => {
    timeOrder = timeOrder === 'ASC' ? 'DESC' : 'ASC';
    winnerCars(getPageWinNum(), 'time', timeOrder);
  });

  const tbody = document.createElement('tbody');
  tbody.setAttribute('id', 'tableWinners');
  table.appendChild(tbody);

  return table;
}
