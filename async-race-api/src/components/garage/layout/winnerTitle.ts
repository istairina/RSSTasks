export default function winnerTitle(winner: string, time: string) {
  // const winBox = document.getElementById('winnerBox');
  // if (!winBox) {
  const winnerTitle = document.createElement('div');
  winnerTitle.classList.add('winner__box');
  winnerTitle.setAttribute('id', 'winnerBox');
  winnerTitle.innerText = `The winner is ${winner}
    Time: ${time}s`;
  const garage = document.getElementById('garage');
  if (garage) {
    garage.appendChild(winnerTitle);
  }
  // }
}
