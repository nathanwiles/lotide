// Created by Nathan Wiles
// Part of Lotide project

const eqArrays = require("./eqArrays"); // import eqArrays function

// use eqArray to find if arrays are equal. assign return value to equalityBool
const assertArraysEqual = function (array1, array2) {

  if (eqArrays(array1, array2)) { // check if arrays are equal
    
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`); // if true log passed message
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${array1} !== ${array2}`); // else log failed message


    // log additional context
    if (array1.toString() === array2.toString()) {
      // check if array values are equal but data types are not
      console.log("↑↑↑↑↑↑ Reason: Mismatched data types"); // if true log mismatched data types
    } else {
      // if array values are not equal
      console.log("↑↑↑↑↑↑ Reason: Array Values not equal"); // log array values not equal
    }
  }
};

module.exports = assertArraysEqual; // export assertArraysEqual function
