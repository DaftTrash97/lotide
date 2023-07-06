const assertEqual = require('./assertEqual');

const tail = function(array) {
  if (array.length <= 1) {
    return [];
  } else {
    return array.slice(1);
  }
};

module.exports = tail;

// TEST CASE: Check the original array
const result = tail(["Hello", "Lighthouse", "Labs", "I", "am", "tired"]);
console.log(result)
assertEqual(result.length, 5);
assertEqual(result[0], "Lighthouse");
assertEqual(result[4], "tired");