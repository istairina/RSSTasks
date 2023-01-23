export default async function TotalCarsAmount() {
  const url = `http://127.0.0.1:3000/garage/?${new URLSearchParams({
    _limit: '7',
  })}`;
  const response = await fetch(url);
  const cars = await response.headers.get('X-Total-Count');
  return Number(cars);
}
