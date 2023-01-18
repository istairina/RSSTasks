import CarBox from '../layout/car_box';
interface Car {
  color: string;
  name: string;
  id: number;
}

export default function DrawCars(cars: Car[]) {
  const allCarsBox = document.getElementById('allCarsBox');

  if (allCarsBox) {
    allCarsBox.replaceChildren();
    cars.forEach((elem: Car) => {
      allCarsBox.appendChild(CarBox(elem.name, elem.color, elem.id));
    });
  }
}
