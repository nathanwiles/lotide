// Created by Nathan Wiles
// Part of Lotide project

// function mutates an array by mapping each element in the array by a callback function
const map = (array, cb) => {
  const mappedArray = []; // array to store mapped values
  array.forEach((element) => mappedArray.push(cb(element))); // iterate through array and push mapped values to mappedArray
  return mappedArray;
};

module.exports = map; //export map function
