// import Pagination from './pagination';
import isActive from '../../common/drivers/btnCheckIsActive';
import { Car } from '../../common/interface';
import updateCarImage from './updateCarImage';
import { getSelectedCar } from './values/valueSelectedCar';

export default async function updateCarServer() {
  const car: Car = getSelectedCar();
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
    if (isActive(btn_update)) {
      const car: Car = getSelectedCar();
      const nameNew = text.value;
      const colorNew = colorText.value;
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
      updateCarImage(car.id, nameNew, colorNew);
      text.value = '';
      colorText.value = '#000000';
      // Pagination();
      btn_update.classList.add('btn_inactive');
      text.setAttribute('disabled', '');
      colorText.setAttribute('disabled', '');
      btn_update.removeEventListener('click', handleBtnClick);
    }
  }

  const btn_update = document.getElementById('btn__update-car') as HTMLBodyElement;
  btn_update.classList.remove('btn_inactive');
  btn_update.addEventListener('click', handleBtnClick);
}
