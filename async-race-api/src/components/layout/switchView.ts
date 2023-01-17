import GarageHTML from './garage';
import WinnersHTML from './/winners';

function SwitchView(app: HTMLElement, buttonToGarage: HTMLButtonElement, buttonToWinners: HTMLButtonElement) {
  buttonToGarage.addEventListener('click', () => {
    console.log('garage');
    if (app) {
      const master: HTMLElement | null = document.querySelector('.master');
      if (master) {
        app.removeChild(master);
      }
      app.appendChild(GarageHTML());
    }
  });

  buttonToWinners.addEventListener('click', () => {
    console.log('winners');
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
