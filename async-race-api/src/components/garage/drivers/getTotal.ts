import DrawCars from './drawCars';

export default async function carTotal() {
  const url = `https://race-api-7yt1.onrender.com/garage`;
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
