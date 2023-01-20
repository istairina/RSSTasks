export default async function createWinner(id: number, wins: number, time: number) {
  const url = 'http://127.0.0.1:3000/winners';
  const response = await fetch(url);
  if (response.ok) {
    const car = {
      id: id,
      wins: wins,
      time: time,
    };
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    });
  } else {
    alert('Ошибка HTTP: ' + response.status);
  }
}
