const algo = require('./basicalgo.js');
const reverseString = require('./reverse.js');
const pigLatin = require('./pig-latin.js');
const loopyLighthouse = require('./refactor.js');
const maskString = require('./mask.js');

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
    return 'Success';
  }
  console.log(`Assertion Failed: ${actual} !== ${expected}`);
  return 'Failure';

};

// TEST CODE
assertEqual("Java", "JavaScript");
assertEqual(1, 1);
console.assert(1 === 1.1); // => prints out "Assertion failed" to the terminal

// FUNCTION IMPLEMENTATION
const sum = function(a, b) {
  return a + b;
};

// TEST CODE
console.assert(sum(1, 2) === 3);
console.assert(sum(1, 20) === 3); // bad / incorrect assertion, and we see it fail!
console.assert(JSON.stringify(algo.series(4,10)) === JSON.stringify([4,6,8])); // incorrect assertion, and we see it fail!
console.assert(JSON.stringify(algo.series(4,10)) === JSON.stringify([4,6,8,10])); // correct assertion

// Test CODE for reversal
const actual = JSON.stringify(reverseString.reverseString(["hello", "how", "are", "you"]));
const expected = JSON.stringify(["olleh","woh","era","uoy"]);
console.assert(actual === expected);

// Use assertEqual custom function
assertEqual(actual, expected);

// Test piglatin rules
assertEqual(pigLatin.pigLatin(['this','is','all','just','gibberish']),'histay siay llaay ustjay ibberishgay');

// Test loopyLighthouse refactor
assertEqual(JSON.stringify(loopyLighthouse.loopyLighthouse([15,20], [2, 5], ["Batty", "Beacon"])), JSON.stringify([ 'Beacon', 'Batty', 17, 'Batty', 19, 'BattyBeacon' ]));

// Test mask string values
assertEqual(maskString.maskString(['h','i','t','h','e','r','e']), 'hith3r3');

