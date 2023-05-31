const eqArrays = function (array1, array2) { // declairs function that takes in two arrays as parameters 
  if (array1.length !== array2.length) { // if statment that checks if the arrays are not equal and returns false
    return false;
  }

  for (let i = 0; i < array1.length; i++) { // for loop that iterates over elements in arrays using index 'i'
    if (array1[i] !== array2[i]) { // compairs element at index 'i' for each array and returns false if they are not equal 
      return false;
    }
  }
  return true; // exicutes when the loop completes without returning false (from the if statments) and instead returns true 
};

const assertEqual = function (actual, expected) { // declares function assertEqual that takes in two values (actual and expected) as parameteres 
  if (actual === expected) { // if statment that checks if value of actual is equal to value of expected 
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`); // logs sucess message with the values of actual and expected to the terminal
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`); // logs failure message with the values of actual and expected to the terminal
  }
};

const eqObjects = function (object1, object2) { // declares a function that takes in two objects as parameters 
  const object1Keys = Object.keys(object1) //function that uses Object.keys to retreieve an array of keys from object1 and object2 and assigns them to object1Keys and object2Keys
  const object2Keys = Object.keys(object2)

  if (object1Keys.length !== // if statment that checks if the lengths of object1Keys and object2Keys are not equal and returns false
    object2Keys.length) {
    return false;
  }
  for (const key of object1Keys) { // for ... of loop that iterates over the keys in object1Keys
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // checks if the values for the current key in both objects are arrays 
      if (!eqArrays(object1[key], object2[key])) { // checks if the values are arrays, if they are not arrays the '!' negates this step. if they are arrays and they are not equal it returns false 
        return false;
      }
    } else { // if the values are not arrays the code inside this block is exicuted 
      if (object1[key] !== object2[key]) { // checks if object1 and object2 are not equal and returns false 
        return false;
      }
    }
  }
  return true; //if the the program runs through the full loop and does not return a false, it with return true 
};

const niceCat = { // random object created for testing that includes an array
  colors: ['black', 'orange', 'white'],
  hairLength: 'medium',
  eyeColor: 'green'
};

const niceDog = {
  colors: ['white', 'black'],
  hairLength: 'long',
  eyeColor: 'blue'
};

const niceSnake = { // object created for testing that does not have an array 
  color: 'green',
  hairLength: 'no hair',
  eyeColor: 'yellow'
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) { // declares function that takes in parameters actual and expected
  const inspect = require('util').inspect; // imports the 'inspect' function from the 'util' module

  console.log(`Example label: ${inspect(actual)}`); // logs the string representation of 'actual' using 'inspect' to convert the object to a string

  if (eqObjects(actual, expected)) { // if statment that checks if actual and expected are equal via calling the eqObjects function
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`); // logs success message if actual and expected are equal and includes the string representation of both
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`); // logs failure message if the actual and expected are not equal and includes the string representation of both 
  }
};

assertObjectsEqual(niceCat, niceCat); // test that should return a success message beause the two objects are equal 
assertObjectsEqual(niceCat, niceDog); // test that should return a failure message because the objects are not equal 