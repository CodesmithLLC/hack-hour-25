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
  // have a function to do the mean
  function mean(arr) {
    // first get the sum of the arr
    const sum = arr.reduce((acc, el) => {
      acc += el;
      return acc;
    }, 0);
    // return the sum divided by the number of items in the arr
    return Math.floor(sum / arr.length);
  }
  // next do the mode
  function mode(arr) {
    // first, create an object to keep track of how many of each number there are
    const track = arr.reduce((acc, el) => {
      // check to see if el exists inside the object
      if (acc.hasOwnProperty(el)) {
        // if it does, increment
        acc[el] += 1;
      } else {
        // if it doesnt exist
        acc[el] = 1;
      }
      return acc;
    }, {});
    // check to see if there are any multiple numbers
    // create a max
    let max;
    let maxKey;
    for (let i in track) {
      // if max doesnt exist, put it in
      if (!max) {
        max = track[i];
        maxKey = i;
      }
      // if max is there, test it amongst the others
      if (track[i] >= max) {
        max = track[i];
        maxKey = i;
      }
    }
    // after going through all the keys in object, return the max
    return Number(maxKey);
  }
  console.log('TCL: mode -> mode(array)', mode(array));
  console.log('TCL: mode -> mean(array)', mean(array));
  // at the end, call the mean and mode function on array and see if they equal to each other
  return mean(array) === mode(array);
}

module.exports = modemean;
