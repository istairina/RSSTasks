import EngineStop from '../drivers/engineStop';
import { getCarsByPage } from '../drivers/getCarsByPage';
import { Car } from '../../common/interface';
import { setCurrWinner } from '../drivers/values/valueCurrWinner';
import btnSetActive from '../drivers/btnSetActive';
import isActive from '../../common/drivers/btnCheckIsActive';

export default function ResetBtn() {
  const btn_race = document.getElementById('btnRace');

  const btn_reset = document.createElement('button');
  btn_reset.classList.add('btn');
  btn_reset.setAttribute('id', 'btnReset');
  btn_reset.innerText = 'reset';

  btn_reset.addEventListener('click', async () => {
    if (isActive(btn_reset)) {
      btnSetActive();
      if (btn_race && !isActive(btn_race)) {
        btn_race.classList.remove('btn_inactive');
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

  return btn_reset;
}
