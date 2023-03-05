export default async function createWinner(id: number, wins: number, time: number) {
  const url = `https://race-api-7yt1.onrender.com/winners`;
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
