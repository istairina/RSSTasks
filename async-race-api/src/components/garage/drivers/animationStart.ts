import { startCars } from '../../common/interface';

export default function AnimatioStart(id: number, content: startCars) {
  const car = document.getElementById(`car${id}`);
  if (car) {
    car.classList.add('car__car-active');
    car.style.animationDuration = `${content.distance / content.velocity}ms`;
  }
}
