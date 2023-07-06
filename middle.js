const assertEqual = require('./assertEqual')
const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')

const middle = function(array) {
  const length = array.length;
  if (length <= 2) { // if array contains 2 or less elements, return an empty array 
    return [];
  } else if (length % 2 === 1) {
    const middleIndex = Math.floor(length / 2); // uses math.floor to devide length by 2 and return the index of the middle element in the array 
    return [array[middleIndex]];
  } else { // else block that defines two variables and assigns them the values of the two middle elements if the array is even
    const middleIndex1 = length / 2 - 1;
    const middleIndex2 = length / 2;
    return [array[middleIndex1], array[middleIndex2]]; // returns two middle elements in an even array 
  }
};

module.exports = middle;
