/*
Implement assertArraysEqual():
  -will take in two arrays
  -console.log an appropriate message to the console.
*/

// eqArrays function from previous assignment, integrate into solution.
const eqArrays  = function(array1, array2) {
  // set default output to false;
  let output = false;
  // check if array lengths are the same.
  if (array1.length === array2.length) {
    // if length is equal, set output to true.
    output = true;
    // check if array element are not the same.
    for (let i = 0; i < array1.length; i++) {
      // if any array element is not the same, change output to false, and break the loop.
      if (array1[i] !== array2[i]) {
        output = false;
        break;
      }
    }
  }
  // return output aka true or false depending on arrays passed
  return output;
  
};
// assertEqual function from previous assignent, ingegrate into solution.
const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);

};