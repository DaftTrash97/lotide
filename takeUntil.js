const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) { //checks if the two arrays are the same length 
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) { // for loop that runs through each element of two arrays and returns false if they do not match, true if they do 
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) { //function that logs message if eqArrays function returns true or false 
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
}; 

const takeUntil = function(array, callback) {
  const result = []; 
  for (item of array) {
    if (callback(item)) {
      break;
    }
    result.push(item);
  };
  return result;
};

const names1 = ['Stephanie', 'James', 'Vincent', 'Cid', 'Miguel'];
const names2 = ['Stephanie', 'James', 'Vincent', 'Cid', 'Miguel', 'Cloud', 'Sephiroth'];
const result1 = takeUntil(names1, x => x === 'Cid');
const result2 = takeUntil(names2, x => x === 'Cid');
console.log(result1);
console.log(result2);

assertArraysEqual(result1, result2);