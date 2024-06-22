// Write a function called findLongestSubstring,
// which accepts a string and returns the length of the longest substring with all distinct characters.

// Time Complexity - O(n)

function findLongestSubstring(str) {
  let str1 = str.toLowerCase();
  let start = 0;
  let seen = {};
  let longestStrLen = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str1[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    longestStrLen = Math.max(longestStrLen, i - start + 1);
    seen[char] = i + 1;
  }
  return longestStrLen;
}

findLongestSubstring(""); // 0
findLongestSubstring("rithmschool"); // 7
findLongestSubstring("thisisawesome"); // 6
findLongestSubstring("thecatinthehat"); // 7
findLongestSubstring("bbbbbb"); // 1
findLongestSubstring("longestsubstring"); // 8
findLongestSubstring("thisishowwedoit"); // 6
