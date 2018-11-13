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
  let pars = [];
  let bracks = [];
  let curls = [];
  if (input.charAt(0) === ')' || input.charAt(0) === ']' || input.charAt(0) === '}') return false;
  for (let i = 0; i < input.length; i += 1) {
    if (input.charAt(i) === '(') pars.push(i);
    else if (input.charAt(i) === '[') bracks.push(i);
    else if (input.charAt(i) === '{') curls.push(i);
    else if (input.charAt(i) === ')') {
      let index = pars.pop();
      if (Math.max(...bracks) > index || Math.max(...curls) > index) return false;
    }
    else if (input.charAt(i) === ']') {
      let index = bracks.pop();
      if (Math.max(...pars) > index || Math.max(...curls) > index) return false;
    }
    else if (input.charAt(i) === '}') {
      let index = curls.pop();
      if (Math.max(...pars) > index || Math.max(...bracks) > index) return false;
    }
  }
  if (pars.length > 0 || bracks.length > 0 || curls.length > 0) return false;
  return true;
  
}

module.exports = balancedParens;
