import TotalWinnersAmount from './getTotalWinners';
import winnerCars from './getWinners';
import { getPageWinNum } from './valueCurrPageWinners';

export default async function PaginationWin() {
  const currPageNum = getPageWinNum();
  winnerCars(currPageNum);

  const totalWinners = await TotalWinnersAmount();
  const maxPageNum = Math.ceil(totalWinners / 10);
  const btnNext = document.getElementById('btnNextWin');
  const btnPrev = document.getElementById('btnPrevWin');
  if (btnNext) {
    if (maxPageNum > currPageNum) {
      btnNext.classList.remove('btn_inactive');
      btnNext.classList.add('btn');
    }
    if (maxPageNum === currPageNum) {
      btnNext.classList.add('btn_inactive');
      btnNext.classList.remove('btn');
    }
  }

  if (btnPrev) {
    if (currPageNum === 1) {
      btnPrev.classList.add('btn_inactive');
      btnPrev.classList.remove('btn');
    } else {
      btnPrev.classList.remove('btn_inactive');
      btnPrev.classList.add('btn');
    }
  }

  const pageNum = document.getElementById('pageNum');
  if (pageNum) {
    pageNum.innerText = `Page #${currPageNum}`;
  }
}
