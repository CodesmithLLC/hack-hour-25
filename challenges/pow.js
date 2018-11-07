/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

//input: 2 numbers- base is the base number, power is the number of times base times itself;
//output: number- result;
//strategy:
  //base case is when power equals to 1; return result;
  //recursive case: result * base; 
    //decrement power by 1 on each call
    //invoke pow again with same base, new power and result ;

function pow(base, power, result = base) {
  if (power <= 1) return result;
  else {
  result *= base;
  power -= 1;
  return pow(base, power, result);
  }
}

// console.log('math.pow ' + Math.pow(2, 2));

// console.log(pow(2, 2)); //4;
// console.log(pow(2, 3));//8

module.exports = pow;
