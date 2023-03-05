import EngineStop from '../drivers/engineStop';

export default function btnStop(id: number) {
  const btn_stop = document.createElement('div');
  btn_stop.classList.add('car__start-stop');
  btn_stop.setAttribute('disabled', '');
  btn_stop.innerText = '⏹';
  btn_stop.setAttribute('id', `stop${id}`);

  btn_stop.addEventListener('click', async function (this: HTMLDivElement) {
    if (!this.hasAttribute('disabled')) {
      await EngineStop(id);
      const winnerWindow = document.getElementById('winnerBox');
      if (winnerWindow) {
        winnerWindow.remove();
      }
    }
  });
  return btn_stop;
}
