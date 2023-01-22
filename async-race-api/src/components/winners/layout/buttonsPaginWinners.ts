import TotalWinnersAmount from '../drivers/getTotalWinners';
import PaginationWin from '../drivers/paginationWin';
import { getPageWinNum, setPageWinNum } from '../drivers/valueCurrPageWinners';

export default function buttonsWinners() {
  const footer = document.createElement('div');
  footer.classList.add('main__footer');

  const btnPrev = document.createElement('button');
  btnPrev.classList.add('btn');
  btnPrev.classList.add('btn_inactive');
  btnPrev.setAttribute('id', 'btnPrevWin');
  btnPrev.innerText = 'Previous page';
  footer.appendChild(btnPrev);

  btnPrev.addEventListener('click', () => {
    let currPage = getPageWinNum();
    if (currPage > 1) {
      currPage -= 1;
      setPageWinNum(currPage);
      PaginationWin();
    }
  });

  const pageNum = document.createElement('p');
  pageNum.classList.add('main__page');
  pageNum.setAttribute('id', 'pageNum');
  pageNum.innerText = `Page #${getPageWinNum()}`;
  footer.appendChild(pageNum);

  const btnNext = document.createElement('button');
  btnNext.classList.add('btn');
  btnNext.classList.add('btn_inactive');
  btnNext.setAttribute('id', 'btnNextWin');
  btnNext.innerText = 'Next page';
  footer.appendChild(btnNext);

  btnNext.addEventListener('click', async () => {
    const totalWinners = await TotalWinnersAmount();
    const maxPage = Math.ceil(totalWinners / 10);
    let currPage = getPageWinNum();
    if (maxPage > currPage) {
      currPage += 1;
      setPageWinNum(currPage);
      PaginationWin();
    }
  });

  return footer;
}
