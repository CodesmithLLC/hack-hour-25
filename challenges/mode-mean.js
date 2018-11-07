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
  // mean
  const total = array.reduce((a, b) => a + b);
  const mean = Math.floor(total / array.length);

  // iterate through the array, get save as key value pair to obj.  key = numer and val = amt of times called.  

  const storage = array.reduce((accumulator, current) => {
    if (accumulator[current]) {
      accumulator[current] += 1;
    } else {
      accumulator[current] = 1;
    }
    return accumulator;
  }, {});
  console.log(storage);
  //find the max(s) of the values 
  const numCounts = Object.values(storage);
  const modeCount = Math.max(...numCounts);
  // get the associated keys, turn from string to num, and find the max
  const modeArray = [];
  const numCountPairs = Object.entries(storage);
  for (let i = 0; i < numCountPairs.length; i += 1) {
    const [num, count] = numCountPairs[i];
    if (count === modeCount) modeArray.push(num);
  }
  const maxMode = Math.max(...modeArray);
  // compare if equal
  return mean === maxMode;
}

console.log(modemean([1, 2, 3, 3, 4, 5]));
module.exports = modemean;
