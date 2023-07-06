const assertEqual = require('../assertEqual')
const eqArrays = require('../eqArrays')

//TEST CODE 

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([3, 6, 7], [3, 7, 9]), false);
assertEqual(eqArrays([4, 4, 5], [4, 4, 5]), true);
