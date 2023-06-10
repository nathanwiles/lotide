const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // tests matching arrays
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true); // tests non-matching arrays
assertEqual(eqArrays([1, 2, 3], [1, 2]), true); // tests arrays of different lengths
assertEqual(
  eqArrays([1, [2, 3, [4, 6, [7], 8], 10]], [1, [2, 3, [4, 6, [7], 8], 10]]),
  true
); // test nested arrays
