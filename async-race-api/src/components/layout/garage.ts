import { getPageNum } from '../pageNumberValue';
import Pagination from '../pagination';
import CreateCar from './createCar';
import GarageMainView from './garageMainView';
import GenerateCars from './generateCars';
import RaceResetBtn from './raceResetBtn';
import UpdateCar from './updateCar';

function GarageHTML() {
  const garage = document.createElement('div');
  garage.classList.add('master');
  garage.appendChild(CreateCar());
  garage.appendChild(UpdateCar());
  garage.appendChild(GenerateCars());
  garage.appendChild(RaceResetBtn());
  garage.appendChild(GarageMainView());
  console.log(`garage ${getPageNum()}`);
  Pagination(getPageNum());
  return garage;
}

export default GarageHTML;
