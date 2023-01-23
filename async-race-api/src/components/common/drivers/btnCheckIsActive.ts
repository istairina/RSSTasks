export default function isActive(elem: HTMLElement) {
  return !elem.classList.contains('btn_inactive');
}
