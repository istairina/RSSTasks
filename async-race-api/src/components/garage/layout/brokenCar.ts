export default function brokenCar(id: number) {
  const car = document.getElementById(`car${id}`);
  if (car) {
    car.style.animationPlayState = 'paused';
    const carBroken = document.createElement('span');
    carBroken.classList.add('car__broken');
    carBroken.innerText = 'BROKEN!';
    car.appendChild(carBroken);
  }
}
