const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = (object, value) => { // create function findKeyByValue that takes in two parameters 'object' and 'value'
  const keys = Object.keys(object);
  for (let key of keys) { // starts a for ... of loop that iterates over the keys of the array retrieved by Object.keys function 
    if (object[key] === value) { // checks if the value passed as an argument is === to the value associated with object[key]
      return key; // if the value passed as an argument matches the value associated with object[key] the function will return the key and end the loop
    }
  }
  return undefined; // return undifined if the for ... in loop does not find a match 
}

const object1 = { // create random object1 
  name: 'Stephanie', 
  age: 29,
  eyeColor: 'blue'
};

assertEqual(findKeyByValue(object1, 'Stephanie'), 'name'); // test using assertEqual function
assertEqual(findKeyByValue(object1, 29), 'age');
assertEqual(findKeyByValue(object1, 'blue'), 'eyeColor');
assertEqual(findKeyByValue(object1, 'foot'), 'bodyPart');
console.log(Object.keys(object1));
