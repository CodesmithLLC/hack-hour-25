/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
  if (binary === '0') return 0;
  // split binary to an array
  const binArr = binary.split('');
  // create sum variable
  let sum = 0;
  // iterate thru array from end to start
  for (let i = binArr.length - 1, x = 0; i >= 0; i -= 1, x += 1) {
    // on each iteration, add current el * 2 to the index power, to the sum
    sum += (Number(binArr[i]) * (2 ** x));
  }
  // return updated sum value
  return sum;
}

// console.log(binToDec('0')) // -> 0
// console.log(binToDec('11')) // -> 3
// console.log(binToDec('100')) // -> 4
// console.log(binToDec('101')) // -> 5
// console.log(binToDec('0101')) // -> 5

function decToBin(decimal) {
  if (decimal === 0) return 0;
  // create variable copy of decimal
  let result = [];
  let dec = decimal;
  // while dec is greater than 0, check if dec divided by two yields remainder of 1,
  // if so, unshift a 1 onto start of result array, otherwise, unshift a 0 onto start
  while (dec > 0) {
    if (dec % 2 === 1) result.unshift('1');
    if (dec % 2 === 0) result.unshift('0');
    dec = Math.floor(dec / 2);
  }
  return result.join('');
}

// console.log(decToBin(0)) // -> '0'
// console.log(decToBin(3)) // -> '11'
// console.log(decToBin(4)) // -> '100'
// console.log(decToBin(5)) // -> '101'
// console.log(decToBin(5)) // -> '0101'

module.exports = binToDec;
