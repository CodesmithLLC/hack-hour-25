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
  const letters = str.split('');
  const count = letters.reduce((accum, curr) => {
    if (!accum[curr]) {
      accum[curr] = 0;
    }
    accum[curr] += 1;
    if (accum[curr] === 2) {
      delete accum[curr];
    }
    return accum;
  }, {});
  console.log(count);
  return Object.keys(count).length <= 1;
}


module.exports = permPalin;
