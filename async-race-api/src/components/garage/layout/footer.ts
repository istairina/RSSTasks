import CarsNumber from '../drivers/getTotalCarsAmount';
import { getPageNum, setPageNum } from '../drivers/values/valueCurrPageNumber';
import Pagination from '../drivers/pagination';

export default function Footer() {
  const footer = document.createElement('div');
  footer.classList.add('main__footer');

  const btn_prev = document.createElement('button');
  btn_prev.classList.add('btn');
  btn_prev.setAttribute('id', 'prevPage');
  btn_prev.innerText = 'Previous page';
  footer.appendChild(btn_prev);

  const pageName = document.createElement('p');
  pageName.classList.add('main__page');
  pageName.setAttribute('id', 'pageName');
  pageName.innerText = `Page #${getPageNum()}`;
  footer.appendChild(pageName);

  const btn_next = document.createElement('button');
  btn_next.classList.add('btn');
  btn_next.setAttribute('id', 'nextPage');
  btn_next.innerText = 'Next page';
  footer.appendChild(btn_next);

  btn_next.addEventListener('click', async () => {
    const cars: number = await CarsNumber();
    const maxPage = cars / 7;
    let currPage = getPageNum();
    if (maxPage > currPage) {
      currPage += 1;
      setPageNum(currPage);
      Pagination(currPage);
    }
  });

  btn_prev.addEventListener('click', async () => {
    let currPage = getPageNum();
    if (currPage > 1) {
      currPage -= 1;
      setPageNum(currPage);
      Pagination(currPage);
    }
  });

  return footer;
}
