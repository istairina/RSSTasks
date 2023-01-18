interface startCars {
  distance: number;
  velocity: number;
}

export default function SetStateStartStopBtn(id: number, content?: startCars) {
  const car = document.getElementById(`car${id}`);
  const btn_stop = document.getElementById(`stop${id}`);
  const btn_start = document.getElementById(`start${id}`);
  if (content) {
    if (car) {
      car.classList.add('car__car-active');
      car.style.animationDuration = `${content.distance / content.velocity}ms`;
    }
  } else {
    if (car) {
      car.classList.remove('car__car-active');
    }
  }

  if (btn_stop) {
    btn_stop.classList.toggle('stop');
  }

  if (btn_start) {
    btn_start.classList.toggle('start');
  }
}
