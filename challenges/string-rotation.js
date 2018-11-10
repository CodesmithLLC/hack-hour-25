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
  // s1 and s2 are not same length then return false
  if (s1.length !== s2.length) return false;
  // the index where the string rotates
  let rotationIndex = 0;
  let subStr = "";
  // iterate through the second string
  for (let i = 0; i < s2.length; i += 1) {
    // if subStr is substring of s1 then append the next char of s2 to subStr
    if (isSubstring(s1, subStr)) subStr += s2[i];
    else {
      // otherwise, set rotationIndex to current index and break out of loop
      rotationIndex = i
      break;
    }
  }
  // get the other rotated half of s1 
  subStr = s2.split("").slice(rotationIndex - 1).join("");
  // return boolean whether or not subStr is a substring of s1
  return isSubstring(s1, subStr);
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};