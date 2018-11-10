/* Given two strings, write a function to check if the second one is a
rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes
 in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> 
 * false (not a rotation, just an anagram)
 */

// check if s2 is rotation of s1

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  if (s1 === s2) return true;
  // create arrays out of both strings
  let s1Arr = s1.split('');
  const s2Arr = s2.split('');
  if (s1Arr.length !== s2Arr.length) return false;
  // iterate thru both strArrays, checking if isSubstring returns false for 
  // current element of both arrays. if so, return false
  for (let i = 0, j = 0; i < s1Arr.length; i += 1) {
    let temp = s1Arr[j];
    s1Arr = s1Arr.slice(1);
    s1Arr.push(temp);
    const joined = s1Arr.join('');
    if (joined === s2) return true;
  }
  // otherwise, you have iterated thru both arrays and can return false
  return false;
}

console.log(stringRotation("hello", "hello"));
console.log(stringRotation("hello", "llohe"));
console.log(stringRotation("hello", "he"));
console.log(stringRotation("hello", "ollhe"));

module.exports = { isSubstring: isSubstring, stringRotation: stringRotation };
