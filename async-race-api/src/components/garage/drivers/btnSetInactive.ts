export default function btnSetInactive() {
  const btns: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.btn');
  btns.forEach((btn) => {
    if (btn.innerText.toLowerCase() !== 'select') {
      btn.classList.add('btn_inactive');
    }
  });
}
