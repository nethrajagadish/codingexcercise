//Given two strings, write a function to determine if the second string is an anagram of the first.
//An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

//Note: You may assume the string contains only lowercase alphabets.
//Time Complexity - O(n)

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let frequencyCounter = {};
  for (let char1 of str1) {
    frequencyCounter[char1] = ++frequencyCounter[char1] || 1;
  }
  for (let char2 of str2) {
    if (!frequencyCounter[char2]) {
      return false;
    } else {
      frequencyCounter[char2] -= 1;
    }
  }
  return true;
}

validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false
validAnagram("awesome", "awesom"); // false
validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"); // false
validAnagram("qwerty", "qeywrt"); // true
validAnagram("texttwisttime", "timetwisttext"); // true
