/* 
  -Implement a function eqArrays: 
    -takes in two arrays and returns true or false 
     -based on a perfect match.

  - Run test Cases
    - compare perfectly matching arrays
    - compare non matching arrays
 */

// define assertEqual function
const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);

};

