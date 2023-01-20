import TotalWinnersAmount from '../drivers/getTotalWinners';
import winnerCars from '../drivers/getWinners';
import setTotalWinners from '../drivers/setTotalAmount';
// import createRow from './winnersRow';

function WinnersHTML() {
  const winners = document.createElement('div');
  winners.classList.add('master');

  const pageWinners = 1;

  winners.innerHTML = `<main>
      <h1 class="main__title">Winners (${TotalWinnersAmount()})</h1>
      <p class="main__page">Page #${pageWinners}</p>
      <div class="table__box">
      <table class="table">
        <thead>
          <tr>
            <th id="idWinners">#</td>
            <th>Car</td>
            <th>Name</td>
            <th id="winsWinners">Wins</td>
            <th id="timeWinners">Best time (sec)</td>
          </tr>
        </thead>
        <tbody id="tableWinners">
        </tbody>
      </table>
      </div>
      <div class="main__footer">
        <button class="btn_inactive">Prev</button>
        <button class="btn_inactive">Next</button>
      </div>
    </main>`;

  setTotalWinners();
  winnerCars();
  return winners;
}

export default WinnersHTML;
