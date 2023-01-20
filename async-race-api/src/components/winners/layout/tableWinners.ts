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
  tableHead.appendChild(winsHead);

  const timeHead = document.createElement('th');
  timeHead.setAttribute('id', 'timeWinners');
  timeHead.innerText = 'Best time (sec)';
  tableHead.appendChild(timeHead);

  const tbody = document.createElement('tbody');
  tbody.setAttribute('id', 'tableWinners');
  table.appendChild(tbody);

  return table;
}
