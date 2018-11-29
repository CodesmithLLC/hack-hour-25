function mergeArrays(arr1, arr2) {
    let i = 0;
    while (arr2[i] !== null) {
        if (arr2[i] > arr1[0]) {
            arr2.splice(i-1, 0, arr1.shift())
        }
        else {i += 1}
    }
}

var my_array = [3,4,6,10,11,15,21];
var another_array = [1,5,8,12,14,19];
console.log(mergeArrays(my_array, another_array))