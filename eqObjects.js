const eqArrays = function (array1, array2) {
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

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function (object1, object2) {
  const object1Keys = Object.keys(object1)
  const object2Keys = Object.keys(object2)
  
  if (object1Keys.length !==
    object2Keys.length) {
    return false;
  }
  for (const key of object1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const niceCat = {
  colors: ['black', 'orange', 'white'],
  hairLength: 'medium',
  eyeColor: 'green'
};

const niceDog = {
  colors: ['white', 'black'],
  hairLength: 'long',
  eyeColor: 'blue'
};

const niceSnake = {
  color: 'green',
  hairLength: 'no hair',
  eyeColor: 'yellow'
};

//assertEqual(eqObjects(niceCat, niceDog), false);
//assertEqual(eqObjects(niceCat, niceCat), true);
//assertEqual(eqArrays(niceCat, niceCat), true);
//assertEqual(eqObjects(niceDog, niceCat), false);
assertEqual(eqObjects(niceCat, niceSnake), false);