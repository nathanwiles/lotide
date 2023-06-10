const assertEqual = require("../assertEqual");
const eqObjects = require("../eqObjects");

console.log("\nTEST CODE for eqObjects.js");
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
  eqObjects(multiColourPantsObject, longMultiColourPantsObject),
  false
);
