const assertEqual = require("../assertEqual");
const eqObjects = require("../eqObjects");



console.log("\nTEST CASES for eqObjects.js");


// TEST CASES for Primitive values
const pantsObject = { colour: "blue", size: 32 };
const anotherPantsObject = { size: 32, colour: "blue" }; // same as pantsObject
assertEqual(eqObjects(pantsObject, anotherPantsObject), true); // => true

const longPantsObject = { colour: "blue", size: 32, length: 34 }; // different from pantsObject
assertEqual(eqObjects(longPantsObject, pantsObject), false); // => true

const multiColourPantsObject = { colour: ["blue", "green"], size: 32 }; // new object with array value
const anotherMultiColourPantsObject = { size: 32, colour: ["blue", "green"] }; // same as multiColourPantsObject

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
  eqObjects(multiColourPantsObject, longMultiColourPantsObject),
  false
);

// Test Case: Nested Objects
const nestedObject1 = {
  shirt1: { colour: "blue", size: 32 },
  shirt2: { colour: "green", size: 32 },
};

const nestedObject2 = {
  shirt1: { colour: "blue", size: 32 },
  shirt2: { colour: "green", size: 32 },
};

const nestedObject3 = {
  shirt1: { colour: "blue", size: 35 },
  shirt2: { colour: "green", size: 32 },
};

console.log("nested objects:");

assertEqual(eqObjects(nestedObject1, nestedObject2), true);
assertEqual(eqObjects(nestedObject1, nestedObject3), false);