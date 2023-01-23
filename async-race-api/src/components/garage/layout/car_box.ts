import { startCars } from '../../common/interface';
import AnimatioStart from '../drivers/animationStart';
import DriveMode from '../drivers/driveMode';
import EngineStart from '../drivers/engineStart';
import EngineStop from '../drivers/engineStop';
import removeCar from '../drivers/removeCar';
import updateCarServer from '../drivers/updateCar';
import { setSelectedCar } from '../drivers/values/valueSelectedCar';
import CarSvg from './car_svg';

function CarBox(name: string, color: string, id: number) {
  const car_box = document.createElement('div');
  car_box.classList.add('car__box');
  car_box.setAttribute('id', String(id));

  const header = document.createElement('div');
  header.classList.add('car__header');

  const brand = document.createElement('span');
  brand.classList.add('car__brand');
  brand.innerText = name;
  header.appendChild(brand);

  const rule_buttons = document.createElement('div');
  rule_buttons.classList.add('car__rule-button');

  const btn_start = document.createElement('div');
  btn_start.classList.add('car__start-stop');
  // btn_start.classList.add('inactiveStartStop');
  btn_start.classList.add('start');
  btn_start.innerText = '⏵';
  btn_start.setAttribute('id', `start${id}`);
  rule_buttons.appendChild(btn_start);

  btn_start.addEventListener('click', async function () {
    if (!this.hasAttribute('disabled')) {
      const content: startCars = await EngineStart(id);
      DriveMode(id, false);
      AnimatioStart(id, content);
    }
  });

  const btn_stop = document.createElement('div');
  btn_stop.classList.add('car__start-stop');
  // btn_stop.classList.add('inactiveStartStop');
  btn_stop.setAttribute('disabled', '');
  btn_stop.innerText = '⏹';
  btn_stop.setAttribute('id', `stop${id}`);
  rule_buttons.appendChild(btn_stop);

  btn_stop.addEventListener('click', async function (this: HTMLDivElement) {
    if (!this.hasAttribute('disabled')) {
      const winnerWindow = document.getElementById('winnerBox');
      if (winnerWindow) {
        winnerWindow.remove();
      }
      const btnGenerate = document.getElementById('btn__generate-cars');
      if (btnGenerate) {
        btnGenerate.classList.remove('btn_inactive');
      }
      EngineStop(id);
    }
  });

  const btn_select = document.createElement('button');
  btn_select.classList.add('btn');
  btn_select.classList.add('second');
  btn_select.style.width = '118px';
  btn_select.style.marginLeft = '15px';
  btn_select.innerText = 'select';
  rule_buttons.appendChild(btn_select);

  btn_select.addEventListener('click', () => {
    const btnUpdate = document.getElementById('btn__update-car');
    if (btnUpdate) {
      btnUpdate.classList.add('btn');
      btnUpdate.classList.add('second');
      btnUpdate.classList.remove('btn_inactive');
    }
    setSelectedCar(name, color, id);
    updateCarServer();
  });

  const btn_remove = document.createElement('button');
  btn_remove.classList.add('btn');
  btn_remove.classList.add('second');
  btn_remove.style.width = '118px';
  btn_remove.innerText = 'remove';
  rule_buttons.appendChild(btn_remove);

  btn_remove.addEventListener('click', () => {
    removeCar(id);
  });

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
  car.setAttribute('id', `car${id}`);
  car.innerHTML = CarSvg(color);

  images.appendChild(road);
  images.appendChild(flag);
  images.appendChild(car);

  car_box.appendChild(header);
  car_box.appendChild(rule_buttons);
  car_box.appendChild(images);

  car.addEventListener('animationend', async () => {
    EngineStop(id, true);
  });

  return car_box;
}

export default CarBox;
