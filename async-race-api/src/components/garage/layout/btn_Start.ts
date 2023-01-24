import DriveMode from '../drivers/driveMode';
import EngineStart from '../drivers/engineStart';
import { startCars } from '../../common/interface';

export default function btnStart(id: number) {
  const btn_start = document.createElement('div');
  btn_start.classList.add('car__start-stop');
  btn_start.classList.add('start');
  btn_start.innerText = '⏵';
  btn_start.setAttribute('id', `start${id}`);

  btn_start.addEventListener('click', async function () {
    if (!this.hasAttribute('disabled')) {
      const content: startCars = await EngineStart(id);
      const btnReset = document.getElementById('btnReset');
      if (btnReset) {
        btnReset.classList.remove('btn_inactive');
      }
      DriveMode(id, false, content);
    }
  });

  return btn_start;
}
