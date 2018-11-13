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
	//edge case: return undefined if not string
	if (typeof input !== "string") return undefined;

	//for step3, ignore non bracket characters
	input = input.replace(/[^(){}\[\]]/g,"");
	// brackets will always be unbalanced if it's not divisible by 2
  	if ((input.length % 2) !== 0) return false;
  	//create a stack to keep track of brackets as we traverse through the string
	let stack = [];
	//put the other side of brackets in the stack depending on the type of brackets
	for (let index in input) {
		if (input[index] === "(" || input[index] === "[" || input[index] === "{" ) {
      if (input[index] === "(") stack.push(")");
      if (input[index] === "[") stack.push("]");
      if (input[index] === "{") stack.push("}");

     //remove the bracket from stack if we found a matching bracket
		} else if (stack[stack.length - 1] === input[index]) {
			stack.pop();
		}
	}


	return (stack.length === 0)? true : false;
}

module.exports = balancedParens;
