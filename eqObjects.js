const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;
