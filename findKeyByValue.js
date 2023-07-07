const assertEqual = require('./assertEqual');

const findKeyByValue = function(object, value){
  const arrayOfKeys = Object.keys(object);

  for (key of arrayOfKeys) {
    if (object[key] === value) {
      return key; 
    }
  }
};

module.exports = findKeyByValue;

