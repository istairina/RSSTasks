import DrawCars from './drawCars';
import CarsNumber from './getTotalCarsAmount';
import { getPageNum, setPageNum } from './valuePageNumber';
import setActiveInactiveBtn from './setStateBtnPages';

// import carTotal from './getTotal';

async function getCarsByPage(pageNum: number) {
  const url = `http://127.0.0.1:3000/garage/?${new URLSearchParams({
    _limit: '7',
    _page: String(pageNum),
  })}`;
  const response = await fetch(url);
  const cars = await response.json();
  return cars;
}

export default async function Pagination(pageNum: number) {
  let currPageNum = pageNum;
  let cars = await getCarsByPage(currPageNum);
  // console.log(cars.length);
  if (cars.length === 0) {
    // const currPageNum = getPageNum();
    if (currPageNum > 1) {
      currPageNum -= 1;
      setPageNum(currPageNum);
      // cars = await getCarsByPage(currPageNum);
      // DrawCars(await cars);
    }
    console.log(getPageNum() + ' newSet');
  }
  cars = await getCarsByPage(currPageNum);
  // console.log(getPageNum() + ' getPageNum before DrawCars');
  // console.log(await cars.length);
  DrawCars(await cars);
  // Pagination(currPageNum);
  const carNum = await CarsNumber();
  const arrH1 = document.getElementsByTagName('h1');
  const h1 = arrH1[0];
  // const totalCars = cars.length;
  h1.innerText = `Garage (${carNum})`;

  const pageName = document.getElementById('pageName');
  if (pageName) {
    pageName.innerText = `Page #${currPageNum}`;
  }

  setActiveInactiveBtn();

  // console.log(cars);

  // if (response.ok) {
  //   // если HTTP-статус в диапазоне 200-299
  //   // получаем тело ответа (см. про этот метод ниже)

  //   const response = await fetch(url, {
  //     method: 'GET',

  //   });
  //   console.log(response);
  // } else {
  //   alert('Ошибка HTTP: ' + response.status);
  // }
}
