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

//  function mean (array) {
//    return array.reduce((a, b) => a + b) / array.length;
//  }

// function mode (array) {
//   const candidates = [];
//   return array.reduce((accum, element) =>{
//     !accum[element] ? accum[element] = 1 : accum[element] += 1;
//     return accum;
//   }, {});
// }

console.log(mode([1,2,3,4, 4, 4]))

function modemean(array) {

  if (!Array.isArray(array) || array.length === 0) return;

  const cache = {};
  // iterates through array, recording number as key, instances as value
  array.forEach((element) => {
    if (!cache[element]) {
      cache[element] = 1
    } else {
      cache[element] += 1;
    }
  })
  // calculates sum of array elements
  const sum = array.reduce((accum, element) => {
    return accum += element;
  })
  // calculates mean of array elements
  const mean = Math.floor(sum / array.length);

  let mode;

  const pairs = Object.entries(cache);
  // iterates through key/value pairs to deterimine mode 
  for (let i = 0; i < pairs.length; i++) {
    const [key, value] = pairs[i];
    if (!mode) {
      mode = [key, value];
    } else if (value === mode[1] && key > mode[0]) {
      mode[0] = key;
      mode[1] = value;
    } else if (value > mode[1]) {
      mode[0] = key;
      mode[1] = value;
    }
  }

  return (Number(mode[0]) === mean) ? true : false;

}

module.exports = modemean;

