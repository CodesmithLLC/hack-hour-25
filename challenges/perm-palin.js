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
	let hashTable = {};
	let count = 0;
	for (let i = 0; i < str.length; i++){
		hashTable[str[i]] = hashTable[str[i]]+1 || 1;
	}

	for (let key in hashTable){
		
		if (hashTable[key] %2 !==0) {
			count++;
			
		}
	}

		if (count >1) return false;

	return true;
}

 console.log(permPalin('abab'));// => true
 console.log(permPalin('cbaba'));// => true
 console.log(permPalin('a'));
 console.log(permPalin('cbac'));// => false
 // permPalin('a');// => true


module.exports = permPalin;