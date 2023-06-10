const assert = require('chai').assert;
const map = require('../map');
//Test Cases
const arrays = [['grease','tires','drill'],['plastic','wires','silicon'],[123,543,233]];
const numbers = [14,22,34,20,38];
const words = ["guess", "who's", "back,", "back", "again"];


// callback functions
const firstLetter = word => word[0];
const divByTwo = num => num / 2;
const thirdElementInArrayToday = array => array[2] + ': today';

const wordsResults1 = map(words, firstLetter);
const numResults = map(numbers, divByTwo);
const arraysResults = map(arrays, thirdElementInArrayToday);

describe("#map", () => {
  it("should return ['g', 'w', 'b', 'b', 'a'] when passed words and firstLetter callback", () => {
    assert.deepEqual(wordsResults1, ['g', 'w', 'b', 'b', 'a']);
  });
  it("should return [7, 11, 17, 10, 19] when passed numbers and divByTwo callback", () => {
    assert.deepEqual(numResults, [7, 11, 17, 10, 19]);
  });
  it("should return ['drill: today', 'silicon: today', '233: today'] when passed arrays and thirdElementInArrayToday callback", () => {
    assert.deepEqual(arraysResults, ['drill: today', 'silicon: today', '233: today']);
  });
});