import { getAllWinnersId } from './getAllWinnersId';

export default async function deleteWinner(id: number) {
  const arrCarWinIds = await getAllWinnersId();
  if (arrCarWinIds.includes(id)) {
    const url = `http://127.0.0.1:3000/winners/${id}`;
    await fetch(url, {
      method: 'DELETE',
    });
  }
}
