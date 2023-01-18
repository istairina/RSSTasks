function WinnersHTML() {
  const winners = document.createElement('div');
  winners.classList.add('master');
  winners.innerHTML = `<main>
      <h1 class="main__title">Winners (0)</h1>
      <p class="main__page">Page #1</p>
      <div class="table__box">
      <table class="table">
        <tr>
          <th>Number</td>
          <th>Car</td>
          <th>Name</td>
          <th>Wins</td>
          <th>Best time (sec)</td>
        </tr>
      </table>
      </div>
      <div class="main__footer">
        <button class="btn second">Prev</button>
        <button class="btn second">Next</button>
      </div>
    </main>`;
  return winners;
}

export default WinnersHTML;
