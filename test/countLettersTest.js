const countLetters = require("../countLetters");
const assert = require("chai").assert;
const testSentence = "test me and see what happens";
let testCount = countLetters(testSentence);

describe("#countLetters", () => {
  it("returns t = 3 for 'test me and see what happens'", () => {
    assert.equal(countLetters(testSentence).t, 3);
  });
  it("returns e = 5 for 'test me and see what happens'", () => {
    assert.equal(countLetters(testSentence).e, 5);
  });
  it("returns f = undefined for 'test me and see what happens'", () => {
    assert.isUndefined(countLetters(testSentence).f);
  });
  it("returns w = 1 for 'test me and see what happens'", () => {
    assert.equal(countLetters(testSentence).w, 1);
  });
});
