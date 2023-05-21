const outer = function() {
  const x = 10;
  
  const inner = function() {
    console.log("The value of x is: " + x);
  };
  return inner;
};
  
const foo = outer();
foo();