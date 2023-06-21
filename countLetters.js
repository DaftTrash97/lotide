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


const countLetters = function (sentence){ // defines function countLetters that takes a sentance as its parameter 
  const letterCount = {}; // defines variable letterCount and assigins it an empty object
  for (const character of sentence) { // for loop that iterates over all characters in a sentence 
    if (character !== ' ') { //checks if the character is not a space 
      if (letterCount[character]) { // checks if character is already in letterToCount object  
        letterCount[character] += 1; // if it is, adds 1 to the count 
      } else {
        letterCount[character] = 1; // if character is not in letterToCount object, creates new property in letterCount object and sets character as its key and initalizes count to 1
      } 
      }
    }
    return letterCount; // sets letterCount object to be the output of countLetters function
  };

    console.log(countLetters("lighthouse in the house", "h"));

