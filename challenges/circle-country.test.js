const circleCountry = require('./circle-country');

test('Circle Country nested test', () => {
  const x = [100, 30, 30];
  const y = [100, 30, 65];
  const r = [100, 15, 15];
  expect(circleCountry(x, y, r, 100, 100, 35, 40)).toEqual(2);
});

test('Circle Country next to test', () => {
  const x = [20, 65, 110];
  const y = [20, 20, 20];
  const r = [20, 20, 20];
  expect(circleCountry(x, y, r, 10, 5, 94, 10)).toEqual(3);
});
