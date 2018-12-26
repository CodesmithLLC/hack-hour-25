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

function anagrams(string, result = []) {
  if (string.length === 0) return [];
  if (string.length === 1) return [string];
  if (string.length === 2) return [string[0] + string[1], string[1] + string[0]];
  
  const checker = {};

  for (let i = 0; i < string.length; i += 1) {
    let copyStr = '';
    if (i < string.length - 1) copyStr = string.substring(0, i) + string.substring(i + 1);
    else copyStr = string.substring(0, i);

    // recursively call anagrams of the string without the current letter in string
    const eachAnagram = anagrams(copyStr);

    // attach the current letter in string to each result
    const eachResult = eachAnagram.map(res => string[i] + res);

    // check if entry already exists
    eachResult.map(el => {
      if (!checker[el]) result.push(el);
      else checker[el] = el;
      return;
    })
  }
  return result;
}

module.exports = anagrams;