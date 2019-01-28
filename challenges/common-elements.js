// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

const array1 = [1, 4, 6, 7, 'ferret', 12, 12, 99, 2000, 'dog', 'dog', 99, 1000];
const array2 = [15, 9, 9, 'ferret', 9, 26, 12, 12, 'dog'];
const array3 = [23, 12, 12, 77, 'ferret', 9, 88, 100, 'dog'];
const array4 = ['ferret', 12, 12, 45, 9, 66, 77, 78, 2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

function commonElements(array1, array2, array3, array4) {
  const set1 = new Set(array1);
  const set2 = new Set();
  array2.forEach((el) => {
    if (set1.has(el)) set2.add(el);
  });
  const set3 = new Set();
  array3.forEach((el) => {
    if (set2.has(el)) set3.add(el);
  });
  const set4 = new Set();
  array4.forEach((el) => {
    if (set3.has(el)) set4.add(el);
  });
  const result = [...set4];
  return result.length === 0 ? 'Nothing in Common!' : result;
}
// const obj = { a: 1, b: 2 };
// const arr = ['hello', 'hello'];
// const set1 = new Set(arr);
// set1.add('hello');
module.exports = commonElements;
