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

const countOnly = function(allItems, itemsToCount) { 
  const results = {}; //defines variable results and assigns it an empty object 

  for (const item of allItems) { // for loop to iterate over allItems
    if (itemsToCount[item]) { //checks if item is in itemsToCount object
      if (results[item]) { // checks if item is already in results object
        results[item] += 1; // check if item is in results and if it is, count is increased by 1
    } else { 
      results[item] = 1; // if not, new property is created in results with 'item' as its key and inital count is set to 1
    }
    console.log(item); //logs current item to console 
  }
}
  
  return results; //sets results to be the output of countOnly function
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }); // defines result1 that uses countOnly function to define what names should and should not be counted 

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);