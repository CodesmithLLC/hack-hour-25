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
	if (Str.length === 0) return false;
	if (str.length === 1) return true;
	if (str.length === 2 && str[0] === str[1]) return true;

	for (let i = 1; i < str.length - 1; i += 1) {
		if (str[i - 1] === str[i + 1]) return true;
		if (str[i] === str[i + 1]) return true;
	}
	
	return false;
}

module.exports = permPalin;