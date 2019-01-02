// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
    //create a variable to store current element that is being sorted
    let temp;
    //iterate over the array
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; i++){
            if(array[i] > array[j]){
                temp = array[j];
                array[i] = array[j];
                array[i] = temp;
            }
        }
    //if current element is greater than next element
    //store the current element in temp variable and store next element in it's place 
    // store temp varible in current + 1's position
    }
    console.log(111);
    return array;
}
console.log(insertionSort([23, 7, 3, 13]));
module.exports = insertionSort;