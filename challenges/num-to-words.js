// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

function numToWords(num) {

	// regular words
	const words = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
	
	// the tens value
	const wordsTy = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninty'];

	// places 
	const places = ['', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion'];

	let result = '';
	let numArray = num.toString().split('').reverse();
	let index = 0;
	let placeIndex = 0;

	if (num === 0) return 'Zero';

	while (numArray.length !== 0) {

		const curArray = numArray.splice(index, index + 3).reverse();
		let currStr = '';
		let setPlace = false;

		if (curArray.length === 3) {
			if (curArray[0] !== '0') currStr = words[curArray[0] * 1] + 'Hundred';
			if (curArray[1] + curArray[2] !== '00') { 
				setPlace = true;
				if (((curArray[1] + curArray[2])*1) < 20) {
					currStr += words[(curArray[1] + curArray[2])*1];
				} else {
					currStr += wordsTy[curArray[1] * 1] + words[curArray[2] * 1];
				}
			}
		}

		if (curArray.length === 2) {
			if ((curArray[0] + curArray[1]) !== '00') {
				setPlace = true;
				if (((curArray[0] + curArray[1])*1) < 20) {
					currStr += words[(curArray[0] + curArray[1])*1];
				} else {
					currStr += wordsTy[curArray[0] * 1] + words[curArray[1] * 1];
				}
			}
		}
			
		if (curArray.length === 1) {
			if (curArray[0] !== '0'){
				setPlace = true;
				currStr = words[curArray[0] * 1];
			}
		}
		
		if (setPlace) currStr += places[placeIndex];
		placeIndex += 1;
		result = currStr + result;
	}
	return result;
}

module.exports = numToWords;