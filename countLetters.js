// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

// we need to create a function that will run through all letters in a string and retrun an object that shows the number of times each letter or number appears.

const countLetters = function (sentence){
  const letterCount = {};
  for (const character of sentence) {
    if (character !== ' ') {
      if (letterCount[character]) {
        letterCount[character] += 1;
      } else {
        letterCount[character] = 1;
      } 
      }
    }
    return letterCount;
  };

    console.log(countLetters("lighthouse in the house", "h"));

