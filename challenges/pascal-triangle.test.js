const pascalTriangle = require('./pascal-triangle');

describe('Pascal Triangle', () => {
  test('1 level', () => {
    expect(pascalTriangle(1)).toEqual([[1]]);
  });
  test('2 levels', () => {
    expect(pascalTriangle(2)).toEqual([[1], [1,1]]);
  });
  test('3 levels', () => {
    expect(pascalTriangle(3)).toEqual([[1], [1,1], [1,2,1]]);
  });
  test('4 levels', () => {
    expect(pascalTriangle(4)).toEqual([[1], [1,1], [1,2,1], [1,3,3,1]]);
  });
  test('5 levels', () => {
    expect(pascalTriangle(5)).toEqual([[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]]);
  });
})