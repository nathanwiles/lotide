// Created by Nathan Wiles
// Part of Lotide project

// Function: turn nested arrays into a single-level array
const flatten = function (sourceArray) {
  let results = []; // define results array
  for (const element of sourceArray) {
    // iterate through source array
    if (Array.isArray(element)) {
      // check if element is an array
      for (const nestedVal of element) {
        // if so, iterate through nested array
        results.push(nestedVal); // push each nested value to results array
      }
    } else {
      results.push(element); // if not, push element to target array
    }
  }
  return results;
};

module.exports = flatten; // export flatten function
