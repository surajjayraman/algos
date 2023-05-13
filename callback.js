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