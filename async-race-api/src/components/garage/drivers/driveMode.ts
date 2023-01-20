import createWinner from '../../winners/drivers/createWinner';
import GetSpecWinCar from '../../winners/drivers/getSpecWinner';
import updateWinner from '../../winners/drivers/updateWinner';
import winnerTitle from '../layout/winnerTitle';
import { getCurrWinner, setCurrWinner } from './valueCurrWinner';

export default async function DriveMode(id: number, race = true) {
  const url = `http://127.0.0.1:3000/engine/?${new URLSearchParams({
    id: String(id),
    status: 'drive',
  })}`;

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
      if (race) {
        if (!getCurrWinner()) {
          await setCurrWinner(id);
          let numTime = 0;
          let time = '';
          if (car) {
            numTime = +car.style.animationDuration.slice(0, -2);
            time = String(Math.trunc(numTime) / 1000);
          }
          winnerTitle(getCurrWinner(), time);
          const winCar = await GetSpecWinCar(id);
          if (Object.keys(winCar).length === 0) {
            createWinner(id, 1, +time);
          } else {
            const bestTime = +time < winCar.time ? +time : winCar.time;
            updateWinner(id, ++winCar.wins, bestTime);
          }
        }
        return id;
      }
    })
    .catch((error) => {
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
}
