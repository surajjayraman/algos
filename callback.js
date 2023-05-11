const myFunction = function() {
  // do something
};
  
const myHigherOrderFunction = function(callback) {
  callback(); // equivalent to myFunction()
};
  
myHigherOrderFunction(myFunction);