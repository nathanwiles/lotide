const without = require('../without');
const assert = require('chai').assert;

// TEST CASES
let testRemovalArray1 = [2,'7',4,'s',"waves"];
let testArray1 = [1,2,3,4,5,6,7,"waves",8,9,10];
let testArray2 = [3,2,2,2,2,2,'7',4,5,6,4,7,'s'];

describe("#without", () => {
  it("should return [1,3,5,6,7,8,9,10] when passed testArray1 and testRemovalArray1", () => {
    assert.deepEqual(without(testArray1, testRemovalArray1),[1,3,5,6,7,8,9,10]);
  });
  it("should return [3,5,6,7] when passed testArray2 and testRemovalArray1", () => {
    assert.deepEqual(without(testArray2, testRemovalArray1),[3,5,6,7]);
  });
  it("should not alter the original array", () => {
    assert.deepEqual(testArray1, [1,2,3,4,5,6,7,'waves',8,9,10]);
    assert.deepEqual(testArray2, [3,2,2,2,2,2,'7',4,5,6,4,7,'s']);
  });
});
