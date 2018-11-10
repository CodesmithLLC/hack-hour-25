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
  let tmp;
  let tmpS2;
  // Edge Case: if strings are not equal in length return false
  if (s1.length !== s2.length) return false;
  // assign parameter to work area
  tmpS2 = s2;
  // iterate thru s2 for as many characters there are.
  for (let i = 0; i < s2.length; i += 1) {
    // On each iteration check isSubstring and if true then return true
    if (isSubstring(s1, tmpS2)) return true;
    // Else rotate tmpS2 by calling .shift then .push on tmpS2 as an array
    tmpS2 = tmpS2.split('');
    tmp = tmpS2.shift();
    tmpS2.push(tmp);
    tmpS2 = tmpS2.join('');
  }
  // return false
  return false;
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
