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
  // edge case: if no argument is not passed in, console.log('enter an array')
  if (arguments.length === 0) {console.log('please enter an array'); return}
	// edge case: if the array is empty, return undefined
	if (array[0] === undefined) {return undefined}
  // edge case: check if the arg is an array
  if (!(array instanceof Array)) {console.log('please enter an array'); return}

  // calculate the mean
	let mean = array.reduce((accum, el) => accum += el) / array.length
  // scoring the counts of element in a hashtable
  let objTable = {}
  for (let i in array) {
    if (objTable.hasOwnProperty(array[i])){
      objTable[array[i]] += 1;
    } else {
      objTable[array[i]] =1;
    }
  }
  // sort the hashtable by value and pick the max mode 
	let tableArr = Object.entries(objTable).sort(function (a,b){
    return a[1] - b[1];
  })
  // turn the mode as a string to number
  let mode = parseInt(tableArr[tableArr.length -1][0])
  // check if mode equals to mean
  return (mode === mean)? true: false;
}
module.exports = modemean;
