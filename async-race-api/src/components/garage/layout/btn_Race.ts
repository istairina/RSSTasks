import EngineStart from '../drivers/engineStart';
import { getCarsByPage } from '../drivers/getCarsByPage';
import { Car } from '../../common/interface';
import DriveMode from '../drivers/driveMode';
import { startCars } from '../../common/interface';
import { setCurrWinner } from '../drivers/values/valueCurrWinner';
import isActive from '../../common/drivers/btnCheckIsActive';
import btnSetInactive from '../drivers/btnSetInactive';

export default function RaceBtn() {
  const btn_race = document.createElement('button');
  btn_race.classList.add('btn');
  btn_race.setAttribute('id', 'btnRace');
  btn_race.innerText = 'race';

  btn_race.addEventListener('click', async () => {
    if (isActive(btn_race)) {
      btnSetInactive();
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
        const btn_reset = document.getElementById('btnReset');
        if (btn_reset) {
          Promise.all(allPromDrive).then(() => btn_reset.classList.remove('btn_inactive'));
        }
      });
    }
  });

  return btn_race;
}
