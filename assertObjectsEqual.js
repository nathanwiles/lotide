// DEFINE HELPER FUNCTIONS
// define eqArrays function
const eqArrays = function(array1, array2) {
  // if arrays are different length return false.
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    // if any array element is not the same, return false.
    if (array1[i] !== array2[i]) {
      // check if array element are not the same.
      return false;
    }
  }
  // all tests passed if reached.
  return true;
};
// Define eqObjects function
const eqObjects = function(obj1, obj2) {
  // store object keys for ease of use.
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) return false; // check if objects have the same number of keys
  for (const key of obj1Keys) { // iterate over obj1Keys
    // store values for ease of use.
    let value1 = obj1[key];
    let value2 = obj2[key]; 
    if (Array.isArray(value1)) { // check if value is an array
      if (!(eqArrays(value1, value2))) return false; // check if array values are equal
    } else if (obj1[key] !== obj2[key]) return false; // else: check if object values are equal
  }
  return true; // if the code makes it this far all test were passed.
};

// MAIN FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  eqObjects(actual, expected)
    ? console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
    : console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

// TEST CASES

let obj1 = {num:43,str:'hjhj',arr:[1,2,3,4]};
let obj2 = {num:43,str:'hjhj',arr:[1,2,3,4]};
let obj3 = {num:43,str:'nope',arr:[1,2,3,4]};

assertObjectsEqual(obj1, obj2);
assertObjectsEqual(obj3, obj2);