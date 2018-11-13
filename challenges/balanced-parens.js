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
  let characters = "(){}[]".split("");
  let charOnly = input.split("").filter(char => {return characters.indexOf(char) !== -1});
  // console.log(charOnly)
  // console.log(Math.floor(charOnly.length/2))
  for (let i = 0; i <= Math.floor(charOnly.length/2); i += 1) {
    if (charOnly[i] === "(") 
    // console.log(charOnly[i])
  }
  for (let i = Math.floor(charOnly.length/2); i < charOnly.length; i += 1) {
    if (charOnly[i] === ")") {}

  }



// // we are given a string of characters
// // want to check if string contains ) after (
// // what we can do is change string into an array
//   const newArr = input.split("")
//   let countA = 0;
//   let countB = 0;
//   // loop through the array
//   for (let i = 0; i < newArr.length; i += 1) {
//     // check if the string contains a (;
//     if (newArr[i] === '(') countA += 1;
//     // if it does, add a count for (
//     // then check if the string contains a )
//     if (newArr[i] === ')') countB += 1
//     // if it does, add a different count for )
//   };
// // if count for ( is equal to count for ) then chcck if index+ of ( is equal to index- of )
//   if (countA === countB) {}
}

console.log(balancedParens('('));  // false
console.log(balancedParens('()')); // true
console.log(balancedParens(')('));  // false
console.log(balancedParens('(())'));  // true
console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true
console.log(balancedParens('[(]{)}')); // false
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
console.log(balancedParens(' var hubble = function() { telescopes.awesome();'))
module.exports = balancedParens;
