import Pagination from '../drivers/pagination';
import CreateCar from './btn_createCar';
import GarageMainView from './garageCars';
import GenerateCars from './btn_generateCars';
import RaceBtn from './btn_Race';
import ResetBtn from './btn_Reset';
import UpdateCar from './btn_updateCar';

function GarageHTML() {
  const garage = document.createElement('div');
  garage.setAttribute('id', 'garage');
  garage.classList.add('master');
  garage.appendChild(CreateCar());
  garage.appendChild(UpdateCar());
  garage.appendChild(GenerateCars());

  const raceResetBox = document.createElement('div');
  garage.appendChild(raceResetBox);

  raceResetBox.appendChild(RaceBtn());
  raceResetBox.appendChild(ResetBtn());

  garage.appendChild(GarageMainView());
  Pagination();
  return garage;
}

export default GarageHTML;
