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
  const targets = ['(', '[', '{', ')', ']', '}'];
  
  const cleaned = []; 

  for (let i = 0; i < input.length; i++) {
    if (targets.includes(input[i])) {
      cleaned.push(input[i]);
    }
  }
  if (cleaned[0] === cleaned[cleaned.length - 1]) {
    if (!cleaned) return true;
    if (cleaned[0] !== cleaned[cleaned.length - 1]) return false;
    return 
  }
}

console.log(balancedParens(')(}{]['));

module.exports = balancedParens;
