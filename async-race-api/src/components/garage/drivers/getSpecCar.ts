export default async function GetSpecCar(id: number) {
  const url = `http://127.0.0.1:3000/garage/${id}`;
  const response = await fetch(url);
  if (response.ok) {
    const content = await response.json();
    return content;
  }
}
