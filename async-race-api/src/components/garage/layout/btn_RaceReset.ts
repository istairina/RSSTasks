import EngineStart from '../drivers/engineStart';
import EngineStop from '../drivers/engineStop';
import { getCarsByPage } from '../drivers/getCarsByPage';
import { Car } from '../../common/interface';
import DriveMode from '../drivers/driveMode';
import { startCars } from '../../common/interface';
// import AnimatioStart from '../drivers/animationStart';
import { setCurrWinner } from '../drivers/values/valueCurrWinner';
import btnSetActive from '../drivers/btnSetActive';

export default function RaceResetBtn() {
  const box = document.createElement('div');

  const btn_race = document.createElement('button');
  btn_race.classList.add('btn');
  btn_race.setAttribute('id', 'btnRace');
  btn_race.innerText = 'race';
  box.appendChild(btn_race);

  const btn_reset = document.createElement('button');
  btn_reset.classList.add('btn');
  btn_reset.setAttribute('id', 'btnReset');
  btn_reset.innerText = 'reset';
  box.appendChild(btn_reset);

  btn_race.addEventListener('click', async () => {
    if (!btn_race.classList.contains('btn_inactive')) {
      const winnerWindow = document.getElementById('winnerBox');
      if (winnerWindow) {
        winnerWindow.remove();
      }
      const allBtns = document.querySelectorAll('.btn');
      allBtns.forEach((btn) => btn.classList.add('btn_inactive'));
      // console.log(allBtns.length);
      setCurrWinner(0);
      const cars = await getCarsByPage();
      const allProm: Promise<startCars>[] = [];
      cars.forEach((elem: Car) => {
        allProm.push(Promise.resolve(EngineStart(elem.id)));
      });

      Promise.all(allProm).then(async (content) => {
        const allPromDrive: Promise<number>[] = [];
        cars.forEach(async (elem: Car, ind: number) => {
          allPromDrive.push(Promise.resolve(DriveMode(elem.id, true, content[ind])));
        });
        Promise.all(allPromDrive).then(() => btn_reset.classList.remove('btn_inactive'));
      });
    }
  });

  btn_reset.addEventListener('click', async () => {
    if (!btn_reset.classList.contains('btn_inactive')) {
      btnSetActive();
      if (btn_race.classList.contains('btn_inactive')) {
        btn_race.classList.remove('btn_inactive');
        // btn_race.classList.add('btn');
      }
      const btnGenerate = document.getElementById('btn__generate-cars');
      if (btnGenerate) {
        btnGenerate.classList.remove('btn_inactive');
      }
      const cars = await getCarsByPage();
      cars.forEach((elem: Car) => {
        EngineStop(elem.id);
      });
      const winnerWindow = document.getElementById('winnerBox');
      if (winnerWindow) {
        winnerWindow.remove();
      }
      setCurrWinner(0);
    }
  });

  return box;
}
