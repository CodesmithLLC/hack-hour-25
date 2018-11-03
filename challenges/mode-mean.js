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
  // input: array of numbers
  // output: boolean (checking if mode and mean are equivalent)
  const sorted = array.sort();
  // first get the mean
  function findMean(arr) {
    const length = arr.length;
    return Math.floor(arr.reduce((accum, current) => accum + current) / length);
  }
  const mean = findMean(sorted);
  // mean is the middle value (after being sorted)
  // if there are 2 middle values, then you will take the avg and floor them (even number of numbers in array)

  function findMode(arr) {
    const obj = arr.reduce((accum, current) => {
      if (!accum.hasOwnProperty(current)) {
        accum[current] = 1;
        return accum;
      }
      accum[current] += 1;
      return accum;
    }, {});
    return Number(Object.keys(obj).reduce((accum, current) => {
      if (obj[accum] < obj[current]) {
        accum = current;
        return accum;
      }
      if (obj[accum] === obj[current]) {accum = Math.max(accum, current);
        return accum;
      }
      return accum;
    }));
  }
  const mode = findMode(array);
  return mean === mode;
  // next get the array
  // reduce array into object containing with number as key and frequency in array as its value
  // go along keys in object, comparing frequencies
  // whoevers frequency is higher, keep hold of that key
  // if frequency is equal, take the key that has a higher value

  // compare mean and mode, if equal, return true, else return false
}

console.log(modemean([0, 0, 1, 1, 1, 2, 2]));
module.exports = modemean;
