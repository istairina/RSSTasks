export default async function TotalWinnersAmount() {
  const url = `http://127.0.0.1:3000/winners/?${new URLSearchParams({
    _limit: '10',
  })}`;
  const response = await fetch(url);
  // const data = await response.json();
  const cars = await response.headers.get('X-Total-Count');
  return Number(cars);
}
