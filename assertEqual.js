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