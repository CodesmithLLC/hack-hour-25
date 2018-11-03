/*
 * Given an array of numbers, determine if the mode and mean of the array 
 are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */
// mean --> average
// mode --> most recurring number

function modemean(array) {
  // iterate thru array using reduce, summing up all nums in array, get mean
  const mean = Math.floor(array.reduce((a, b) => a + b) / array.length);
  // iterate thru array, storing numbers as keys in object, and number
  // of times they occur as the corresponding value pairs
  const modeObj = array.reduce((obj, current) => {
    if (obj[current]) obj[current] += 1;
    if (!obj[current]) obj[current] = 1;
    return obj;
  }, {});
  const modeKeys = Object.keys(modeObj);
  // create mode variable
  let mode = 0;
  const modeCheck = modeKeys.reduce((check, current) => {
    // iterate thru object and find largest value
    // if value is equal to largest value, check if key is greater than current
    // key, if so, replace with new key
    if (modeObj[current] > check) {
      check = modeObj[current];
      mode = current;
    }
    if (modeObj[current] === check && current > mode) {
      mode = current;
    }
    return current;
  }, -Infinity);
  // check if sum is equal to most commonly occuring mean and return
  return mean === Number(mode);
}

module.exports = modemean;
