export default async function CarsNumber() {
  const url = `http://127.0.0.1:3000/garage/?${new URLSearchParams({
    _limit: '7',
  })}`;
  const response = await fetch(url);
  // const data = await response.json();
  const cars = await response.headers.get('X-Total-Count');
  return Number(cars);

  // if (response.ok) {
  //   // если HTTP-статус в диапазоне 200-299
  //   // получаем тело ответа (см. про этот метод ниже)

  //   const response = await fetch(url, {
  //     method: 'GET',

  //   });
  //   console.log(response);
  // } else {
  //   alert('Ошибка HTTP: ' + response.status);
  // }
}
