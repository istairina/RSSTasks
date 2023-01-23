import isActive from '../../common/drivers/btnCheckIsActive';
import removeCar from '../drivers/removeCar';

export default function btnRemove(id: number) {
  const btn_remove = document.createElement('button');
  btn_remove.classList.add('btn');
  btn_remove.classList.add('second');
  btn_remove.style.width = '118px';
  btn_remove.innerText = 'remove';

  btn_remove.addEventListener('click', () => {
    if (isActive(btn_remove)) {
      removeCar(id);
    }
  });
  return btn_remove;
}
