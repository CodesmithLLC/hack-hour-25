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
  // have variables to increment count of height
  let leftTreeHeight = 0;
  let rightTreeHeight = 0;
  // check to see if tree has no left or right, then return that it is balanced
  if (tree.left === null && tree.right === null) return true;
  // have a function that goes down the tree, incrementing count of the left and right height
  function downTree(subtree, count) {
    // base case, exit if there is no next tree
    if (subtree.left === null && subtree.right === null) return count;
    // if subtree left, go down left with downtree
    if (subtree.left !== null) {
      count += 1;
      downTree(subtree.left, count);
    }
    if (subtree.right !== null) {
      count += 1;
      downTree(subtree.right, count);
    }
  }
  // run the function on both sides
  const leftTree = downTree(tree.left, leftTreeHeight);
  const rightTree = downTree(tree.right, rightTreeHeight);
  // check to see if the heights that are returned are balanced (1 or less)
  if (Math.abs(leftTree - rightTree) < 1) {
    return true;
  }
  return false;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
