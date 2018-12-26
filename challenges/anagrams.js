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
  // have an array to keep track of all possible outcomes
  const results = [];
  // split the string and store in variable
  const original = string.split('');
  // checks for 1 or 2 length string
  if (original.length === 1) return original;
  if (original.length === 2) return original.concat(original.reverse());
  // have a function that produces all perm of the string
  function anaPerm(arr) {
    // base cases
    if (arr.length === 1) return arr;
    if (arr.length === 2) return arr.concat(arr.reverse());
    // recusive logic
    arr.forEach((el, index, array) => {
      const newArr = [...array];
      newArr.splice(index, 1);
      anaPerm(newArr).forEach((elem) => {
        // console.log(elem);
        results.push(el + elem);
      });
    });
  }
  anaPerm(original);
  return results;
}

console.log(anagrams('abc'));

module.exports = anagrams;
