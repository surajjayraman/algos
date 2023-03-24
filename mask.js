// take in a single string as a command line argument and print out an obfuscated version
/*
Every "a" in the string should be replaced with a "4".
Every "e" in the string should be replaced with a "3".
Every "o" (oh) in the string should be replaced with a "0" (zero).
Every "l" (el) in the string should be replaced with a "1" (one).
*/

// print process.argv for mask program
const array = process.argv;

let arrayArgs = [];

for (let i = 0; i < (array.length - 2); i++) {
  arrayArgs.push(array[i + 2]);
}

console.log(arrayArgs);