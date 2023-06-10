// import function to test
const assertEqual = require('../assertEqual');

console.log('\nTEST CASES for assertEqual.js');

assertEqual("Tidal waves", "Ocean"); // should fail
assertEqual(6, 6);  // should pass
assertEqual("bologna", "bologna");  // should pass
assertEqual(4, 7);  // should fail