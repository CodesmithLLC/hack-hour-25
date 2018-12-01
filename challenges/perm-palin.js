/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cccbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 */

function permPalin(str) {
  // split str into array
  const strArr = str.split('');
  if (strArr.length === 1) return true;
  // create result object to store num of occurrences of each char
  const charObj = {};
  // iterate thru strArr, storing number of occurences of each letter as key:val pairs on obj
  strArr.forEach((char, i) => {
    if (charObj[char]) charObj[char] += 1;
    if (!charObj[char]) charObj[char] = 1;
  });
  const numOfOccurences = Object.values(charObj);
  // create true/false tracker
  let isPalindrome = false;
  // if array length is even, 
  if (strArr.length % 2 === 0) {
    let oddCount = 0;
    numOfOccurences.forEach(num => {
      if (num % 2 === 0) isPalindrome = true;
      if (num % 2 !== 0 && num === 1) isPalindrome = !isPalindrome;
      // if (num % 2 !== 0 && num !== 1) isPalindrome = !isPalindrome;
    })
  }
  // if array length is odd,
  if (strArr.length % 2 === 0) {
    numOfOccurences.forEach(num => {
      if (num % 2 === 0) isPalindrome = true;
      if (num % 2 !== 0 && num === 1) isPalindrome = !isPalindrome;
    });
  }
  console.log(isPalindrome);
}

module.exports = permPalin;

permPalin('abab')
permPalin('cccbaba')
permPalin('cbac')
permPalin('a') 