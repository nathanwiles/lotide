/*
TASK:
Define Function Map:
  -takes two arguments
    -array to map
    -callback function
  -returns mapped array
*/

const map = (array, cb) => {
const mappedArray = [];
array.forEach((element) => mappedArray.push(cb(element)));
return mappedArray;
};

const words = ["guess", "who's", "back,", "back", "again"];
const results1 = map(words, word => word[0]);
console.log(results1);