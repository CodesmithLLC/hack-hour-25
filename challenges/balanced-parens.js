/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){

	// all possible pairs
	const pairs = {']': '[', '}': '{', ')': '(', '(': ')', '{': '}', '[': ']'};

	// filter input so that only parens remain
	let inputStr = input.split('').filter((char) => {
		if (pairs[char]) return char; 
	})

	// set input to new filtered string 
	input = inputStr.join('');

	// if input is length 2 and they are a pair return true 
	if (input.length === 2 && (pairs[input[0]] === input[1])) return true;

	// if input is empty string return true 
	if (input.length === 0) { return true; }

	// if input is odd return false 
	else if (input.length % 2 !== 0) { return false; }

	// otherwise recursively call balancedParens based on conditions 
	else {

		// if the first char and last char are a pair 
		if (pairs[input[0]] === input[input.length - 1]) {
			return balancedParens(input.slice(1, input.length - 1))
		}

		// if first char and second char is a pair and last char and second to last char is a pair 
		else if (pairs[input[0]] === input[1] && pairs[input[input.length - 1]] === input[input.length - 2]) {
			return balancedParens(input.slice(2, input.length - 2));
		}
	}

	// return false by default
	return false;
}

module.exports = balancedParens;