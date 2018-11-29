/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time  
 *
 */

function mergeArrays(arr1, arr2) {
//create an empty array
    const sortedArr = [];
//iterate through input array
    for(let i = 0; i < arr1.length; i++){
    //check if the element at index in arr1 is greater than arr2
        if(arr1[i] > arr2[i]){
            sortedArr.push(arr2[i]);
            sortedArr.push(arr1[i]);
        }else{ 
            sortedArr.push(arr1[i]);
            sortedArr.push(arr2[i]);    //if so push arr2 then arr1 element to array
        }
    
    }
    return sortedArr;
}

var my_array = [3,4,6,10,11,15,21];
var another_array = [1,5,8,12,14,19];
console.log(mergeArrays(my_array, another_array));
module.exports = mergeArrays;
