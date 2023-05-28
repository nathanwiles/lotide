// eqArrays function
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
        output = false;
        break;
      }
    }
  }
  // return output aka true or false depending on arrays passed
  return output;
  
};

// assertArraysEqual()
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
TASK:
Define Function Map:
  -takes two arguments
    -array to map
    -callback function
  -returns mapped array
*/

const map = (array, cb) => {
  const mappedArray = [];
  array.forEach((element) => mappedArray.push(cb(element)));
  return mappedArray;
};

//Test Cases

const arrays = [['grease','tires','drill'],['plastic','wires','silicon'],[123,543,233]];
const numbers = [14,22,34,20,38];
const words = ["guess", "who's", "back,", "back", "again"];
// callback functions
const firstLetter = word => word[0];
const divByTwo = num => num / 2;
const thirdElementInArrayToday = array => array[2] + ': today';

const wordsResults1 = map(words, firstLetter);
const numResults = map(numbers, divByTwo);
const arraysResults = map(arrays, thirdElementInArrayToday);

assertArraysEqual(wordsResults1, ['g', 'w', 'b', 'b', 'a']);
assertArraysEqual(numResults, [7, 11, 17, 10, 19]);
assertArraysEqual(arraysResults, ['drill: today', 'silicon: today', '233: today']);