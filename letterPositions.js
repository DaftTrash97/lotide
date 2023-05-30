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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {// creates a loop that goes through each letter starting at index 0
    const character = sentence[i]; // declares new const 'character' and assigns it the value of the character at current index 'i' in the sentence string
    if (character !== ' ') { // if statement that checks if the character is not equal to a space
      if (results[character]) { // if statment that exicutes when the character is already a property in the 'results' object and is not a space
      results[character].push(i); // adds the index 'i' to the array assositated with 'character' in the 'results' object
      } else { // else statment that exicutes when a character is not a space and dosen't already esist in the reults object 
        results[character] = [i]; // creates a new property in the results object and assigns and array with the current index 'i'
      }
    }
  }
  return results;
};
console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("hello").e, [1]);