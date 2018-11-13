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
  // first change the input to be an array
  const inputArray = input.split('');
  // have two variables to hold the left and right side of brackets
  const leftSide = [];
  const rightSide = [];
  // iterate over the array from the left
  for (let i = 0; i < inputArray.length; i += 1) {
    // check to see if the array at index is any of the opening braces
    if (inputArray[i] === '(' || inputArray[i] === '{' || inputArray[i] === '[') {
      // if it is, then push it into the left array
      leftSide.push(inputArray[i]);
    }
  }
  // iterate over the array from the right
  for (let i = inputArray.length - 1; i > 0; i -= 1) {
    // same for the right
    if (inputArray[i] === ')' || inputArray[i] === '}' || inputArray[i] === ']') {
      // if it is, then push it into the right array
      rightSide.push(inputArray[i]);
    }
  }
  // next, check to see if left and right side are the same length
  if (leftSide.length !== rightSide.length) {
    // if not, return false
    return false;
  }
  // otherwise, continue
  // then we are going to check both the left and the right to see if they are same
  for (let i = 0; i < leftSide.length; i += 1) {
    // have an if check for the type of parens for left
    if (leftSide[i] === '(') {
      // check to see if the right array has the right side version
      if (rightSide[i] === ')') {
        // if so, continue the loop on the next iteration
        continue;
      } else {
        // else return false
        return false;
      }
    }
    // now for curly braces
    if (leftSide[i] === '{') {
      // check to see if the right array has the right side version
      if (rightSide[i] === '}') {
        // if so, continue the loop on the next iteration
        continue;
      } else {
        // else return false
        return false;
      }
    }
    // then for brackets
    if (leftSide[i] === '[') {
      // check to see if the right array has the right side version
      if (rightSide[i] === ']') {
        // if so, continue the loop on the next iteration
        continue;
      } else {
        // else return false
        return false;
      }
    }
  }
  // after all the checks are ran and nothing came false, return true;
  return true;
}

console.log(balancedParens('('));  // false
console.log(balancedParens('()')); // true
console.log(balancedParens(')('));  // false
console.log(balancedParens('(())'));  // true

console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true
console.log(balancedParens('[(]{)}')); // false

module.exports = balancedParens;
