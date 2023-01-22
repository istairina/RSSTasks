import SwitchView from '../drivers/switchView';

function Header(app: HTMLElement) {
  const header = document.createElement('header');
  const buttonToGarage = document.createElement('button');
  buttonToGarage.classList.add('btn');
  buttonToGarage.classList.add('btn_inactive');
  buttonToGarage.innerText = 'to garage';
  const buttonToWinners = document.createElement('button');
  buttonToWinners.classList.add('btn');
  buttonToWinners.innerText = 'to winners';
  header.appendChild(buttonToGarage);
  header.appendChild(buttonToWinners);
  SwitchView(app, buttonToGarage, buttonToWinners);
  return header;
}

export default Header;
