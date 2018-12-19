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

function height(tree) {
  if (!tree) return 0;
  const leftHeight = height(tree.left);
  const rightHeight = height(tree.right);
  return Math.max(leftHeight, rightHeight) + 1;
}

function superbalanced(tree) {
  let lHeight;
  let rHeight;

  if (tree === null) return true;

  lHeight = height(tree.left);
  rHeight = height(tree.right);

  if (Math.abs(lHeight - rHeight) <= 1 
    && superbalanced(tree.left)
    && superbalanced(tree.right)) {
    return true;
  }
  return false;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
