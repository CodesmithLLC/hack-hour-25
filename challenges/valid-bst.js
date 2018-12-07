/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */
 

function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function validBST(tree) {
  const values = [];
  tree.depthFirstIn(function(value) {
    values.push(value);
  });
  for (let i = 1; i < values.length; i += 1) {
    if (values[i] < values[i - 1]) return false;
  }
  return true;
}

function depthFirstIn(callback) {
  if (this.left) depthFirstIn(callback);
  callback(this.value);
  if (this.right) depthFirstIn(callback);
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
