export default async function GetSpecWinCar(id: number) {
  const url = `https://race-api-7yt1.onrender.com/winners/${id}`;
  const response = await fetch(url);
  if (response.ok) {
    const content = await response.json();
    return content;
  } else {
    if (response.status === 404) {
      return {};
    }
  }
}
