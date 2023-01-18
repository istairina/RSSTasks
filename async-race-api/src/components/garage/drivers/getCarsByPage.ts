import { getPageNum } from './valuePageNumber';

export async function getCarsByPage() {
  const pageNum = getPageNum();
  const url = `http://127.0.0.1:3000/garage/?${new URLSearchParams({
    _limit: '7',
    _page: String(pageNum),
  })}`;
  const response = await fetch(url);
  const cars = await response.json();
  return cars;
}
