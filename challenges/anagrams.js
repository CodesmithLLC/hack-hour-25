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
  const result = new Set();
  if (string === '') return [''];
  if (string.length === 1) return [string];
  const curr = string.slice(0, 1);
  const rest = string.slice(1);
  anagrams(rest).forEach((str) => {
    for (let i = 0; i <= str.length; i += 1) {
      const newStr = str.slice(0, i) + curr + str.slice(i);
      result.add(newStr);
    }
  });
  return [...result];
}

var result = anagrams('abcc');
console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]


module.exports = anagrams;
