const assertArraysEqual = require('../assertArraysEqual');

// TEST CASES
let testArray1 = [1,2,3];
let testArray2 = [1,2,3];
let testArray3 = [1,'2',3];
let testArray4 = [1,4,3];

assertArraysEqual(testArray1, testArray2);
assertArraysEqual(testArray1, testArray3);
assertArraysEqual(testArray1, testArray4);
