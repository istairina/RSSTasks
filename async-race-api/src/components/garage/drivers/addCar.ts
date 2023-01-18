import { getPageNum } from './valuePageNumber';
import Pagination from './pagination';

export default async function addCar(name: string, color: string) {
  const url = 'http://127.0.0.1:3000/garage';
  const response = await fetch(url);
  if (response.ok) {
    // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа (см. про этот метод ниже)
    const car = {
      name: name,
      color: color,
    };
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    });
    Pagination(getPageNum());
  } else {
    alert('Ошибка HTTP: ' + response.status);
  }
}
