//Created by Nathan Wiles
//Part of Lotide project

// import eqArrays function
const eqArrays = require("./eqArrays");

// MAIN FUNCTION: asserts whether two objects are equal
const eqObjects = function (obj1, obj2) {
  const obj1Keys = Object.keys(obj1); // get keys from obj1
  const obj2Keys = Object.keys(obj2); // get keys from obj2
  
  if (obj1Keys.length !== obj2Keys.length) return false; // if objects are different length return false.
  
  for (const key of obj1Keys) { // loop through obj1 keys
    let value1 = obj1[key]; // get value from obj1
    let value2 = obj2[key]; // get value from obj2

    if (Array.isArray(value1)) { // check if value1 is an array
      
      if (eqArrays(value1, value2) !== true) return false; // if value1 is an array, check if value2 is an array and if they are equal.
    
    } else if (obj1[key] !== obj2[key]) return false; // 
  }
  return true; // if the code makes it this far all test were passed.
};


module.exports = eqObjects; // export eqObjects function
