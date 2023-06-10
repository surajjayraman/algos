const eqObjects = function(first, second) {

  /* Checking if the types and values of the two arguments are the same. */
  if (first === second) return true;
    
  /* Checking if any arguments are null */
  if (first === null || second === null) return false;
  
  /* Checking if any argument is none object */
  if (typeof first !== 'object'  || typeof second !== 'object') return false;
  
    
  /* Using Object.getOwnPropertyNames() method to return the list of the objects’ properties */
  let firstKeys = Object.getOwnPropertyNames(first);
  
  let secondKeys = Object.getOwnPropertyNames(second);
  
  
  /* Checking if the objects' length are same*/
  if (firstKeys.length !== secondKeys.length) return false;
  
    
  /* Iterating through all the properties of the first object with the for of method*/
  for (let key of firstKeys) {

    /* Making sure that every property in the first object also exists in second object. */
    if (typeof second === 'object' && !second.hasOwnProperty(key)) return false;
  
    /* Using the deepComparison function recursively (calling itself) and passing the values of each property into it to check if they are equal. */
    if (eqObjects(first[key], second[key]) === false) return false;
  
  }
  
  /* if no case matches, returning true */
  return true;
  
  
};

// Test with objects
const result1 = eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 });
console.log(result1);
const result2 = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 });
console.log(result2);
const result3 = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 });
console.log(result3);

// Test with Arrays
console.log(eqObjects([[2, 3], [4]], [[2, 3], [4]]));
console.log(eqObjects([[2, 3], [4]], [[2, 3], [4, 5]]));
console.log(eqObjects([[2, 3], [4]], [[2, 3], 4]));

module.exports = eqObjects;