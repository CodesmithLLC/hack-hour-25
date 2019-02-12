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

function anagrams(str) {
  if (str.length === 1) {
    return [str];
  }
  const allAnagrams = [];
  for (let i = 0; i < str.length; i += 1) {
    const letter = str[i];
    const short = str.substr(0, i) + str.substr(i + 1, str.length - 1);
    const shortAnagrams = anagrams(short);
    for (let j = 0; j < shortAnagrams.length; j += 1) {
      allAnagrams.push(letter + shortAnagrams[j]);
    }
  }
  return [...new Set(allAnagrams)];
}

module.exports = anagrams;
