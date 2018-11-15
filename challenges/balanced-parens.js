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

function balancedParens (input) {
  if (typeof input !== 'string') return 'input is not a string';
  if (input.length % 2 !== 0) return false;
  const stack = [];
  const items = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
  }

  for (let i = 0; i < input.length; i++) {
    if (items.hasOwnProperty(input[i])) {
      stack.push(input[i]);
      
    }
    if ( (stack[stack.length - 1] === '(' && input[i] === ')') || (stack[stack.length - 1] === '[' && input[i] === ']') || (stack[stack.length - 1] === '{' && input[i] === '}') ) {
    
      stack.pop();
    }
  }
  return stack.length > 0 ? false : true;
}

module.exports = balancedParens;
