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
  const lettersObj = {};
  const strArr = str.split('');
  strArr.forEach((char) => {
    if (!lettersObj[char]) lettersObj[char] = 1;
    else lettersObj[char] += 1;
  });
  const occurrences = Object.values(lettersObj);
  const filtered = [];
  for (let i = 0; i < occurrences.length; i++) {
    filtered.push
  }
  occurrences.forEach((occurrence) => {
    if (strArr.length % 2 === 0 && occurrence % 2 === 1) return false;
    // else if (occurrence )
  })
  

  }
console.log(permPalin('abab'));
module.exports = permPalin;