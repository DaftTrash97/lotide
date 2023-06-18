// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (!array1 || !array2 || array1.length !== array2.length) {
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

const without = function(source, itemsToRemove) {
  const result = [];
  
  for (let item of source) { //for of loop that iterates over each element of the source array. 
    if (!itemsToRemove.includes(item)) { //uses includes() to determin if the item exsists in the itemsToRemove array, if it is NOT found, returns true 
      result.push(item); //if returns true, adds the item to the results array using push 
    }
  }
  
  return result; // returns new array that includes elemnts in the source array but not elements that are in the itemsToRemove array. 
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without(["I", "am", "so", "tired"], ["am", "so"]), ["I", "tired"]);
