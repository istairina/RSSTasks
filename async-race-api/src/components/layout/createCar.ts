import addCar from '../addCar';

export default function CreateCar() {
  const box = document.createElement('div');
  box.classList.add('master__line');
  box.classList.add('create-car');

  const inp_name = document.createElement('input');
  inp_name.classList.add('inp');
  inp_name.setAttribute('id', 'inp__create-text');
  inp_name.setAttribute('type', 'text');
  box.appendChild(inp_name);

  const inp_color = document.createElement('input');
  inp_color.classList.add('color');
  inp_color.setAttribute('id', 'inp__create-color');
  inp_color.setAttribute('type', 'color');
  box.appendChild(inp_color);

  const btn_create = document.createElement('button');
  btn_create.classList.add('btn');
  btn_create.classList.add('second');
  btn_create.setAttribute('id', 'btn__create-car');
  btn_create.innerText = 'create';
  box.appendChild(btn_create);

  btn_create.addEventListener('click', () => {
    if (inp_name.value) {
      addCar(inp_name.value, inp_color.value);
    } else {
      alert('Give name to a new car');
    }
  });

  return box;
}