import { allBrands } from './carBrands';
import addCar from './addCar';

export default function GenerateCarsServer() {
  for (let i = 0; i < 100; i++) {
    const randomIndex = Math.floor(Math.random() * (allBrands.length - 1));
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    console.log(`${randomIndex} ${randomColor}`);
    addCar(allBrands[randomIndex], randomColor);
  }
}
