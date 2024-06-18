//Frequency Counter- areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.

// Restrictions:
// Time - O(n);
// Space - O(n);

function areThereDuplicates() {
  let collection = {};
  for (let val of arguments) {
    collection[val] = ++collection[val] || 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) {
      return true;
    }
  }
  return false;
}
areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true
areThereDuplicates("a", "b", "c", "a"); // true
