// Created by Nathan Wiles
// Part of Lotide project

// function returns a subset of a given array, removing unwanted elements.
const without = function(source, itemsToRemove) {
  let target = source; // create a copy of the source array
  // iterate through itemsToRemove array
  for (const item of itemsToRemove) { //
    target = target.filter(element => element !== item); // filter out each item from target array
  }
  return target;  // return the filtered array
};

module.exports = without; // export without function

