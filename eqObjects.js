// DEFINE HELPER FUNCTION
const assertEqual = function (actual, expected) {
  let resultingBool = actual === expected;
  resultingBool
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

/* TASK:
  - DEFINE eqObjects:
    -take in 2 objects as arguments
    -check if both have the same number of keys
      -if not return false
    -iterate over the first Object's keys
      -check if values match each other
        -if not return false.
      
    return true as tests are passed.

            
*/

// Define eqObjects function
const eqObjects = function (obj1, obj2) {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) return false;
  for (const key of obj1Keys) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true; // if the code makes it this far all test were passed.
};

// TEST CASES: Primitive values
const pantsObject = { colour: "blue", size: 32 };
const anotherPantsObject = { size: 32, colour: "blue" };
assertEqual(eqObjects(pantsObject, anotherPantsObject), true); // => true

const longPantsObject = { colour: "blue", size: 32, length: 34 };
assertEqual(eqObjects(longPantsObject, pantsObject), false); // => false

const multiColourPantsObject = { colour: ["blue", "green"], size: 32 };
const anotherMultiColourPantsObject = { size: 32, colour: ["blue", "green"] };
assertEqual(
  eqObjects(multiColourPantsObject, anotherMultiColourPantsObject),
  true
);

// TEST CASES: Array values
const longMultiColourPantsObject = {
  size: 32,
  colour: ["blue", "green"],
  length: 34,
};

assertEqual(
  eqObjects(multiColourPantsObject, anotherMultiColourPantsObject),
  false
);
