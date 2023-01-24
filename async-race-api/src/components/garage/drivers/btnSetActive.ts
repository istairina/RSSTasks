import setActiveInactiveBtn from './setStateBtnPages';

export default function btnSetActive() {
  const btns: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.btn');
  btns.forEach((elem) => {
    if (
      elem.innerText.toLowerCase() === 'to winners' ||
      elem.innerText.toLowerCase() === 'create' ||
      elem.innerText.toLowerCase() === 'generate cars' ||
      elem.innerText.toLowerCase() === 'race' ||
      elem.innerText.toLowerCase() === 'select' ||
      elem.innerText.toLowerCase() === 'remove' ||
      elem.innerText.toLowerCase() === 'reset'
    ) {
      elem.classList.remove('btn_inactive');
    }
  });
  setActiveInactiveBtn();
}
