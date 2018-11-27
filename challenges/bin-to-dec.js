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

    //DELCARE A VARIBLE TO STORE THE OUTPUT 
    let decimal = 0;
    // LOOP THROUGH THE NUMBERS
    for (let i = 0; i < binary.length; i += 1) {
        // GIT THE POWER OF 2 TIMES THE INDEX OF THE ELEMENT AND 
        // MULTIPLE IT BY THE ELEMENT OF THAT INDEX
        decimal += 2 ** (binary.length - 1 - i) * binary[i];
    }
    // RETURN THE OUTPUT
    return decimal;
}

console.log(binToDec('101'));

module.exports = binToDec;
