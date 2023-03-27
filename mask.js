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

let splitString = [];
if (arrayArgs.length) {
  splitString = arrayArgs[0].split('');
}

const maskString = (splitString) => {

  for (let j = 0; j < splitString.length; j++) {
    if (splitString[j] === 'a') {
      splitString[j] = 4;
    }
    if (splitString[j] === 'e') {
      splitString[j] = 3;
    }
    if (splitString[j] === 'o') {
      splitString[j] = 0;
    }
    if (splitString[j] === 'l') {
      splitString[j] = 1;
    }
  }
  return (splitString.join(''));
};

if (splitString) {
  console.log(maskString(splitString));
}


module.exports = {maskString};