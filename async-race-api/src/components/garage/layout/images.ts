import EngineStop from '../drivers/engineStop';
import CarSvg from './car_svg';

export default function Images(id: number, color: string) {
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

  car.addEventListener('animationend', async () => {
    EngineStop(id, true);
  });

  images.appendChild(road);
  images.appendChild(flag);
  images.appendChild(car);

  return images;
}
