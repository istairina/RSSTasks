import { getPageNum } from './values/valueCurrPageNumber';

export async function getCarsByPage() {
  const pageNum = getPageNum();
  const url = `https://race-api-7yt1.onrender.com/garage/?${new URLSearchParams({
    _limit: '7',
    _page: String(pageNum),
  })}`;
  const response = await fetch(url);
  const cars = await response.json();
  return cars;
}
