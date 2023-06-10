// DEFINE HELPER FUNCTIONS
// define assertEqual function

// define eqArrays function
const eqArrays = require("./eqArrays");
// MAIN FUNCTION
// Define eqObjects function
const eqObjects = function (obj1, obj2) {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) return false;
  for (const key of obj1Keys) {
    let value1 = obj1[key];
    let value2 = obj2[key];

    if (Array.isArray(value1)) {
      if (eqArrays(value1, value2) !== true) return false;
    } else if (obj1[key] !== obj2[key]) return false;
  }
  return true; // if the code makes it this far all test were passed.
};

module.exports = eqObjects; // export eqObjects function
