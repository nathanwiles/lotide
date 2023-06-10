// import functiono to test
const assertArraysEqual = require('../assertArraysEqual');

// TEST CASES
let testArray1 = [1,2,3];
let testArray2 = [1,2,3];
let testArray3 = [1,'2',3];
let testArray4 = [1,4,3];

console.log('\nTEST CASES for assertArraysEqual.js');
assertArraysEqual(testArray1, testArray2); // should pass
assertArraysEqual(testArray1, testArray3); // should fail
assertArraysEqual(testArray1, testArray4); // should fail
