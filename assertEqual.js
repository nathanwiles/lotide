//Created by Nathan Wiles
//Part of Lotide project

const assertEqual = function (actual, expected) {
  // compare two values and print out a message indicating whether or not they match.

  actual === expected // check if actual and expected are equal
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) // if true log passed message
    : console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`); // if false log failed message
};

module.exports = assertEqual; // export assertEqual function
