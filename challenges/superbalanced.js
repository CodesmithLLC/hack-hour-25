/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(tree) {
  const queue = [[1,tree]]
  let depth = 1,
      node = {},
      currentDepth = 0,
      currentDepthCounter = 0;
  while (queue.length) {
    [depth, node] = queue.shift();
    if (node.left !== null) queue.push([depth + 1, node.left])
    if (node.right !== null) queue.push([depth + 1, node.right])
    if (depth > currentDepth) {
      currentDepth = depth
      currentDepthCounter = 1
    }else{
      currentDepthCounter += 1
    }
  }
  
  return ( currentDepthCounter === 1 || currentDepthCounter === Math.pow(2,(currentDepth - 1)) )
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
