import EngineStart from '../drivers/engineStart';
import EngineStop from '../drivers/engineStop';
import { getCarsByPage } from '../drivers/getCarsByPage';
import { Car } from '../db/interface';

export default function RaceResetBtn() {
  const box = document.createElement('div');

  const btn_race = document.createElement('button');
  btn_race.classList.add('btn');
  btn_race.innerText = 'race';
  box.appendChild(btn_race);

  const btn_reset = document.createElement('button');
  btn_reset.classList.add('btn');
  btn_reset.innerText = 'reset';
  box.appendChild(btn_reset);

  btn_race.addEventListener('click', async () => {
    const cars = await getCarsByPage();
    cars.forEach((elem: Car) => {
      EngineStart(elem.id);
    });
  });

  btn_reset.addEventListener('click', async () => {
    const cars = await getCarsByPage();
    cars.forEach((elem: Car) => {
      EngineStop(elem.id);
    });
  });

  return box;
}
