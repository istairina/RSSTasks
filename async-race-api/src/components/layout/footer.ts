import CarsNumber from '../getCarsNumber';
import { getPageNum, setPageNum } from '../pageNumberValue';
import Pagination from '../pagination';

export default function Footer() {
  const footer = document.createElement('div');
  footer.classList.add('main__footer');

  const btn_prev = document.createElement('button');
  btn_prev.classList.add('btn');
  btn_prev.classList.add('second');
  btn_prev.setAttribute('id', 'prevPage');
  btn_prev.innerText = 'Previous page';
  footer.appendChild(btn_prev);

  const btn_next = document.createElement('button');
  btn_next.classList.add('btn');
  btn_next.classList.add('second');
  btn_next.setAttribute('id', 'nextPage');
  btn_next.innerText = 'Next page';
  footer.appendChild(btn_next);

  btn_next.addEventListener('click', async () => {
    const cars: number = await CarsNumber();
    const maxPage = cars / 7;
    let currPage = getPageNum();
    if (maxPage > currPage) {
      currPage += 1;
      Pagination(currPage);
      setPageNum(currPage);
    }
  });

  btn_prev.addEventListener('click', async () => {
    let currPage = getPageNum();
    if (currPage > 1) {
      currPage -= 1;
      Pagination(currPage);
    }
    setPageNum(currPage);
  });

  return footer;
}
