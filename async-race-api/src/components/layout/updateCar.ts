export default function UpdateCar() {
  const box = document.createElement('div');
  box.classList.add('master__line');
  box.classList.add('update-car');

  const inp_name = document.createElement('input');
  inp_name.classList.add('inp');
  inp_name.setAttribute('id', 'inp__update-text');
  inp_name.setAttribute('type', 'text');
  box.appendChild(inp_name);

  const inp_color = document.createElement('input');
  inp_color.classList.add('color');
  inp_color.setAttribute('id', 'inp__update-color');
  inp_color.setAttribute('type', 'color');
  box.appendChild(inp_color);

  const btn_update = document.createElement('button');
  btn_update.classList.add('btn');
  btn_update.classList.add('second');
  btn_update.setAttribute('id', 'btn__update-car');
  btn_update.innerText = 'update';
  box.appendChild(btn_update);

  return box;
}
