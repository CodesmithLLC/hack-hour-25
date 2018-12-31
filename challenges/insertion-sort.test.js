const insertionSort = require('./insertion-sort');
const testArray = [5,1,6,-1,18,-3,4];

test(`Insert sort on ${testArray}`, () => {
  insertionSort(testArray);
  expect(testArray).toEqual([-3,-1,1,4,5,6,18]);
});