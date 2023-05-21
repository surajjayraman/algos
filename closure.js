const outer = function() {
  const x = 10;
  
  const inner = function() {
    console.log("The value of x is: " + x);
  };
  return inner;
};
  
const foo = outer();
foo();

// Immediately-invoked function expression
const iifoo = (function() {
  const x = 10;
  
  const inner = function() {
    console.log("Value of x is: " + x);
  };
  return inner;
})(); // Notice the () at the end,
// which will immediately invoke the function,
// assigning the returned value (inner) to iifoo
  
iifoo();