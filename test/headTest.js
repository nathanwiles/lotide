// test code for head.js
// pull required functions from head.js and assertEqual.js
const assertEqual = require('../assertEqual');
const head = require('../head');


assertEqual(head([5,6,7]), 3);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1]), 1);
assertEqual(head([]), undefined);


