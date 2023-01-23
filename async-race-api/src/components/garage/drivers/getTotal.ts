import DrawCars from './drawCars';

export default async function carTotal() {
  const url = 'http://127.0.0.1:3000/garage';
  try {
    const response = await fetch(url);
    if (response.ok) {
      const resp = await response.json();
      DrawCars(resp);
    } else {
      throw new Error(String(response.status));
    }
  } catch (err) {
    alert('Run server Async-Race-API before run the site');
  }
}
