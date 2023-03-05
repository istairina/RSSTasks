export default async function TotalWinnersAmount() {
  const url = `https://race-api-7yt1.onrender.com/winners/?${new URLSearchParams({
    _limit: '10',
  })}`;
  const response = await fetch(url);
  const cars = await response.headers.get('X-Total-Count');
  return Number(cars);
}
