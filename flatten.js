// a function flatten which will take in an array containing elements
// including nested arrays of elements,
// and return a "flattened" version of the array.
// flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]

const flatArray = (obj, callback) => {

  let outputArray = [];

  if (Array.isArray(obj)) {
    for (let item of obj) {
      if (Array.isArray(item)) {
        callback(item, outputArray);
        continue;
      }
      outputArray.push(item);
    }
  }
  return outputArray;
};

const arrayFlatten = (childObj, parentObj) => {
  if (Array.isArray(childObj)) {
    for (let childItem of childObj) {
      if (Array.isArray(childItem)) {
        arrayFlatten(childItem, parentObj);
        continue;
      }
      parentObj.push(childItem);
    }
  }
  return;
};

console.log(flatArray([1, 2, [3, 4], 5, [6,[7,8,[9,[9]]]]], arrayFlatten));
console.log(flatArray([9,7,[1],[2,3,[9,[9,8,7]]],[2,[6,[9,8]]]], arrayFlatten));
console.log(flatArray([2, [3, 2]], arrayFlatten));

module.exports = {flatArray, arrayFlatten};