// Created by Nathan Wiles
// Part of Lotide project

// function returns an object containing the indexs of each letter in a string.
const letterPositions = function (string) {
  const results = {}; // object to store results.

  // loop through the letter indexs in the string
  for (const strIndex in string) {
    let index = Number(strIndex); // ensure typeof index by setting to number
    let letter = string.charAt(index); // get the letter at the current index.
   
    if (letter !== " ") { // ignore spaces
      if (results[letter]) { // check if the letter is already a key in the results object
        results[letter].push(index); // if true, push the current index to the array it contains
      } else {
        results[letter] = [index]; // if false, assign a new key value pair with the letter as the key, and the index contained within an array
      }
    }
  }
  return results;
};
module.exports = letterPositions; //Export letterPositions function
