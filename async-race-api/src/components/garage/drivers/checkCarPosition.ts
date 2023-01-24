import btnSetActive from './btnSetActive';

export default function checkCarPosition() {
  const allCarDivs = [...document.querySelectorAll('.car__car')];
  const allAtStartPosition = allCarDivs.every((elem) => !elem.classList.contains('car__car-active'));

  if (allAtStartPosition) {
    btnSetActive();
  }
}
