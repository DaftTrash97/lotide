// FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

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
  let results = {};
  //loop through sentence 
  for (let i = 0; i < sentence.length; i++) {
    //checks if results at [i] is true 
    if (results[sentence[i]]) {
      //if it is true then the sentence[letterPos] 's array of positions gets pushed the new [letterPos]
      results[sentence[i]].push(i)
    }
    else {
      //else if create new property with letter as its key and index as its value
      results[sentence[i]] = [i]
    }
  }
  return results;
};
console.log(letterPositions("lighthouse in the house"));

 assertArraysEqual(letterPositions("hello").e, [1]);