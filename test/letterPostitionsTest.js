const letterPositions = require("../letterPositions");
const assert = require("chai").assert;

// TEST CASES
let test1 = "hello";
let result = letterPositions(test1);

describe("#letterPositions", () => {
  it("returns an object with the correct keys and values", () => {
    assert.deepEqual(result, { h: [0], e: [1], l: [2, 3], o: [4] });
  });
  it("does not modify the original string", () => {
    assert.strictEqual(test1, "hello");
  });
  it("doesn't include spaces", () => {
    assert.isUndefined(result[" "]);
  });
});
