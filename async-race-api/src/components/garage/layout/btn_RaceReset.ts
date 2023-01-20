import EngineStart from '../drivers/engineStart';
import EngineStop from '../drivers/engineStop';
import { getCarsByPage } from '../drivers/getCarsByPage';
import { Car } from '../db/interface';
import DriveMode from '../drivers/driveMode';
import { startCars } from '../db/interface';
import AnimatioStart from '../drivers/animationStart';
import { setCurrWinner } from '../drivers/valueCurrWinner';

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
    setCurrWinner(0);
    const cars = await getCarsByPage();
    const allProm: Promise<startCars>[] = [];
    // const allProm2: Promise<number>[] = [];
    cars.forEach((elem: Car) => {
      // const temp = await Promise(EngineStart(elem.id));
      // if (temp) {
      allProm.push(Promise.resolve(EngineStart(elem.id)));
      // allProm2.push(Promise.resolve(DriveMode(elem.id)));
      // }
    });

    Promise.all(allProm).then(async (content) => {
      // console.log(content);
      // const winner = Promise.any(allProm2);
      // console.log(await winner);
      cars.forEach(async (elem: Car, ind: number) => {
        DriveMode(elem.id);

        AnimatioStart(elem.id, content[ind]);
      });
    });
  });

  btn_reset.addEventListener('click', async () => {
    const cars = await getCarsByPage();
    cars.forEach((elem: Car) => {
      EngineStop(elem.id);
    });
    const winnerWindow = document.getElementById('winnerBox');
    if (winnerWindow) {
      winnerWindow.remove();
    }
    setCurrWinner(0);
  });

  return box;
}
