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
  // count incidence of characters, only one can be odd
  const counter = {};
  for (let i = 0; i < str.length; i++ ) {
    let char = str[i]
    if (counter.hasOwnProperty(char)) {
      counter[char] += 1;
    }else{
      counter[char] = 1;
    }
  }
  let oddsCount = 0
  for (let l in counter) {
    if (counter[l] % 2) oddsCount += 1; 
  }
  return (oddsCount < 2) 
}  

module.exports = permPalin;