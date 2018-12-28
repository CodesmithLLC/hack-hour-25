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
  // split string to array
  const strArr = string.split('');
  // create empty array to store results in
  const newArr = [];
  // iterate thru new stringArray to create anagrams starting with each element
  for (let i = 0; i < strArr.length; i += 1) {
    // iterate from start of stringArray. if el is equal to current anagram el, skip it
    const tempArr = [];
    for (let x = 0; x < strArr.length; x += 1) {
      // otherwise, push onto temp array
      if (x !== i)
      // if last el is reached, join temp array and push onto empty array
    }
  }
  return newArr;
}

module.exports = anagrams;
