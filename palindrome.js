// FUNCTION IMPLEMENTATION (MULTIPLE BUGS)
const isPalindrome = function(str) {
  const noSpaces = str.toUpperCase().split(" ").join("").split('');
  console.log(`No spaces ${noSpaces} type = ${typeof(noSpaces)}`);
  const lastIndex = noSpaces.length - 1;
  console.log(`last index = ${lastIndex} and we will iterate until ${Math.round(lastIndex / 2)}`);
  
  for (let i = 0; i < Math.round(lastIndex / 2); i++) {
    console.log(`noSpaces[i] = ${noSpaces[i]} and noSpaces[lastIndex - i] = ${noSpaces[lastIndex - i]}`);
    if (noSpaces[i] !== noSpaces[lastIndex - i]) {
      return false;
    }
  }
  return true;
};
  
// Assertion Function
const assertPalindrome = function(word, expected) {
  console.log(`Testing isPalindrome(${word}):`);
  const actual = isPalindrome(word);
  if (actual === expected) {
    console.log("\x1b[32m%s\x1b[0m", `\tPASS ✅ function returned ${actual}\n`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `\tFAIL 🛑 function returned ${actual} (expected ${expected})\n`);
  }
};
  
  
// TEST CODE
// These should all pass assertion
assertPalindrome('p', true);
assertPalindrome('racecar', true);
assertPalindrome('my gym', true);
assertPalindrome('foo', false);
assertPalindrome('fluff', false);
assertPalindrome('just some random words', false);
assertPalindrome('malayalam', true);
  
// Bonus / Stretch: Uncomment these tests and make then work
assertPalindrome('Kayak', true);
assertPalindrome('a santa at NASA', true);