const bicycle = {
  color: 'blue',
  type: 'mountain bike',
  wheels: {
    diameter: 18,
    width: 8
  }
};

var type = 'color';

console.log(bicycle.type);
console.log(bicycle[type]); // using variable access blue value
console.log(bicycle['type']);
