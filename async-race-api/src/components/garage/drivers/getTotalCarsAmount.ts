export default async function TotalCarsAmount() {
  const url = `https://race-api-7yt1.onrender.com/garage/?${new URLSearchParams({
    _limit: '7',
  })}`;
  const response = await fetch(url);
  const cars = await response.headers.get('X-Total-Count');
  return Number(cars);
}
