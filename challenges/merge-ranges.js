/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
	if (array.length === 0) return [];
	if (array.length === 1) return array;

	let min = Number.POSITIVE_INFINITY;
 	let max = Number.NEGATIVE_INFINITY;
	const result = [];

	for (arr of array) {
		const [from, to] = arr;
		if (result.length === 0) result.push(arr);
		else result.forEach(el => {
			const [f, t] = el;
			if (to > from && to < t) result.push([from, t]);
		})
	}
}

module.exports = mergeRanges;

mergeRanges([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]])