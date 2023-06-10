// test code for head.js
// pull required functions from head.js and assertEqual.js
const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for ['1,2,3]'", () => {
    assert.equal(head([1,2,3]), 1);
  });
  it("returns 'Hello' for '['Hello', 'Lighthouse', 'Labs']'", () => {
    assert.equal(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
  });
  it("returns 1 for '[1]'", () => {
    assert.equal(head([1]), 1);
  });
  it("returns undefined for []", () => {
    assert.isUndefined(head([]));
  });
  
});



