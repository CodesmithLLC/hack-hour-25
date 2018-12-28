/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

function anagrams(string) {
  const combos = [];
  let anagram = '';
  for (let i = 0; i < string.length; i += 1) {
    anagram += string.charAt(i);
    for (let j = i + 1; j < string.length; j += 1) {
      
    }
  }
  // const options = [];
  // for (let i = 0; i < string.length; i += 1) {
  //   options.push([string[i]]);
  // }
  
  // const stringArr = string.split('');
  // const combos = [];
  // let anagram = '';
  // while (stringArr.length > 0) {
  //   const number = Math.floor(Math.random() * stringArr.length);
  //   anagram 
  // }
}
console.log(anagrams('abc'))

module.exports = anagrams;
