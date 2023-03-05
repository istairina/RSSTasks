import { getAllWinnersId } from './getAllWinnersId';

export default async function deleteWinner(id: number) {
  const arrCarWinIds = await getAllWinnersId();
  if (arrCarWinIds.includes(id)) {
    const url = `https://race-api-7yt1.onrender.com/winners/${id}`;
    await fetch(url, {
      method: 'DELETE',
    });
  }
}
