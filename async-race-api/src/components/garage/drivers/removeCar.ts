import { getPageNum } from './valuePageNumber';
import Pagination from './pagination';

export default async function removeCar(id: number) {
  const url = `http://127.0.0.1:3000/garage/${id}`;
  const response = await fetch(url, {
    method: 'DELETE',
  });
  console.log(response);
  Pagination(getPageNum());
}
