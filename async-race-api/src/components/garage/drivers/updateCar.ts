import { getPageNum } from './valueCurrPageNumber';
import Pagination from './pagination';

export default async function updateCarServer(name: string, color: string, id: number) {
  const text = document.getElementById('inp__update-text') as HTMLInputElement;
  const colorText = document.getElementById('inp__update-color') as HTMLInputElement;
  if (text) {
    text.value = name;
  }
  if (colorText) {
    colorText.value = color;
  }

  async function handleBtnClick() {
    const nameNew = text.value;
    const colorNew = colorText.value;
    const url = `http://127.0.0.1:3000/garage/${id}`;
    const car = {
      name: nameNew,
      color: colorNew,
    };
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    });
    console.log(response);
    text.value = '';
    colorText.value = '';
    Pagination(getPageNum());
    btn_update.removeEventListener('click', handleBtnClick);
  }

  const btn_update = document.getElementById('btn__update-car') as HTMLBodyElement;
  btn_update.addEventListener('click', handleBtnClick);
}
