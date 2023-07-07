const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(object1, object2) { //prints message to console based on results of eqObjects function when compairing two objects 
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2) === true) { //uses eqObjects to compare two objects and return true or false 
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`); //logs assertion message and conents of both objects to console if true 
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);//logs assertion message and conents of both objects to console if false
  }
};

module.exports = assertObjectsEqual;