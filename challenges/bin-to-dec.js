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
  // Declare an array and assign it the split, reversed elements of the binary string
  const binaryArray = binary.split('').reverse();

  // Declare an empty array to store the decimal values
  const decimalArray = [1];

  // Declare an empty array to store the values we want to add to calculate the value
  const sumArray = [];

  // Use a for loop to dynamically build out the decimal array
  // based on the number of elements in the binary array
  for (let i = 1; i < binaryArray.length; i += 1) {
    decimalArray.push((decimalArray[i - 1]) * 2);
  }

  // Iterate through the binary array and check for any value equal to '1'
  // Use the index to unshift that index in the decimal array to the sum array
  for (let i = 0; i < binaryArray.length; i += 1) {
    if (binaryArray[i] === '1') sumArray.unshift(decimalArray[i]);
  }

  // Use reduce to calculate to value and return it
  return sumArray.reduce((acc, cur) => {return acc += cur}, 0);
}

console.log(binToDec('0')); //   -> 0
console.log(binToDec('1')); //   -> 1
console.log(binToDec('11')); //  -> 3
console.log(binToDec('100')); // -> 4
console.log(binToDec('101')); // -> 5
console.log(binToDec('0101')); // -> 5
console.log(binToDec('10100100010000')); // -> 10512


function decToBin(decimal) {
  // Declare an empty array to store the binary values
  const valuesArray = [];

  // Use a while loop to divide decimal by two and unshift the remainder to the values array
  while (decimal > 0 || decimal > 1) {
    valuesArray.unshift(decimal % 2);
    decimal = Math.floor(decimal / 2);
  }

  // Join and return the values array
  return valuesArray.join('');
}

console.log(decToBin(294)); // -> 100100110
console.log(decToBin(512)); // -> 1000000000
console.log(decToBin(689)); // -> 1010110001

module.exports = binToDec;
