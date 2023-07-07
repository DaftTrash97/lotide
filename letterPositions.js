const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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

 module.exports = letterPositions;