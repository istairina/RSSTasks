import carTotal from './getTotal';

export default async function removeCar(id: number) {
  const url = `http://127.0.0.1:3000/garage/${id}`;
  // console.log(`remove ${url}`);
  const response = await fetch(url, {
    method: 'DELETE',
  });
  console.log(response);
  carTotal();
}