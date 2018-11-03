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

  // if array is empty return
  if (array.length === 0) return;

  // check if array contains any non numbers
  //if (array.includes(/[^0-9]/gi) !== -1) return;

  // define variables for the mode and mean. no initialization
  let modeScratchpad = [], arMode, arMean = 0;

  // calculate the mean for array by tallying all numbers then
  // dividing by array.length and using Math.floor to round

  // calculate the mode for array by tallying the frequency for forEach
  // number then doing a comparison to determine mode
  array.forEach((elem) => {
    arMean += elem;
    if (modeScratchpad[elem] === undefined) modeScratchpad[elem] = 0;
    modeScratchpad[elem] += 1;
  });

  arMean = Math.floor(arMean/array.length);

  arMode = modeScratchpad.reduce((accum, elem, index) => {
    if (elem === accum) accum = Math.max(accum, elem);
    if (elem > accum) accum = index;
    return accum;
  }, 0);

  // compare mode and mean if equals return true  else false
  return (arMode === arMean);

}

module.exports = modemean;
