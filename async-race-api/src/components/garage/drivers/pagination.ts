import DrawCars from './drawCars';
import CarsNumber from './getTotalCarsAmount';
import { setPageNum } from './valuePageNumber';
import setActiveInactiveBtn from './setStateBtnPages';
import { getCarsByPage } from './getCarsByPage';

export default async function Pagination(pageNum: number) {
  let currPageNum = pageNum;
  let cars = await getCarsByPage();
  if (cars.length === 0) {
    if (currPageNum > 1) {
      currPageNum -= 1;
      setPageNum(currPageNum);
    }
  }
  cars = await getCarsByPage();
  DrawCars(await cars);
  const carNum = await CarsNumber();
  const arrH1 = document.getElementsByTagName('h1');
  const h1 = arrH1[0];
  h1.innerText = `Garage (${carNum})`;

  const pageName = document.getElementById('pageName');
  if (pageName) {
    pageName.innerText = `Page #${currPageNum}`;
  }

  setActiveInactiveBtn();
}
