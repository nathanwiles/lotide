// eqArrays function from previous assignment, integrate into solution.
const eqArrays  = function(array1, array2) {
  // set default output to false;
  let output = false;
  // check if array lengths are the same.
  if (array1.length === array2.length) {
    // if length is equal, set output to true.
    output = true;
    // check if array element are not the same.
    for (let i = 0; i < array1.length; i++) {
      // handles nested arrays.
      if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
        if (!eqArrays(array1[i], array2[i])) {
          output = false;
          break;
        }
      } else if (array1[i] !== array2[i]) {
        // if any array element is not the same, change output to false, and break the loop.
        console.log(array1[i],array2[i]);
        output = false;
        break;
      }
    }
  }
  // return output aka true or false depending on arrays passed
  return output;
  
};

// assertArraysEqual() from previous assignment
const assertArraysEqual = function(array1, array2) {
  // use eqArray to find if arrays are equal. assign return value to equalityBool
  let equalityBool = eqArrays(array1, array2);
  // check if equality bool is true
  if (equalityBool) {
    // if true log passed message
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    // else log failed message
    console.log(`🔴🔴🔴 Assertion Failed: ${array1} !== ${array2}`);

    // log additional context
    if (array1.toString() === array2.toString()) {
      console.log('↑↑↑↑↑↑ Reason: Mismatched data types');
    } else {
      console.log('↑↑↑↑↑↑ Reason: Array Values not equal');
    }
  }
};

/* TASKS:
   - Create function flatten()
    - take in an array containing elements including nested arrays
    - return a "flattened" version of the array.
  [done]
  - Build test cases.
    - use different data types.
  
*/

const flatten = function(sourceArray) {
  let target = [];
  for (const element of sourceArray) {
    if (Array.isArray(element)) {
      for (const nestedVal of element) {
        target.push(nestedVal);
      }
    } else {
      target.push(element);
    }
  }
  return target;
};

// TEST CASES
// define array to be tested
let testArray1 = [[2,'a',4],5,'howitzer',7,[8,'9',10]];

// test that output array is flattened
assertArraysEqual(flatten(testArray1),[2, 'a', 4, 5, 'howitzer', 7, 8, '9', 10]);
// test that original array remains unaffected.
assertArraysEqual([[2,'a',4],5,'howitzer',7,[8,'9',10]], testArray1);