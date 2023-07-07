const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const countLetters = function (sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const character = sentence[i];

    if (character !== ' ') {
      if (results[character]) {
        results[character].push(i);
      } else {
        results[character] = [i];
      }
    }
  }

  return results;
}; 

module.exports = countLetters;

