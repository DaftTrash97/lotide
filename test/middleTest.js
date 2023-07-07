const assert = require('chai').assert;
const assertEqual = require('../assertEqual')
const eqArrays = require('../eqArrays')
const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle')

//TEST CODE 

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [5, 7] for [3, 5, 7, 9]", () => {
    assert.deepEqual(middle([3, 5, 7, 9]), [5, 7]); 
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); 
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []); 
  });

  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []); 
  });

});
