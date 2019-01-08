const mergeRanges = require('./merge-ranges');

describe('mergeRanges', () => {
  test('Test empty array', () => {
    const times = [];
    expect(mergeRanges(times)).toEqual([]);
  });
  test('Test no merges', () => {
    const times = [[0, 1], [3, 5], [7, 8], [10, 12], [13, 14]];
    expect(mergeRanges(times)).toEqual([[0, 1], [3, 5], [7, 8], [10, 12], [13, 14]]);
  });
  test('Test new lower range merge', () => {
    const times = [[0, 1], [3, 5], [4, 5], [10, 12], [9, 12]];
    expect(mergeRanges(times)).toEqual([[0, 1], [3, 5], [9, 12]]);
  });
  test('Test new upper range merge', () => {
    const times = [[0, 1], [0, 5], [8, 10], [10, 12], [13, 15]];
    expect(mergeRanges(times)).toEqual([[0, 5], [8, 12], [13, 15]]);
  });
  test('Test new lower & upper range merge', () => {
    const times = [[0, 1], [1, 5], [4, 13], [18, 21], [15, 20], [16, 25]];
    expect(mergeRanges(times)).toEqual([[0, 13], [15, 25]]);
  });
});
