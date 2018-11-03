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

//mean = average
//mode = num that occurs most
function modemean(array) {
    //create let variable for mean
    let mean = 0;
    //create variable mode and set it equal to an empty obj
    const modeObj = {};
    //iterate through numbers 
    for(let i = 0; i < array.length; i++){
        //add num to mean on each iteration
        mean += array[i];
        //check if num exist as a prop on object and if so, increment value
        //else store value as property and give it a value a one
        if(modeObj[array[i]]){
            modeObj[array[i]]++;
        }else{
            modeObj[array[i]] = 1;
        }
    }
    //outside loop divide the mean by length and use the math floor method to round down
    console.log(modeObj);
    mean = Math.floor(mean/array.length);
    // const highestModeCount = Math.max(...Object.values(modeObj));
    
    let mode = 0;
    for(let key in modeObj){
       if(modeObj[key] > mode){
            mode = key; 
        }
    }
    mode = Number(mode);
    console.log('mean', mean);
    console.log('mode', mode);

    return mean === mode;

}
const numsArr = [2,1,2,2,3,2,2];
console.log(modemean(numsArr));
module.exports = modemean;
