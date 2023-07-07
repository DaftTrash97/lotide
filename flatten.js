const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(array) { // defines function flatten that takes in an array as a parameter and returns a new array 
  const flattenedArray = [];

  for (let element of array) { // for of loop that checks if each element is an array 
    if (Array.isArray(element)) { // checks if 'element' array is indeed an array
      flattenedArray.push(...element); // '...' is a spread opperator, it expands the nested array into its individual elements. Then pushes the nested array 'element' into the flattenedArray
    } else {
      flattenedArray.push(element); // if element is not an array, it pushes the element to the flattenedArray
    }
  }

  return flattenedArray;
};

module.exports = flatten;
