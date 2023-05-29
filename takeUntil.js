// eqArrays function
const eqArrays = function(array1, array2) {
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
      console.log("↑↑↑↑↑↑ Reason: Mismatched data types");
    } else {
      console.log("↑↑↑↑↑↑ Reason: Array Values not equal");
    }
  }
};

// Main Function
const takeUntil = (array, cb) => {
  const returnArray = [];
  for (const element of array) {
    if (!cb(element)) {
      returnArray.push(element);
    } else {
      break;
    }
  }
  return returnArray;
};

// TEST CASES

const data1 = [3, 6, 9, 12, 15, 18, 21];
const results1 = takeUntil(data1, (x) => x > 10);
assertArraysEqual(results1, [3, 6, 9]);

console.log("---");

const data2 = ["take", "me", "to", "the", "place", "I", "love"];
const results2 = takeUntil(data2, (x) => x === "to");
assertArraysEqual(results2, ["take", "me"]);
