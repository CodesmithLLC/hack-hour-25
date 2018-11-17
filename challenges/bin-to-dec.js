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
  console.log(unit)
  if (index === 0) return binary[0] * unit;
  return binary[index] * unit + binToDec(binary, unit *= 2, index -= 1);
}
console.log('binToDec: ', binToDec('0101'));

module.exports = binToDec;
