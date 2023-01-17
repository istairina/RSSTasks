export default function RaceResetBtn() {
  const box = document.createElement('div');

  const btn_race = document.createElement('button');
  btn_race.classList.add('btn');
  btn_race.innerText = 'race';
  box.appendChild(btn_race);

  const btn_reset = document.createElement('button');
  btn_reset.classList.add('btn');
  btn_reset.innerText = 'reset';
  box.appendChild(btn_reset);

  btn_race.addEventListener('click', () => {
    console.log('race');
  });

  return box;
}
