var eatsPlants = false;
var eatsAnimals = false;

var category =
  eatsPlants && eatsAnimals
    ? "omnivore"
    : eatsPlants
    ? "herbivore"
    : eatsAnimals
    ? "carnivore"
    : undefined;

console.log(category);
