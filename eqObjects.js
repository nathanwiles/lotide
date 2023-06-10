//Created by Nathan Wiles
//Part of Lotide project

// import eqArrays function
const eqArrays = require("./eqArrays");

// MAIN FUNCTION: asserts whether two objects are equal
const eqObjects = function (obj1, obj2) {
  const obj1Keys = Object.keys(obj1); // get keys from obj1
  const obj2Keys = Object.keys(obj2); // get keys from obj2
  
  if (obj1Keys.length !== obj2Keys.length) return false; // if objects are different length return false.
  
  // loop through obj1 keys
  for (const key of obj1Keys) { 
    let value1 = obj1[key]; // get value from obj1
    let value2 = obj2[key]; // get value from obj2

    // compare values from obj1 and obj2 several ways
    // check that values are same type
    if (typeof value1  !== typeof value2 ) return false; 
    
    // handle nested objects with recursion
    if (typeof value1 === "object") { 
      // check if value1 is an array
      if (Array.isArray(value1)) { 
        if (eqArrays(value1, value2) !== true) return false; // if value1 is an array, check if it is equal to value2.
      
      } else {
        // check if the nested objects are equal
        if (eqObjects(value1, value2) !== true) return false;
      }
    } else { // if value1 is not an object or array check if it is equal to value2.
      if (value1 !== value2) return false; 
  }
}
  return true; // if the code makes it this far all test were passed.
};


module.exports = eqObjects; // export eqObjects function
