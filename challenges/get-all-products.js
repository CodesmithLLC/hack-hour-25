/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
  const allCombos = getAllCombos(array);
  const filterCombos = allCombos.filter(combo => combo.length === array.length - 1);
  for (let i = 0; i < filterCombos.length; i += 1) {
    filterCombos[i] = filterCombos[i].reduce((accum, curr) => accum * curr);
  }
  const filterDups = [...new Set(filterCombos)];
  return filterDups;
}

function getAllCombos(array, result = [[]], index = 0) {
  if (index === array.length) { return result; }
  const shallow = [];
  for (let i = 0; i < result.length; i += 1) {
    shallow[i] = result[i].slice();
    shallow[i].push(array[index]);
  }
  for (let i = 0; i < shallow.length; i += 1) {
    if (!result.includes(shallow[i])) { result.push(shallow[i]); }
  }
  return getAllCombos(array, result, index + 1);
}


module.exports = getAllProducts;
