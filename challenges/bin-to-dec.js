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

function binToDec(binary, index = binary.length - 1, exponent = 0, result = 0) {

  // Base Case return when index less than zero
  if (index < 0) return result;
  // Calculate traversing binary string from right to left increasing exponent by 1
  // Binary is base 2, decimal is base 10
  if (binary[index] === '1') {
    result += (2 ** exponent);
  }
  return binToDec(binary, index - 1, exponent + 1, result);
}

function decToBin(decimal, remainder = decimal, exponent, result = 0) {
  // console.log(exponent);
  // console.log(result);
  exponent = Math.floor(Math.sqrt(remainder));
  // Base Case return when remainder equals zero
  if (remainder === 0) return result;
  // Calculate by determining highest value also the remainder
  if ((2 ** exponent) >= remainder) {
    remainder = (2 ** exponent) - remainder; 
    result += Number('1' + '0'.repeat(exponent - 1));
  }
  console.log(remainder);
  return decToBin(decimal, remainder, exponent - 1, result);
}

module.exports = {binToDec:binToDec, decToBin:decToBin};
