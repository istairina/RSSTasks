import CarsNumber from './getTotalCarsAmount';
import { getPageNum } from './valuePageNumber';

export default async function setActiveInactiveBtn() {
  const currPage = getPageNum();
  const btn_next = document.getElementById('nextPage');
  const btn_prev = document.getElementById('prevPage');

  const cars: number = await CarsNumber();
  const maxPage = cars / 7;

  if (btn_next) {
    if (maxPage) {
      if (Math.ceil(maxPage) === currPage) {
        btn_next.classList.remove('btn');
        btn_next.classList.add('btn_inactive');
      } else {
        btn_next.classList.add('btn');
        btn_next.classList.remove('btn_inactive');
      }
    }
  }

  if (btn_prev) {
    if (currPage === 1) {
      btn_prev.classList.remove('btn');
      btn_prev.classList.add('btn_inactive');
    } else {
      btn_prev.classList.add('btn');
      btn_prev.classList.remove('btn_inactive');
    }
  }
}
