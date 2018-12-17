/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    let result = 0;
    let output = [];
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
    for (let i = a; i > 1; i -= 1) {
        console.log(i % 2)
        for (let j = b; b > 1; j -= 1) {
            //    if(i%2===0 && j%2===0 ){

            //    }
        }
    }


};

console.log(gcd(10, 8))//2;

module.exports = gcd;