// import eqArrays function
const eqArrays = require("./eqArrays");

// assertArraysEqual()
const assertArraysEqual = function(array1, array2) {
  // use eqArray to find if arrays are equal. assign return value to equalityBool
  let equality = eqArrays(array1, array2);
  // check if equality bool is true
  if (equality) {
    // if true log passed message
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    // else log failed message
    console.log(`🔴🔴🔴 Assertion Failed: ${array1} !== ${array2}`);

    // log additional context
    if (array1.toString() === array2.toString()) {
      console.log("↑↑↑↑↑↑ Reason: Mismatched data types");
    } else {
      console.log("↑↑↑↑↑↑ Reason: Array Values not equal");
    }
  }
};

module.exports = assertArraysEqual;
