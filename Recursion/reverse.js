// Write a recursive function called reverse which accepts a string and
// returns a new string in reverse.

function reverse(str) {
  if (str.length === 1) return str[0];
  let last = str[str.length - 1];
  return last + reverse(str.slice(0, -1));
}

function reverse1(str) {
  if (str.length <= 1) return str;
  return reverse1(str.slice(1)) + str[0];
}
console.log(reverse1("awesome"), reverse("rithmschool"));
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
