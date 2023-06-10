
// Main Function: will take elements from an array until a condition is met
const takeUntil = (array, cb) => {
  const returnArray = [];
  for (const element of array) {
    if (!cb(element)) {
      returnArray.push(element);
    } else {
      break;
    }
  }
  return returnArray;
};

module.exports = takeUntil;