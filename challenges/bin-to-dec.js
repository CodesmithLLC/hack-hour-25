// //* You are given a string that represents a binary number
//  *
//  * Write a function that converts the binary string to a decimal number
//  *
//  * Example:
// * 	binToDec('0')   -> 0
//  * 	binToDec('11')  -> 3
//  * 	binToDec('100') -> 4
//  * 	binToDec('101') -> 5
//  *  binToDec('0101') -> 5
//  *
//  * Extension:
//  * Write a function that converts a decimal number to binary (then maybe hexadecimal)
//  */

function binToDec(binary) {
	//let bin2Str = binary.toString();
	binary = binary.split('').reverse();
	let dec = null;
	
	for (let i = 0; i < binary.length; i ++){
		dec += binary[i]*Math.pow(2,i);
	}

	return dec;
}


module.exports = binToDec;

console.log(binToDec('0'))//   -> 0
console.log(binToDec('11'))//  -> 3
console.log(binToDec('100'))// -> 4
console.log(binToDec('101'))// -> 5
console.log(binToDec('0101'))// -> 5
console.log(binToDec('1010'))//10

// Store the remainder when the number is divided by 2 in an array.
// Divide the number by 2
// Repeat the above two steps until the number is greater than zero.
// Print the array in reverse order now.
