// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};
// TEST CODE
assertEqual("Tidal waves", "Ocean");
assertEqual(6, 6);
assertEqual("bologna", "bologna");
assertEqual(4, 7);
