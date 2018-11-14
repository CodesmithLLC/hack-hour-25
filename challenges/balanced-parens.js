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

<<<<<<< HEAD
function balancedParens(input) {
  let newString = '';
  const characters = ['[', ']', '{', '}', '(', ')'];
  for (let i = 0; i < input.length; i += 1) {
    if (characters.includes(input.charAt(i))) {
      newString = newString + input.charAt(i);
    }
  }
  if (newString.length % 2 === 1) return false;
  const left = newString.substring(0, Math.floor(newString.length / 2));
  const right = newString.substring(Math.floor(newString.length / 2));
  let i = 0;
  let j = right.length - 1;
  const brackets = ['{}', '[]', '()'];
  while (i < left.length) {
    const output = `${left.charAt(i)}${right.charAt(j)}`;
    if (!brackets.includes(output)) return false;
    i += 1;
    j -= 1;
  }
   return true;
}



module.exports = balancedParens;
=======
function balancedParens(input){

}

module.exports = balancedParens;
>>>>>>> b4928232f9dcf5c0cf25988c9b87bb1a1fade970
