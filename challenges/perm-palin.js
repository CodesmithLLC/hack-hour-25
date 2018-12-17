/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
  // Split str into an array
  const strArray = str.split('');
  // Declare a count obj
  const countObj = {};
  // Iterare through str array
  for (let i = 0; i < strArray.length; i += 1) {
    // Check if element doesn't exist in count obj
    if (!countObj[strArray[i]]) {
      // If element doesn't exist, add to count obj
      countObj[strArray[i]] = 1;
    } else {
      // If element does exist, delete from count obj
      delete countObj[strArray[i]];
    }
  }
  // If length of count obj is greater than one, return false
  // Otherwise, return true
  return !((Object.keys(countObj).length > 1));
}

console.log(permPalin('abab')); // => true
console.log(permPalin('cbaba')); // => true
console.log(permPalin('cbac')); // => false
console.log(permPalin('a')); // => true

module.exports = permPalin;
