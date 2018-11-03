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
    // Mode: The number that occurs most often
    // Calculate the mode

    // Create an object to count the elements of the array 
    const countObj = {};

    // Iterate through the array and save elements to the object
    array.forEach(element => {
        (!countObj[element]) ? countObj[element] = 1 : countObj[element]++;
    });

    // Determine the object key with the highest value
    let highest = 0;
    for (let key in countObj) {
        if (Number(countObj[key]) > highest) highest = Number(countObj[key]);
    }

    // If there are multiple keys with the same value, the mode will be the largest number. Use Math.max.
    let numbers = [];
    for (let key in countObj) {
        if (Number(countObj[key] === highest)) numbers.push(key);
    }
    
    // Store the mode to a variable
    const mode = Math.max(...numbers);

    // Mean: The sum of all the values divided by the number of values
    // Calculate the mean

    // Declare a variable to store the sum of the array
    // Use reduce to sum all the values of the array and save to the variable
    const sum = array.reduce((acc, cur) => {
        acc += cur;
        return acc;
    }, 0);

    // Divide the variable by the length of the array and save to a mean variable. Math.floor the mean.
    const mean = Math.floor(sum / array.length);

    // Comapare the mode and mean variables. If they match return true. Else, return false
    console.log('Mode: ' + mode + ' Mean: ' + mean);
    return (mode === mean) ? true : false;

}

const array1 = [1, 2, 3, 3, 4, 5, 5];
console.log(modemean(array1));

const array2 = [6, 2, 3, 3, 4, 5, 5, 10, 10, 5];
console.log(modemean(array2));

module.exports = modemean;
