import TotalWinnersAmount from '../drivers/getTotalWinners';
import PaginationWin from '../drivers/paginationWin';
import setTotalWinners from '../drivers/setTotalAmount';
import buttonsWinners from './buttonsPaginWinners';
import tableWinners from './tableWinners';

async function totalWinners(h1: HTMLDivElement) {
  await TotalWinnersAmount();
  switch (await TotalWinnersAmount()) {
    case 0:
      h1.innerText = `Let's race!`;
      break;
    case 1:
      h1.innerText = '1 winner';
      break;
    default:
      h1.innerText = `${await TotalWinnersAmount()} winners`;
      break;
  }
}

function WinnersHTML() {
  const winners = document.createElement('div');
  winners.setAttribute('id', 'winners');
  winners.classList.add('master');

  const h1 = document.createElement('h1');
  h1.classList.add('main__title');
  h1.innerText = 'calculating...';
  totalWinners(h1);

  winners.appendChild(h1);

  const tableBox = document.createElement('div');
  tableBox.classList.add('table__box');
  winners.appendChild(tableBox);

  tableBox.appendChild(tableWinners());

  winners.appendChild(buttonsWinners());

  setTotalWinners();
  PaginationWin();
  return winners;
}

export default WinnersHTML;
