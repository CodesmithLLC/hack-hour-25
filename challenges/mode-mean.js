/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */

function modemean(array) {
	let total = 0;
	const frequency = {};
	const modeArray = [];
	for (let index in array) {
		total += array[index];
		if (frequency[array[index]]) frequency[array[index]] += 1;
		else frequency[array[index]] = 1;
	}
	const mean = Math.floor(total / array.length);
	const modeVal = Math.max(...Object.values(frequency));
	for(let keys in frequency) {
		if (frequency[keys] === modeVal) modeArray.push(keys);
	}
	if (modeArray.length === 1) return modeArray[0] == mean;
	else {
		let mode = Math.max(...modeArray);
		return mode == mean;
	}
}

module.exports = modemean;