/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
	let ones = Math.floor(n%10);
	let tens = Math.floor(n/10 % 10) * 10;
	let hundreds = Math.floor(n/100 % 10) * 100;
	let thousands = Math.floor(n % 10000 /1000) * 1000;
	let result = "";
	const values = {
		'1000':'M', 
		'900':'CM', 
		'500':'D', 
		'400':'CD', 
		'100':'C', 
		'90':'XC', 
		'50':'L', 
		'40':'XL', 
		'10':'X', 
		'9':'IX',
		'5':'V',
		'4':'IV',
		'1':'I'
	};
	while(n !== 0) {
		if (thousands >= 1000) {
			n -= 1000;
			thousands -= 1000;
			result += values['1000'];
		} else if (hundreds >= 900) {
			n -= 900;
			hundreds -= 900;
			result += values['900'];
		}	else if (hundreds >= 500) {
			n -= 500;
			hundreds -= 500;
			result += values['500'];
		} else if (hundreds >= 400) {
			n -= 400;
			hundreds -= 400;
			result += values['400'];
		} else if (hundreds >= 100) {
			n -= 100;
			hundreds -= 100;
			result += values['100'];
		} else if (tens >= 90) {
			n -= 90;
			tens -= 90;
			result += values['90'];
		} else if (tens >= 50) {
			n -= 50;
			tens -= 50;
			result += values['50'];
		} else if (tens >= 40) {
			n -= 40;
			tens -= 40;
			result += values['40'];
		} else if (tens >= 10) {
			n -= 10;
			tens -= 10;
			result += values['10'];
		} else if (ones >= 9) {
			n -= 9;
			ones -= 9;
			result += values['9'];
		} else if (ones >= 5) {
			n -= 5;
			ones -= 5;
			result += values['5'];
		} else if (ones >= 4) {
			n -= 4;
			ones -= 4;
			result += values['4'];
		} else if (ones >= 1) {
			n -= 1;
			ones -= 1;
			result += values['1'];
		}
	}
	return result;
}

module.exports = romanNumeral;