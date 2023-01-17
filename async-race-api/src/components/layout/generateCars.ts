import GenerateCarsServer from '../generateCarsServer';

export default function GenerateCars() {
  const box = document.createElement('div');

  const btn_generate = document.createElement('button');
  btn_generate.classList.add('btn');
  btn_generate.classList.add('second');
  btn_generate.setAttribute('id', 'btn__generate-cars');
  btn_generate.innerText = 'generate cars';
  box.appendChild(btn_generate);

  btn_generate.addEventListener('click', () => {
    GenerateCarsServer();
  });

  return box;
}
