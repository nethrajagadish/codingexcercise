// Write a function called productOfArray which takes in an array of numbers and
// returns the product of them all.

function productOfArray(arr) {
  if (arr.length == 0) return 1;
  let lastEle = arr[arr.length - 1];
  arr.pop();
  return lastEle * productOfArray(arr);
}

function productOfArray2(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
