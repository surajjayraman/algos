const printInFrame = function(list) {
  list = list.split(' ');
  console.log(`list = ${list}`);
  const longest = longestStr(list).length;
  console.log(`list[0]=${list[0]}, typeoflist = ${typeof(list)}`);
  console.log(`longest = ${longest}`);
  const border = repeat('*', (longest + 5));
  
  console.log(border);
  for (const word of list) {
    console.log(`* ${word}${repeat(' ', longest - word.length + 1)} *`);
  }
  console.log(border);
};
  
const repeat = function(str, times) {
  let result = '';
  
  for (let i = 0; i < times - 1; i++) {
    result += str;
  }
  
  return result;
};
  
const longestStr = function(list) {
  let longest = list[0];
  
  for (const str of list) {
    if (longest.length < str.length) {
      longest = str;
    }
    
  }
  
  return longest;
};
  
// Test driver code, do not modify
printInFrame('May the force be with you');
printInFrame('Here\'s Johnny!');
printInFrame('Supercalifragalisticexpialadocious');
printInFrame('Lost, like tears in the rain');