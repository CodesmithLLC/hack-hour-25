/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */
var nums = [1, 4, 6, 7, 9, 17, 45]



// function findInOrderedSet(arr, target) {
//     if(arr === 0) return 0;
    
//     return arr.some(num => num === target)


// }


function findInOrderedSet(arr, target) {
    if(arr === 0) return 0;
    let count = 0;
    while(count < arr.length ) {
        if(arr[count] === )
    }

    
}

console.log(findInOrderedSet(nums, 4)) //true
console.log(findInOrderedSet(nums, 2))//  -> false)
module.exports = findInOrderedSet;
