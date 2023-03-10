const animalsModule = require('./animals');

console.log(animalsModule);
console.log(animalsModule.animals);
animalsModule.showAnimals();

const { animals, showAnimals } = require('./animals');

console.log(animals);
showAnimals();
