// Using _ is a convention for the package lodash
const _ = require('lodash');

const numbers = [21,54,68,68,32,53,2,87,89];

_.each(numbers, (number, i) => console.log(number));