// DEFINE without(): returns a subset of a given array, removing unwanted elements.
const without = function(source, itemsToRemove) {
  let target = source; // create a copy of the source array
  for (const item of itemsToRemove) { //
    target = target.filter(element => element !== item); // filter out each item in itemsToRemove
  }
  return target;  // return the filtered array
};

module.exports = without;

