import createWinner from '../../winners/drivers/createWinner';
import GetSpecWinCar from '../../winners/drivers/getSpecWinner';
import updateWinner from '../../winners/drivers/updateWinner';
import winnerTitle from '../layout/winnerTitle';
import { getCurrWinner, setCurrWinner } from './valueCurrWinner';

export default async function DriveMode(id: number) {
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
      if (!getCurrWinner()) {
        //   console.log(getCurrWinner());
        // } else {
        await setCurrWinner(id);
        let numTime = 0;
        let time = '';
        if (car) {
          numTime = +car.style.animationDuration.slice(0, -2);
          time = String(Math.trunc(numTime) / 1000);
        }
        winnerTitle(getCurrWinner(), time);
        const winCar = await GetSpecWinCar(id);
        console.log('obj length ' + Object.keys(winCar).length);
        if (Object.keys(winCar).length === 0) {
          createWinner(id, 1, +time);
        } else {
          console.log('time now: ' + +time + ' before time: ' + winCar.time + ' wincar id: ' + winCar.id);
          console.log('new time better? ' + (+time < winCar.time));
          const bestTime = +time < winCar.time ? +time : winCar.time;
          console.log('best time is ' + bestTime);
          updateWinner(id, ++winCar.wins, bestTime);
        }
      }
      return id;
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
