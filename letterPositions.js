// ASSERTION FUNCTIONS

// eqArrays function.
const eqArrays = function(array1, array2) {
  
  // check if array lengths are the same.
  if (array1.length !== array2.length) return false;
  // check if any array elements are not the same.
  for (let i = 0; i < array1.length; i++) {
    // handles nested arrays.
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
    } else if (array1[i] !== array2[i]) {
      // if any array element is not the same return false.
      return false;
    }
  }
  
  // if this line is reached all checks were passed
  return true;
  
};

// define assertArraysEqual()
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

// CURRENT EXCERCISE
/*
TASK:
- Define function letterPositions():
  - take a string as an argument
  - declare an object to store the results
  - iterate over the string:
    - ignore spaces
    - check if the results object has a key matching the letter:
      - false: assign a key to the object with a value of 1.
      - true: increment the key's value +1.
  return results
*/
const letterPositions = function(string) {
  const results = {}; // object to store results.
  for (const strIndex in string) { // loop through the letter indexs in the string
    let index = Number(strIndex); // ensure typeof index by setting to number
    let letter = string.charAt(index); // get the letter at the current index.
    if (letter !== ' ') { // check to ignore spaces.
      if (results[letter]) { // check if results contain a key matching this letter.
        results[letter].push(index); // if true, push the currnt index to the array it contains
      } else {
        results[letter] = [index]; // if false, assign a new key value pair with the letter as the key, and the index contained within an array
      }
    }

  }
  return results;
};
// TEST CASES
let test1 = 'hello';
let result = letterPositions(test1);

// test each letter to ensure the proper outcome.
assertArraysEqual(result.h,[0]);
assertArraysEqual(result.e,[1]);
assertArraysEqual(result.l,[2,3]);
assertArraysEqual(result.o,[4]);

// test to make sure that spaces were skipped.
assertArraysEqual([result[' ']],[undefined]);
