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
    const l = binary.length - 1;
    return [...binary].reduce((acc, c, i) => acc + Number(c)*Math.pow(2, l-i), 0)
}

function decToBin(dec) {
    let bin = ''
    while (dec>0) {
        bin = '' + dec%2 + bin
        dec = Math.floor(dec/2)
    }
    return bin
}

module.exports = binToDec;
module.exports = decToBin;
