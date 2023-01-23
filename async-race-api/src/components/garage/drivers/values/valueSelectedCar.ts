let selectedCar = {
  name: '',
  color: '',
  id: 0,
};

export function setSelectedCar(name: string, color: string, id: number) {
  selectedCar = {
    name: name,
    color: color,
    id: id,
  };
}

export function getSelectedCar() {
  return selectedCar;
}
