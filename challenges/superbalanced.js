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

const resultObj = {};

function superbalanced(tree, count = 0) {
  // create object to track height

  // if tree.left exists, increment count by 1 and make recursive call to superbalanced
  if (tree.left) {
    count += 1;
    return superbalanced(tree.left, count);
  }
  // if tree.right exists, increment count by 1 and make recursive call to superbalanced
  if (tree.right) {
    count += 1;
    return superbalanced(tree.right, count);
  }
}

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
