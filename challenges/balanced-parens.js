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

function balancedParens(input) {
  let resultsBool = false; // declare boolean results variable intialize to false
  // tracker for number of open parens
  let numOpenParens = 0; 
  let inputAsArray = input.split('');
  // Iterate thru input string
  //console.log(`before start resultsBool-numOpenParens-inputAsArray: ${resultsBool}-${numOpenParens}-["${inputAsArray}"]`);
  resultsBool = inputAsArray.reduce((accum, val, indx, arr) =>{
    // Edge Case: if first parens is a closing parens exit with false;
    //console.log(`Inside reduce accum-numOpenParens-val: ${accum}-${numOpenParens}-["${val}"]`);
    if (val === ')' && numOpenParens === 0) {
      accum = false;
      return accum;   
    }
    if (val === ')' && numOpenParens > 0) {
      numOpenParens -= 1;  // Decrease Open parens count
    }
    if (val === '(' ) {
      numOpenParens += 1;  // Increase Open parens count
    }
    // Edge Case: Open parens and end of string
    if ((arr.length - 1) === indx && numOpenParens > 0) {
      accum = false;
      return accum;
    }
    return  accum;
  }, true);
  // return boolean results variable
  return resultsBool;
}

module.exports = balancedParens;
