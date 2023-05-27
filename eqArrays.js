/*
  -Implement a function eqArrays:
    -takes in two arrays and returns true or false
     -based on a perfect match.
    [done!]

  - Run test Cases
    - compare perfectly matching arrays
    - compare non matching arrays
    [done!]
 */

// define assertEqual function
const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);

};

// define eqArrays function
const eqArrays  = function(array1, array2) {
  // if arrays are different length return false.
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    // if any array element is not the same, return false.
    if (array1[i] !== array2[i]) {// check if array element are not the same.
      return false;
    }
  }
  // all tests passed if reached.
  return true;
};

assertEqual(eqArrays([1,2,3],[1,2,3]),true); // tests matching arrays
assertEqual(eqArrays([1,2,3],[1,2,'3']),true); // tests non-matching arrays