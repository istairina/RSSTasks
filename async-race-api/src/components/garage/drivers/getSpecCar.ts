export default async function GetSpecCar(id: number) {
  const url = `https://race-api-7yt1.onrender.com/garage/${id}`;
  const response = await fetch(url);
  if (response.ok) {
    const content = await response.json();
    return content;
  }
}
