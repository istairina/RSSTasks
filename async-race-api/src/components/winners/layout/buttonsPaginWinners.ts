import isActive from '../../common/drivers/btnCheckIsActive';
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
    if (isActive(btnPrev)) {
      setPageWinNum(getPageWinNum() - 1);
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
    if (isActive(btnNext)) {
      setPageWinNum(getPageWinNum() + 1);
      PaginationWin();
    }
  });

  return footer;
}
