const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual'); 

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

module.exports = takeUntil;