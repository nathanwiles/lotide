// Created by Nathan Wiles
// Part of Lotide project

// function to find key in object based on callback
const findKey = (object, callback) => {
  // loop through object
  for (const key in object) {
    if (callback(object[key])) { // if callback returns true
      return key; // return key
    }
  }
  return undefined; // if no key is found return undefined
};

module.exports = findKey; // export findKey function