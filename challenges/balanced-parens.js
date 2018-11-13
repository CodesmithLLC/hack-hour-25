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
    //seperate stirng into individual characters and store them into an array
    const strArr = input.split('');
    //iterate through array checking if i is equal to a left angle paren
    for(let i = 0; i < strArr.length; i++){
      for(let j = 0; j < strArr.length; j++){
          if(strArr[i] === '(' ){
  
          }
      }
    }

}
console.log(3+2);
module.exports = balancedParens;
