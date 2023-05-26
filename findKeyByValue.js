// ASSERTION FUNCTION
const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);

};

/* TASK
- Function findKeyByValue(object, searchValue):
  - declare undefined variable to store resulting key.
  - interate over object,
    - compare current object key's value to searchValue:
      - match: store current key
  - return result
*/

// IMPLEMENTATION
const findKeyByValue = function(object, searchValue) {
  let searchResult; // a place to put search results.
  for (const key in object) { // iterate over object
    if (searchValue === object[key]) { //check if current value matches searchValue
      searchResult = key; // True: assign the current key to searchResults.
    }
  }
  return searchResult;
};

// TEST CASES:
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");

const testObject = {
  something : "more than nothing",
  nothing : "the absense of things",
  things : "organized matter",
  matter : "that which materializes",
  matterialize : "to take shape, or come into being",
  being: "the state of existing"
};

assertEqual(findKeyByValue(testObject, "more than nothing"),"something");
assertEqual(findKeyByValue(testObject, "that which materializes"), "matter");
assertEqual(findKeyByValue(testObject, "the meaning of life"), undefined);