export default async function updateWinner(id: number, wins: number, time: number) {
  const url = `https://race-api-7yt1.onrender.com/winners/${id}`;
  const car = {
    wins: wins,
    time: time,
  };
  await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(car),
  });
}
