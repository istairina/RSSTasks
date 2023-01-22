export default async function updateWinner(id: number, wins: number, time: number) {
  const url = `http://127.0.0.1:3000/winners/${id}`;
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
