import SetStateStartStopBtn from './setStateStartStopBtn';
import { startCars } from '../../common/interface';

export default async function EngineStart(id: number) {
  const btnRace = document.getElementById('btnRace');
  if (btnRace) {
    btnRace.classList.add('btn_inactive');
  }
  const btnGenerate = document.getElementById('btn__generate-cars');
  if (btnGenerate) {
    btnGenerate.classList.add('btn_inactive');
  }
  const url = `http://127.0.0.1:3000/engine/?${new URLSearchParams({
    id: String(id),
    status: 'started',
  })}`;
  const response = await fetch(url, {
    method: 'PATCH',
  });
  let content: startCars = {
    velocity: 0,
    distance: 0,
  };
  if (response.ok) {
    content = await response.json();
    SetStateStartStopBtn(id);
  }
  return content;
}
