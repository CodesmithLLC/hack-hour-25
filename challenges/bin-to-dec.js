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
  return binary.split('').reverse().reduce((accum, element, i) => {
    if (element !== '0') {
      accum += Math.pow(2, i);
    }
    return accum 
  }, 0);
}

module.exports = binToDec;
