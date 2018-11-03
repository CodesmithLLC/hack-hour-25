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

//mode is the number that occured most often
//mean is just the average;
function modemean(array) {
  const sortedArr = array.sort();
  const numObj = {};
  //mean
  let total = array.reduce((acc, el)=>{
    acc += el;
    return acc 
  })
  let mean = total / array.length;

  let sortedObj = sortedArr.reduce((acc, el) => {
    if (!acc.hasOwnProperty(el)){
      acc[el] = 0;
    }
    acc[el] += 1;
    return acc;
  }, numObj)

  //mode 
  let mode;
  for (let key in sortedObj){
    let valueArr =Object.values(sortedObj)
    mode = Math.max.apply(null, valueArr);
  }

  return mean === mode


  // console.log(numObj);
}

// console.log(modemean([13, 18, 13, 14, 13, 16, 14, 21, 13]))

module.exports = modemean;
