// DEFINE assertEqual()
const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);

};

// DEFINE tail()
const tail = function(array) {
  // generate tail from input array using slice()
  let tail = array.slice(1);
  // if tail is defined, return tail, else return empty array.
  if (tail) {
    return tail;
  } else {
    return [];
  }
};

// Test Case: Check tail() output values
const result = tail(["first", "second", "third"]);
assertEqual(result.length, 2); // check for proper length
assertEqual(result[0], "second"); // ensure first element is now "second"
assertEqual(result[1], "third"); // ensure second element is now "third"

// Test Case: Check the original array
const words = ["first", "second", "third"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case: Check output from single value array
const result2 = tail(['solo']);
assertEqual(result2.length, 0); // check for proper length
assertEqual(result2[0], undefined); // ensure result is empty

// Test Case: Check output from empty array
const result3 = tail([]);
assertEqual(result3.length, 0); // check for proper length
assertEqual(result3[0], undefined);