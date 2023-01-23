import { getPageNum, setPageNum } from '../drivers/values/valueCurrPageNumber';
import Pagination from '../drivers/pagination';
import isActive from '../../common/drivers/btnCheckIsActive';

export default function Footer() {
  const footer = document.createElement('div');
  footer.classList.add('main__footer');

  const btn_prev = document.createElement('button');
  btn_prev.classList.add('btn');
  btn_prev.setAttribute('id', 'prevPage');
  btn_prev.innerText = 'Previous page';
  footer.appendChild(btn_prev);

  btn_prev.addEventListener('click', async () => {
    if (isActive(btn_prev)) {
      setPageNum(getPageNum() - 1);
      Pagination();
    }
  });

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
    if (isActive(btn_next)) {
      setPageNum(getPageNum() + 1);
      Pagination();
    }
  });

  return footer;
}
