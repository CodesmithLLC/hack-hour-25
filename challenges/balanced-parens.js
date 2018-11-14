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
function isOpenParens(char) {
  const str = '([{';
  if (str.indexOf(char) !== -1) {
    return true;
  }
  return false;
}

function isClosedParens(char) {
  const str = ')]}';
  if (str.indexOf(char) !== -1) {
    return true;
  }
  return false;
}

function balancedParens(input) {
  // If string is only one character in length, return false
  if (input.length === 1) return false;

  // Use a stack to track parens opening parens
  const stack = [];

  // Split string into an array
  const stringArray = input.split('');

  // Iterate through string array
  for (let i = 0; i < stringArray.length; i += 1) {

    // Check if character is an opeining paren
    if (isOpenParens(stringArray[i]) === true) {
      stack.push(stringArray[i]);
    }

    // Check if character is a closing paren
    if (isClosedParens(stringArray[i]) === false) {
      if (stack[stack.length - 1] !== stringArray[i]) {
        return false;
      }
      if (stack[stack.length - 1] === stringArray[i]) {
        stack.pop();
      } 
    }
    console.log(stack);
  }
  if (stack.length === 0) return true;
  return false;
}

// console.log(balancedParens('(')); // returns false
// console.log(balancedParens('()')); // returns true
console.log(balancedParens(')(')); // returns false
// console.log(balancedParens('[({})]')); // returns true
// console.log(balancedParens('[(]{)}')); // returns false

module.exports = balancedParens;
