// Created by Nathan Wiles
// Part of Lotide project

// take in two arrays and returns true or false, based on a perfect match.
const eqArrays = function (array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) return false; // check if both arguments are arrays.
  if (array1.length !== array2.length) return false; // if arrays are different length return false.
  
  for (const index in array1) { // loop through array1
  
    let element1 = array1[index]; // get element at index from array1
    let element2 = array2[index]; // get element at index from array2
    
    if (Array.isArray(element1)) { // handles nested arrays using recursion
      if (!eqArrays(element1, element2)){
        return false; // if nested arrays are not equal return false.
      };

    } else if (array1[index] !== array2[index]) { // check if array element are not the same.
      return false;
    }
  }
  // all tests passed if reached.
  return true;
};

module.exports = eqArrays; // export eqArrays function
