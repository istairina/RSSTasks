// import DrawCars from '../drawCars';
import carTotal from '../drivers/getTotal';
import { getPageNum } from '../drivers/pageNumberValue';
import Footer from './footer';

export default function GarageMainView() {
  const main = document.createElement('main');

  const h1 = document.createElement('h1');
  h1.classList.add('main__title');
  h1.innerText = `Garage ()`;
  main.appendChild(h1);

  const pageName = document.createElement('p');
  pageName.classList.add('main__page');
  pageName.setAttribute('id', 'pageName');
  pageName.innerText = `Page #${getPageNum()}`;
  main.appendChild(pageName);

  const allCarsBox = document.createElement('div');
  allCarsBox.setAttribute('id', 'allCarsBox');
  main.appendChild(allCarsBox);
  // allCarsBox.appendChild(CarBox());
  carTotal();

  main.appendChild(Footer());

  return main;
}
