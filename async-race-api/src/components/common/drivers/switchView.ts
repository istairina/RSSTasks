import WinnersHTML from '../../winners/layout/winners';
import isActive from './btnCheckIsActive';

function SwitchView(app: HTMLElement, buttonToGarage: HTMLButtonElement, buttonToWinners: HTMLButtonElement) {
  buttonToGarage.addEventListener('click', () => {
    if (isActive(buttonToGarage)) {
      buttonToGarage.classList.add('btn_inactive');
      buttonToWinners.classList.remove('btn_inactive');
      const garage = document.getElementById('garage');
      const winners = document.getElementById('winners');
      if (garage) {
        garage.style.display = 'block';
      }
      if (app) {
        if (winners) {
          app.removeChild(winners);
        }
      }
    }
  });

  buttonToWinners.addEventListener('click', () => {
    if (isActive(buttonToWinners)) {
      buttonToWinners.classList.add('btn_inactive');
      buttonToGarage.classList.remove('btn_inactive');
      const garage = document.getElementById('garage');
      const winners = document.getElementById('winners');
      if (garage) {
        garage.style.display = 'none';
      }
      if (app && !winners) {
        app.appendChild(WinnersHTML());
      }
    }
  });
}

export default SwitchView;
