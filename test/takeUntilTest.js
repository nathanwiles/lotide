const takeUntil = require("../takeUntil");
const assert = require("chai").assert;

// TEST CASES

describe("#takeUntil", () => {
  it("should return [3, 6, 9] when passed [3, 6, 9, 12, 15, 18, 21] and (x) => x > 10", () => {
    const data1 = [3, 6, 9, 12, 15, 18, 21];
    const results1 = takeUntil(data1, (x) => x > 10);
    assert.deepEqual(results1, [3, 6, 9]);
  });
  it("should return ['take', 'me'] when passed ['take', 'me', 'to', 'the', 'place', 'I', 'love'] and (x) => x === 'to'", () => {
    const data2 = ["take", "me", "to", "the", "place", "I", "love"];
    const results2 = takeUntil(data2, (x) => x === "to");
    assert.deepEqual(results2, ["take", "me"]);
  });
});
