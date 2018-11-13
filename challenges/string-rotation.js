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
  //edge case: check if both strings are of type string
  if (typeof s1 !== "string" || typeof s2 !== "string") return undefined
  //if the s2 is less than s1, s2 can't be a rotation of s1
  if (s2.length < s1.length) return false
  let i = 1
  // set up a pointer to slice the s2 string at index 1 to length - 1;
  // store slice string in substring1 and substring2
  //set up a loop where we increment the pointer,
  while (i < s1.length) {
    let substring1 = s2.slice(0,i);
    let substring2 = s2.slice(i,s2.length);
    //return true if both substring are substring of s1 as well
    if (isSubstring(s1,substring1) && isSubstring(s1,substring2)) return true
    i += 1;
  }
  //return false if no rotation was found
  return false
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
