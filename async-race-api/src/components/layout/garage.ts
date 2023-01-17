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

  return garage;
}

export default GarageHTML;
