const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = countOnly;