import TotalWinnersAmount from './getTotalWinners';

export default async function setTotalWinners() {
  const carNum = await TotalWinnersAmount();
  const arrH1 = document.getElementsByTagName('h1');
  const h1 = arrH1[arrH1.length - 1];
  h1.innerText = `Winners (${carNum})`;
}
