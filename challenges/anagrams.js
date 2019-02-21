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
  let head = 0; //delcare a varible 
  let tail = string.length - 1;
  let arr = []
  // console.log(tail)
  //iterate through string
  while()
  for (let i = 1; i < string.length; i += 1) {
    // swap 
    let temp = string[head]


  }

}

module.exports = anagrams;

console.log(anagrams('abc'));