import TotalWinnersAmount from '../drivers/getTotalWinners';
import PaginationWin from '../drivers/paginationWin';
import setTotalWinners from '../drivers/setTotalAmount';
import { getPageWinNum } from '../drivers/valueCurrPageWinners';
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

  // const mainWin = document.createElement('main');
  // winners.appendChild(mainWin);

  const h1 = document.createElement('h1');
  h1.classList.add('main__title');
  h1.innerText = 'calculating...';
  totalWinners(h1);
  // const totalWinners = ;

  // h1.innerText = `Winners (${TotalWinnersAmount()})`;
  winners.appendChild(h1);

  // const pageNum = document.createElement('p');
  // pageNum.classList.add('main__page');
  // pageNum.setAttribute('id', 'pageNum');
  // pageNum.innerText = `Page #${getPageWinNum()}`;
  // winners.appendChild(pageNum);

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
