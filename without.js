// eqArrays() function from previous assignment
const eqArrays  = function(array1, array2) {
  // set default output to false;
  let output = false;
  // check if array lengths are the same.
  if (array1.length === array2.length) {
    // if length is equal, set output to true.
    output = true;
    // check if array element are not the same.
    for (let i = 0; i < array1.length; i++) {
      // if any array element is not the same, change output to false, and break the loop.
      if (array1[i] !== array2[i]) {
        output = false;
        break;
      }
    }
  }
  // return output aka true or false depending on arrays passed
  return output;
  
};

// assertArraysEqual() function from previous assignment.
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
  - Implement without() to
    - return a subset of a given array
      - remove unwanted elements.
  [done]

  - Use assertArraysEqual() to write test cases
    - various scenarios.
*/

// DEFINE without()
const without = function(source, itemsToRemove) {
  let target = source;
  for (const item of itemsToRemove) {
    target = target.filter(element => element !== item);
  }
  return target;
};

// TEST CASES
let testRemovalArray1 = [2,'7',4,'s',"waves"];
let testArray1 = [1,2,3,4,5,6,7,"waves",8,9,10];
let testArray2 = [3,2,2,2,2,2,'7',4,5,6,4,7,'s'];

// test that without() is outputting correctly
assertArraysEqual(without(testArray1, testRemovalArray1),[1,3,5,6,7,8,9,10]);
assertArraysEqual(without(testArray2, testRemovalArray1),[3,5,6,7]);
// test that without() does not alter the original array.
assertArraysEqual(testArray1, [1,2,3,4,5,6,7,'waves',8,9,10]);
assertArraysEqual(testArray2, [3,2,2,2,2,2,'7',4,5,6,4,7,'s']);

