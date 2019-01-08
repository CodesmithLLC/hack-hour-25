// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
    let status = false
    while (status === false) {
        status = true;
        for (let i = 1; i < array.length; i += 1) {
            if (array[i] < array[i - 1]) {
                status = false;
                const current = array[i]
                array[i] = array[i - 1]
                array[i - 1] = current
            }
        }
    }
    return array
}

console.log(bubbleSort([1,4,3,6,2,9,6]))
module.exports = bubbleSort;
