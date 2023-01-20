export default async function addCar(name: string, color: string) {
  const url = 'http://127.0.0.1:3000/garage';
  const response = await fetch(url);
  if (response.ok) {
    const car = {
      name: name,
      color: color,
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
