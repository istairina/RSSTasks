import carTotal from '../getTotal';

export default function GarageMainView() {
  const main = document.createElement('main');

  const h1 = document.createElement('h1');
  h1.classList.add('main__title');
  h1.innerText = `Garage (0)`;
  main.appendChild(h1);

  const pageName = document.createElement('p');
  pageName.classList.add('main__page');
  pageName.innerText = `Page #1`;
  main.appendChild(pageName);

  const allCarsBox = document.createElement('div');
  allCarsBox.setAttribute('id', 'allCarsBox');
  main.appendChild(allCarsBox);
  // allCarsBox.appendChild(CarBox());
  carTotal();

  const footer = document.createElement('div');
  footer.classList.add('main__footer');

  const btn_prev = document.createElement('button');
  btn_prev.classList.add('btn');
  btn_prev.classList.add('second');
  footer.appendChild(btn_prev);

  const btn_next = document.createElement('button');
  btn_next.classList.add('btn');
  btn_next.classList.add('second');
  footer.appendChild(btn_next);

  return main;
}
