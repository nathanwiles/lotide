// function which returns an object containing the indexs of each letter in a string.
const letterPositions = function (string) {
  const results = {}; // object to store results.
  for (const strIndex in string) {
    // loop through the letter indexs in the string
    let index = Number(strIndex); // ensure typeof index by setting to number
    let letter = string.charAt(index); // get the letter at the current index.
    if (letter !== " ") {
      // check to ignore spaces.
      if (results[letter]) {
        // check if results contain a key matching this letter.
        results[letter].push(index); // if true, push the current index to the array it contains
      } else {
        results[letter] = [index]; // if false, assign a new key value pair with the letter as the key, and the index contained within an array
      }
    }
  }
  return results;
};
module.exports = letterPositions;
