// JavaScript Demo: Array.reverse()

// print process.argv
const array = process.argv;

let arrayArgs = [];

for (let i = 0; i < (array.length - 2); i++) {
  arrayArgs.push(array[i + 2]);
}

console.log("array arguments: ", arrayArgs);

process.argv.forEach(function(val, index, array) {
  console.log(index + ': ' + val);
  
});

const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// Expected output: "array1:" Array ["three", "two", "one"]

// Print out reversed cmd line args:
const reversedCmdLine = arrayArgs.reverse();
console.log('reversed cmd line:', reversedCmdLine);
console.log("Reversed cmdline args in String format:",reversedCmdLine.join(''));

let finalReversed = [];
// Print out entire arrays reversed in String format
const reverseString = (arrayArgs) => {
  for (const args of arrayArgs) {
    const splitString = args.split("");
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join("");
    console.log(joinArray);
    finalReversed.push(joinArray);
  }
  return finalReversed;
};

console.log("Final Reversed Arguments as String format:", reverseString(arrayArgs).join(''));

module.exports = {reverseString};
