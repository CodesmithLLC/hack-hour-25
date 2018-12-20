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
  str = str.replace(/\s+/g, "")
  console.log(str)
  let cache = {}
  for (let character of str) {
  	cache[character] = (cache.hasOwnProperty(character))? cache[character] - 1 : 1
  }
  let arr = Object.values(cache).reduce((accum, el) => accum += el)
  console.log(arr)
  return arr > 1 ? false: true
}

module.exports = permPalin;