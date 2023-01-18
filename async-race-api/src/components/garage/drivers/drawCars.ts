import CarBox from '../layout/car_box';
import { Car } from '../db/interface';

export default function DrawCars(cars: Car[]) {
  const allCarsBox = document.getElementById('allCarsBox');

  if (allCarsBox) {
    allCarsBox.replaceChildren();
    cars.forEach((elem: Car) => {
      allCarsBox.appendChild(CarBox(elem.name, elem.color, elem.id));
    });
  }
}
