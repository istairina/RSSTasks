import { getPageNum } from './values/valueCurrPageNumber';
import Pagination from './pagination';
import { Car } from '../../common/interface';
import { getSelectedCar } from './values/valueSelectedCar';

export default async function updateCarServer() {
  const car: Car = getSelectedCar();
  // console.log(car.id);
  const text = document.getElementById('inp__update-text') as HTMLInputElement;
  const colorText = document.getElementById('inp__update-color') as HTMLInputElement;
  text.removeAttribute('disabled');
  colorText.removeAttribute('disabled');

  if (text) {
    text.value = car.name;
  }
  if (colorText) {
    colorText.value = car.color;
  }

  async function handleBtnClick() {
    if (!btn_update.classList.contains('btn_inactive')) {
      const car: Car = getSelectedCar();
      const nameNew = text.value;
      const colorNew = colorText.value;
      // console.log(car.id);
      const url = `http://127.0.0.1:3000/garage/${car.id}`;
      const carNew = {
        name: nameNew,
        color: colorNew,
      };
      await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(carNew),
      });
      // console.log(response);
      text.value = '';
      colorText.value = '#000000';
      Pagination(getPageNum());
      btn_update.classList.add('btn_inactive');
      // btn_update.classList.remove('btn');
      // btn_update.classList.remove('second');
      text.setAttribute('disabled', '');
      colorText.setAttribute('disabled', '');
      btn_update.removeEventListener('click', handleBtnClick);
    }
  }

  const btn_update = document.getElementById('btn__update-car') as HTMLBodyElement;
  btn_update.classList.remove('btn_inactive');
  // btn_update.classList.add('btn');
  // btn_update.classList.add('second');
  btn_update.addEventListener('click', handleBtnClick);
}
