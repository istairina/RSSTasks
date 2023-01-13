import GarageHTML from './components/garage';
import WinnersHTML from './components/winners';
import './sass/global.scss';

const app = document.getElementById('app');
const header = document.createElement('header');
const buttonToGarage = document.createElement('button');
buttonToGarage.classList.add('btn');
buttonToGarage.innerText = 'to garage';
const buttonToWinners = document.createElement('button');
buttonToWinners.classList.add('btn');
buttonToWinners.innerText = 'to winners';
header.appendChild(buttonToGarage);
header.appendChild(buttonToWinners);
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

if (app) {
  app.appendChild(header);
  app.appendChild(GarageHTML());
}
