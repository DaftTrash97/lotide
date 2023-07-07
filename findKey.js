const assertEqual = require('./assertEqual');

const findKey = function(object, callback) {
  for (const key in object) { // for loop to run through items in an object
    if (callback(object[key])) { // retrieves the value of item within the object associated with the current key and checks if it matches our callback argument 
      return key; // if it matches, return the key 
    }
}
return undefined; // if the value does not match our callback argument, return undefined
};

module.exports = findKey;