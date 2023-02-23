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
