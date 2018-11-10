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
  // create a variable to hold a new array
  const secondStringChecker = [];
  // split both strings into arrays
  const firstString = s1.split('');
  const secondString = s2.split('');
  // find the index of the first character
  let charIndex = secondString.indexOf(firstString[0]);
  // do a while loop to go through the secondString and push into the secondStringChecker
  // while secondStringChecker's length is less than firstString, keep doing the loop
  while (secondStringChecker.length !== firstString.length) {
    // check to see if the charIndex is at the end of the second string
    if (charIndex >= secondString.length) {
      // set charIndex to 0
      charIndex = 0;
    }
    // add the character in secondString into the checker
    secondStringChecker.push(secondString[charIndex]);
    // increase charIndex
    charIndex += 1;
  }
  // turn secondStringChecker into a string again
  const s3 = secondStringChecker.join('');
  // console.log(s3);
  // after the loop has added in all the characters from secondString into checker, use the isSubString method to see if they are the same, which would return 0
  return isSubstring(s1, s3);
}

// console.log(stringRotation("hello", "hello")); // -> true
// console.log(stringRotation("hello", "llohe")); // -> true
// console.log(stringRotation("hello", "he")); // -> false
// console.log(stringRotation("hello", "ollhe")); // -> false (not a rotation, just an anagram)

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
