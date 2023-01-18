import { allBrands } from './db/carBrands';
import { allModels } from './db/carModels';
import addCar from './addCar';

export default function GenerateCarsServer() {
  for (let i = 0; i < 100; i++) {
    const randomIndexBrands = Math.floor(Math.random() * (allBrands.length - 1));
    const randomIndexModels = Math.floor(Math.random() * (allModels.length - 1));
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    const nameCar = `${allBrands[randomIndexBrands]} ${allModels[randomIndexModels]}`;
    addCar(nameCar, randomColor);
  }
}
