// Check if two passed values are equal.
const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

const countOnly = function(allItems, itemsToCount) {
  let output = {};
  for (const testItem in itemsToCount) {
    let matches = allItems.filter((targetItem) => targetItem === testItem); // filter matches into a new array to bo counted.
    if (itemsToCount[testItem] && matches !== 0) {
      // check if itemsToCount element's value is true, and that there were matches found.
      let numOfMatches = matches.length; //if yes, get the number of Matches
      output[testItem] = numOfMatches; // add the key value pair in the output object
    }
  }
  return output;
};

// Provided test cases.
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
