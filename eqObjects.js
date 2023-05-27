// DEFINE HELPER FUNCTION
const assertEqual = function (actual, expected, assertTitle) {
  console.log(assertTitle);
  let resultingBool = (actual === expected);
  resultingBool
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  // return built in to service eqObjects
  return resultingBool;
};

/* TASK:
  - DEFINE eqObjects:
    -take in 2 objects as arguments
    -check if both have the same number of keys
      -if false, 
      -if true:
      -iterate over the first Object's keys
        -check if both objects contain the current key.
          -check if values referenced by the keys match using assertEqual()

            
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
eqObjects(pantsObject, anotherPantsObject); // => true

const longPantsObject = {colour: "blue", size: 32, length: 34};
eqObjects(longPantsObject, pantsObject); // => false
