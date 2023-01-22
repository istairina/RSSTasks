import GarageHTML from '../../garage/layout/garage';
import WinnersHTML from '../../winners/layout/winners';
// import winnerCars from '../../winners/drivers/getWinners';
// import { getPageNum } from '../../garage/drivers/valueCurrPageNumber';

let saveStateInputs: string[] = [];

function SwitchView(app: HTMLElement, buttonToGarage: HTMLButtonElement, buttonToWinners: HTMLButtonElement) {
  // const garage = document.getElementById('garage');
  // const winners = document.getElementById('winners');
  // console.log(winners);

  buttonToGarage.addEventListener('click', () => {
    // console.log('switch to garage ' + getPageNum());
    // const garage = document.getElementById('garage');
    // const winners = document.getElementById('winners');
    // if (garage) {
    //   garage.style.display = 'block';
    //   if (winners) {
    //     winners.style.display = 'none';
    //   }
    // }
    if (app) {
      const master: HTMLElement | null = document.querySelector('.master');
      if (master) {
        app.removeChild(master);
      }
      app.appendChild(GarageHTML(saveStateInputs));
    }
  });

  buttonToWinners.addEventListener('click', () => {
    //   const garage = document.getElementById('garage');
    //   const winners = document.getElementById('winners');
    //   if (winners) {
    //     console.log('here is winners');
    //     winners.style.display = 'block';
    //     if (garage) {
    //       garage.style.display = 'none';
    //     }
    //   } else {
    //     if (app) {
    //       app.appendChild(WinnersHTML());
    //     }
    //   }
    // });
    // console.log('winners');
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
      // winnerCars();
    }
  });
}

export default SwitchView;
