/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
	
	let commonDivs = {};
	
	for(let i = 1; i <= a; i++){
		if (a%i === 0) commonDivs[i] = commonDivs[i]+1 || 1;
	}

	for(let i = 1; i <= b; i++){
		if (b%i === 0) commonDivs[i] = commonDivs[i]+1 || 1;
	}

	let arr = [];

	for (key in commonDivs){
		
		if (commonDivs[key] > 1) arr.push(parseInt(key));
	}

	return Math.max(...arr);
}

module.exports = gcd;