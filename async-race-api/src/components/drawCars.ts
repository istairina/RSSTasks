import CarBox from './layout/car-box';

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
      // console.log(elem.color);
      allCarsBox.appendChild(CarBox(elem.name, elem.color, elem.id));
    });
  }
}
