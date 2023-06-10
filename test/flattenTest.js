const assert = require('chai').assert;
const flatten = require('../flatten');

// TEST CASES
// define array to be testedesl
let testArray = [[2,'a',4],5,'howitzer',7,[8,'9',10]];


describe("#flatten", () => {
  it("returns [2, 'a', 4, 5, 'howitzer', 7, 8, '9', 10] for [[2,'a',4],5,'howitzer',7,[8,'9',10]]", () => {
    assert.deepEqual(flatten(testArray), [2, 'a', 4, 5, 'howitzer', 7, 8, '9', 10]);
  });

  it("does not modify the original array", () => {
    const testArrayClone = [[2,'a',4],5,'howitzer',7,[8,'9',10]];
    flatten(testArrayClone);
    assert.deepEqual(testArrayClone, [[2,'a',4],5,'howitzer',7,[8,'9',10]]);
  });

});