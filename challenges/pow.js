/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  	//determined if power is negative or positive

	let isPositive = (power < 0)? false : true;
  	// recursive call an inner function that'd determined the product
	function inner(Base,Power){
	//base case: return 1 if power is 0 
	if (Power === 0) return 1;
	 return Base * pow(Base, Power - 1)
	}(base,power)
	let result = inner(base, Math.abs(power));
  	//after determining the product: if power is negative, return 1/result isstead
	return (isPositive)? result: 1/result;
}

module.exports = pow;
