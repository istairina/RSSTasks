import Pagination from './pagination';

export default async function addCar(name: string, color: string) {
  const url = `https://race-api-7yt1.onrender.com/garage`;
  console.log('test url ' + url);
  const response = await fetch(url);
  if (response.ok) {
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
    Pagination();
  } else {
    alert('Ошибка HTTP: ' + response.status);
  }
}
