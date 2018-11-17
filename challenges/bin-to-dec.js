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
    return parseInt(binary, 2)
}

//  console.log(binToDec('0'))//   -> 0
//  console.log(binToDec('11'))//  -> 3
//  console.log(binToDec('100'))// -> 4
//  console.log(binToDec('101'))// -> 5
//  console.log(binToDec('0101'))// -> 5

// function decToBin(binary) {
//     const dec = binToDec(binary);
//     let converted = dec.toString(2);
//     if (binary.charAt(0) === '0' && binary.length !== 1 && binary.length !== 0) {
//         converted = '0' + converted;
//     };
//     return converted;
// }
function decToBin(number) {
    return number.toString(2)
}

console.log(decToBin('0'));
console.log(decToBin('11'))
console.log(decToBin('100'));
console.log(decToBin('101'));
console.log(decToBin('0101'))
module.exports = binToDec;
