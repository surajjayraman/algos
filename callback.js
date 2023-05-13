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