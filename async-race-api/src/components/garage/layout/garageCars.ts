import carTotal from '../drivers/getTotal';
import Footer from './footer';

export default function GarageMainView() {
  const main = document.createElement('main');

  const h1 = document.createElement('h1');
  h1.classList.add('main__title');
  h1.innerText = '';
  main.appendChild(h1);

  const allCarsBox = document.createElement('div');
  allCarsBox.setAttribute('id', 'allCarsBox');
  main.appendChild(allCarsBox);

  carTotal();
  main.appendChild(Footer());
  return main;
}
