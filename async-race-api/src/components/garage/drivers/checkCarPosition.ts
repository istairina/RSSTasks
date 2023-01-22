export default function checkCarPosition() {
  const allCarDivs = [...document.querySelectorAll('.car__car')];
  const allAtStartPosition = allCarDivs.every((elem) => !elem.classList.contains('car__car-active'));
  // console.log(allAtStartPosition);

  if (allAtStartPosition) {
    const btnRace = document.getElementById('btnRace');
    if (btnRace && btnRace.classList.contains('btn_inactive')) {
      btnRace.classList.remove('btn_inactive');
      btnRace.classList.add('btn');
    }
  }
}
