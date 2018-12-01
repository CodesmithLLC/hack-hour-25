/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

// is palindrome if there's two of every char (except one)

 function permPalin(str) {
  //  create empty arr
  let stringsArr = [];
  for (let i = 0; i < str.length; i += 1) {
    // iterate through str, see if the letter is included in arr. 
    const indexOf = stringsArr.indexOf(str[i]);
    if (indexOf > 0) {
      // If so remove the letter from arr.  
      stringsArr.splice(indexOf, 1);
    } else {
      // If not add the letter to arr.
      stringsArr.push(str[i]);
    }
    console.log('stringsArr: ', stringsArr);
  }
  // see if arr length < 2.
  console.log('stringsArr.length: ', stringsArr.length);
  console.log('stringsArr: ', stringsArr);
  return stringsArr.length < 2;
}
console.log(permPalin('cbaba'));

module.exports = permPalin;