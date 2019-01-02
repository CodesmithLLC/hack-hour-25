const uniqueNumber = require('./unique-number');

test('uniqueNumber test #1', () => {
  expect(uniqueNumber([1, 2, 1, 3, 3])).toBe(2);
});

test('uniqueNumber test #2', () => {
  expect(uniqueNumber([1, 4, 1, 4, 3, 3, 9])).toBe(9);
});
