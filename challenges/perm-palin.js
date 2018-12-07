/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('b') => true
 *
 */

function permPalin(str) {
    console.log(`str ${str}`)
    let letter;
    let letterCount = {};
    let countSum = 0;

    if (str.length === 1) return true;

    for (let i = 0; i < str.length; i += 1) {
        letter = str[i];
        letterCount[letter] = letterCount[letter]
        letterCount[letter]++;
        console.log(`letter ${letter}`)
        console.log(`letter ${letterCount}`)

    }
    // console.log(`letter ${letter}`)

}

console.log(permPalin('abab'))//true

module.exports = permPalin;