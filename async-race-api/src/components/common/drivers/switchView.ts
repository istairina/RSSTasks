import GarageHTML from '../../garage/layout/garage';
import WinnersHTML from '../../winners/winners';
import { getPageNum } from '../../garage/drivers/valuePageNumber';

let saveStateInputs: string[] = [];

function SwitchView(app: HTMLElement, buttonToGarage: HTMLButtonElement, buttonToWinners: HTMLButtonElement) {
  buttonToGarage.addEventListener('click', () => {
    console.log('switch to garage ' + getPageNum());
    if (app) {
      const master: HTMLElement | null = document.querySelector('.master');
      if (master) {
        app.removeChild(master);
      }
      app.appendChild(GarageHTML(saveStateInputs));
    }
  });

  buttonToWinners.addEventListener('click', () => {
    console.log('winners');
    const inpTextCreate = document.getElementById('inp__create-text') as HTMLInputElement;
    const inpColorCreate = document.getElementById('inp__create-color') as HTMLInputElement;
    const inpTextUpd = document.getElementById('inp__update-text') as HTMLInputElement;
    const inpColorUpd = document.getElementById('inp__update-color') as HTMLInputElement;
    saveStateInputs = [inpTextCreate.value, inpColorCreate.value, inpTextUpd.value, inpColorUpd.value];

    if (app) {
      const master: HTMLElement | null = document.querySelector('.master');
      if (master) {
        app.removeChild(master);
      }
      app.appendChild(WinnersHTML());
    }
  });
}

export default SwitchView;
