const assert = require('chai').assert;
const findKey = require('../findKey');

// TEST CASES
const testObjects = {
  obj1 : {content: 93},
  obj2 : {content: 67, specialContent: "I'm average"},
  obj3 : {content: 36},
  obj4 : {content: 63, specialContent: "I'm special"},
  obj5 : {content: 23},
  obj6 : {content: 'blue'},
};

// assign results to variables
const result1 = findKey(testObjects, x => x.content < 30);
const result2 = findKey(testObjects, x => x.specialContent === "I'm special");
const result3 = findKey(testObjects, x => x.content === 'blue');

// check if results match expectation

// Asserts
describe("#findKey", () => {
  it("returns 'obj5' for (testObjects, x => x.content < 30)", () => {
    assert.strictEqual(result1, 'obj5');
  });
  it("returns 'obj4' for (testObjects, x => x.specialContent === 'I'm special')", () => {
    assert.strictEqual(result2, 'obj4');
  });  
  it("returns 'obj6' for (testObjects, x => x.content === 'blue')", () => {
    assert.strictEqual(result3, 'obj6');
  });
});


