import TotalWinnersAmount from '../drivers/getTotalWinners';
import PaginationWin from '../drivers/paginationWin';
import setTotalWinners from '../drivers/setTotalAmount';
import { getPageWinNum } from '../drivers/valueCurrPageWinners';
import buttonsWinners from './buttonsPaginWinners';
import tableWinners from './tableWinners';

function WinnersHTML() {
  const winners = document.createElement('div');
  winners.classList.add('master');

  const main = document.createElement('main');
  winners.appendChild(main);

  const h1 = document.createElement('h1');
  h1.classList.add('main__title');
  h1.innerText = `Winners (${TotalWinnersAmount()})`;
  main.appendChild(h1);

  const pageNum = document.createElement('p');
  pageNum.classList.add('main__page');
  pageNum.setAttribute('id', 'pageNum');
  pageNum.innerText = `Page #${getPageWinNum()}`;
  main.appendChild(pageNum);

  const tableBox = document.createElement('div');
  tableBox.classList.add('table__box');
  main.appendChild(tableBox);

  tableBox.appendChild(tableWinners());

  main.appendChild(buttonsWinners());

  setTotalWinners();
  PaginationWin();
  return winners;
}

export default WinnersHTML;
