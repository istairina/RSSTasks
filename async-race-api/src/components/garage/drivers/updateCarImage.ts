import CarSvg from '../layout/car_svg';

export default function updateCarImage(id: number, name: string, color: string) {
  const car = document.getElementById(`car${id}`);
  if (car) {
    car.innerHTML = CarSvg(color);
  }

  const brand = document.getElementById(`brandTitle${id}`);
  if (brand) {
    brand.innerText = name;
  }
}
