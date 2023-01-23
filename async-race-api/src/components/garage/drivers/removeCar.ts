import { getPageNum } from './values/valueCurrPageNumber';
import Pagination from './pagination';
import deleteWinner from '../../winners/drivers/deleteWinner';

export default async function removeCar(id: number) {
  const url = `http://127.0.0.1:3000/garage/${id}`;
  await fetch(url, {
    method: 'DELETE',
  });
  Pagination(getPageNum());
  deleteWinner(id);
}
