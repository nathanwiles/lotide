//Created by Nathan Wiles
//Part of Lotide project

// function to find key in object based on value
const findKeyByValue = function (object, searchValue) {
  let searchResult; // a place to put search results.
  for (const key in object) {
    // iterate over object
    if (searchValue === object[key]) {
      //check if current value matches searchValue
      searchResult = key; // True: assign the current key to searchResults.
    }
  }
  return searchResult;
};

module.exports = findKeyByValue; // export findKeyByValue function
