//assertEqual Function
const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};


// Main Function
const findKey = (object, callback) => {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

// TEST CASES
const testObjects = {
  obj1 : {content: 93},
  obj2 : {content: 67, specialContent: "I'm average"},
  obj3 : {content: 36},
  obj4 : {content: 63, specialContent: "I'm special"},
  obj5 : {content: 23},
  obj6 : {content: 'blue'},
};

// assign results to variables
const result1 = findKey(testObjects, x => x.content < 30);
const result2 = findKey(testObjects, x => x.specialContent === "I'm special");
const result3 = findKey(testObjects, x => x.content === 'blue');

// check if results match expectations.
assertEqual(result1, 'obj5');
assertEqual(result2, 'obj4');
assertEqual(result3, 'obj6');