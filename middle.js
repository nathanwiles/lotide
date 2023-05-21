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
/*
TASKS:
  - create middle() function: [done]
    -return an array of the middle element(s) of the provided array.
      -length of the returned elements may vary.
        - 1-2 elements: no middle. Return empty array.
        - odd number of elements: 1 middle element, return it contained in an array.
        - even number of elements: 2 middle elements, return them contained in an array.
  - create assertions to test:
    - 1-2 element arrays
    - odd number of elements
    - even number of elements
    - original arrays remain the same
 */

const middle = function(array) {
  let target = [];
  let length = array.length;
  if (length > 2) {
    let middleIndex = [];
    if (length % 2 !== 0) {
      middleIndex.push(Math.floor(length / 2));
    } else {
      middleIndex.push(length / 2 - 1,length / 2);
    }

    for (const index of middleIndex) {
      target.push(array[index]);
    }
  }
  return target;
};

// TEST CASES

let tA1 = [1,2,3,4,5,6,7,8];
let tA2 = [1,2,3,4,5,6,7];
let tA3 = ['a','b','c','d'];
let tA4 = ['a','b','c','d','e'];
let tA5 = [];
let tA6 = [1];
let tA7 = [1,2];

assertArraysEqual(middle(tA1),[4,5]);
assertArraysEqual(middle(tA2),[4]);
assertArraysEqual(middle(tA3),['b','c']);
assertArraysEqual(middle(tA4),['c']);
assertArraysEqual(middle(tA5),[]);
assertArraysEqual(middle(tA6),[]);
assertArraysEqual(middle(tA7),[]);

