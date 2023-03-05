import checkCarPosition from './checkCarPosition';

export default function SetStateStartStopBtn(id: number, toStart = false) {
  const btn_stop = document.getElementById(`stop${id}`);
  const btn_start = document.getElementById(`start${id}`);
  const car = document.getElementById(`car${id}`);

  if (toStart) {
    if (car) {
      car.classList.remove('car__car-active');
      car.style.animationPlayState = 'running';
      car.childNodes.forEach((elem) => {
        if (elem.nodeName === 'SPAN') {
          elem.remove();
        }
      });
      // if (car.children.length > 1 && car.lastChild) {
      //   car.removeChild(car.lastChild);
      // }
    }
    if (btn_stop) {
      btn_stop.classList.remove('stop');
      btn_stop.setAttribute('disabled', '');
    }

    if (btn_start) {
      btn_start.classList.add('start');
      btn_start.removeAttribute('disabled');
    }
    checkCarPosition();
  } else {
    if (btn_stop) {
      if (btn_stop.hasAttribute('disabled')) {
        btn_stop.removeAttribute('disabled');
        btn_stop.classList.add('stop');
      } else {
        btn_stop.setAttribute('disabled', '');
        btn_stop.classList.remove('stop');
      }
    }

    if (btn_start) {
      if (btn_start.hasAttribute('disabled')) {
        btn_start.removeAttribute('disabled');
        btn_start.classList.add('start');
      } else {
        btn_start.setAttribute('disabled', '');
        btn_start.classList.remove('start');
      }
    }
  }
}
