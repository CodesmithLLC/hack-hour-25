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

//I JUST REALIZED THAT IT WAS NOT WHAT THE CHALLENGE WAS ASKING FOR!!! SORRY!!!!!
function balancedParens(input){
  const inputArrTemp = input.split('');
  const inputArr = inputArrTemp.filter(el => {
    return (el === '(' || el === ')' || el === '[' || el === ']' || el === '{' || el === '}')
  })

  const parensObj = inputArr.reduce((acc, el) => {
    if (!acc[el]){
      acc[el] = 1;
    } else {
      acc[el] += 1;
    }
    return acc;
  }, {})
  
  for (let key in parensObj){
    if (parensObj['('] !== parensObj[')']) return false;
    if (parensObj['['] !== parensObj[']']) return false;
    if (parensObj['{'] !== parensObj['}']) return false;
  }
  return true;
}

//console.log(balancedParens('(hello'))
//console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }'))
//console.log(balancedParens(' var hubble = function() { telescopes.awesome();'))
//console.log(balancedParens('[(]{)}'))

module.exports = balancedParens;
