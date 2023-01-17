import { allBrands } from './carBrands';

export default function GenerateCarsServer() {
  for (let i = 0; i <= 10; i++) {
    const randomIndex = Math.floor(Math.random() * (allBrands.length - 1));
    console.log(randomIndex);
  }
}
