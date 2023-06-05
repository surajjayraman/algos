// using recursion instead of a for loop
const countEvenToTwelve = function(number) {
  if (number <= 12) {
    console.log(number);
    countEvenToTwelve(number + 2);
  }
};
countEvenToTwelve(0);
  
// final implementation
const sumToOne = function(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumToOne(n - 1);
};
  
console.log(sumToOne(4));

// build an object tree using recursion
const categories = [
  {id: 'animals', parent: null},
  {id: 'mammals', parent: 'animals'},
  {id: 'cats', parent: 'mammals'},
  {id: 'dogs', parent: 'mammals'},
  {id: 'chihuaha', parent: 'dogs'},
  {id: 'labrador', parent: 'dogs'},
  {id: 'persian', parent: 'cats'},
  {id: 'siamese', parent: 'cats'},
  {id: 'sweety', parent: 'chihuaha'}
];

const makeTree = (categories, parent) => {
  const node = {};
  categories
    .filter(c => c.parent === parent)
    .forEach(c => node[c.id] = makeTree(categories, c.id));
  return node;
};

console.log(
  JSON.stringify(makeTree(categories,null),null, 2)
);