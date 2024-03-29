const algo = require('./basicalgo.js');
const reverseString = require('./reverse.js');
const pigLatin = require('./pig-latin.js');
const loopyLighthouse = require('./refactor.js');
const maskString = require('./mask.js');
const flatArray = require('./flatten.js');
const arrayFlatten = require('./flatten.js');
const plainConcepts = require('./joinList.js');
const calculateSalesTax = require('./sales.js');

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

// Test nested array -> flattened array
assertEqual(JSON.stringify(flatArray.flatArray([1, 2, [3, 4], 5, [6,[7,8,[9,[9]]]]], arrayFlatten.arrayFlatten)),
  JSON.stringify([
    1, 2, 3, 4, 5,
    6, 7, 8, 9, 9
  ]));

assertEqual(JSON.stringify(flatArray.flatArray([1, 2, [3, 4], 5, [6,[7,8,[9]]]], arrayFlatten.arrayFlatten)),
  JSON.stringify([
    1, 2, 3, 4, 5,
    6, 7, 8, 9, 9
  ]));

// Test plain concepts join list
assertEqual(plainConcepts.plainConcepts(['gists', 'types', 'operators', 'iteration', 'problem solving']), "gists,types,operators,iteration,problem solving");

// Test calculateSalesTax
const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};
    
const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];
 
assertEqual(calculateSalesTax.calculateSalesTax(companySalesData, salesTaxRates),`Calculated Sales Tax: {"Telus":{"totalSales":1300,"totalTaxes":144},"Bombardier":{"totalSales":800,"totalTaxes":40}}`);
