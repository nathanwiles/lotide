// Created by Nathan Wiles
// Part of Lotide project


// return tail of an array
const tail = function(array) {
  let tail = array.slice(1); // slice array from index 1 to end of array
  // if tail is defined
  if (tail) {
    return tail; // return tail
  } else {
    return []; // else return empty array
  }
};

module.exports = tail; // export tail function