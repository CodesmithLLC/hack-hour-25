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
  const tracker = {'(': 0,')': 0,'{': 0,'}': 0,'[': 0,']': 0};
  for(let i = 0; i<input.length; i+=1){
    if(Object.keys(tracker).includes(input.charAt(i))){
      tracker[input.charAt(i)] = tracker[input.charAt(i)] + 1
    }
  }
  console.log('(' + tracker['('])
  console.log(')' + tracker[')'])
  console.log('{' + tracker['{'])
  console.log('}' + tracker['}'])
  console.log('[' + tracker['['])
  console.log(']' + tracker[']'])
  return (tracker['('] === tracker[')'] && tracker['{'] === tracker['}'] && tracker['['] === tracker[']'])
}

module.exports = balancedParens;
