// eqArrays: a function that takes in two arrays and returns true or false, based on a perfect match.
const eqArrays = function (array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) return false; // check if both arguments are arrays.
  // if arrays are different length return false.
  if (array1.length !== array2.length) return false;
  for (const index in array1) {
  
    let element1 = array1[index];
    let element2 = array2[index];
    // handles nested arrays.
    if (Array.isArray(element1)) {
      eqArrays(element1, element2);
    } else if (array1[index] !== array2[index]) {
      // check if array element are not the same.
      return false;
    }
  }
  // all tests passed if reached.
  return true;
};

module.exports = eqArrays;
