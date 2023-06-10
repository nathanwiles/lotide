
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


// TEST CASES

let tA1 = [1,2,3,4,5,6,7,8];
let tA2 = [1,2,3,4,5,6,7];
let tA3 = ['a','b','c','d'];
let tA4 = ['a','b','c','d','e'];
let tA5 = [];
let tA6 = [1];
let tA7 = [1,2];


assertArraysEqual(middle(tA1),[4,5]);
assertArraysEqual(middle(tA2),[4]);
assertArraysEqual(middle(tA3),['b','c']);
assertArraysEqual(middle(tA4),['c']);


assertArraysEqual(middle(tA5),[]);
assertArraysEqual(middle(tA6),[]);
assertArraysEqual(middle(tA7),[]);

