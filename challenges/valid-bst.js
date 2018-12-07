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

  const output = [];

  depthFirstIn(output.push(this.value))

  for (let i = 1; i < output.length; i++) {
    if (output[i - 1] > output[i]) {
      return false;
    }
  }
  return true;
}


BinaryTree.prototype.depthFirstIn = function(callback) {
  if (this.left) this.left.depthFirstIn(callback);
  callback(this.value)
  if (this.right) this.right.depthFirstIn(callback);
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
