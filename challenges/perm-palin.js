/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true  aba 
 * 	- permPalin('cbaba') => true  bab
 * 	- permPalin('cbac') => false 
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
  let finalStr = '';
  const stack =[];
  for (let i = 0; i < str.length; i += 1) {
    let restStr = str.slice(i + 1);
    if (restStr.includes(str[i])) {
      stack.push(str[i]);
      if (stack.join('') === stack.reverse().join('') && stack.length >= 2) {
        return true;
      }
    }
    // if (!restStr.includes(str[i])) {
    //   finalStr += restStr;
    //   // if (stack.includes(str[i])) stack.push(str[i]);
    // } else {
    //     stack.push(str[i]);
    //     if (stack.join('') === stack.reverse().join('') && stack.length >= 2) {
    //       console.log(stack);
    //       return true
    //     }
    //   }
    }
    // console.log(stack);
    // // console.log('finalStr ' + finalStr)
    // console.log('restStr ' + restStr)
    

    // if (str === restStr.split('').reverse().join('')) return true;
  return false;
}

console.log(permPalin('acac')) 
module.exports = permPalin;