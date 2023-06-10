// return the middle element of an array
const middle = function(array) {
  let target = [];
  let length = array.length;
  if (length > 2) {
    let middleIndex = [];
    if (length % 2 !== 0) {
      middleIndex.push(Math.floor(length / 2));
    } else {
      middleIndex.push(length / 2 - 1, length / 2);
    }

    for (const index of middleIndex) {
      target.push(array[index]);
    }
  }
  return target;
};

module.exports = middle;
