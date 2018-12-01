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

function permPalin(str) {
    //create a temp variable to check
    let reverseStr;
    let strCopy;
    for(let i = 0; i < str.length; i++){
        strCopy = str.slice(i, str.length);
        reverseStr = strCopy.split("").reverse().join("");
        if(strCopy === reverseStr) return true
    }
	return false;
}
console.log(permPalin('abab'));
console.log(permPalin('cbaba'));
module.exports = permPalin;