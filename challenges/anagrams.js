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

function anagrams(string, pointer = 0, rotations = 0, results = []) {
  // Edge Case: string provided is empty, null or undefined
  if (string === '' || string === null || string === undefined) return results;

  // Base Case: Exit when each character of string array has been processed
  if (pointer === string.length) return results;

  if (rotations === string.length) return results;

  // Create anagram for each character in string array via string rotation
  results.concat(anagrams(
    string.substr(0, 1) + rotate(string.substr(1, string.length - 1)),
    pointer,
    rotations += 1,
    results,
  ));
 
  results.concat(anagrams(
    rotate(string),
    pointer += 1,
    rotations,
    results,
  ));

  // add string to result
  results.push(string);

  // console.log(`pointer: ${pointer}, rotation: ${rotations}, results: ${results}, length: ${results.length}`);

  return Array.from((new Set(results)).values());
}

const rotate = (string) => {
  const stringArray = string.split('');
  const firstElement = stringArray.shift();
  stringArray.push(firstElement);
  return stringArray.join('');
};

module.exports = anagrams;
