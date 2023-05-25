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

// loyalty points specific closure
const createPointsCalculator = function(basePoints) {
  return function(pointsMultiplier) {
    let pointsCounter = 0;
    return function(transactionAmount) {
      pointsCounter++;
      const points = transactionAmount * basePoints * pointsMultiplier;
      console.log(`Earned ${points} points for $${transactionAmount} transaction.`);
      console.log(`Value of pointsCounter: ${pointsCounter}`);
      return pointsCounter;
    };
  };
};
  
// Usage
const calculatePoints = createPointsCalculator(1); // Base points: 1
const doublePoints = calculatePoints(2); // Points multiplier: 2
const triplePoints = calculatePoints(3); // Points multiplier: 3
  
doublePoints(100); // Earned 200 points for $100 transaction.
triplePoints(150); // Earned 450 points for $150 transaction.

// Lexical scoping
const init = function() {
  let name = "Mozilla"; // name is a local variable created by init
  const displayName = function() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  };
  displayName();
};
init();

// Unique ID Generator
const makeIdGenerator = function() {
  let id = 0;
  
  // The following is the closure function
  return function() {
    // This inner function accesses and assigns the value of
    // the variable id, which was defined in the parent function
    id += 1;
    return id;
  };
};
  
// makeIdGenerator returns a function which is assigned to
// the variable nextId
const nextId = makeIdGenerator();
  
console.log(nextId()); // Logs: 1
console.log(nextId()); // Logs: 2
console.log(nextId()); // Logs: 3
  
