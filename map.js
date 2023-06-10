// function which mutates an array by mapping each element in the array by a callback function
const map = (array, cb) => {
  const mappedArray = [];
  array.forEach((element) => mappedArray.push(cb(element)));
  return mappedArray;
};

module.exports = map;
