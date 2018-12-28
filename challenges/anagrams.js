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
  const anagramsArr = {};
  if (string.length === 1) return [string]
  for (let i = 0; i < string.length; i++){
    let char = string[0];
    let subs = anagrams(string.substring(1))
    for (let j = 0; j < subs.length; j ++) {
      anagramsArr[char.concat(subs[j])]=1
    }
    string = string.substring(1).concat(string[0])
  }
  return (Object.keys(anagramsArr))    
}

module.exports = anagrams;
