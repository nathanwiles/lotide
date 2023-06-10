const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['second', 'third'] for ['first', 'second', 'third']", () => {
    assert.deepEqual(tail(['first', 'second', 'third']), ['second', 'third']);
  });
  it("should not modify the original array", () => {
    const words = ["first", "second", "third"];
    tail(words);
    assert.deepEqual(words, ["first", "second", "third"]);
  });
  it("returns [] for ['solo']", () => {
    assert.deepEqual(tail(['solo']), []);
  });
  it("returns [] for []", () => {
    assert.isEmpty(tail([]));
  });
});
