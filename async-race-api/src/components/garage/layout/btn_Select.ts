import isActive from '../../common/drivers/btnCheckIsActive';
import updateCarServer from '../drivers/updateCar';
import { setSelectedCar } from '../drivers/values/valueSelectedCar';

export default function btnSelect(id: number, name: string, color: string) {
  const btn_select = document.createElement('button');
  btn_select.classList.add('btn');
  btn_select.classList.add('second');
  btn_select.style.width = '118px';
  btn_select.style.marginLeft = '15px';
  btn_select.innerText = 'select';

  btn_select.addEventListener('click', () => {
    if (isActive(btn_select)) {
      const btnUpdate = document.getElementById('btn__update-car');
      if (btnUpdate) {
        btnUpdate.classList.remove('btn_inactive');
      }
      setSelectedCar(name, color, id);
      updateCarServer();
    }
  });
  return btn_select;
}
