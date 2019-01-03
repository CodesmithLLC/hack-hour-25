const getAllProducts = require('./get-all-products');

test('getAllProducts Test #1', () => {
  expect(getAllProducts([1, 7, 3, 4])).toEqual([84, 12, 28, 21]);
});
