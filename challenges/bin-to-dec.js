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
  const decimalArr = [256, 128, 64, 32, 16, 8, 4, 2, 1];
  const reversedDecimalArr = decimalArr.reverse();
  const tempArr = [];
  const reversedBinaryArr = binary.split('').reverse();
  for (let i = 0; i < reversedBinaryArr.length; i +=1 ){
    if (reversedBinaryArr[i] === '1') tempArr.push(reversedDecimalArr[i]);
  }
  return tempArr.reduce((acc, el) => acc += el)
}


// console.log(binToDec('100')) //5;

module.exports = binToDec;
