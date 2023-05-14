const myFunction = function() {
  // do something
};
  
const myHigherOrderFunction = function(callback) {
  callback(); // equivalent to myFunction()
};
  
myHigherOrderFunction(myFunction);

// Arrow functions
const sayHello = name => `hello there ${name}`;
const returnVal = sayHello('bob');
console.log('returnVal:', returnVal);

// single responsibility principle
// loop through array
const loopThroughArray = function(arr, callback) {
  for (const element of arr) {
    callback(element);
  }
};

const giveATreat = function(petName) {
  console.log(`Does ${petName} want some treats??????`);
};

const pets = ['Charlie!', 'Coda', 'Cadence', 'Molly', 'Joyce', 'Charlie', 'Dioji', 'Sweety'];

loopThroughArray(pets, giveATreat);

// use for each to implement ^
pets.forEach(function(petName) {
  console.log(`Does ${petName} want some treats? (using forEach)`);
});

pets.forEach(giveATreat);

// Our Map implementation
const ourMap = (arr, callback) => {
  // create an output array
  const output = [];
  
  // loop through the provided array
  for (const element of arr) {
    // call the provided callback with each element of the array AND store the return value
    const returnVal = callback(element);
  
    // add the return value to the output array
    output.push(returnVal);
  }
  
  // return the output array
  return output;
};

const names = ['alice', 'bob', 'carol'];

const doOnEachLoop2 = name => `you are logged in as ${name}`;

const ourMappedNames = ourMap(names, doOnEachLoop2);
console.log(names);
console.log(ourMappedNames);

// use Array map in built fn
console.log(names.map(name => doOnEachLoop2(name)));
