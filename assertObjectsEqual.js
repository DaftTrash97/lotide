
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

const eqObjects = function(obj1, obj2) {
  const objectLengths = Object.keys(obj1).length === Object.keys(obj2).length;

  for (let key in obj1) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};

const assertObjectsEqual = function(object1, object2) { //prints message to console based on results of eqObjects function when compairing two objects 
  const inspect = require('util').inspect;

if (eqObjects(object1, object2) === true) { //uses eqObjects to compare two objects and return true or false 
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

const myObj1 = {
  Name : 'Miguel',
  Job : 'Spiderman 2099',
  Age : 'Young'
}

const myObj2 = {
  Name : 'Miguel',
  Job : 'Spiderman 2099',
  Age : 'Young'
}

assertObjectsEqual(myObj1, myObj2);