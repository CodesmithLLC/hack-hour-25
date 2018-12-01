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
  // split string into array of characaters
  const chars = str.split('');
  // iterate through chars to create an object with character as key, number of occurances as value
  const charCount = chars.reduce((accum, element) => {
    accum[element] = (accum[element] || 0) + 1;
    return accum;
  }, {})
  // iterate through charCount's entries to create an array of all characters with odd number of occurances
  const charCheck = Object.entries(charCount).filter((element) => {
    return element[1] % 2 !== 0
  })
  // if array has more than one item (input string has more than one odd character occurance), return false
  return charCheck.length <= 1;
}

module.exports = permPalin;
