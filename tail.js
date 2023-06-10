// return tail of an array
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

module.exports = tail;