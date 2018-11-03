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
    let sum = 0;
    let mode = 0;
    const arrObj = {};
    for (let i = 0; i < array.length; i += 1) {
        sum = sum + array[i];
        if (!arrObj[array[i]]) arrObj[array[i]] = 1;
        else arrObj[array[i]] += 1;
    }
    const mean = Math.floor(sum / array.length);
    // console.log(mean)
    const arrValues;
    for (key in arrObj) {
        arrValues.push([key, arrValues[key]]);
    }
    arrValues.sort(function(a, b) {
        return a[1] - b[1];
    });
    const modeValue = Math.max(...arrValues);
    console.log(mode);
    if (mode === mean) return true;
    return false;

    // const reduced = array.reduce(function(acc, current) {
    //     acc = acc + current;
    // //     return Math.floor(reduced / array.length);
    // // })
    // console.log(reduced)
    // const mean = Math.floor(reduced / array.length);
    // console.log(mean);

}


module.exports = modemean;
