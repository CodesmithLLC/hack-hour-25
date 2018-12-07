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
  // store all the values from depthFirstIn
  const values = [];
  // use depthFirstIn to go down the tree and push all the values of the tree into the values array in order from left to right
  tree.depthFirstIn((value) => {
    values.push(value);
  });
  // check pairs of values in the array to see if it is ever out of sorted order
  for (let i = 1; i < values.length; i += 1) {
    if (values[i - 1] > values[i]) {
      return false;
    }
  }
  // return true if the loop never found anything
  return true;
}

BinaryTree.prototype.depthFirstIn = function (callback) {
  // if there is a left, go down the tree to the left
  if (this.left) {
    this.left.depthFirstIn(callback);
  }
  // if there is no left, then log the current value
  callback(this.value);
  // if there is a right, go down the tree to the right
  if (this.right) {
    this.right.depthFirstIn(callback);
  }
};

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
