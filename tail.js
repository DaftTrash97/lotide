const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  if (array.length <= 1) {
    return [];
  } else {
    return array.slice(1);
  }
};

// TEST CASE: Check the original array
const result = tail(["Hello", "Lighthouse", "Labs", "I", "am", "tired"]);
assertEqual(result.length, 5); 
assertEqual(result[0], "Lighthouse"); 
assertEqual(result[4], "tired"); 
