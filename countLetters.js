// Created by Nathan Wiles
// Part of Lotide project

const countLetters = function(sentence) { // function to count letters in a sentence
  let letterCounts = {}; // object to store the letter counts
  let lowercaseSentence = sentence.toLowerCase(); // make all letters lowercase
  
  for (const char of lowercaseSentence) {
    if (char !== " ") { // remove spaces
      if (letterCounts[char]) { // check if object has a count for this letter already
        letterCounts[char] += 1; // if yes: add 1 to count
      } else {
        letterCounts[char] = 1; // if no: set count to 1
      }
    }
  }

  return letterCounts; // return object containing the letter counts
};

module.exports = countLetters; // export countLetters function