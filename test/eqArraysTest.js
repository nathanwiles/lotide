const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");

console.log("\nTEST CASES for eqArrays.js");
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // tests matching arrays
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false); // tests non-matching arrays
assertEqual(eqArrays([1, 2, 3], [1, 2]), false); // tests arrays of different lengths
assertEqual(
  eqArrays([1, [2, 3, [4, 6, [7], 8], 10]], [1, [2, 3, [4, 6, [7], 8], 10]]),
  true
  ); 

// tests nested arrays
console.log("nested arrays:");
assertEqual(eqArrays([1, [2, 3, [4, 6, [7], 8], 10]], [1, [2, 3, [4, 6, [7], 8], 10]]), true); 

