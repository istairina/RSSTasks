import CarBox from './layout/car-box';

interface Car {
  color: string;
  name: string;
  id: number;
}

export default async function carTotal() {
  const url = 'http://127.0.0.1:3000/garage';
  const response = await fetch(url);
  let totalCars = 0;
  const arrH1 = document.getElementsByTagName('h1');
  const h1 = arrH1[0];
  const allCarsBox = document.getElementById('allCarsBox');
  if (response.ok) {
    // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа (см. про этот метод ниже)
    const resp = await response.json();
    totalCars = resp.length;
    h1.innerText = `Garage (${resp.length})`;
    console.log(resp[0]);
    if (allCarsBox) {
      allCarsBox.replaceChildren();
      resp.forEach((elem: Car) => {
        // console.log(elem.color);
        allCarsBox.appendChild(CarBox(elem.name, elem.color, elem.id));
      });
    }
  } else {
    alert('Ошибка HTTP: ' + response.status);
  }
  return totalCars;
}
