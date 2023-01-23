import btnRemove from './btn_Remove';
import btnSelect from './btn_Select';
import btnStart from './btn_Start';
import btnStop from './btn_Stop';
import Images from './images';

function CarBox(name: string, color: string, id: number) {
  const car_box = document.createElement('div');
  car_box.classList.add('car__box');
  car_box.setAttribute('id', String(id));

  const header = document.createElement('div');
  header.classList.add('car__header');

  const brand = document.createElement('span');
  brand.classList.add('car__brand');
  brand.innerText = name;
  header.appendChild(brand);

  const rule_buttons = document.createElement('div');
  rule_buttons.classList.add('car__rule-button');

  rule_buttons.appendChild(btnStart(id));
  rule_buttons.appendChild(btnStop(id));
  rule_buttons.appendChild(btnSelect(id, name, color));
  rule_buttons.appendChild(btnRemove(id));

  car_box.appendChild(header);
  car_box.appendChild(rule_buttons);
  car_box.appendChild(Images(id, color));

  return car_box;
}

export default CarBox;
