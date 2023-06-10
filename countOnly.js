
const countOnly = function(allItems, itemsToCount) {
  let output = {};
  for (const testItem in itemsToCount) {
    let matches = allItems.filter((targetItem) => targetItem === testItem); // filter matches into a new array to bo counted.
    if (itemsToCount[testItem] && matches.length !== 0) {
      // check if itemsToCount element's value is true, and that there were matches found.
      output[testItem] = matches.length; //if yes, get the number of Matches
    }
  }
  return output;
};

module.exports = countOnly;