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

const left = ['[', '(', '{'];
const right = [']', ')', '}'];

function isMirror(string) {
  if (string.length < 2) return false;
  const halfway = Math.floor(string.length / 2);
  for (let i = 0; i < halfway; i += 1) {
    if (left.indexOf(string[i]) < 0) return false;
    if (left.indexOf(string[i]) !== right.indexOf(string[string.length - 1 - i])) return false;
  }
  return true;
}


function isFlip(string) {
  if (string.length < 2) return false;
  for (let i = 0; i < string.length - 1; i += 2) {
    if (left.indexOf(string[i] < 0)) return false;
    if (left.indexOf(string[i]) !== right.indexOf(string[i + 1])) return false;
  }
  return true;
}

function balancedParens(input) {
  const newInput = input.replace(/[^\[\(\{\}\)\]]/g, '');
  // console.log(newInput)
  // console.log(isMirror(newInput))
  return isFlip(newInput) || isMirror(newInput);
}

// console.log(balancedParens('{()}'))
// console.log(balancedParens('()')); 
console.log(balancedParens(')('));  // false
// console.log(balancedParens('(())'));  // true
// console.log(balancedParens('[](){}'));

console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }'))
console.log(balancedParens('()')); 
console.log(balancedParens(')('));  // false
console.log(balancedParens(' var hubble = function() { telescopes.awesome();'));  // false


module.exports = balancedParens;
