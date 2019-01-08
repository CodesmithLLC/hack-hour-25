// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
	if (!array || array.length === 0 || array.length === 1) return array;
	let sorted = false;
	for (let i = 0; i < array.length - 1; i += 1) {
		if (array[i] > array[i + 1]) {
			const hold = array[i];
			array[i] = array[i + 1];
			array[i + 1] = hold;
			sorted = true;
		}
	}
	return (sorted) ? bubbleSort(array) : array;
}

module.exports = bubbleSort;