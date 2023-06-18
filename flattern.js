// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
}; 

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
console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten([1, 5, ['I', 'love', 'Miguel O\' Hara'], 9, [7]]))
