import EngineStop from '../drivers/engineStop';
import { getCarsByPage } from '../drivers/getCarsByPage';
import { Car } from '../../common/interface';
import { setCurrWinner } from '../drivers/values/valueCurrWinner';
import btnSetActive from '../drivers/btnSetActive';
import isActive from '../../common/drivers/btnCheckIsActive';

export default function ResetBtn() {
  const btn_reset = document.createElement('button');
  btn_reset.classList.add('btn');
  btn_reset.setAttribute('id', 'btnReset');
  btn_reset.innerText = 'reset';

  btn_reset.addEventListener('click', async () => {
    if (isActive(btn_reset)) {
      const cars = await getCarsByPage();
      const engineStopPromise: Promise<void>[] = [];
      cars.forEach((elem: Car) => {
        engineStopPromise.push(Promise.resolve(EngineStop(elem.id)));
      });
      Promise.all(engineStopPromise).then(() => btnSetActive());
      const winnerWindow = document.querySelectorAll('#winnerBox');
      winnerWindow.forEach((popup) => popup.remove());
      setCurrWinner(0);
    }
  });

  return btn_reset;
}
