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
    // console.log(input.split(""))

    //decare a varible to assign a false booleen
    // split input to a array so there are single characters
    // iterate over string 
    // check if the each paren symbol is eqyual to the left side 
    // if true :update left to true 
    // break;
    // check if each paren symbol is equal to the right side 
    // if true : update  right to true  
    // return right

    let isTrue = false;

    let splitParen = input.split("");
    // console.log(splitParen)
    for (let i = 0; i <= splitParen.length; i += 1) {
        if (splitParen[i] === "]" || splitParen[i] === "}" || splitParen[i] === ")") {
            return isTrue;
        } else {
            callThis();
        }

    }

    function callThis(val) {
        for (let i = 0; i <= splitParen.length; i += 1) {
            if (splitParen[i] === "[" || splitParen[i] === "{" || splitParen[i] === "(") {
                if (splitParen[i] === "]" || splitParen[i] === "}" || splitParen[i] === ")") {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }

    // if (splitParen[i] === "]" || splitParen[i] === "}" || splitParen[i] === ")") {
    //     return right;
    // } 
}



module.exports = balancedParens;

// console.log(balancedParens('[](){}')); // true

console.log(balancedParens('('));  // false
console.log(balancedParens('()')); // true
console.log(balancedParens(')('));  // false
console.log(balancedParens('(())'));  // true
// console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
// console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false