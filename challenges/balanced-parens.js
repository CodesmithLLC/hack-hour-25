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
	let obj2compare = {'(': ')',
	'{':'}', 
	'[':']'
	}

	let input2array = input.split('');
	for (key in obj2compare){
		if (input2array.indexOf(key) !== -1){
			let index = input2array.indexOf(key);
			if (obj2compare[key] === input2array[index+1]) return true;

		}
		
	}
	
	return false;
		
	}
	


//let obj2compare = {'(': ')', '{':'}', '[':']'}

// console.log (obj2compare['('])

// console.log(Object.keys(obj2compare).indexOf('c'));

//console.log('abcde'.split(''))

//console.log(balancedParens('abcde'))
// console.log(balancedParens('[](){}')); // true
// console.log(balancedParens('[({})]'));   // true
// console.log(balancedParens('[(]{)}')); // false


 console.log(balancedParens('('));  // false
 console.log(balancedParens('()')); // true
 console.log(balancedParens(')('));  // false
 console.log(balancedParens('(())'));  // true
  
module.exports = balancedParens;
