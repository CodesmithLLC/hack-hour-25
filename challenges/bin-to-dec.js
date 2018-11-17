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
	if (binary.length === 0) return null;
	let decimal = 0;
	let converter = 2;
	binary = binary.split('');
	const ones = binary[binary.length - 1] * 1;
	binary = binary.slice(0, binary.length - 1);
	binary = binary.reverse();
	for (let i = 0; i < binary.length; i += 1) {
		decimal += (binary[i] * 1) * converter;
		converter *= 2;
	}
	return decimal + ones;
}

module.exports = binToDec;