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

// loaded die
const rollDie = function() {
  return Math.floor(1 + Math.random() * 6);
};
  
console.log(rollDie());  // 1 (for example)
  
// predict the next number while rolling a die
const makeLoadedDie = function() {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* closure code here */
  
  return function() {
    return list[Math.floor(1 + Math.random() * 9)];
  };
};
  
const rollLoadedDie = makeLoadedDie();
  
console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6

// Implement a function countdownGenerator()
const countdownGenerator = function(x) {

  return () => {
    if (x === 0) console.log(`Blast Off!`);
    if (x < 0) console.log(`Rockets already gone, bub!`);
    if (x > 0) console.log(`T-minus ${x}`);
    x--;
  };
    
};
  
const countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!

//Logging Wrapper
const wrapLog = function(callback, name) {
     
  //Logs the name, input parameters, and return value of the callback
  console.log(`Name of the callback: ${name}
    Input Paramters: ${arguments[0]}, ${arguments[1]}}
    Return value of ${name}: ${callback}`);
    
  return callback;
};
  
const area = function(x, y) {
  console.log("Area arguments", arguments[0],arguments[1]);
  return x * y;
};
const logArea = wrapLog(area, "area");
  
console.log(logArea(5, 3)); // area(5, 3) => 15
console.log(logArea(3, 2)); // area(3, 2) => 6
  
const volume = function(x, y, z) {
  return x * y * z;
};
const logVolume = wrapLog(volume, "volume");
  
console.log(logVolume(5, 3, 2)); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24