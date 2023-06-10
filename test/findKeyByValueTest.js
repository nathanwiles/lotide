const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

// TEST CASES:
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

describe("#findKeyByValue", () => {
  it("returns 'drama' for 'The Wire' from: bestTVShowsByGenre", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns 'undefined' for 'That 70's Show' from: bestTVShowsByGenre", () => {
    assert.isUndefined(findKeyByValue(bestTVShowsByGenre, "That 70's Show"));
  });
  it("returns 'sciFi' for 'The Expanse' from: bestTVShowsByGenre", () => {
    assert.strictEqual(
      findKeyByValue(bestTVShowsByGenre, "The Expanse"),
      "sciFi"
    );
  });
});
