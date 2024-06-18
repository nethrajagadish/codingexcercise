// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers,
//  find out if the two numbers have the same frequency of digits.

// Time: O(N)

function sameFrequency(num1, num2) {
  let str1 = num1.toString();
  let str2 = num2.toString();
  if (str1.length !== str2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let char1 of str1) {
    frequencyCounter1[char1] = ++frequencyCounter1[char1] || 1;
  }
  for (let char2 of str2) {
    frequencyCounter2[char2] = ++frequencyCounter2[char2] || 1;
  }
  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  return true;
}

sameFrequency(182, 281); // true
sameFrequency(34, 14); // false
sameFrequency(3589578, 5879385); // true
sameFrequency(22, 222); // false

console.log(
  sameFrequency(182, 281),
  sameFrequency(34, 14),
  sameFrequency(3589578, 5879385),
  sameFrequency(22, 222)
);
