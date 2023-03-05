
// print process.argv for pig latin program
const array = process.argv;

let arrayArgs = [];

for (let i = 0; i < (array.length - 2); i++) {
  arrayArgs.push(array[i + 2]);
}

const pigLatin = (arrayArgs) => {
  console.log("pig latin arguments: ", arrayArgs);
  const reversedPigLatin = reverseString(arrayArgs);
  return reversedPigLatin;
};
let finalReversed = [];
// Print out entire arrays reversed in String format
const reverseString = (arrayArgs) => {
  for (const args of arrayArgs) {
    const splitString = args.split("");
    let splitStringHead = splitString.slice(1);
    const pigLatinArray = splitStringHead.join('') + splitString[0] + 'ay';
    finalReversed.push(pigLatinArray);
  }
  return finalReversed.join(' ');
};

console.log(`pig latin output: ${pigLatin(arrayArgs)}`);

module.exports = {pigLatin};