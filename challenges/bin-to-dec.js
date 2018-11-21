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

function binToDec(binary, unit = 1, index = binary.length - 1) {
  return index === 0 ? binary[0] * unit : binary[index] * unit + binToDec(binary, unit *= 2, index -= 1);
}
console.log(decToBin(2));

// function decToBin(num, divisor = 2, remainder = 1) {
//   if (num === 0) return '0';
//   if (num === 1) return '1';
//   if (num % divisor === remainder) return '1' + decToBin(num - divisor, divisor *= 2, remainder *= 2);
//   // start with empty string
// }

module.exports = binToDec;
