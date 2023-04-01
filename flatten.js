// a function flatten which will take in an array containing elements
// including nested arrays of elements,
// and return a "flattened" version of the array.
// flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]

const flatArray = (obj) => {

  let outputArray = [];

  if (Array.isArray(obj)) {

    for (let item of obj) {
      if (Array.isArray(item)) {
        for (let childItem of item) {
          outputArray.push(childItem);
        }
        continue;
      }

      outputArray.push(item);

    }

  }

  return outputArray;

};

console.log(flatArray([1, 2, [3, 4], 5, [6],[8,9,7]]));
// Expected output: true