// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num) {
	const arr = [...Array(num + 1).keys()].slice(1);
	const retArr = arr.reduce((total, current) => {
		if (current % 3 === 0 && current % 5 === 0) {
			total.push('fizzbuzz'); 
		} else if (current % 3 === 0) {
			total.push('fizz'); 
		} else if (current % 5 === 0) {
			total.push('buzz'); 
		} else {
			total.push(current); 
		}
		return total;
	}, []);
	return retArr; 
}

module.exports = fizzbuzz;