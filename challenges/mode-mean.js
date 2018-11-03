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
  // find the mean
  // declare a sum 
  let sum = 0;
  // loop through the array
  for (let i = 0; i < array.length; i += 1) {
    // add into the sum
    sum += array[i];
  }
  // divide sum by array.length
  const mean = Math.floor(sum / array.length);
  // find the mode
  // use a obj as a counter
  const obj = array.reduce(function (obj, elem) {
    if (elem in obj) { obj[elem] += 1 }
    else { obj[elem] = 1 };
    return obj;
  }, {});
  // find the mode
  // use the keys as array and reduce it to find the number with the highest count
  const mode = Object.keys(obj).reduce(function (accum, key) {
    // if count is bigger than the accum then accum = count 
    if (obj[key] > obj[accum]) { accum = key };
    // if the count of the accum and the number is the same; then accum = to the bigger number
    if (obj[accum] === obj[key]) { accum = Math.max(accum, key) }
    return obj
  })
  return mean === mode
}

module.exports = modemean;
