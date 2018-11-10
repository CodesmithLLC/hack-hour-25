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
  // If string lengths don't match, return false
  if (s1.length !== s2.length) return false;

  // Split strings into arrays
  const array1 = s1.split('');
  const array2 = s2.split('');

  // Grab index of last array element
  const last = array2.length - 1;

  let len = array1.length;

  // Iternate through arrays until first characters match
  // or the loop have run array length number of times
  for (let i = 0; i < array1.length; i++) {
    if (array1[0] !== array2[0]) {
      const temp = array2[last];
      array2.pop();
      array2.unshift(temp);
      len -= 1;
    }
  }
  return isSubstring(array1.join(''), array2.join(''));
}

console.log(stringRotation('hello', 'hello')); // returns true
console.log(stringRotation('hello', 'llohe')); // returns true
console.log(stringRotation('hello', 'ollhe')); // returns false
console.log(stringRotation('hello', 'he')); // returns false
console.log(stringRotation('hello', 'apple')); // returns false

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
