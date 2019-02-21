/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    // let result = 0;
    // let output = [];
    /**
     * delcare array 
     * iterate over 10 % 2
     * iterate over 8 %2
     * check if 10[i] or 8[i] equal 
     * if true: return that element 
     * else:push each match to a array 
     * iterate over array 
     * mutiply each elelment in the array 
     * return that output
     */
   // edge cases
  if (isNaN(a) || isNaN(b)) return;
  // find min and max
  let min = Math.min(a, b);
  let max = min === a ? b : a;
  // checking if the min is the gcd
  if (max % min === 0) return min;
  // loop based on half of min, decrement
  for (let i = Math.ceil(min / 2); i > 1; i--) {
    // check if i can be divided into both a and b
    if (a % i === 0 && b % i === 0) return i;
  }
  return 1;


};

// euclidian algorithm
function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  }
  

console.log(gcd(10, 8))//2;

module.exports = gcd;