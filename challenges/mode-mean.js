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
    const mean = array.reduce((acc, c, i, a) => acc + c/a.length ,0)

    const counts = array.reduce((acc, c, i, a) => {
        acc[c] = (acc[c]||0) + 1
        return acc
    } , {} )

    let max = null;
    for (let node in counts) {
        if (max === null) max = node
        if (counts[node] > counts[max] ) max = node
    }

    const mode = Number(max)

    return Math.floor(mean) === mode
}

module.exports = modemean;
