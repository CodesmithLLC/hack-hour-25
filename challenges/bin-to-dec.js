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
  // turn binary argument into a string then split it
  let binaryStr = binary.toString().split('');
  // have a return array that takes each number and applies the index x 2^length - 1
  const returnBinary = binaryStr.map((el, index, array) => {
    // change string to number
    let elToNum = Number(el);
    // return the number multiplied to 2 to the length power
    return elToNum * Math.pow(2, array.length - 1 - index);
  });
  // return the sum of the array
  return returnBinary.reduce((acc, el) => acc + el);
}

function decToBin(num) {
  // first split up the number by digits in an array
  const numArr = [];
  let place = 10;
  while (num > 0) {
    numArr.push(num % place);
    num = Math.floor(num / place);
    place *= 10;
  }
  // after getting the numArr done, change each element in the numArr to the binary with

}

console.log(binToDec('0')); // 0
console.log(binToDec('11')); // 3
console.log(binToDec('100')); // 4
console.log(binToDec('101')); // 5
console.log(binToDec('0101')); // 5

module.exports = binToDec;
