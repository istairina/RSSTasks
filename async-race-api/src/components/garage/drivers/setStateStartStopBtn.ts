export default function SetStateStartStopBtn(id: number, toStart = false) {
  const btn_stop = document.getElementById(`stop${id}`);
  const btn_start = document.getElementById(`start${id}`);
  const car = document.getElementById(`car${id}`);

  if (toStart) {
    if (car) {
      car.classList.remove('car__car-active');
      car.style.animationPlayState = 'running';
      if (car.lastChild && car.lastChild !== car.firstChild) {
        car.removeChild(car.lastChild);
      }
    }
  }

  if (btn_stop) {
    btn_stop.classList.toggle('stop');
  }

  if (btn_start) {
    btn_start.classList.toggle('start');
  }
}
