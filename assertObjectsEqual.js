// DEFINE HELPER FUNCTIONS
// define assertEqual function
const assertEqual = function(actual, expected) {
  let resultingBool = actual === expected;
  resultingBool
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};
// define eqArrays function
const eqArrays  = function(array1, array2) {
  // if arrays are different length return false.
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    // if any array element is not the same, return false.
    if (array1[i] !== array2[i]) { // check if array element are not the same.
      return false;
    }
  }
  // all tests passed if reached.
  return true;
};
// Define eqObjects function
const eqObjects = function(obj1, obj2) {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) return false;
  for (const key of obj1Keys) {
    let value1 = obj1[key];
    let value2 = obj2[key];
    
    if (Array.isArray(value1)) {
      if (eqArrays(value1, value2) !== true) return false;
    } else if (obj1[key] !== obj2[key]) return false;
  }
  return true; // if the code makes it this far all test were passed.
};