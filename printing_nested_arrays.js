// If the current item is an array,
// we want to print out all its items individually.
// Otherwise, we just want to print out the item.
const printItems = function(array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      // Print out all it's items individually
      printItems(item);
    } else {
      console.log(item);
    }
  });
};
  
const array = ["A", "B", "C", ["D",'k','o'], "E"];
printItems(array);