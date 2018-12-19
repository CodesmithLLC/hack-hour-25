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
  // empty tree
  if (tree.left === null && tree.right === null) return true;
  // if tree.right is null
  if (tree.left !== null && tree.right === null) {
    const newTree = tree.left;
    if (newTree.left !== null || newTree.right !== null) {
      return false;
    }
    return true;
  }
  // if tree.left is null
  if (tree.right !== null && tree.left === null) {
    const newTree = tree.right;
    if (newTree.left !== null || newTree.right !== null) {
      return false;
    }
    return true;
  }
  let leftNode = superbalanced(tree.left);
  let rightNode = superbalanced(tree.right);

  if (leftNode === false || rightNode === false) {
    return false;
  } 

  return true;
}


module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
