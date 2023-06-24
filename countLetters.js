const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) { //checks if the two arrays are not the same length 
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

const countLetters = function (sentence){
  const results = {}; // we want an object with the character as the key and value of array of positions 

  return results;
};
console.log(countLetters('hello', 'l'));

assertArraysEqual(countLetters("hello", {
    h: [0],
    e: [1],
    l: [2,3],
    o: [4]
  })
)   

