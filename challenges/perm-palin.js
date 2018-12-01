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
    let newArr = [];
    let strArr = str.split('').sort();
    for (let i = 0; i < strArr.length; i += 1) {
        if (newArr.indexOf(strArr[i]) === -1) { 
            newArr.push(strArr[i]);

        } else {newArr.pop()};
    }
    return (newArr.length <= 1)
}

module.exports = permPalin;