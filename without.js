const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  const result = [];
  
  for (let item of source) { //for of loop that iterates over each element of the source array. 
    if (!itemsToRemove.includes(item)) { //uses includes() to determin if the item exsists in the itemsToRemove array, if it is NOT found, returns true 
      result.push(item); //if returns true, adds the item to the results array using push 
    }
  }
  
  return result; // returns new array that includes elemnts in the source array but not elements that are in the itemsToRemove array. 
};

module.exports = without;
