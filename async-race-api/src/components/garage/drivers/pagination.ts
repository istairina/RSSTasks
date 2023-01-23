import DrawCars from './drawCars';
import CarsNumber from './getTotalCarsAmount';
import { setPageNum } from './values/valueCurrPageNumber';
import setActiveInactiveBtn from './setStateBtnPages';
import { getCarsByPage } from './getCarsByPage';
import checkCarPosition from './checkCarPosition';

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
  switch (carNum) {
    case 0:
      h1.innerText = 'No car in the garage';
      break;
    case 1:
      h1.innerText = '1 car in the garage';
      break;
    default:
      h1.innerText = `${carNum} cars in the garage`;
      break;
  }
  // h1.innerText = `Garage (${carNum})`;

  const pageName = document.getElementById('pageName');
  if (pageName) {
    pageName.innerText = `Page #${currPageNum}`;
  }

  checkCarPosition();

  const winnerBox = document.getElementById('winnerBox');
  if (winnerBox) {
    winnerBox.remove();
  }
  setActiveInactiveBtn();
}
