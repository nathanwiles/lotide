// Created by Nathan Wiles
// Part of Lotide project

// function to take elements from an array until a condition is met
const takeUntil = (array, cb) => {
  const returnArray = []; // array to store elements
  // iterate through array
  for (const element of array) {
    if (!cb(element)) { // if callback function returns false
      returnArray.push(element); // push element to returnArray
    } else { // if callback function returns true
      break; // break out of loop
    }
  }
  return returnArray;
};

module.exports = takeUntil; // export takeUntil function