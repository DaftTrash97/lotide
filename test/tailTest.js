const assert = require('chai').assert;
const assertEqual = require('../assertEqual')
const tail = require('../tail')
const result = tail(["Hello", "Lighthouse", "Labs", "I", "am", "tired"]);

//TEST CODE

describe("#tail", () => {
  it("returns 'tired' for [4]", () => {
    assert.deepEqual(result[4], 'tired');
  });

  it("returns 'Lighthouse' for [0]", () => {
    assert.deepEqual(result[0], 'Lighthouse');
  });

  it("returns 5 for result.length", () => {
    assert.deepEqual(result.length, 5);
  });

});
