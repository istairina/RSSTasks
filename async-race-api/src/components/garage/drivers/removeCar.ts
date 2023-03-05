import Pagination from './pagination';
import deleteWinner from '../../winners/drivers/deleteWinner';

export default async function removeCar(id: number) {
  await deleteWinner(id);
  const url = `https://race-api-7yt1.onrender.com/garage/${id}`;
  await fetch(url, {
    method: 'DELETE',
  });
  Pagination();
}
