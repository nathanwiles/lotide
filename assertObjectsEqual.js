// Created by Nathan Wiles
// Part of Lotide project

// import eqObjects function
const eqObjects = require('./eqObjects')
// import inspect function
const inspect = require('util').inspect;

// MAIN FUNCTION: asserts whether two objects are equal
const assertObjectsEqual = function(actual, expected) { // use eqObjects to find if objects are equal. log the results to the console.
  eqObjects(actual, expected) // check if actual and expected are equal
    ? console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) // if true log passed message
    : console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`); // if false log failed message
};

module.exports = assertObjectsEqual; // export assertObjectsEqual function