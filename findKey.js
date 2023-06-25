const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (const key in object) { // for loop to run through items in an object
    if (callback(object[key])) { // retrieves the value of item within the object associated with the current key and checks if it matches our callback argument 
      return key; // if it matches, return the key 
    }
}
return undefined; // if the value does not match our callback argument, return undefined
};

const games = {
  Playstation : 'Final Fantasy',
  xBox : 'Gears of War',
  Nintendo : 'The Ledgend of Zelda'
};

const games2 = {
  Playstation : 'Castlevania',
  xBox : 'Halo',
  Nintendo : 'Mario'
};

assertEqual(findKey(games, value => value === 'Final Fantasy'), 'Playstation');
assertEqual(findKey(games2, value => value === 'Halo'), 'Playstation');