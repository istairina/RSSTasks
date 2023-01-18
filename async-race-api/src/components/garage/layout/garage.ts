import { getPageNum } from '../drivers/valuePageNumber';
import Pagination from '../drivers/pagination';
import CreateCar from './btn_createCar';
import GarageMainView from './garageCars';
import GenerateCars from './btn_generateCars';
import RaceResetBtn from './raceResetBtn';
import UpdateCar from './btn_updateCar';

function GarageHTML(saveStateInputs: string[]) {
  let saveStateInpCreate: string[] = [];
  let saveStateInpUpdate: string[] = [];

  if (saveStateInputs.length > 0) {
    saveStateInpCreate = [saveStateInputs[0], saveStateInputs[1]];
    saveStateInpUpdate = [saveStateInputs[2], saveStateInputs[3]];
  }
  const garage = document.createElement('div');
  garage.classList.add('master');
  garage.appendChild(CreateCar(saveStateInpCreate));
  garage.appendChild(UpdateCar(saveStateInpUpdate));
  garage.appendChild(GenerateCars());
  garage.appendChild(RaceResetBtn());
  garage.appendChild(GarageMainView());
  console.log(`garage ${getPageNum()}`);
  Pagination(getPageNum());
  return garage;
}

export default GarageHTML;
