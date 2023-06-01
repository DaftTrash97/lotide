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

const map = function(array, callback) { // declairs function map with parameters array and callback
  const results = []; // creates empty array named results
  for (let item of array) { // starts loop that iterates over items in the array
    results.push(callback(item)); //applys callck function to the item in the array and pushs result to the results array
  }
  return results; // returns the results array
}
// test array
const words = ['food', 'snacks', 'nutrition', 'noms', 'fuel'];
// test code 
const result1 = map(words, word => word.length); // transforms words in the array to the number of letters in each item ompairs actual result to the ecpected result
assertArraysEqual(result1, [4, 6, 9, 4, 4]);
assertArraysEqual(result1, [4, 7, 6, 8, 4]);

const result2 =map(words, word => word.toUpperCase()); // transforms all letters of each item in the array to upper case ompairs actual result to the ecpected result
assertArraysEqual(result2, ['FOOD', 'SNACKS', 'NUTRITION', 'NOMS', 'FUEL']);
assertArraysEqual(result2, ['food', 'snacks', 'nutrition', 'noms', 'fuel']);

const result3 =map(words, word => word.toLowerCase()); // transforms all letters of each item in the array to lower case and compairs actual result to the ecpected result 
assertArraysEqual(result3, ['food', 'snacks', 'nutrition', 'noms', 'fuel']);
assertArraysEqual(result3, ['foOd', 'SNacks', 'nutrItion', 'nOMs', 'fUel'])