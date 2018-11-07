/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, total = 1) {
  if (power === 0) return total;
  total *= base;
  return pow(base, power - 1, total);
}

console.log('My function: ', pow(2, 3)); // return 8
console.log('Math function: ', 2 ** 3); // return 8

console.log('My function: ', pow(3, 2)); // return 9
console.log('Math function: ', 3 ** 2); // return 9

console.log('My function: ', pow(4, 4)); // return 256
console.log('Math function: ', 4 ** 4); // return 256

module.exports = pow;
