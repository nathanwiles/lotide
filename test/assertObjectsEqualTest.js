
const assertObjectsEqual = require('../assertObjectsEqual');

// TEST CASES
let obj1 = {num:43,str:'hjhj',arr:[1,2,3,4]};
let obj2 = {num:43,str:'hjhj',arr:[1,2,3,4]};
let obj3 = {num:43,str:'nope',arr:[1,2,3,4]};

console.log('\nTEST CASES for assertObjectsEqual.js');
assertObjectsEqual(obj1, obj2); // should pass
assertObjectsEqual(obj3, obj2); // should fail

