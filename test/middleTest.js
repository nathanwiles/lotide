
const assert = require('chai').assert;
const middle = require('../middle');


// TEST Arrays for easy reading.
let tA1 = [1,2,3,4,5,6,7,8];
let tA2 = [1,2,3,4,5,6,7];
let tA3 = ['a','b','c','d'];
let tA4 = ['a','b','c','d','e'];
let tA5 = [];
let tA6 = [1];
let tA7 = [1,2];

describe("#middle", () => {
  it("returns [4,5] for [1,2,3,4,5,6,7,8]", () => {
    assert.deepEqual(middle(tA1), [4,5]);
  });
  it("returns [4] for [1,2,3,4,5,6,7]", () => {
    assert.deepEqual(middle(tA2), [4]);
  });
  it("returns ['b','c'] for ['a','b','c','d']", () => {
    assert.deepEqual(middle(tA3), ['b','c']);
  });
  it("returns ['c'] for ['a','b','c','d','e']", () => {
    assert.deepEqual(middle(tA4), ['c']);
  });
  it("returns [] for []", () => {
    assert.deepEqual(middle(tA5), []);
  });
  it("returns [] for [1]", () => {
    assert.deepEqual(middle(tA6), []);
  });
  it("returns [] for [1,2]", () => {
    assert.deepEqual(middle(tA7), []);
  });
});

