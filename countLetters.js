// Check if two passed values are equal.
const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

/* TASK
  -function: take in a sentence (as a string)
    -create an object to store the letter counts
    -make all letters lowercase
    -remove spaces
    -loop through sentence
      -check if object has a count for this letter already.
        -if yes: add 1 to count
        -if no: set count to 1
    -return object containing the letter counts.
*/

const countLetters = function(sentence) {
  let letterCounts = {};
  let lowercaseSentence = sentence.toLowerCase();
  for (const char of lowercaseSentence) {
    if (char !== " ") {
      if (letterCounts[char]) {
        letterCounts[char] += 1;
      } else {
        letterCounts[char] = 1;
      }
    }
  }
  return letterCounts;
};

let testSentence = "test me and see what happens";
let testCount = countLetters(testSentence);

assertEqual(testCount.t, 3);
assertEqual(testCount.e, 5);
assertEqual(testCount.f, undefined);
assertEqual(testCount.w, 1);
