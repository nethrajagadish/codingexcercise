//Multi-Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.

// Restrictions:
// Time - O(n);
// Space - O(n);
function areDuplicatesMP(...args) {
  args.sort((b, a) => {
    if (b > a) {
      return 1;
    }
    if (b < a) {
      return -1;
    }
    return 0;
  });
  let next = 1;
  for (let i = 0; i < args.length; i++) {
    if (args[i] === args[next]) {
      return true;
    }
    next++;
  }
  return false;
}

areDuplicatesMP(1, 2, 3); // false
areDuplicatesMP(1, 2, 2); // true
areDuplicatesMP("a", "b", "c", "a"); // true
