/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  // check if the length of the string are not the same 
  if (s1.length !== s2.length) return false;
  // delcare a new string to add s1 to s1
  // pass the new string into the helper function to check 
  let addS1 = s1 + s1;
  return isSubstring(addS1, s2);
}

module.exports = { isSubstring: isSubstring, stringRotation: stringRotation };

console.log(stringRotation("hello", "hello"))
console.log(stringRotation("hello", "llohe"));
console.log(stringRotation("hello", "he"));
console.log(stringRotation("hello", "ollhe"));