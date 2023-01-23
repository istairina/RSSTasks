export default function btnSetInactive() {
  const btns: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.btn');
  btns.forEach((btn) => btn.classList.add('btn_inactive'));
}
