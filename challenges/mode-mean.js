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
    let mean = 0;
    let mode = 0;
    let arr = [];
    let sortThis = array.sort((a, b) => a - b);

    for (let i = 0; i < sortThis.length; i += 1) {
        mean += sortThis[i];
        if (!sortThis.indexOf(sortThis[i])) {
            arr.push(sortThis[i])

        }
    }
    mode = Math.max(...arr)
    mean = Math.floor(mean / sortThis.length);

    if (mode === mean) {
        return true;
    } else {
        return false;
    }

}

module.exports = modemean;
console.log(modemean([1, 2, 3, 3, 4, 5, 5]));