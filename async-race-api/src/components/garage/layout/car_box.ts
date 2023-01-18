import removeCar from '../drivers/removeCar';
import updateCarServer from '../drivers/updateCar';
import CarSvg from './car_svg';

function CarBox(name: string, color: string, id: number) {
  const car_box = document.createElement('div');
  car_box.classList.add('car__box');
  car_box.setAttribute('id', String(id));

  const header = document.createElement('div');
  header.classList.add('car__header');

  const btn_select = document.createElement('button');
  btn_select.classList.add('btn');
  btn_select.classList.add('second');
  btn_select.innerText = 'select';
  header.appendChild(btn_select);

  btn_select.addEventListener('click', () => {
    updateCarServer(name, color, id);
  });

  const btn_remove = document.createElement('button');
  btn_remove.classList.add('btn');
  btn_remove.classList.add('second');
  btn_remove.innerText = 'remove';
  header.appendChild(btn_remove);

  btn_remove.addEventListener('click', () => {
    removeCar(id);
  });

  const brand = document.createElement('span');
  brand.classList.add('car__brand');
  brand.innerText = name;
  header.appendChild(brand);

  const rule_buttons = document.createElement('div');
  rule_buttons.classList.add('car__rule-button');

  const btn_start = document.createElement('div');
  btn_start.classList.add('car__start-stop');
  btn_start.classList.add('start');
  btn_start.innerText = '⏵';

  const btn_stop = document.createElement('div');
  btn_stop.classList.add('car__start-stop');
  btn_stop.classList.add('stop');
  btn_stop.innerText = '⏹';

  rule_buttons.appendChild(btn_start);
  rule_buttons.appendChild(btn_stop);

  const images = document.createElement('div');
  images.classList.add('car__images');

  const road = document.createElement('div');
  road.classList.add('car__road');

  const road_hr = document.createElement('hr');

  road.appendChild(road_hr);

  const flag = document.createElement('div');
  flag.classList.add('car__flag');

  const car = document.createElement('div');
  car.classList.add('car__car');
  car.innerHTML = CarSvg(color);

  images.appendChild(road);
  images.appendChild(flag);
  images.appendChild(car);

  car_box.appendChild(header);
  car_box.appendChild(rule_buttons);
  car_box.appendChild(images);

  return car_box;
}

export default CarBox;
