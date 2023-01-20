export default async function GetSpecWinCar(id: number) {
  const url = `http://127.0.0.1:3000/winners/${id}`;
  const response = await fetch(url);
  if (response.ok) {
    const content = await response.json();
    return content;
  } else {
    if (response.status === 404) {
      console.log('status 404 got');
      return {};
    }
  }
}
