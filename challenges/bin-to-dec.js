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
    const numArr = [8,4,2,1];
    let output = 0;
    if(binary.length === 1) return 0;

    if(binary.length === 2){
        for(let i = 2; i < numArr.length){
            if(binary[] === 1){
                output += numArr[i];
            }
        }    
    }


}
console.log(binToDec('0'));
module.exports = binToDec;
