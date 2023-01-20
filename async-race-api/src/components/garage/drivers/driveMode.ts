// import { startCars } from '../db/interface';

import winnerTitle from '../layout/winnerTitle';
import { getCurrWinner, setCurrWinner } from './valueCurrWinner';

export default async function DriveMode(id: number) {
  const url = `http://127.0.0.1:3000/engine/?${new URLSearchParams({
    id: String(id),
    status: 'drive',
  })}`;

  // const response = await fetch(url, {
  //   method: 'PATCH',
  // });
  const car = document.getElementById(`car${id}`);
  return fetch(url, {
    method: 'PATCH',
  })
    .then(async (response) => {
      if (response.ok) {
        return await response.json();
      }
      throw new Error(String(response.status));
    })
    .then(async () => {
      if (getCurrWinner()) {
        console.log(getCurrWinner());
      } else {
        await setCurrWinner(id);
        // console.log('curr winner is ' + getCurrWinner());
        let time = '';
        if (car) {
          // let numTime = +car.style.animationDuration.slice(0, -2);
          time = String(Math.trunc(+car.style.animationDuration.slice(0, -2)) / 1000);
        }
        winnerTitle(getCurrWinner(), time);
      }
      return id;
    })
    .catch((error) => {
      // console.log(String(error));
      if (String(error) === 'Error: 500') {
        if (car) {
          car.style.animationPlayState = 'paused';
          const carBroken = document.createElement('span');
          carBroken.innerText = 'BROKEN!';
          car.appendChild(carBroken);
        }
      }
      return 0;
    });

  // if (!response.ok) {
  //   console.log('erroroo ' + response.status);
  //   return Promise.reject(response);
  // }

  // if (response.ok) {
  //   //   const content = await response.json();
  //   console.log('finish');
  //   //   // const content = await response.json();
  //   //   // console.log('ok ' + content);
  //   //   // SetStateStartStopBtn(id, content);
  // }
  // // } else {
  // if (response.status === 500) {
  //   const car = document.getElementById(`car${id}`);
  //   // console.log(`stop engine ${id}!`);
  //   // const car = document.getElementById(`car${id}`);
  //   if (car) {
  //     car.style.animationPlayState = 'paused';
  //     const carBroken = document.createElement('span');
  //     carBroken.innerText = 'BROKEN!';
  //     car.appendChild(carBroken);
  //   }
  // }
  // console.log('error ' + response.status);
  // }
}
