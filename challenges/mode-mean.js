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
  //determine mode
    let tally = array.reduce((a,b)=>{
      if(!a[b]){
        a[b] = 0;
      }
      a[b] += 1;
      return a;
    },{})
    let mode = 0; 
    const keys = Object.keys(tally);
    for(let i = 0; i< keys.length; i+= 1){
      if(tally[keys[i]] > mode){
        mode = keys[i];
      }
    }

  //determine mean
    let mean = Math.floor(array.reduce((a,b)=>a+b)/array.length);
  // compare

  return (mode == mean);
}

console.log(modemean([1,2,3,4,4,5,6,7,8,9]));






function betterModeMean(arr){
  const array = arr.sort((a,b)=>a-b);
  
}
console.log(betterModeMean([1,3,4,5,2,5,63,5,6,7,3]));

module.exports = modemean;
