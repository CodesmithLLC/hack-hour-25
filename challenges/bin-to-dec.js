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
  const binArr = binary.split("");
  const deciArr = [];

  for (let i = 0; i < binArr.length; i += 1) {
    deciArr.push(binArr[i] * 2 ** (binArr.length - 1 - i));
  }

  return deciArr.reduce((a, b) => a + b);
}
console.log(binToDec("0"))
console.log(binToDec("11"))
console.log(binToDec("100"))
console.log(binToDec("101"))
console.log(binToDec("0101"))
console.log(binToDec("10110"));

module.exports = binToDec;
