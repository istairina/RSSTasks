export default function winnerTitle(winner: string, time: string) {
  const winnerTitle = document.createElement('div');
  winnerTitle.classList.add('winner__box');
  winnerTitle.setAttribute('id', 'winnerBox');
  winnerTitle.innerText = `The winner is ${winner}
  Time: ${time}s`;
  const app = document.getElementById('app');
  if (app) {
    app.appendChild(winnerTitle);
  }
}
