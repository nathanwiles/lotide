// Created by Nathan Wiles
// Part of Lotide project

// Function to return the middle element of an array
const middle = function(array) {
  let target = []; // array to store middle elements
  let length = array.length; // get length of array

  // check if array is longer than 2 elements
  if (length > 2) { 

    let middleIndex = []; // array to store middle indecies

    // check if array length is odd
    if (length % 2 !== 0) { 
      middleIndex.push(Math.floor(length / 2)); // if odd, push middle index to middleIndex array

    } else {
      middleIndex.push(length / 2 - 1, length / 2); // if even, push middle two indecies to middleIndex array
    }

    // iterate through middleIndex array
    for (const index of middleIndex) {
      target.push(array[index]); // push middle elements to target array
    }
  }
  return target;
};

module.exports = middle; // export middle function
