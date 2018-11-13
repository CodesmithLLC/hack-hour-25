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
  // create object to store key:value pairs w/ number of occurences of each char
  const trackerObj = {};
  // create array of each el of input
  const arr = input.split('');
  // check if following char is equal to opposite char and count is not greater than
  // current count. if so, return false
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === '(' && !trackerObj[arr[i]]) {
      trackerObj[arr[i]] = 1;
    } else if (arr[i] === '(' && trackerObj[arr[i]]) {
      trackerObj[arr[i]] += 1;
    }
    if (arr[i] === ')' && !trackerObj[arr[i]]) {
      trackerObj[arr[i]] = 1;
    } else if (arr[i] === ')' && trackerObj[arr[i]]) {
      trackerObj[arr[i]] += 1;
    }
    if (arr[i] === '[' && !trackerObj[arr[i]]) {
      trackerObj[arr[i]] = 1;
    } else if (arr[i] === '[' && trackerObj[arr[i]]) {
      trackerObj[arr[i]] += 1;
    }
    if (arr[i] === ']' && !trackerObj[arr[i]]) {
      trackerObj[arr[i]] = 1;
    } else if (arr[i] === ']' && trackerObj[arr[i]]) {
      trackerObj[arr[i]] += 1;
    }
    if (arr[i] === '[' && !trackerObj[arr[i]]) {
      trackerObj[arr[i]] = 1;
    } else if (arr[i] === '[' && trackerObj[arr[i]]) {
      trackerObj[arr[i]] += 1;
    }
    if (arr[i] === '{' && !trackerObj[arr[i]]) {
      trackerObj[arr[i]] = 1;
    } else if (arr[i] === '{' && trackerObj[arr[i]]) {
      trackerObj[arr[i]] += 1;
    }
    if (arr[i] === '}' && !trackerObj[arr[i]]) {
      trackerObj[arr[i]] = 1;
    } else if (arr[i] === '}' && trackerObj[arr[i]]) {
      trackerObj[arr[i]] += 1;

    }
    // console.log(trackerObj)
    // check if count is equal for each char to opposite char. if passes for all,
    // return true
    if (trackerObj[')'] > trackerObj['(']) return false;
    if (trackerObj[']'] > trackerObj['[']) return false;
    if (trackerObj['}'] > trackerObj['{']) return false;

    if (trackerObj[')'] > trackerObj['(']) return false;
    if (trackerObj[']'] > trackerObj['[']) return false;
    if (trackerObj['}'] > trackerObj['{']) return false;
  }

  if (trackerObj['['] === trackerObj['[']) return true;
  if (trackerObj['{'] === trackerObj['{']) return true;
}

console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true
console.log(balancedParens('[(]{)}')); // false

  // module.exports = balancedParens;
