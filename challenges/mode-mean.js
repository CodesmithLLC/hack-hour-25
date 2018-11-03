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
	//Getting a mean of an array
	let sum = 0;

	for (let i = 0; i < array.length; i++){
		sum+=array[i];

	}

	let mean = Math.floor(sum/array.length);
	
	//Getting a mode of an array
	let numsFreqObj = {};
	for (let i = 0; i < array.length; i++){
		
		if (!numsFreqObj[array[i]]) {
			numsFreqObj[array[i]] = 1;

		}else{
			numsFreqObj[array[i]] ++;


		}
    }
	console.log(numsFreqObj);
	

	//Analysing numsFreqObj to get a mode
	let mode = 0;
	for (let key in numsFreqObj){
		
		if (numsFreqObj[key] > mode) 
		 	mode = key;

	}
	// console.log('mean:', mean);
	// console.log('mode:', mode);
    
    return mean == mode;
}

module.exports = modemean;

//console.log(modemean([1, 2, 2, 3, 1, 3, 2, 1]));
//console.log(modemean([1, 3, 5, 8]));