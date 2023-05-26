// ASSERTION FUNCTION
const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);

};

/* TASK
- Function findKeyByValue(object, searchValue):
  - declare undefined variable to store resulting key.
  - interate over object,
    - compare current object key's value to searchValue:
      - match: store current key
  - return result
*/ 