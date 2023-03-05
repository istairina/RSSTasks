import { startCars } from '../../common/interface';
import createWinner from '../../winners/drivers/createWinner';
import GetSpecWinCar from '../../winners/drivers/getSpecWinner';
import updateWinner from '../../winners/drivers/updateWinner';
import brokenCar from '../layout/brokenCar';
import winnerTitle from '../layout/winnerTitle';
import AnimatioStart from './animationStart';
import { getCurrWinner, setCurrWinner } from './values/valueCurrWinner';

export default async function DriveMode(id: number, race = true, content: startCars) {
  const url = `https://race-api-7yt1.onrender.com/engine/?${new URLSearchParams({
    id: String(id),
    status: 'drive',
  })}`;
  AnimatioStart(id, content);
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
          const car = document.getElementById(`car${id}`);
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
      return 0;
    })
    .catch((error) => {
      if (String(error) === 'Error: 500') {
        brokenCar(id);
      }
      return 0;
    });
}
