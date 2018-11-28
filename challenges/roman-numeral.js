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
  //edge case: result undefined if not a number;
  if (typeof n !== "number") return undefined;

	let table = {
		1000: "M",
		900: "CM",
		500: "D",
		400: "CD",
		100: "C",
		90: "XC",
		50: "L",
		40: "XL",
		10: "X",
		9: "IX",
		5: "V",
		4: "IV",
		1: "I",
	}

  // create an array of table's key as integer;
  let arr = Object.keys(table).map(el => Number(el)).reverse()
  // create a while loop to keep subtracting from the n as we travese through the array;
  let i = 0;
  //declare a variable to store the string.
  let result = "";
	while (n > 0) {
    //if n is bigger than a number in the element, we substract that number until the n is smaller than the element, then we move to the next one;
    	if (n >= arr[i]) {
      		do {
      		result += table[arr[i]]
      		n = n - arr[i];
      		} while (n >= arr[i])
   		}
  		i ++;
	}
  return result;
}

module.exports = romanNumeral;
