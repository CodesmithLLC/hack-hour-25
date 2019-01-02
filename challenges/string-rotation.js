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
  return s2.indexOf(s1) >= 0;
}

function stringRotation(s1, s2) {
  const combined = s2.repeat(2)
  return isSubstring(s1, combined);
}

console.log(stringRotation('hello', 'elloh'));

// function stringRotation(s1, s2) {
//   // reject strings of unequal length
//   if (s1.length !== s2.length) return false;
//   // stores string transformation
//   let combined = ''; 
//   // transfroms s2, targeting first character of s1 and re-arranging letters of s2 sequentially for direct comparison to s1
//   for (let i = 0; i < s2.length; i++) {
//     if (s2[i] === s1[0]) {
//       combined += s2.slice(i);
//       combined += s2.slice(0, i);
//     }
//   }
//   // checks if s1 and transformed s2 are equal
//   return isSubstring(s1, combined);
// }

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
