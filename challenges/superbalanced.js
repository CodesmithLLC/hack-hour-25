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
// BinarySearchTree.prototype.depthFirstPre = function (callback) {
//   callback(this.value);
//   if (this.left !== null) this.left.depthFirstPre(callback);
//   if (this.right !== null) this.right.depthFirstPre(callback);
// };


function superbalanced(tree) {
  if (!balanced(tree.left)) return false;
  if (!balanced(tree.right)) return false;
  
  const leftHeight = Math.max(leftCount, rightCount); 
  
  
}

function balanced(tree) {
  let leftCount = 0;
  let rightCount = 0;
  if (tree.left) {
    leftCount += 1;
    balanced(tree.left);
  } else if (tree.right) {
    rightCount += 1;
    balanced(tree.right);
  } if (Math.abs(leftCount - rightCount) > 1) return false;
  else return true;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
