//  Write a function called isSubsequence which takes in two strings and checks whether the characters
//  in the first string form a subsequence of the characters in the second string.
//  In other words, the function should check whether the characters in the
//  first string appear somewhere in the second string, without their order changing.

// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)

function isSubsequence(str1, str2) {
  if (str2.length < str1.length) {
    return false;
  }
  let i = 0;
  let j = 0;
  while (j < str2.length) {
    if (str1[i] == str2[j]) {
      i++;
    }
    j++;
  }
  if (i < str1.length) {
    return false;
  }
  return true;
}

isSubsequence("hello", "hello world"); // true
isSubsequence("sing", "sting"); // true
isSubsequence("abc", "abracadabra"); // true
isSubsequence("abcd", "acbe"); // false (order matters)
