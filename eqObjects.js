// DEFINE HELPER FUNCTION
const assertEqual = function (actual, expected) {
  
  let resultingBool = (actual === expected);
  resultingBool
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

/* TASK:
  - DEFINE eqObjects:
    -take in 2 objects as arguments
    -check if both have the same number of keys
      -if false return false
      -if true:
      -iterate over the first Object's keys
        -check if values, referenced by the key, match using assertEqual()
        -
            
*/

const eqObjects = function (obj1, obj2) {
  //const obj1Keys = Object.keys(obj1);
  //const obj2Keys = Object.keys(obj2);
  //if (assertEqual(obj1Keys.length, obj2Keys.length, "Quantiny of keys:")) {
    

  //};
};


// TEST CASES
const pantsObject = {colour: "blue", size: 32};
const anotherPantsObject = {size: 32, colour: "blue"};
assertEqual(eqObjects(pantsObject, anotherPantsObject), true); // => true

const longPantsObject = {colour: "blue", size: 32, length: 34};
assertEqual(eqObjects(longPantsObject, pantsObject), false); // => false


